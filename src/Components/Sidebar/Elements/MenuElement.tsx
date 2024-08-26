import { Text, Link, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { IconType } from 'react-icons';

interface Props {
    icon: IconType,
    hoverIcon: IconType,
    text: String,
}

const MenuElement = ({ icon, hoverIcon, text }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={''}
            padding='8px 12px 8px 26px'
            width='224px'
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
            gap='12px'
            flex='1 0 0'
            borderRadius='0px 6px 6px 0px'
            _hover={{
                bg: '#0C111D',
                color: '#FFFFFF',
                textDecoration: 'none', // Remove underline on hover
            }}
            variant='ghost'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            color={isHovered ? '#FFFFFF' : 'black'}
            fontWeight='normal'
            fontFamily='Inter'
            fontSize='16px'
            lineHeight='24px'
        >
            <Icon 
                as={isHovered ? hoverIcon : icon} 
                color={isHovered ? '#4E5BA6' : 'black'}
                boxSize={25} 
            />
            <Text
                fontFamily='Inter'
                fontSize='16px'
                fontStyle='normal'
                color={isHovered ? '#FFFFFF' : '#344054'}
                fontWeight={500}
                lineHeight='24px'
            >
                {text}
            </Text>
        </Link>
    )
}

export default MenuElement;
