// This is our code



import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

 const CheckboxWithGreenCheck = withStyles({
    root: {
        color: "#5ac568",
        "&$checked": {
          color: "white",                 
          "& .MuiIconButton-label": {
            position: "relative",
            zIndex: 0
          },
          "& .MuiIconButton-label:after": {
            content: '""',
            // left: 2,
            //top: 0.5,
            // right: 2,
            // bottom: 1,
            height: 17,
            width: 17,            
            position: "absolute",
            backgroundColor: "#5ac568",
            zIndex: -2,
            border: "2px solid #5ac568",
            borderRadius: "3px"
          }
        }
      },
     checked :{},
      onChange :{},
      name :{},

  
})(Checkbox);
export default CheckboxWithGreenCheck;








// This is Hima Sais Code



// import React from "react";
// import Checkbox from "@material-ui/core/Checkbox";
// import PropTypes from "prop-types";
// import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";

// function DefaultCheckBox(props) {
//   const { color, checked, handleChange, ...rest } = props;

//   return (
//     <>
//       <Checkbox
//         checked={checked}
//         onChange={handleChange}
//         color={color}
//         checkedIcon={<CheckBoxOutlinedIcon />}
//         {...rest}
//       />
//     </>
//   );
// }

// DefaultCheckBox.propTypes = {
//   checked: PropTypes.bool,
//   handleChange: PropTypes.func,
//   color: PropTypes.oneOf(["default", "primary", "secondary"]),
// };

// DefaultCheckBox.defaultProps = {
//   color: "primary",
// };

// export default DefaultCheckBox;
