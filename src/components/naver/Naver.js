import React, { useState, useEffect } from 'react';
import './naver.css';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

// https://react.vlpt.us/integrate-api/01-basic.html
const Naver = () => {
  // http://rank.search.naver.com/rank.js

  const [dataList, SetDataList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 dataList 를 초기화하고
        setError(null);
        SetDataList(null);
        // loading 상태를 true 로 변경
        setLoading(true);
        const response = await axios.get(
          'http://rank.search.naver.com/rank.js'
        );
        console.log(response)
        SetDataList(response.data); // 데이터는 response.data 안에
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);


  if (loading) return <Spinner animation="border" />;
  if (error) return <div>error</div>;
  if (!dataList) return null;
  return (
    <div>
      <h1>네이버 실시간 검색</h1>
      <div className="selection_content">
        <p></p>
        <div className="field_list">
            <div className="ranking_box">
                    <div className="list_group">
                        <ul className="ranking_list">
                        {dataList.map(data => (
                            <li key={data.id} className="ranking_item">
                            <div className="item_box">
                            <span className="item_num">1</span>
                            <span className="item_title_wrap">
                            <span className="item_title">  {data.username} ({data.name})</span>
                            </span>
                            </div>
                            </li>
                          ))}
                        </ul>
                    </div>


            </div>
        </div>
    </div>

    </div>
  );
};

export default Naver;
