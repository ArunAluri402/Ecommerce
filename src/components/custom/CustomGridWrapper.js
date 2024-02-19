import { Grid } from '@mui/material'
import React from 'react'
import { Constants } from '../../utils/common/Constants'

const CustomGridWrapper = ({ noOfParts, children }) => {
    return (<Grid container spacing={2}>
        <Grid item sx={{ overflow: "hidden", }} xs={noOfParts}>
            {children}
        </Grid>
    </Grid>

    )
}

export default CustomGridWrapper