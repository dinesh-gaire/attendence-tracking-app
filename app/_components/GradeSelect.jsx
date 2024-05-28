"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_services/GlobalApi'

const GradeSelect = ({selectedGrade}) => {
    const [grades, setGrades] = useState([])
    useEffect(()=>{
        GetAllGradesList()
      },[])

      const GetAllGradesList=()=>{
        GlobalApi.GetAllGrades().then(resp=>{
            // console.log(resp.data);
            setGrades(resp.data)
        })
      }
  return (
    <div>
          <select className='p-2 border rounded-lg' onChange={(e)=>selectedGrade(e.target.value)}>
              {grades.map((item, index) => (
                  <option key={index} value={item.grade}>{item.grade}</option>
              ))}
          </select>
    </div>
  )
}

export default GradeSelect