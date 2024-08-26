import { Link, Icon } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

function ReturnButton() {
    return (
        <Link
            href='#' 
            display='flex'
            alignItems='center'
            padding='30px 14px 20px 14px'
            justifyContent='flex-start'
            _hover={{ textDecoration: 'none' }}
        >
            <Icon
                as={FaArrowLeft}
                boxSize={4}
                paddingTop='2px'
                paddingRight='5px'
            />
            Back to manuals
        </Link>
    );
}

export default ReturnButton;
