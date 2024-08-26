import { Box, Text } from '@chakra-ui/react'
import Inputs from './Inputs';
import AddStep from './AddStep';

const Form = () => {
    return (
        <Box
            width='100%'
            height='100%'
        >
            <Text
                color='var(--colors-text-text-primary-900, #101828)'
                fontFamily='Inter'
                fontSize='18px'
                fontStyle='normal'
                fontWeight='600'
                lineHeight='28px'
                mb='40px'
            >
                Set up new program with your materials
            </Text>
            <Inputs />
            <Box
                display='flex'
                pt='20px'
                justifyContent='center'
            >
                <AddStep />
            </Box>

        </Box>
    )
}

export default Form;