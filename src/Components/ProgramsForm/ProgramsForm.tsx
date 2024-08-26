import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Title from './Elements/Title';
import Form from './Form/Form';

const ProgramsForm: FC = () => {
    return (
        <Box
            width='100%'
            height='90%'
            padding='var(--spacing-lg, 12px) var(--spacing-lg, 12px) var(--spacing-lg, 12px) var(--spacing-none, 0px)'
            bg='#FCFCFD'
        >
            <Box
                height='100%'
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                gap='32px'
                flex='1 0 0'
                alignSelf='stretch'
                borderRadius='16px'
                backgroundColor='#FFF'
                margin='14px 0 48px 0'
                padding='var(--spacing-none, 0px) var(--container-padding-desktop, 32px)'
                boxShadow='0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
            >
                <Title />
                <Form />
            </Box>
        </Box>
    );
};

export default ProgramsForm;