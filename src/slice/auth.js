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
    userStart: state => {
      state.isLoading = true
     },
    userSuccess: state => { },
    userFailure: state => { },
  }
})
export const {userStart} = authSlice.actions
export default authSlice.reducer