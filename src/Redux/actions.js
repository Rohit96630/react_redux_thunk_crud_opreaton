import axios from "axios";
import * as types from "./actionType";
import { type } from "@testing-library/user-event/dist/type";

const getUsers = (user) => ({
  type: types.GET_USERS,
  payload: user,
});

const userDeleted = () => ({
  type: types.DELETE_USERS,
});

const userAdded = () => ({
  type: types.ADD_USERS,
});
const userUpdated = () => ({
  type: types.UPDATE_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("redux", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};
export const addUsers = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("add user", res);
        dispatch(userAdded());
      })
      .catch((err) => console.log(err));
  };
};
export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("get", res);
        dispatch(getUser(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("update", res);
        dispatch(userUpdated());
      })
      .catch((err) => console.log(err));
  };
};
