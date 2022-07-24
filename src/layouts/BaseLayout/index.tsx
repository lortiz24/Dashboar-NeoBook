import { FC, ReactNode, useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';


interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const { logged } = useContext(SidebarContext)
  return (
    <>
      {logged ?
      <Navigate to='/dashboards' />
      :
      <Box
        sx={{
          flex: 1,
          height: '100%'
        }}
      >
        {children || <Outlet />}
      </Box>}
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
