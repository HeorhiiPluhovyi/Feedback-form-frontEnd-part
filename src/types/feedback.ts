//Define the action types: Define the action types for creating a post.
export enum FeedbackActionsTypes {
  POST_FEEDBACK = 'POST_FEEDBACK',
  POST_FEEDBACK_ERROR = 'POST_FEEDBACK_ERROR',
  POST_FEEDBACK_SUCCESS = 'POST_FEEDBACK_SUCCESS',
}

export interface FeedbackData {
  name: string;
  email: string;
  massage: string;
}

export interface FeedbackState {
  posts: FeedbackData,
  loading: boolean;
  error: null | string;
};

interface PostFeedbackAction {
  type: FeedbackActionsTypes.POST_FEEDBACK;
  payload: FeedbackData;
}

interface PostFeedbackSuccessAction {
  type: FeedbackActionsTypes.POST_FEEDBACK_SUCCESS;
}

interface PostFeedbackErrorAction {
  type: FeedbackActionsTypes.POST_FEEDBACK_ERROR;
  payload: string;
}

export type FeedbackAction = PostFeedbackAction
  | PostFeedbackSuccessAction
  | PostFeedbackErrorAction;
