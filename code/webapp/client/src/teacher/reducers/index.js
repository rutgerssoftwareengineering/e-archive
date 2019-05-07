  // written by: Joshua Olazo
  // tested by: Joshua Olazo
  // debugged by: Joshua Olazo
import {combineReducers } from 'redux'
//  Import all the reducers here
import announcementReducer from './announcementReducer'

// ADD reducers right here
export default combineReducers({
    announcement: announcementReducer

})