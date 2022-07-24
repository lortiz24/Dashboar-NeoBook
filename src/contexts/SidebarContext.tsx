import { FC, useState, createContext, useReducer } from 'react';
import { reducer } from 'src/auth/context/AuthReducer';
import { types } from 'src/auth/types/types';



interface ILogged {
  logged: boolean;
  user: IUsuario;
}
interface IUsuario {
  nombre: string;
  cedula: string;
  correo: string;
  rol: string;
  google: boolean,
  estado: boolean,
  uid: string;
  token: string;
}

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

  return {
    logged: !!user,
    user: user ? user.usuario : null
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
    console.log('aqui toy')
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
