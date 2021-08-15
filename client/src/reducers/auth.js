import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authDate: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, authDate: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authDate: null };
        default:
            return state;
    }
};

export default authReducer;