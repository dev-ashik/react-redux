import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

export const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({name: "Ashik", age: 0, email: "ashik@email.com"}));
        }}
      >
        Login
      </button>
    </div>
  );
};
