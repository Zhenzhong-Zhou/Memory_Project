import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

 export const siginin = (formData, history) => async (dispatch) => {
     try {
         history.push("/");
     } catch (error) {
         console.log(error);
     }
 };

 export const siginup = (formData, history) => async (dispatch) => {
     try {
         history.push("/");
     } catch (error) {
         console.log(error);
     }
 };