import { types } from "../types/types";


//todo: mejorar estos tipos
export const reducer = (state:any, action:any) => {
    switch (action.type) {
        case types.login:
            return {
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                logged: false,
            }


        default:
            return state

    }
}