"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import MonthSelection from '../_components/MonthSelection'
import GradeSelect from '../_components/GradeSelect'
import GlobalApi from '../_services/GlobalApi'
import moment from 'moment'
import StatusList from './_components/StatusList'

const Dashboard = () => {
  const { setTheme } = useTheme()
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setAttendanceList] = useState();

  useEffect(() => {
    // setTheme('light')
    getStudentAttendance()
  }, [selectedMonth||selectedGrade])

  //used to get student attendance for given month and date
  const getStudentAttendance=()=>{
    GlobalApi.GetAttendanceList(selectedGrade,moment(selectedMonth).format('MM/yyyy'))
    .then(resp=>{
      // console.log(resp);
      setAttendanceList(resp.data)
    })
  }
  
  return (
    <div className='p-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl'>Dashboard</h2>

        <div className='flex items-center gap-4'>
          <MonthSelection selectedMonth={setSelectedMonth}/>
          <GradeSelect selectedGrade={setSelectedGrade}/>
        </div>
      </div>
      <StatusList attendanceList={attendanceList}/>
    </div>
  )
}

export default Dashboard