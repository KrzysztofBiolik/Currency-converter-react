import { useState, useEffect } from "react";
import axios from "axios";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading", 
    });

    useEffect(() => {
        const axiosRates = async () => { 
            try {
                const response = await axios.get("api.json");

                const {data}  =  response.data;

                setRatesData({
                    state: "success",
                    data,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(axiosRates, 1000);
    }, []);

    return ratesData;
};