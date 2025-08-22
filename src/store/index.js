// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./counter"
import authReducer from "./auth"


// export const INCREMENT = "increment"



// const counterReducer = (state = initialState, action) => {

//     // mitte kunagi ei tohi state'i ise muuta!!!!
//     // if (action.type === "increment") {
//     //    state.counter++

//     //    return state
//     // }


//     if (action.type === INCREMENT) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "toggle") {
//         return {
//             counter: state.counter, 
//             showCounter: !state.showCounter
//         }
//     }

//     return state
// }

// const store = createStore(counterSlice.reducer)


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
})


export default store