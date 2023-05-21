
import { createSlice } from '@reduxjs/toolkit';

export const tvShowSlice = createSlice({
    name: 'tvShow',
    initialState: {
        tvShowData: [],
        searchData: [],
        singleTvShow: null,
        isLoading: true,
        pagination: 1,
        isCloseMenu: true,
    },
    reducers: {
        getAlltvShowData: (state, action ) => {
            state.tvShowData = action.payload;
        },
        startSearchData: (state, action)=>{
            state.searchData = action.payload;
        },
        getSingleTvShow: (state, action)=>{
            state.singleTvShow = action.payload
        },
        startIsLoading: (state, action)=>{
            state.isLoading = action.payload
        },
        startPagination: (state, action)=>{
            state.pagination += action.payload
        },
        startCloseMenu: (state)=>{
            state.isCloseMenu = !state.isCloseMenu;
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
                getAlltvShowData, 
                startIsLoading, 
                startPagination,  
                startSearchData, 
                startCloseMenu, 
                getSingleTvShow} = tvShowSlice.actions;