import { useState, useEffect } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { meta, data } = await response.json();

                setRatesData({
                    state: "success",
                    meta,
                    data,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};