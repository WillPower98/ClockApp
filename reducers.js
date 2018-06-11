import { combineReducers } from 'redux'
import moment from "moment"


const initialState ={
    time: moment().format("LTS"),
    date: "1999-12-31"
}

function update_time(state = initialState.time, action){
    switch(action.type){
        case "time_passed":
         return moment().format("LTS")
    }
    return state
}

function update_date(state = initialState.date, action){
    switch(action.type){
        case "date_changed":
            return action.text
    }
    return state
}

const clockApp = combineReducers({
    update_time,
    update_date
})

export default clockApp