import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
        const paste = action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Created Successfully");
        console.log("Created")
      
    },
    updateToPaste: (state,action) => {
        const updatedPaste = action.payload;
        const index = state.pastes.findIndex((paste) => paste._id === updatedPaste._id);

        if(index !== -1){
            state.pastes[index] = {...state.pastes[index],...updatedPaste}
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast("Updated Successfully");
        }
        else{
            toast("Invalid Updation");
        }
        
      
    },
    removeToPaste: (state, action) => {
        const id = action.payload;
        state.pastes = state.pastes.filter((paste) => paste._id !== id);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Removed Successfully");
        console.log("Removed")
    },
    resetAllPaste: (state) => {
        state.pastes = [];
        localStorage.removeItem("pastes"); // Clear the stored data
        toast("All Pastes Reset Successfully");
    },
  },
})

export const { addToPaste, updateToPaste, removeToPaste, resetAllPaste} = pasteSlice.actions

export default pasteSlice.reducer