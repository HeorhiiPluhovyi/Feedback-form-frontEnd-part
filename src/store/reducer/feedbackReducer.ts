import {
  FeedbackAction,
  FeedbackActionsTypes,
  FeedbackState
} from "../../types/feedback";

const initialState: FeedbackState = {
  posts: {
    name: '',
    email: '',
    massage: '',
  },
  loading: false,
  error: null,
}

export const feedbackReducer = (
  state: FeedbackState = {...initialState},
  action: FeedbackAction
): FeedbackState => {
  switch (action.type) {
    case FeedbackActionsTypes.POST_FEEDBACK:
      return {posts: {...action.payload}, loading: true, error: null}

    case FeedbackActionsTypes.POST_FEEDBACK_SUCCESS:
      return {...initialState}

    case FeedbackActionsTypes.POST_FEEDBACK_ERROR:
      return {...state, loading: true, error: action.payload}

    default:
      return state
  }
}
