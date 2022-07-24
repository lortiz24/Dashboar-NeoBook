import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { PublicRoute } from './PublicRoute'
import LoginPages from '../auth/pages/LoginPages'
import { PrivateRoute } from './PrivateRoute'
import BaseLayout from 'src/layouts/BaseLayout'
import SidebarLayout from 'src/layouts/SidebarLayout'
import { Dashboard } from '@mui/icons-material'

export const AppRoutes = () => {

 

  return (
    <>
      <Routes>
        <Route
          path="login"
          element={<PublicRoute>
            <BaseLayout>
              <LoginPages />
            </BaseLayout>
          </PublicRoute>} />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <SidebarLayout>
                <Dashboard />
              </SidebarLayout>
            </PrivateRoute>} />

      </Routes>
    </>
  )
}
