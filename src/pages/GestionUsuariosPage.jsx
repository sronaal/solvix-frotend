import React from 'react'
import { TablaUsuarios } from '../components/Admin/TablaUsuarios'
import { StatsUsuarios } from '../components/Admin/StatsUsuarios'

export const GestionUsuariosPage = () => {
  return (
    <div>
      <StatsUsuarios />
      <TablaUsuarios />
    </div>
  )
}

