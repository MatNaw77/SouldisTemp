import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import MenuElement from './MenuElement';
import { IoHomeOutline, IoPeopleOutline, IoPeopleSharp, IoClipboardOutline, IoClipboardSharp, IoFlaskOutline, IoFlaskSharp, IoBookOutline, IoBook, IoPlayOutline, IoPlaySharp } from "react-icons/io5";
import { FaHome, FaCalendar, FaRegCalendar  } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { ImBooks } from "react-icons/im";
import { PiCertificate, PiCertificateFill  } from "react-icons/pi";

const Menu: FC = () => {
    return (
        <Flex
            paddingRight="16px"
            flexDirection="column"
            width="240px"
            alignItems="flex-start"
            gap="4px"
            alignSelf="stretch"
        >
            <MenuElement icon={IoHomeOutline} hoverIcon={FaHome} text='Home' />
            <MenuElement icon={FaRegCalendar} hoverIcon={FaCalendar} text='Calendar' />
            <MenuElement icon={IoPeopleOutline} hoverIcon={IoPeopleSharp} text='Patients' />
            <MenuElement icon={TbBooks} hoverIcon={ImBooks} text='Maunals' />
            <MenuElement icon={IoClipboardOutline} hoverIcon={IoClipboardSharp } text='Questionnaires' />
            <MenuElement icon={PiCertificate} hoverIcon={PiCertificateFill } text='Assignments' />
            <MenuElement icon={IoFlaskOutline} hoverIcon={IoFlaskSharp} text='Experiments' />
            <MenuElement icon={IoBookOutline} hoverIcon={IoBook} text='Readings' />
            <MenuElement icon={IoPlayOutline} hoverIcon={IoPlaySharp} text='Videos' />
        </Flex>
    )
}

export default Menu;