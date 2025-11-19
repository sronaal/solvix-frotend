import React from 'react'
import Stats from '../components/Admin/Stats'
import { DataTickets } from '../components/Admin/DataTickets'
import { TablaTickets } from '../components/Admin/TablaTickets'

export const AdminPage = () => {
  return (
   <>
  
    <Stats/>
    <DataTickets/>
    <TablaTickets/>
   </>
  )
}

