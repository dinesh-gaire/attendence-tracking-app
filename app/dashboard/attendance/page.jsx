"use client"
import GradeSelect from '@/app/_components/GradeSelect'
import MonthSelection from '@/app/_components/MonthSelection'
import GlobalApi from '@/app/_services/GlobalApi'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import React, { useState } from 'react'
import AttendanceGrid from './_components/AttendanceGrid'
  

const Attendance = () => {
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedGrade, setSelectedGrade] = useState();
    const [attendanceList, setAttendanceList] = useState();

    const onSearchHandler=()=>{
        // console.log(selectedMonth, selectedGrade);
        const month = moment(selectedMonth).format('MM/YYYY')
        GlobalApi.GetAttendanceList(selectedGrade,month).then(resp=>{
            // console.log(resp.data);
            setAttendanceList(resp.data);
        })
    }
  return (
    <div className='p-7'>
        <h2 className='text-2xl font-bold'>Attendance</h2>
        {/* Search Option */}
        <div className='flex gap-4 p-5 border rounded-lg shadow-sm my-5'>
            <div className='flex gap-2 items-center'>
                <label>Select Month:</label>
                <MonthSelection selectedMonth={(value)=>setSelectedMonth(value)}/>
            </div>
            <div className='flex gap-2 items-center'>
                <label>Select Grade:</label>
                <GradeSelect selectedGrade={(value)=>setSelectedGrade(value)}/>
            </div>
            <Button onClick={()=>onSearchHandler()}>Search</Button>
        </div>

        {/* Student Attendance Grid */}
        <AttendanceGrid attendanceList={attendanceList} selectedMonth={selectedMonth}/>
    </div>
  )
}

export default Attendance