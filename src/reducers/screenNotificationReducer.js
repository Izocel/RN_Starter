import { createReducer } from "@reduxjs/toolkit";
import { screenNotificationAction } from "../actions";

const initialState = {
  isOpen: false,
  type: null,
  title: null,
  msg: null,
};

export const screenNotificationReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(screenNotificationAction.setError, (state, action) => {
      const { isOpen, type, title, msg } = action.payload;
      return {
        ...state,
        isOpen: isOpen,
        type: type,
        title: title,
        msg: msg,
      };
    });
  }
);
