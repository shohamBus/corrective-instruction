import { Dispatch, SetStateAction } from "react";

export type Action =
  | { type: "SET_FIRST_NAME"; payload: string }
  | { type: "SET_LAST_NAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_ID"; payload: string };

export interface LoginProps {
  name: string;
  id: string;
  dispatch: Dispatch<Action>;
  setIsLoginPage?: Dispatch<SetStateAction<boolean>>;
}
