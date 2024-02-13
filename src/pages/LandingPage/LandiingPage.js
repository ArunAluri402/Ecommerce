import React from 'react'
import ImageCardComponent from '../../components/common/CardComponent'
import { brandImages, itemImages } from '../../utils/custom/Images'

const LandiingPage = () => {

  const cardTypes = ["productBox", "bigSquare", "smallSquare", "mediumSquare", "brandImage"]
  return (
    <div>
      <ImageCardComponent type={cardTypes[4]} source={brandImages?.brand?.brandImage2} />
      <ImageCardComponent type={cardTypes[3]} source={itemImages?.items?.item20} />
    </div >
  )
}

export default LandiingPage