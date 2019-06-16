import axios from "axios";
import {GET_ERRORS} from "./types";

export const registerUser = (userData, history) => dispatch => {
    axios
        .post("https://warsztaty-zepsolowe.herokuapp.com/character", userData)
        .then(res => history.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        );
};

export const getCharacter = (history) => dispatch => {
    axios
        .get("https://warsztaty-zepsolowe.herokuapp.com/character")
        .then(res => history.push("/character"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        );
};