import { Text, Image, Flex } from '@chakra-ui/react';
import logo from './logo.png';
import { FC } from 'react';

const LogoComponent: FC = () => {
    return (
        <Flex
            gap='10.5px'
            alignItems='center'
            height='32px'
            padding='0 var(--spacing-2xl, 24px) 0 var(--spacing-3xl, 24px)'
        >
            <Image
                src={logo}
                alt='Logo'
                boxSize='32px'
                objectFit='contain'
                flexShrink='0'
            />
            <Text
                color='#5A5A5A'
                fontFamily='Inter'
                fontSize='8.023px'
                fontStyle='normal'
                fontWeight={500}
                lineHeight='92%'
                letterSpacing='2.292px'
                paddingLeft='25px'
                height='32px'
                display='flex'
                alignItems='center'
            >
                SOULDIS
            </Text>
        </Flex>
    )
}

export default LogoComponent;