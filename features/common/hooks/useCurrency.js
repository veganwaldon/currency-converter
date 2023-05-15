import {useState} from "react";

export const useCurrency = () => {
    const [amount, setAmount] = useState(50);
    const [currencyOne, setCurrencyOne] = useState("RUB");
    const [currencyTwo, setCurrencyTwo] = useState("USD");

    return { amount, currencyOne, currencyTwo}
    
};