

export interface ILogged {
    logged: boolean;
    user: IUsuario;
}
export interface IUsuario {
    nombre: string;
    cedula: string;
    correo: string;
    rol: string;
    google: boolean,
    estado: boolean,
    uid: string;
    token: string;
}