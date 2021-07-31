import React from 'react'
import Typography from '@material-ui/core/Typography'

const MyTypography = ({children, styles,...rest}) => {
    return (
        <Typography data-testid = "typographyComponent" style={styles} {...rest}> {children} </Typography>
    );
}

export default MyTypography
