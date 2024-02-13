import React from 'react'
import { Constants } from '../../utils/common/Constants'

const CardComponent = ({ children, type }) => {
    return (<>
        {
            type === Constants?.cardTypes[0]
                ?
                <div style={{ backgroundColor: "red", height: "200px", width: "200px" }}>{children}
                </div>
                :
                <div style={{ backgroundColor: "blue", height: "400px", width: "312px" }}>
                    {children}
                </div>
        }
    </>

    )
}

export default CardComponent