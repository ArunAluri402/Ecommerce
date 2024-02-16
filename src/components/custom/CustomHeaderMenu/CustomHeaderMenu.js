import { Grid, Typography } from '@mui/material'
import React from 'react'
import './CustomHeaderMenu.css'

const CustomHeaderMenu = ({ images, onClickHeaderMenuIcons }) => {
    return (
        <Grid item xs={12} className='header_menu_flex' >
            {
                images?.map((img) => <Grid item className='header_menu_inside_flex' >
                    <img onClick={()=>onClickHeaderMenuIcons(img)} className='header_menu_images' src={img?.image} alt={img.imageName} />
                    <Typography>{img?.name}</Typography>
                </Grid>)
            }
        </Grid>
    )
}

export default CustomHeaderMenu