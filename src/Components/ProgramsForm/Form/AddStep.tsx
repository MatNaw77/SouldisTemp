import { Button } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const AddStep = () => {
    return (
        
            <Button
                backgroundColor='white'
                marginRight='15px'
                _hover={{
                    bg: '#0C111D',
                    color: '#FFFFFF'
                }}
                leftIcon={<FaPlus />}
            >
                Add Step
            </Button>
    )
}

export default AddStep;