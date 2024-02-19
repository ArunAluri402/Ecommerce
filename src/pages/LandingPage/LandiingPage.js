import React, { useState } from 'react'
import ImageCardComponent from '../../components/common/CardComponent'
import { brandImages, itemImages } from '../../utils/custom/Images'
import CustomGridWrapper from '../../components/custom/CustomGridWrapper'
import { Button, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import CustomHeader from '../../components/custom/CustomHeader/CustomHeader'
import CompanyLogo from '../../assets/icons/logo.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Person from '../../assets/icons/person.svg';
import Bag from '../../assets/icons/bag.svg';
import { useNavigate } from 'react-router-dom'
import { routerEndPoints } from '../../router'
import './LandiingPage.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const LandiingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const cardTypes = ["productBox", "bigSquare", "smallSquare", "mediumSquare", "brandImage"]

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

  const menuListHeader = [
    {
      id: 1,
      name: "Jwellery & Accessories",
    },
    {
      id: 2,
      name: "Clothing & Shoes",
    },
    {
      id: 3,
      name: "Home & Living",
    },
    {
      id: 4,
      name: "Wedding & Party",
    },
    {
      id: 5,
      name: "Toys & Entertainment",
    },
    {
      id: 6,
      name: "Art & Collectibles",
    },
    {
      id: 7,
      name: "Craft Supplies & Tools",
    }
  ]

  return (
    <Grid item xs={12}>
      <CustomHeader isMobile={isMobile} placeholder={"Search here ...."} clicked={searchIconClicked} onClickHeaderMenuIcons={onClickHeaderMenuIcons} images={ImageArray} onSearchImageClick={onSearchImageClick} SearchIcon={SearchIcon} styles={customHeaderStyles} companyLogo={CompanyLogo} />
      <Grid item xs={9} margin={"auto"}>
        <Divider sx={{ maxWidth: "1320px", pt: isMobile ? "10px" : "20px", margin: "auto" }} />
      </Grid>
      <CustomGridWrapper noOfParts={12} children={<>
        {
          !isMobile
            ?
            <>
              <Grid className='menuList_header' item xs={12}>
                {
                  menuListHeader?.map((item) => {
                    return (<Typography className='menuList_header_items'>
                      {item?.name}
                    </Typography>)
                  })
                }
              </Grid>
            </>
            :
            <>
              <Grid onClick={handleMenuClicked} className='mobile_header_menu' item xs={12}>
                <Typography variant='h6' textAlign={"center"}>Menu</Typography> <ArrowDropDownIcon sx={{ transform: menuClicked ? 'rotate(180deg)' : 'inherit', transition: ' 0.3s ease all' }} />
              </Grid>
              {menuClicked &&
                menuListHeader?.map((item) => {
                  return (<Typography variant='body2' fontWeight={700} borderBottom={'2px solid #fff'} textAlign={'center'} className='menuList_header_items'>
                    {item?.name}
                  </Typography>)
                })
              }

            </>
        }
      </>} />
      <CustomGridWrapper noOfParts={12} children={<>
        <Grid className='hero_section' item xs={12}>
          <Typography variant='h3'>Collections</Typography>
          <Typography variant='h6'>you can explore ans shop many differnt collection <br />
            from various barands here.</Typography>
          <Grid item xs={1.5} sx={{ backgroundColor: "#ccc", padding: "10px 25px", cursor: 'pointer', display: "flex", alignItems: "center" }}>
            <img src={Bag} />
            <Typography variant='body1'>Shop Now</Typography>
          </Grid>
        </Grid>
      </>} />
    </Grid>
  )
}

export default LandiingPage;