import React, { useEffect, useState } from 'react'
import { brandImages, itemImages, zaraImages } from '../../utils/custom/Images'
import CustomGridWrapper from '../../components/custom/CustomGridWrapper'
import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import CompanyLogo from '../../assets/icons/logo.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Person from '../../assets/icons/person.svg';
import Bag from '../../assets/icons/bag.svg';
import { useNavigate } from 'react-router-dom'
import { routerEndPoints } from '../../router'
import './LandiingPage.css';
import CustomWebsiteHeader from '../../components/custom/CustomWebsiteHeader/CustomWebsiteHeader'
import ImageCardComponent from '../../components/common/CardComponent';
import { newsLetterProductsJson } from '../../JSON/Products';
import CustomTabComponent from '../../components/custom/CustomTabComponent/CustomTabComponent';
import { menuListHeader } from '../../JSON/MenuList';
import axios from 'axios';



const LandiingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const cardTypes = ["productBox", "bigSquare", "smallSquare", "mediumSquare", "brandImage"];
  const [activeTab, setActiveTab] = useState(0)
  const [clickedMenuListItem, setClickedMenuListItem] = useState({
    id: 0,
    name: ""
  })
  const [searchIconClicked, setSearchIconCliked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setMenuClicked(!menuClicked)
  }

  const customHeaderStyles = {
    maxWidth: "1320px",
    maxHeight: "113px",
    margin: "auto"
  }
  const onSearchImageClick = () => {
    setSearchIconCliked(!searchIconClicked)
  }

  const onClickHeaderMenuIcons = (img) => {
    if (img?.name === "Account") {
      navigate(routerEndPoints?.myAccount)
    } else if (img?.name === "Shopping") {
      navigate(routerEndPoints?.shoppingCartPage)
    } else {
      navigate("/")
    }
  }

  const ImageArray = [{
    id: 1,
    image: Person,
    imageName: "person",
    name: "Account"
  }, {
    id: 2,
    image: Bag,
    imageName: "Bag",
    name: "Shopping"
  }]

  const brandImagesArray = [
    {
      id: 1,
      image: brandImages?.brand?.brandImage1,
    },
    {
      id: 2,
      image: brandImages?.brand?.brandImage2,
    },
    {
      id: 3,
      image: brandImages?.brand?.brandImage3,
    },
    {
      id: 4,
      image: brandImages?.brand?.brandImage4,
    },
    {
      id: 5,
      image: brandImages?.brand?.brandImage5,
    }
  ]
  const handleTabChange = (event, index) => {
    console.log(index, "obj")
    setActiveTab(index)
  };
  const handleChangeIndex = (index) => {
    setActiveTab(index);
  };
  const onClickMenuList = (item) => {
    setClickedMenuListItem(item)
  }

  const naviagteThroughTabs = (item) => {

  }
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    const req = await axios.get("https://fakestoreapi.com/products/category/jewelery")
    setProducts(req?.data)
  }

  return (
    <Grid item xs={12}>
      <CustomWebsiteHeader setClickedMenuListItem={setClickedMenuListItem} onClickMenuList={onClickMenuList} CompanyLogo={CompanyLogo} ImageArray={ImageArray} SearchIcon={SearchIcon} customHeaderStyles={customHeaderStyles} handleMenuClicked={handleMenuClicked} isMobile={isMobile} menuClicked={menuClicked} menuListHeader={menuListHeader} onClickHeaderMenuIcons={onClickHeaderMenuIcons} onSearchImageClick={onSearchImageClick} searchIconClicked={searchIconClicked} />

      {clickedMenuListItem?.id === 0 ? <>
        <CustomGridWrapper noOfParts={12} children={<>
          <Grid className='hero_section' item xs={12}>
            <Grid item className='hero_section_top'>
              <Typography mb={5} variant='h2'>Collections</Typography>
              <Typography mb={3} variant='h5'>you can explore ans shop many differnt collection <br />
                from various barands here.</Typography>
              <Button sx={{ backgroundColor: "#ccc", color: "#000", padding: "10px 25px", display: "flex", alignItems: "center" }} startIcon={<img src={Bag} />}>Shop Now</Button>
            </Grid>
            <Grid item className='container'>
              <img className='hero_img' src={itemImages?.items?.item15} />
            </Grid>

          </Grid>
        </>} />

        <CustomGridWrapper noOfParts={12} className={"brandGrid"} children={<>
          {
            brandImagesArray?.map((item) => {
              return <ImageCardComponent type={cardTypes[4]} key={item?.id} source={item?.image} />
            })
          }
        </>} />

        <CustomGridWrapper noOfParts={12} className={"landing_category_grid"} children={<>
          <Grid item className='landing_category_grid_container'>
            <Typography textAlign={"center"} sx={{ textOrientation: 'sideways', writingMode: 'vertical-rl' }} className='landing_category_grid_text' textTransform={"uppercase"} variant='h4'>Explore new and popular styles</Typography>
            <ImageCardComponent type={cardTypes[1]} source={itemImages?.items?.item16} />
            <Grid item className='gird'>
              <ImageCardComponent type={cardTypes[3]} source={itemImages?.items?.item20} />
              <ImageCardComponent type={cardTypes[3]} source={itemImages?.items?.item18} />
              <ImageCardComponent type={cardTypes[3]} source={itemImages?.items?.item17} />
              <ImageCardComponent type={cardTypes[3]} source={itemImages?.items?.item19} />
            </Grid>
          </Grid>
        </>} />
        <CustomGridWrapper noOfParts={12} className={"newsLetter"} children={<>
          <Typography mb={2} textAlign={"center"} textTransform={"capitalize"} variant='h3'>Or subscribe to the newsletter</Typography>
          <CustomTabComponent ContentType={"Grid"} handleChangeIndex={handleChangeIndex} handleChange={handleTabChange} value={activeTab} TabArray={newsLetterProductsJson} gridColumns={3} className={"product_grid"} />
        </>} />
        <CustomGridWrapper noOfParts={12} className={"zara_container"} children={<>
          <Grid item xs={12} >
            <Grid className='zara_image_container'>
              <img src={zaraImages?.character} />
              <img src={zaraImages?.logo} className='zara_logo' />
            </Grid>

            <Grid item className='zara_content'>
              <img src={zaraImages?.logo2} className='zara_logo2' />
              <Typography color={"#fff"} padding={"15px 0"} maxWidth={"504px"} variant='h6'>Lustrous yet understated. The new evening<br />
                wear collection exclusively offered at the<br />
                reopened Giorgio Armani boutique in Los<br />
                Angeles.</Typography>
              <Button variant='contained' sx={{ backgroundColor: "#fff", borderRadius: 0, color: "#000", textTransform: 'capitalize' }}>See Collection</Button>
            </Grid>
          </Grid>
        </>} />
      </> :
        menuListHeader?.filter((item) => item?.id === clickedMenuListItem?.id)?.map((item) => <CustomGridWrapper noOfParts={12} children={<>{
          item?.products?.map((image) => <ImageCardComponent type={"brandImage"} source={image?.image} />)
        }

        </>} />)
      }

      <CustomGridWrapper noOfParts={12} className={"product_grid"} children={<>{
        products?.map((image) => <ImageCardComponent type={"productBox"} source={image?.image} />)
      }

      </>} />
    </Grid >
  )
}

export default LandiingPage;