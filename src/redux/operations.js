import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./contacts";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "<https://65c6a348e5b94dfca2e1b72e.mockapi.io>";


export const fetchContacts = () => async dispatch => {
    try {
      // Індикатор завантаження
      dispatch(fetchingInProgress());
      // HTTP-запит
      const response = await axios.get("/contacts");
      // Обробка даних
      dispatch(fetchingSuccess(response.data));
    } catch (e) {
      // Обробка помилки
      dispatch(fetchingError(e.message));
    }
  };