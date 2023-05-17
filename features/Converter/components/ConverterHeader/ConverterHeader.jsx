import {Box, Text} from '@chakra-ui/react'

const ConverterHeader = () => {
  return (
    <Box 
        textAlign = 'center' 
        color='white' 
        marginTop = '20' 
        marginBottom='10'
    >
            <Text 
                fontWeight = 'bold' 
                fontSize='4xl'> 
                Currency Converter up to date
            </Text>
    </Box>
  )
}

export default ConverterHeader;