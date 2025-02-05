import React, { useEffect, useReducer } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { getAllTeachers, loginUser } from "../../sdk/firebaseAcctions";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { EMPTY_STRING } from "../../sdk/constants";
import { Action } from "./types";

const initialState = {
  name: EMPTY_STRING,
  id: EMPTY_STRING,
};

type State = typeof initialState;

const LoginTeacher: React.FC = () => {
  const { t } = useTranslation();

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_FIRST_NAME":
        return { ...state, name: action.payload };
      case "SET_LAST_NAME":
        return { ...state, id: action.payload };
      case "SET_ID":
        return { ...state, id: action.payload };
      case "SET_PASSWORD":
        return { ...state, id: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, id } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachers = await getAllTeachers();
        console.log("getting teacher", teachers);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchData();
  }, []);
  const handleLogin = async (e: React.FormEvent) => {
    const dataForLogin = { id, name };
    e.preventDefault();
    try {
      loginUser(dataForLogin);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-root">
      <Paper className="login-paper" elevation={3}>
        <Typography component="h1" variant="h5">
          {t("loginPage.login")}
        </Typography>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="input-login"
            required
            id="firstName"
            name="firstName"
            placeholder={t("loginPage.firstName")}
            autoComplete="firstName"
            dir="rtl"
            onChange={(e) =>
              dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
            }
          />
          <input
            className="input-login"
            required
            id="firstNmae"
            placeholder={t("loginPage.lastName")}
            name="lastName"
            autoComplete="lastName"
            autoFocus
            dir="rtl"
            onChange={(e) =>
              dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
            }
          />
          <input
            className="input-login"
            required
            name="password"
            placeholder={t("loginPage.id")}
            id="id"
            dir="rtl"
            autoComplete="id"
            onChange={(e) =>
              dispatch({ type: "SET_ID", payload: e.target.value })
            }
          />
          <input
            className="input-login"
            required
            name="password"
            placeholder={t("loginPage.password")}
            type="password"
            id="id"
            dir="rtl"
            autoComplete="current-password"
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-submit"
          >
            {t("loginPage.login")}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginTeacher;
