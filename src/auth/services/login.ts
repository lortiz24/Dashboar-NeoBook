import React from 'react'

export const setLogin = async ({ email: correo, password, }: any) => {

    console.log({ email: correo, password, })
    let params: RequestInit = {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        method: "POST",
        body: JSON.stringify({ correo, password })
    }

    const respuesta = await fetch(`${process.env.REACT_APP_HTTPS_SERVICE}/api/auth/login`, params)
    const data = await respuesta.json()

    return data
} 
