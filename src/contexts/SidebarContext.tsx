import { FC, useState, createContext, useReducer } from 'react';
import { reducer } from 'src/auth/context/AuthReducer';
import { types } from 'src/auth/types/types';
import { ILogged, IUsuario } from './interface/sidebarContexInterface';





type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  logged: ILogged;
  login: (user: IUsuario) => void;
  logout: () => void;

};



const init = () => {
  const user = JSON.parse(localStorage.getItem('login'));
  console.log('&&&&&&&&&&&&&&&&',user)
  return {
    logged: !!user,
    user: user ? user : null
  }
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

const initialValue = {
  logged: false,
  user: {
    nombre: '',
    cedula: '',
    correo: '',
    rol: '',
    google: '',
    estado: '',
    uid: '',
    token: '',
  }
}
export const SidebarProvider: FC = ({ children }) => {
  const [logged, dispatch] = useReducer(reducer, initialValue, init)
 console.log('################',logged)

  const [sidebarToggle, setSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  const login = (user: IUsuario) => {
    const action = {
      type: types.login,
      payload: user
    }
    dispatch(action)
    localStorage.setItem('login', JSON.stringify(user))
  }

  const logout = () => {

    localStorage.removeItem('login')
    const action = {
      type: types.logout,
      payload: {
        logged: false,
        user: null
      }
    }

    dispatch(action);
   
  }


  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar, logged, login, logout }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
