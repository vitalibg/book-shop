import { ActionType, SignInStateType } from "../type";

const initialValue: SignInStateType = {
  isSignIn: false
};

export const bookReducer = (state: SignInStateType = initialValue, action: ActionType) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignIn: true };
    default:
      return state;
  }
};
