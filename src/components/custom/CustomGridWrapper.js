import { Grid } from '@mui/material'
import React from 'react'
import { Constants } from '../../utils/common/Constants'

const CustomGridWrapper = ({ noOfParts, children }) => {
    return (<Grid container>
        <Grid item sx={{ overflow: "hidden", backgroundColor: Constants?.colors?.darks?.main }} xs={noOfParts}>
            {children}
        </Grid>
    </Grid>

    )
}

export default CustomGridWrapper