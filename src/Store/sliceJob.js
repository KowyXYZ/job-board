import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalJobs: [],
    favJobs: []
}

const sliceJobs = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob(state, action) {
        
        }
    }
})