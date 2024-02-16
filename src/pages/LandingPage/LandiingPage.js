import React from 'react'
import ImageCardComponent from '../../components/common/CardComponent'
import { brandImages, itemImages } from '../../utils/custom/Images'
import CustomGridWrapper from '../../components/custom/CustomGridWrapper'
import { Grid } from '@mui/material'
import CustomHeader from '../../components/custom/CustomHeader/CustomHeader'
import CompanyLogo from '../../assets/icons/logo.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Person from '../../assets/icons/person.svg';
import Bag from '../../assets/icons/bag.svg';
import { useNavigate } from 'react-router-dom'
import { routerEndPoints } from '../../router'


const LandiingPage = () => {
  const navigate = useNavigate();

  const cardTypes = ["productBox", "bigSquare", "smallSquare", "mediumSquare", "brandImage"]

  const customHeaderStyles = {
    maxWidth: "1320px",
    maxHeight: "113px",
    margin: "auto"
  }
  const onSearchImageClick = () => {

  }

  const onClickHeaderMenuIcons = (img) => {
    if (img?.name === "Account") {
      navigate(routerEndPoints?.myAccount)
    } else if (img?.name === "Shopping") {
      navigate(routerEndPoints?.shoppingCartPage)
    }else{
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

  return (
    <Grid item xs={12}>
      <CustomHeader onClickHeaderMenuIcons={onClickHeaderMenuIcons} images={ImageArray} onSearchImageClick={onSearchImageClick} SearchIcon={SearchIcon} styles={customHeaderStyles} companyLogo={CompanyLogo} />
    </Grid>
  )
}

export default LandiingPage;