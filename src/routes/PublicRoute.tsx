import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { SidebarContext } from 'src/contexts/SidebarContext';

export const PublicRoute = ({children}) => {
    const {logged} = useContext(SidebarContext)

  return ( !logged )
  ? children
  :
  <Navigate to='/'/>
}
