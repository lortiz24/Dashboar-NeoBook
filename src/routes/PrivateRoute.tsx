import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router';
import { SidebarContext } from 'src/contexts/SidebarContext';

export const PrivateRoute = ({ children }:any) => {
    const {pathname,search} = useLocation()
    const lastpath = pathname + search;
    localStorage.setItem('lastpath', lastpath)
    const { logged } = useContext(SidebarContext);

    return (logged)
        ? children
        :
        <Navigate to='/login' />

}
