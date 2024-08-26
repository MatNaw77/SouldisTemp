import { TbBooks } from 'react-icons/tb';
import { Box, Text } from '@chakra-ui/react';
import Actions from './Actions';
const Description = () => {
    return (
        <Box
            width='100%'
            display='flex'
        >
            <Box
                borderRadius='lg'
                border='1px solid'
                borderColor='gray.200'
                boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05)'
                display='flex'
                width='48px'
                height='48px'
                padding='14px'
                marginRight='16px'
                justifyContent='center'
                alignItems='center'
            >
                <TbBooks />
            </Box>
            <Box
                width='100%'
            >
            <Text
                fontSize='18px'
                fontStyle='normal'
                fontWeight='600'
                lineHeight='28px'
            >
                Create program
            </Text>
            <Text
               overflow='hidden'
               color='var(--colors-text-text-tertiary-600, #475467)'
               textOverflow='ellipsis'
               fontFamily='Inter'
               fontSize='14px'
               fontStyle='normal'
               fontWeight='400'
               lineHeight='20px'
            >
                Create program for your patients.
            </Text>

            </Box>
            <Actions />
        </Box >
    )
}

export default Description;
