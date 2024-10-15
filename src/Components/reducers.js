import { createSlice } from "@reduxjs/toolkit";

const estadoInit = {
    parId: {} 
};  

const reducers = createSlice ({
    name: 'compSom',
    initialState: estadoInit,
    reducers: {
        setId: (state, action) =>{
            state.parId = action.payload;
        }
    }
    

});

export const {setId} = reducers.actions;
export default reducers.reducer;