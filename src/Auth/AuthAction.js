import { useState } from "react";


const AuthAction = (name) => (dispatch,getState) => {

    const {
        authREducer : {user},
    } = getState()
    dispatch({
        type: 'ADD_NAME',
        payload: [name, ...user]
    })
}
 
export default AuthAction;

