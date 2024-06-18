/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userData: {},
    userAppointments: []
}

export const userSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserAppiontments: (state, action) => {
            state.userAppointments= action.payload
        },
        // setUserAppiontments: (actualUser, {type, payload}) => {
        //     actualUser.userAppointments= payload }
    
    }
})

export const {setUserData, setUserAppiontments, setCancelAppointment} = userSlice.actions;
export default userSlice.reducer;

// declara un estado inicial para el reducer, y despues las acciones que va a realizar el