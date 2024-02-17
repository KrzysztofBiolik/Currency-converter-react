import axios from "axios";

export const getAPIData = async () => {
    const response = await axios.get("api.json");

    const {data}  =  await response.data;

    return {data} ;
};