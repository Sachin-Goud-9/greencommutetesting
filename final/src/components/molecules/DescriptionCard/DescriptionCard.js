import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import customtheme from '../../theme.jsx';
import {ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const DescriptionCard= ({ head,body}) => {

 return (
     <div>
    <ThemeProvider theme={customtheme}>
        <Typography  variant="h2" data-testid = "headtypographyindescriptioncard">{head}</Typography>
        <Typography  variant="h1" data-testid = "bodytypographyindescriptioncard">{body}</Typography>
     </ThemeProvider>
     </div>
 )

}
export default DescriptionCard