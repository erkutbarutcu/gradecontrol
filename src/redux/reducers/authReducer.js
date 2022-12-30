import { createSlice } from "@reduxjs/toolkit"

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length >= 2) return parts.pop().split(";").shift();
}


export const authReducer = createSlice({
    name: "authReducer",
    initialState: {
        isAuth: false,
        userid: null,
        userrole: null,
        username: null
    },
    reducers: {
        logTRUE: (state, body) => {
            state.isAuth = true;
            state.userid = body.payload.id;
            state.userrole = body.payload.role;
            state.username = body.payload.name;
            document.cookie = ("token=" + JSON.stringify(body.payload) + ";");
        },
        logFALSE: state => {
            state.isAuth = false;
        },
        logoutFUNC: state => {
            state.isAuth = false;
            state.userid = null;
            state.userrole = null;
            state.username = null;
            document.cookie = "token=; Max-Age=-99999999;";
        },
        refresh: state => {
            let token = getCookie("token");
            if (token !== undefined) {
                token=JSON.parse(token);
                state.isAuth = true;
                state.userid = token.id;
                state.userrole = token.role;
                state.username = token.name;
            }
        }
    }
}
)

export const { logTRUE, logFALSE, logoutFUNC, refresh } = authReducer.actions
export const isAuth = (state) => state.isAuth


export default authReducer.reducer



