import { Grid } from '@mui/material'
import React from 'react'

const CustomGridWrapper = ({ noOfParts, children, className }) => {
    return (<Grid className={className} container spacing={2}>
        <Grid className={className} item sx={{ overflow: "hidden", }} xs={noOfParts}>
            {children}
        </Grid>
    </Grid>

    )
}

export default CustomGridWrapper