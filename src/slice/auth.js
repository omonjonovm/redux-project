import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false, // serverga so'rov yuborganimizda
  isLoggedin: false, // foydalanuvchi royhatda bormi yoqmi, yani dasturimizga kirganmi yo kirmaganmi
  user: null, // foydalanuvchi ma'lumotlari
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login
    userStart: state => {
      state.isLoading = true
     },
    userSuccess: state => { },
    userFailure: state => { },
    // Register
    registerUserStart :state => {
      state.isLoading = true
    },
    registerUserSuccess : state => {},
    registerUserFailure: state => {},
  }
})
export const {userStart , registerUserStart} = authSlice.actions
export default authSlice.reducer