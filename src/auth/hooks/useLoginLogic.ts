import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { setLogin } from '../services';

export const useLoginLogic = () => {
  const { login } = useContext(SidebarContext)

  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })



  const handleChange = (event: any) => {
    console.log(event.target.name)
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLogin(loginForm)
      .then((result) => {
        if (result.token) {

          localStorage.setItem('login', JSON.stringify(result));
          setLoginForm({
            email: '',
            password: '',
          })


          login({
            ...result.usuairo, token: result.token
          })
          navigate('/dashboards', { replace: true });
        }else{
          alert('No se pudo iniciar sesion. Intentelo de nuevo');
        }
      }).catch((err) => {
        console.log(err)
      });
  };

  return {
    handleChange,
    handleSubmit,
    login,
    navigate,
    loginForm,
    setLoginForm
  }
}
