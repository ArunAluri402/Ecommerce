import { Grid, TextField } from '@mui/material'
import React from 'react'
import './CustomSearchBar.css'

const CustomSearchBar = ({ SearchIcon, onSearchImageClick, clicked, placeholder }) => {
    return (
        <Grid item xs={12} className='search_flex' >
            <img onClick={onSearchImageClick} className='search_icon' src={SearchIcon} alt='search-Icon' />
            {clicked && <TextField placeholder={placeholder} variant='standard' size='small' fullWidth />}
        </Grid>
    )
}

export default CustomSearchBar