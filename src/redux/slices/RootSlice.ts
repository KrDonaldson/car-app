import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Make',
        model: 'Model',
        color: 'Color',
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseColor} = rootSlice.actions;