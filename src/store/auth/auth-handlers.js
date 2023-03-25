import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { saveToken } from "utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-request";
import { authUpdateUser } from "./auth-slice";

// REGISTER
export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response?.status === 201) {
      toast.success("Create new account successfully!!");
    }
  } catch (error) {
    console.log(error);
  }
}

// LOGIN
export function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response?.data?.accessToken && response?.data?.refreshToken) {
      saveToken(response?.data?.accessToken, response?.data?.refreshToken);
      yield call(handleAuthFetchMe, { payload: response?.data?.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}

// Fetch Me
export function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    console.log(
      "🚀 ~ file: auth-handlers.js:42 ~ function*handleAuthFetchMe ~ response:",
      response
    );
    yield put(
      authUpdateUser({
        user: response?.data,
        accessToken: payload,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

// HANDLE REFRESH TOKEN
export function* handleAuthRefreshToken({ payload }) {
  console.log(
    "🚀 ~ file: auth-handlers.js:59 ~ function*handleAuthRefreshToken ~ payload:",
    payload
  );
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response?.data) {
      saveToken(response?.data?.accessToken, response?.data?.refreshToken);
      yield call(handleAuthFetchMe, { payload: response?.data?.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}
