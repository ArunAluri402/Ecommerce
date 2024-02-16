import { Grid } from '@mui/material'
import React from 'react'
import './CustomSearchBar.css'

const CustomSearchBar = ({SearchIcon, onSearchImageClick}) => {
    return (
        <Grid item xs={12} >
            <img onClick={onSearchImageClick} className='search_icon' src={SearchIcon} alt='search-Icon' />
        </Grid>
    )
}

export default CustomSearchBar