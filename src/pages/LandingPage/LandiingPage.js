import React from 'react'
import ImageCardComponent from '../../components/common/CardComponent'
import { brandImages, itemImages } from '../../utils/custom/Images'
import CustomGridWrapper from '../../components/custom/CustomGridWrapper'
import { Grid } from '@mui/material'

const LandiingPage = () => {

  const cardTypes = ["productBox", "bigSquare", "smallSquare", "mediumSquare", "brandImage"]
  const children = {
    node1: <ImageCardComponent type={cardTypes[4]} source={brandImages?.brand?.brandImage2} />,
    node2: <ImageCardComponent type={cardTypes[3]} source={itemImages?.items?.item20} />
  }

  return (
    <Grid item xs={12}>
      <CustomGridWrapper noOfParts={3} children={children?.node1} />
      <CustomGridWrapper noOfParts={4} children={children?.node2} />
    </Grid>
  )
}

export default LandiingPage;