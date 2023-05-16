import {useState} from "react";
import { useQueries } from "@tanstack/react-query";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData";

export const useCurrency = () => {
    const [amount, setAmount] = useState(50);
    const [currencyOne, setCurrencyOne] = useState("RUB");
    const [currencyTwo, setCurrencyTwo] = useState("USD");

    const [ratesData, symbolsData] = useQueries({
        queries: [
        {
        queryKey: ["rates", currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({rates, date, timestamp}) => {
            return {rates, date, timestamp};
        }
        },
        {
            queryKey: ["symbols"],
            queryFn: fetchSymbols,
            staleTime: Infinity,
            select: ({symbols}) => symbols
        }
    ]
});

const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
const isError = [ratesData, symbolsData].some((query) => query.isError);

const convertedAmount = ratesData.data?.rates[currencyTwo] * amount.toFixed(2);

const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : [];

return { 
        isLoading,
        isError,
        amount, 
        setAmount,
        currencyOne, 
        setCurrencyOne,
        currencyTwo, 
        setCurrencyTwo,
        ratesData, 
        symbolsData, 
        currencyList,
        convertedAmount
    };

};