import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

interface PageState {
    page: string
}

const initialState: PageState = { page: 'Home'}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state: any, action: PayloadAction<string>) => {
            state.page = action.payload
        }
    }
})

export const selectPage = (state:RootState) => state.page 
export const {setPage} = pageSlice.actions 
export const pageReducer = pageSlice.reducer