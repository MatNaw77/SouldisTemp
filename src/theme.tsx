import { defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';

const Button = defineStyleConfig({
    baseStyle: {
        colorScheme: 'teal',
        variant: 'solid',
        size: 'md',
        borderRadius: 'full',
        border: '0.6px solid #0C111D',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        padding: '10px 16px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '24px',
        color: '#0C111D',
    },
})

const Input = defineStyleConfig({
    baseStyle: {
        color: 'var(--colors-text-text-secondary-700, #344054)',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '20px',

    },
})

const Textarea = defineStyleConfig({
    baseStyle: {
        color: 'var(--colors-text-text-secondary-700, #344054)',
        fontFamily: 'Inter',
        fontSize: '14px',
        borderRadius: '8px',
        border: '1px solid #D0D5DD',
        background: '#FFF',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    },
})


const theme = extendTheme({
    components: {
        Button: Button,
        Input,
        Textarea
    },
});

export default theme;