import { createSlice, current } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

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
    favJobs: [],
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [
        {
            username: 'Kowy',
            email: 'kowybusiness@gmail.com',
            pw: 'Kowy123'
        }
    ]
}

const sliceJobs = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob(state, action) {
           console.log(action.payload)
        },

        AddAccount(state, action) {
           state.users.push(action.payload)
           localStorage.setItem('users', JSON.stringify(state.users))
        }

    }
})

export const {addJob, AddAccount} = sliceJobs.actions
export default sliceJobs.reducer