import axios from "axios"

export const getPosts = (userId) => {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts")
    return res
}   