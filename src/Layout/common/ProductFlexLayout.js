import { Grid, Typography } from '@mui/material'
import React from 'react'
import ImageCardComponent from '../../components/common/CardComponent'

const ProductFlexLayout = ({ productsArray, gridColumns, className }) => {
    return (
        <Grid item xs={gridColumns} className={className}>
            {
                productsArray?.map((item) => {
                    return <>
                        <Grid item display={"flex"} flexDirection={"column"} >
                            <ImageCardComponent source={item?.image} type={"productBox"} />
                            <Typography variant='subtitle2' padding={"10px 5px"}>{item?.name}</Typography>
                            <Grid marginBottom={"10px"} item padding={"5px"} display={'flex'} alignItems={"center"} justifyContent={"space-between"}>
                                <Typography color={"#aaa"}>{item?.type}</Typography>
                                <Typography fontWeight={500}>{item?.price}</Typography>
                            </Grid>
                        </Grid>
                    </>

                })
            }
        </Grid>
    )
}

export default ProductFlexLayout