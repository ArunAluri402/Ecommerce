import { Box, Tab, Tabs, Typography, useTheme } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import ProductGridLayout from '../../../Layout/common/ProductGridLayout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const CustomTabComponent = ({ TabArray, value, handleChange, handleChangeIndex, gridColumns, className, ContentType }) => {
  const theme = useTheme();
  const [productArray, setProductArray] = useState([]);
  useEffect(() => {
    filteredArray();
  }, [handleChange])

  const filteredArray = () => {
    const array = TabArray?.filter((item) => item?.id === value + 1)
    setProductArray(array)
  }
  console.log(productArray?.[0]?.products, value, "obj")
  return (
    <>

      <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="inherit" variant="scrollable">
        {
          TabArray?.map((tabs) => {
            return <Tab label={tabs?.category} />
          })
        }
      </Tabs>
      <TabPanel value={value} index={value} dir={theme.direction}>

        <ProductGridLayout ContentType={ContentType} gridColumns={gridColumns} productsArray={productArray?.[0]?.products} className={className} />

      </TabPanel>



    </>
  )
}

export default CustomTabComponent 