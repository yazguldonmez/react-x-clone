import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'yazgul',
        fullName: 'Yazgül',
        avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    }, // o anki aktif account
    accounts: [
        {
            id: 1,
            username: 'yazgul',
            fullName: 'Yazgül',
            avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
        }, 
        {
            id: 2,
            username: 'developer',
            fullName: 'Yazgül Dönmez',
            avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
        }, 

    ] //birden fazla hesaba giriş yaptırabildiğimiz için array olarak tutulacak  
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //state manipüle etme metodları
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload); // &&  state.accounts = [...state.accounts, action.payload];
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer