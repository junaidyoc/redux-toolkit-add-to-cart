const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);  // Redux dont allow to mutate state direct but createSlice automatically create copy of state then manipulate state
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});


export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;