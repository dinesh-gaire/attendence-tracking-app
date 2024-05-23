"use client"

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

const Dashboard = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [])
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard