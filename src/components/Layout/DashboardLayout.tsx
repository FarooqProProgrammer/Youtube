"use client";


import React from 'react'
import Header from '../Header';

interface DashboardLayoutProps {
  children?: React.ReactNode
}


const DashboardLayout = ({children}:DashboardLayoutProps) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default DashboardLayout