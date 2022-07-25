import React, { useContext } from 'react'
import { Route, Routes, useRoutes } from 'react-router'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { PublicRoute } from './PublicRoute'
import LoginPages from '../auth/pages/LoginPages'
import { PrivateRoute } from './PrivateRoute'
import BaseLayout from 'src/layouts/BaseLayout'
import SidebarLayout from 'src/layouts/SidebarLayout'
import router from 'src/router';
import Overview from 'src/content/overview'


  ;
export const AppRoutes = () => {
  const content = useRoutes(router);


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
          path="/"
          element={
            <BaseLayout>
              <Overview />
            </BaseLayout>
          } />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              {content}
            </PrivateRoute>} />

      </Routes>
    </>
  )
}
