import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import customtheme from "../../theme";
import { Typography  } from "@material-ui/core";

const Mybutton = ({variant,text,color,onClick}) => {
  console.log({color});
  return (
    <ThemeProvider theme={customtheme}>
      <Button data-testId='button' color={color} variant={variant} onClick={onClick}>
        {text}
      </Button>
     
    </ThemeProvider>
  );
};

export default Mybutton;





//This is HimaSai's Code



// import React from 'react';
// import Button from '@material-ui/core/Button';

// function CustomButton({variant,color,label,onClick,endIcon,testId,size}){
//       return(
//         <Button variant={variant} color={color} onClick={onClick} data-testId={testId} size={size} fullWidth data-testId='button'>{label}{endIcon}</Button>
//     );
// }

// export default CustomButton;