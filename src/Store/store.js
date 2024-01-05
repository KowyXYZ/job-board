import { configureStore } from "@reduxjs/toolkit";
import sliceJob from "./sliceJob";

const store = configureStore({
    reducer: {
        jobs: sliceJob
    }
})

export default store