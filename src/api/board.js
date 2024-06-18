import axios from "axios";


export const fetchBoards = (params) => axios.get(`/boards`, { params })
