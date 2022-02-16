import axios from "axios";

export const getUser = async (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}