import { useState, useEffect } from "react";
import {getAPIData} from "./useGetAPICurrencyRatesData"


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading", 
    });

    useEffect(() => {
        const axiosRates = async () => { 
            try {

                const {data} = await getAPIData();

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