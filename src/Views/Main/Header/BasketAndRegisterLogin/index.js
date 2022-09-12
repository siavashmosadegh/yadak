import { Box, Center, Flex } from '@chakra-ui/layout';
import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { HexToRgba } from '../../../../Util/HexToRgba';

const BasketAndRegisterLogin = () => {

    const color = HexToRgba("#808080",0.4);

    return (
        <Flex w="auto" align="center" h="100%" paddingLeft="7">
            <ShoppingBasketOutlinedIcon sx={{ fontSize: 40 }} />

            <Center width="170px" height="50px" border={`1px solid ${color}`} borderRadius="5px" marginLeft="2">
                <LoginIcon />

                <Flex marginLeft="3" justify="center">
                    {"ورود | ثبت نام"}
                </Flex>
            </Center>
        </Flex>
    );
}

export default BasketAndRegisterLogin;