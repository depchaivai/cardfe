import axios from 'axios';

const API = axios.create({
    baseURL: 'https://veitridk.com/api',
});

export const createAPI = async (key,data) => {
    const res = await API.post(`/${key}`,data);
    return res.data;
}
export const getAllAPI = async (key,query) => {
    const res = await API.get(`/${key}`);
    return res.data;
}
export const destroyAPI = async (key,id) => {
    const res = await API.delete(`/${key}/destroy/${id}`);
    return res.data;
}
export const editAPI = async (key,id,data) => {
    const res = await API.post(`/${key}/update/${id}`,data);
    return res.data;
}
export const getListSlug = async (key) => {
    const res = await API.get(`/${key}/get_list_slug`);
    return res.data;
}
export const getListEngSlug = async (key) => {
    const res = await API.get(`/${key}/get_list_eng_slug`);
    return res.data;
}
export const getBySlug = async (key,slug) => {
    const res = await API.get(`/${key}/get_by_slug/${slug}`);
    return res.data;
}
export default API;