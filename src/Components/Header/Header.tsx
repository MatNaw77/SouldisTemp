import { FC } from 'react';
import { Box, Text, Icon, Flex, Image } from '@chakra-ui/react';
import { IoSettingsOutline, IoChatboxOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';
import avatar from './avatar.png'

const Header: FC = () => {
    return (
        <Box
            width='100%'
            bg='#FCFCFD'
            color='#344054'
            height='76px'
            padding='12px 32px 0 32px'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <Box>
                <Text
                    color='#101828'
                    fontFamily='Inter'
                    fontSize='24px'
                    fontStyle='normal'
                    fontWeight={600}
                    lineHeight='32px'
                >
                    Programs
                </Text>
                <Text
                    color='#363F72'
                    fontFamily='Inter'
                    fontSize='16px'
                    fontStyle='normal'
                    fontWeight={400}
                    lineHeight='24px'
                >
                    The best way to deliver your treatments.
                </Text>
            </Box>

            <Flex gap='20px' alignItems='center'>
                <Icon as={IoSettingsOutline} boxSize='20px' />
                <Icon as={IoChatboxOutline} boxSize='20px' />
                <Icon as={FaRegBell} boxSize='20px' />
                <Image
                    src={avatar}
                    alt='avatar'
                    boxSize='40px'
                    objectFit='contain'
                    flexShrink='0'
                />
            </Flex>
        </Box>
    );
}

export default Header;