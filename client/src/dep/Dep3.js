/*eslint-disable*/
import { React, useMemo, useState } from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import './Dep.css'
import axios from 'axios'
import Basicgroup2 from './Basicgroup2.js';
import Date from './Date';
import Deptable from './Deptable';

function Dep3(props) {

  let state = useSelector((state) => { return state } )
  let navigate = useNavigate();

  useMemo(()=>{ return (
    axios.get('/dep/3').then((결과)=>{ //부서별 수정할 것
      console.log(결과.data)
      let copy = [...결과.data]
      setgroup(copy)
    })
  ) }, [])

  let [group, setgroup] = useState(Basicgroup2)
  let copy = group.map(e => e.dgn_ko)
  let dep = [...new Set(copy)]

  return (
    <div className='dep_main'>

      
      <div className='dep_main_deptable'>
        <Date></Date>
        {
          dep.map((a,i)=>{
            return (
              <Deptable dep={dep[i]} group={group.filter(e => e.dgn_ko === `${a}`)}></Deptable>
            )
          })  
        }
      </div>
      

      유치2부입니다.

      <div className='dep_main_button'>

        <button className='dep_dateinputbutton' onClick={()=>{
            navigate('/dateinput')
            }}> 출석 입력하기 </button>   

        <button className='dep_nameinputtest' onClick={()=>{
            
        }}> 테스트 </button> 

        <button className='dep_homebutton' onClick={()=>{
            navigate('/')
            }}> 홈버튼 </button> 

      </div>

    </div>
  );
}

export default Dep3;