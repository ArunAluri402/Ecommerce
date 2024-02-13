import React from 'react'
import { Constants } from '../../utils/common/Constants'

const ImageCardComponent = ({ source, type }) => {
    const styles = {
        width: type === Constants?.cardTypes[0] ? "312px"
            :
            type === Constants?.cardTypes[1] ? "648px"
                :
                (type === Constants?.cardTypes[2] || type === Constants?.cardTypes[4]) ? "200px"
                    :
                    "312px",
        height: type === Constants?.cardTypes[0] ? "400px"
            :
            type === Constants?.cardTypes[1] ? "648px"
                :
                type === Constants?.cardTypes[2] ? "200px"
                    :
                    type === Constants?.cardTypes[4] ? "70px"
                        : "312px",
        backgroundColor: Constants?.colors?.stroke?.default,
        boxSizing: 'border-box',
        objectFit: 'contain'
    }

    return (<>

        <div style={styles}>
            <img style={styles} src={source} />
        </div >

    </>

    )
}

export default ImageCardComponent