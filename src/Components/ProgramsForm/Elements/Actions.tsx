import { Box, Button } from '@chakra-ui/react';

const Actions = () => {
    return (
        <Box
            display='flex'
        >
            <Button
                backgroundColor='white'
                marginRight='15px'
                _hover={{
                    bg: '#0C111D',
                    color: '#FFFFFF'
                }}
            >
                Cancel
            </Button>
            <Button
                backgroundColor='#182230'
                color='#FFFFFF'
                _hover={{
                    bg: '#0C111D',
                    color: '#FFFFFF'
                }}
            >
                Save
            </Button>
        </Box>
    )
}

export default Actions;