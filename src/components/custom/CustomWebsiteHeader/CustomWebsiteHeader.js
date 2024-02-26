import React from 'react'
import CustomHeader from '../CustomHeader/CustomHeader'
import { Divider, Grid, Typography } from '@mui/material'
import CustomGridWrapper from '../CustomGridWrapper'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomWebsiteHeader = ({ onClickMenuList, isMobile, searchIconClicked, onClickHeaderMenuIcons, ImageArray, onSearchImageClick, SearchIcon, customHeaderStyles, CompanyLogo, menuListHeader, handleMenuClicked, menuClicked }) => {
    return (<>
        <CustomHeader isMobile={isMobile} placeholder={"Search here ...."} clicked={searchIconClicked} onClickHeaderMenuIcons={onClickHeaderMenuIcons} images={ImageArray} onSearchImageClick={onSearchImageClick} SearchIcon={SearchIcon} styles={customHeaderStyles} companyLogo={CompanyLogo} />
        <Grid item xs={9} margin={"auto"}>
            <Divider sx={{ maxWidth: "1320px", pt: isMobile ? "10px" : "20px", margin: "auto" }} />
        </Grid>
        <CustomGridWrapper className={"menuList_header_container"} noOfParts={12} children={<>
            {
                !isMobile
                    ?
                    <>
                        <Grid className='menuList_header' item xs={12}>
                            {
                                menuListHeader?.map((item) => {
                                    return (<Typography onClick={() => { onClickMenuList(item)}}className='menuList_header_items'>
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
                                return (<Typography onClick={() => { onClickMenuList(item?.id)}} variant='body2' fontWeight={700} borderBottom={'2px solid #fff'} textAlign={'center'} className='menuList_header_items'>
                                    {item?.name}
                                </Typography>)
                            })
                        }

                    </>
            }
        </>} />
    </>
    )
}

export default CustomWebsiteHeader