import React from 'react';
import { Box } from '@chakra-ui/react';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import ProgramsForm from './Components/ProgramsForm/ProgramsForm';

function App() {
    return (
        <Box display="flex">
            <Sidebar />
            <Box width='100%'>           
                <Header />
                <ProgramsForm />
            </Box> 
        </Box>
    );
}

export default App;
