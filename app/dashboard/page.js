"use client"

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

const Dashboard = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('system')
  }, [])
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard