import { useCurrency } from '../common/hooks/useCurrency';
import {Text, Spinner, Box} from "@chakra-ui/react";
import ConverterCalc from './components/ConverterCalc.jsx/ConverterCalc';
import ConverterInput from './components/ConverterInput/ConverterInput';

const Converter = () => {
    const { 
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
    } = useCurrency();

    if (isError) return (
    <Text fontWeight='bold' fontSize='3xl' color='white' my='10'>
      smth is wrong
    </Text>
    );

    if (isLoading) return (
      <Spinner margin = 'auto 0' size = 'xl' thickness = '4px' speed = '0.65s' color = 'purple.500' emptyColor="purple.200" />
    );

  return (
    <Box width = { {base: '90vw', sm: '45 vw'}} margin="0 auto" >
      <ConverterCalc symbol={symbolsData.data} currencyList={currencyList} onCurrencyChange={setCurrencyOne} currency = {currencyOne}/>
      <ConverterCalc symbol={symbolsData.data} currencyList={currencyList} onCurrencyChange={setCurrencyTwo} currency = {currencyTwo}/>
<ConverterInput/>
    </Box>
  )
}

export default Converter;