import { Grid } from '@mui/material'
import React from 'react'
import './CustomHeader.css'
import CustomSearchBar from '../CustomSearchBar/CustomSearchBar'
import CustomHeaderMenu from '../CustomHeaderMenu/CustomHeaderMenu'
import { useNavigate } from 'react-router-dom'

const CustomHeader = ({ styles, companyLogo, SearchIcon, onSearchImageClick, images, onClickHeaderMenuIcons }) => {
    const navigate = useNavigate()

    const onCompanyLogoClick = () => {
        navigate("/")
    }

    return (
        <Grid container sx={styles}>
            <Grid item xs={12} className='header_flex_container'>
                <CustomSearchBar onSearchImageClick={onSearchImageClick} SearchIcon={SearchIcon} />
                <img onClick={onCompanyLogoClick} className='company_logo' src={companyLogo} alt='compant-logo' />
                <CustomHeaderMenu onClickHeaderMenuIcons={onClickHeaderMenuIcons} images={images} />
            </Grid>
        </Grid>
    )
}

export default CustomHeader