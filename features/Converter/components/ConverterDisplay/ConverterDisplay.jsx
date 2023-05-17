import {Box, Text} from '@chakra-ui/react';

const ConverterDisplay = ({
  amount,
  currencyOne,
  currencyTwo,
  convertedAmount,
  date,
  time
}) => {
  return (
    <Box textAlign = "right">
        <Text fontSize = "2xl" fontWeight="bold">
            {amount}
            {currencyOne}
        </Text>
        <Text fontSize = "2xl" fontWeight="bold" color = "purple.400">
            {convertedAmount}
            {currencyTwo}
        </Text>
    </Box>
  );
};

export default ConverterDisplay;