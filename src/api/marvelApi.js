import axios from 'axios'

const BASE_URL = "https://gateway.marvel.com:443/v1/public";
const ts = "1";
const apikey = "cd0e4260b4bafa99f0b64e6d3407fb01";
const hash = "a48f78af283c52cbdf8264c80f2fe6ce";

export const fetchComics = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`);
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.error("Error fetching comics:", error);
        throw error;
    }
};