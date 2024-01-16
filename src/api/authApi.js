import axios from "axios";

const authApi =  axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:
        'AIzaSyCFljMFi1W47ziSnMkSOo181qZav4qMPzg'
    }
})

export default authApi