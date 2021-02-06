import React, { useState }  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

const RRN = () => {

const [submitted, setSubmitted] = useState(false);
const [check, setCheck] = useState(false);
const [rrn1, setRrn1] = useState('');
const [rrn2, setRrn2] = useState('');
const [recordList, setRecordList] = useState([]);

  // 주민번호 체크
  const verify_jumin = (e) =>{
    // https://eyecandyzero.tistory.com/240
      e.preventDefault();
      //주민번호 : ① ② ③ ④ ⑤ ⑥ - ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬
      let jumin = rrn1 + rrn2;

      let juminArray = new Array(13).fill(0);
      let sumList = [2,3,4,5,6,7,8,9,2,3,4,5];
      let sum = 0;

    // 입력 여부 체크
    if(jumin.trim() === ''){
      window.alert('주민등록번호를 기입해주세요.');
      return false; 

    // 입력값 체크
    }else if(jumin.match('[^0-9]')){
      window.alert("주민등록번호는 숫자만 입력하셔야 합니다."); 
      return false; 

     // 자리수 체크
    }else if(jumin.length !== 13){
      window.alert("주민등록번호는 13자리의 숫자입니다."); 
      return false; 
    }

    // 합계 - 위의 조건을 모두 통과한 번호에 한해서 주민번호 체크
    // M = (11 - ((2×A + 3×B + 4×C + 5×D + 6×E + 7×F + 8×G + 9×H + 2×I + 3×J + 4×K + 5×L) % 11)) % 11 

    for(let i =0;i< 13; i++){
      juminArray[i] = Number(jumin.substring(i,i+1));
    }

    // sum - 마지막수를 제외한 12자리의 숫자에 2,3,4,5,6,7,8,9,2,3,4,5 를 순서대로 곱한 것의 합
    for(let i =0; i< 12; i++){
        sum += juminArray[i] * sumList[i];
    }  

    // 나머지 = 합계를 11로 나눈 나머지
    // 검증코드 = 11 - 나머지 
    // 만약 검증코드가 10일 경우는 0, 11일경우에는 1, 이런식으로 나오므로 10으로 나눈 나머지의 값이 검증코드가 된다.
      setSubmitted(true);
      let code = (11 - (sum % 11) % 10);
      // 검증코드와 주민번호 마지막자리(13번째 자리)가 같으면
      if(code === juminArray[12]){
        setCheck(true);
        addRecord(true);
      }else{
        setCheck(false);
        addRecord(false);
      }
  }

  // 앞 6자리 값 받기
  const handleRrn1Change = (e) =>{
    setRrn1(e.currentTarget.value);
  }

  // 뒤 7자리 값 받기
  const handleRrn2Change = (e) =>{
    setRrn2(e.currentTarget.value);
  }

  // space 입력 금지
   const keyDown = (e) =>{
     if(e.keyCode === 32){
       e.currentTarget.value = '';
     }
   }

   // 초기화 
   const handleReset = (e) => {
    e.preventDefault();
    setRrn1("");
    setRrn2("");
    setSubmitted(false);
    setCheck(false);
   }

  // 검증 기록 
   const addRecord = (check) =>{
    let copy = [...recordList];
        copy = [...copy, {id: recordList.length + 1 , jumin : (rrn1  + '-' +  rrn2) , check : check } ];
        setRecordList(copy);
    }

  return (
    <div>
      <Container fluid="md" className='container-center'>
      <h1>주민번호 검증</h1>
      <div className={submitted ? '' : 'd-none'}>
          <Alert variant="success" className={check ? '' : 'd-none'}>
            올바른 주민번호입니다.
          </Alert>

          <Alert variant="danger"  className={!check ? '' : 'd-none'}>
            잘못된 주민번호입니다.
          </Alert>

        </div>
        <Form onSubmit={verify_jumin}>
          <Row>
            <Col>
              <Form.Control placeholder="주민 번호 앞 6자리 입력" value={rrn1}
              onChange={handleRrn1Change} onKeyUp={keyDown}
              maxLength={6} />
            </Col>
            <Col>
              <Form.Control placeholder="주민 번호 뒤 7자리 입력"  value={rrn2}
              onChange={handleRrn2Change} onKeyUp={keyDown}
              maxLength={7} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="mt-3 w-100" type="submit" >검증</Button>
              <Button className="mt-3 w-100"  variant="light" onClick={handleReset} >초기화</Button>
            </Col>
          </Row>
        </Form>

        <Card className="mt-5">
          <Card.Body>
            <Card.Title>주민번호 검증 결과 리스트</Card.Title>
            {recordList.map(item => {
                return (
                  <Card.Body  className="p-0" key={item.id + item.jumin}>주민번호 {item.jumin}의 검증 결과는 {item.check ? '올바른 주민번호' : '잘못된 주민번호'}입니다.</Card.Body>
                )
            })}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RRN;
