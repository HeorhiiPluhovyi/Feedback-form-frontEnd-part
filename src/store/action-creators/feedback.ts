import {Dispatch} from "redux";
import {
  FeedbackAction,
  FeedbackActionsTypes,
  FeedbackData
} from "../../types/feedback";
import axios from "axios";

export const postFeedback = (feedback: FeedbackData) => {
  return async (dispatch: Dispatch<FeedbackAction>) => {
    try {
      dispatch({
        type: FeedbackActionsTypes.POST_FEEDBACK,
        payload: feedback,
      });

      const response = await axios.post(
        "https://feedback-41313-default-rtdb.europe-west1.firebasedatabase.app/feedback.json",
        JSON.stringify(feedback),
      )

      dispatch({type: FeedbackActionsTypes.POST_FEEDBACK_SUCCESS})
    } catch (e) {
      dispatch({
        type: FeedbackActionsTypes.POST_FEEDBACK_ERROR,
        payload: 'Get error at posting time feedback',
      })
    }
  }
}
