import React from 'react'

export const setLogin = async ({ email: correo, password, }: any) => {


    let params: RequestInit = {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        method: "POST",
        body: JSON.stringify({ correo, password })
    }

    const respuesta = await fetch('https://backendneosoft.herokuapp.com/api/auth/login', params)
    const data = await respuesta.json()

    return data
} 
