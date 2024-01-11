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
    favJobs: localStorage.getItem('fav-items') ? JSON.parse(localStorage.getItem('fav-items')) : [],
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [
        {
            username: 'Kowy',
            email: 'kowybusiness@gmail.com',
            pw: 'Kowy123',
            favJobs: []
        }
    ],
    currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : 'Guest'
}

const sliceJobs = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob(state, action) {
           if(state.favJobs.find(job => job.name === action.payload.name)) {
             return
           } else {
            state.favJobs.push(action.payload)
           }

           localStorage.setItem('fav-items', JSON.stringify(state.favJobs))
        },

        AddAccount(state, action) {
           state.users.push(action.payload)
           localStorage.setItem('users', JSON.stringify(state.users))
           
        },

        removeJob(state,action) {
            const filtered = state.favJobs.filter(job => job.name !== action.payload.name)
            state.favJobs = filtered
            localStorage.setItem('fav-items', JSON.stringify(state.favJobs))
        },

        setUser(state, action) {
            state.currentUser = action.payload
            localStorage.setItem('user', JSON.stringify(state.currentUser))
        },

        RemoveUser(state,action) {
            state.currentUser = 'Guest'
            localStorage.setItem('user', JSON.stringify(state.currentUser))
        }

    }
})

export const {addJob, AddAccount, removeJob, setUser, RemoveUser} = sliceJobs.actions
export default sliceJobs.reducer