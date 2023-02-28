import {combineReducers} from "redux";
import {feedbackReducer} from "./feedbackReducer";

export const rootReducer = combineReducers({
  feedback: feedbackReducer,
})

export type RootState = ReturnType<typeof rootReducer>;