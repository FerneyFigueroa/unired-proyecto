import axios from "axios";

const JornalApi =  axios.create({
    baseURL:'https://virtualred-demos-default-rtdb.firebaseio.com/'
})

export default JornalApi