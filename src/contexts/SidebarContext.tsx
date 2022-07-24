import { FC, useState, createContext, useReducer, useEffect } from 'react';
import { reducer } from 'src/auth/context/AuthReducer';

type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  logged: boolean;
  login: () => void;
  logout: () => void;
  
};



// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider: FC = ({ children }) => {


  const [logged, setlogged] = useState(false)
  const [sidebarToggle, setSidebarToggle] = useState(false);
 


  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
    console.log(sidebarToggle)
  };

  const isLoggedIn = () => {
    console.log('gregffrtg')
    const user = JSON.parse(localStorage.getItem('login'))
    setlogged(!!user)
  }
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  const login = () => {
    setlogged(true)
  }
  const logout = () => {
    setlogged(false)
  }

  

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, logged, login, logout }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
