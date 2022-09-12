import { ThemeProvider } from '@mui/material';
import React from 'react';
import Header from '../../Views/Main/Header';
import MainPageCarousel from '../../Views/Main/MainPageCarousel';
import MainPageCategories from '../../Views/MainPageCategories';

const Main = () => {
    return (
        <>
            <Header />

            <MainPageCarousel />

            <MainPageCategories />
        </>
    );
}

export default Main;