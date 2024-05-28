"use client"
import { getUniqueRecord } from '@/app/_services/service';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

const PieChartComponent = ({attendanceList, totalPresentData}) => {

    const [data, setData] = useState([])
    useEffect(()=>{
        if(attendanceList){
            const totalSt = getUniqueRecord(attendanceList);
            const today = moment().format('D');
            const PresentPerc = (attendanceList.length/(totalSt.length*Number(today))*100)
            setData([
                {
                    name:'Total Present',
                    value:Number(PresentPerc.toFixed(1)),
                    fill:'#8884d8'
                },
                {
                    name:'Total Absent',
                    value:(100-Number(PresentPerc.toFixed(1))),
                    fill:'#82ca9d'
                }
            ])
        }
    },[attendanceList])
  return (
    <div className='border p-5 rounded-lg'>
        <h2 className='font-bold text-lg'>Monthly Attendance</h2>
            <ResponsiveContainer width={'100%'} height={300}>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label />
                </PieChart>
            </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent