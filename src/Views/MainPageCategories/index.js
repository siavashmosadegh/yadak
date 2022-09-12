import { Grid } from '@mui/material';
import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Root } from './styles';
import GeneralActions from '../../Redux/General/Actions';
import { CircularProgress } from '@mui/material';
import {Loader} from '../../Shared/Loader/styles.jsx';
import img1 from "../../Assets/images/1.png";
import img2 from "../../Assets/images/2.png";


const MainPageCategories = () => {

    // const [items, setItems] = useState([]);

    const dispatch = useDispatch();

    const {
        mainPageCategoriesItems,
        loading
    } = useSelector((state) => state.General);
    
    useEffect(() => {
        dispatch(GeneralActions.getItems({}));
    },[]);

    console.log(mainPageCategoriesItems);

    // useEffect(() => {
    //     setItems(mainPageCategoriesItems);
    // })

    // useEffect(() => {
    //     console.log(items);
    // });

    const ContentCreator = () => {
        if (loading === true) {
            return <Loader />
        } else {
            if (mainPageCategoriesItems !== null) {
                return (
                    mainPageCategoriesItems.map( (item, index) => {
                        console.log(item);
                        if (item !== null) {
                            return (
                                <Grid sx={{border: '1px solid blue',color: 'black'}} item lg={2} md={4} sm={6} xs={12}>
                                    <img src="../../Assets/images/1.png" />
                                    {item.title}
                                </Grid>
                            );
                        }
                    })
                );
            }
        }
    }
    
    return (
        <Root>
            <h3>دسته بندی های لوازم یدکی</h3>

            <Grid container>
                {ContentCreator()}
            </Grid>
        </Root>
    );
}

export default MainPageCategories;