import React from 'react';
import { Flex , Box } from '@chakra-ui/react';
import HeaderInputForm from '../Forms/HeaderInputForm';
import BasketAndRegisterLogin from './BasketAndRegisterLogin';

const Header = () => {
    return (
        <Flex w="100%" h="100px">
            <Box w="50%">
                <BasketAndRegisterLogin />
            </Box>

            <Box w="50%">
                <HeaderInputForm />
            </Box>
        </Flex>
    );  
}

export default Header;