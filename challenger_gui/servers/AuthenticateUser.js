import axios from "axios"
function applyToken(token) {
    if(token) {
        axios.defaults.headers = {
            Authentication: `${token}`
        }
    }
}

export default {
    applyToken
}