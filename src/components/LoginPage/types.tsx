import { Dispatch, SetStateAction } from "react";

export type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_ERROR'; payload: boolean };

export interface LoginProps {
  userName: string;
  password: string;
  email: string;
  dispatch: Dispatch<Action>;
  setIsLoginPage: Dispatch<SetStateAction<boolean>>;
}



