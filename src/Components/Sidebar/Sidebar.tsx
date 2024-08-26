import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import CreateButton from './Elements/CreateButton';
import LogoComponent from './Elements/LogoComponent';
import Menu from './Elements/Menu';

const Sidebar = () => {
    return (
        <Box
            as='nav'
            width='240px'
            bg='#FCFCFD'
            color='#344054'
            minHeight='100vh'
            paddingTop='var(--spacing-4xl, 32px)'
            gap='var(--spacing-3xl, 24px)'
        >
            <VStack
                spacing='6'
                align='start'
            >
                <LogoComponent />
                <CreateButton />
                <Menu />
            </VStack>
        </Box>
    );
};

export default Sidebar;