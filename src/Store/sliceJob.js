import { createSlice, current } from "@reduxjs/toolkit";

const currentTime = new Date().toString()

const initialState = {
    totalJobs: [
        {
            name: 'House Cleaner',
            CompanyName: 'HouseHold Team',
            LocationState: 'Serbia',
            LocationPlace: 'Belgrade',
            Salary: '600',
            createdAt: currentTime,
            LastsUntil: '02-04-2024',
            Type: 'Full-Time'
        },
        {
            name: 'Developer',
            CompanyName: 'Google Inc',
            LocationState: 'Serbia',
            LocationPlace: 'Belgrade',
            Salary: '20,000',
            createdAt: currentTime,
            LastsUntil: '02-02-2024',
            Type: 'Part-Time'
        },
        {
            name: 'Developer',
            CompanyName: 'Google Inc',
            LocationState: 'Serbia',
            LocationPlace: 'Belgrade',
            Salary: '20,000',
            createdAt: currentTime,
            LastsUntil: '02-02-2024',
            Type: 'Part-Time'
        },
        {
            name: 'Developer',
            CompanyName: 'Google Inc',
            LocationState: 'Serbia',
            LocationPlace: 'Belgrade',
            Salary: '20,000',
            createdAt: currentTime,
            LastsUntil: '02-02-2024',
            Type: 'Part-Time'
        },
        {
            name: 'Developer',
            CompanyName: 'Google Inc',
            LocationState: 'Serbia',
            LocationPlace: 'Belgrade',
            Salary: '20,000',
            createdAt: currentTime,
            LastsUntil: '02-02-2024',
            Type: 'Part-Time'
        },
        {
            name: 'Developer',
            CompanyName: 'Google Inc',
            LocationState: 'Serbia',
            LocationPlace: 'Belgrade',
            Salary: '20,000',
            createdAt: currentTime,
            LastsUntil: '02-02-2024',
            Type: 'Part-Time'
        },
       
    ],
    favJobs: []
}

const sliceJobs = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob(state, action) {
            state.favJobs.push(action.payload)
        }
    }
})

export const {addJob} = sliceJobs.actions
export default sliceJobs.reducer