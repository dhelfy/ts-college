import { instance } from "./axiosInstance"

export const getAll = () => instance.get('/todos?_limit=10')