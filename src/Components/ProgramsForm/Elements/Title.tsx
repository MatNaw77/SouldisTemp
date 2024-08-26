import { Box } from '@chakra-ui/react';
import ReturnButton from './ReturnButton';
import Description from './Description';

function Title() {
    return (
        <Box
            borderBottom='1px solid'
            borderColor='gray.200'
            width='full'
            mt={2}
            pb='20px'
        >
            <ReturnButton />
            <Description />
        </Box>
    );
}

export default Title;
