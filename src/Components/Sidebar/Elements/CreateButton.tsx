import React, { FC } from 'react';
import { Button, Box } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const CreateButton: FC = () => {
    return (
        <Box
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Button
                leftIcon={<FaPlus />}
                backgroundColor='white'
                _hover={{
                    bg: '#0C111D',
                    color: '#FFFFFF'
                }}
            >
                Create
            </Button>
        </Box>
    );
};

export default CreateButton;
