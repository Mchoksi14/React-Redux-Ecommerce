import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./UserList";

const userSlice = createSlice({
    name: "user",
    initialState: UserList,
    reducers: {
        // write actions
        // write here add action we create in from 
        addUSer: (state, action) => {
            // console.log(action);//inn this we show the action in type and payload //type:user/addUser
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            console.log(action);
            const { id, name, email } = action.payload;
            // const uu = state.find(user => user.id === id);
            const uu = state.find(user => user.id === id);
            console.log("uu e", uu);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(user => user.id === id);
            console.log("uu d", uu);
            if (uu) {
                return state.filter(uu => uu.id !== id)
            }
        }

    }
})

export const { addUSer, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;