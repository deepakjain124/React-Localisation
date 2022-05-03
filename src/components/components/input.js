import React from "react";
import clsx from "clsx";
import { makeStyles, TextField } from "@material-ui/core";
//import cls from './theme.css';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";

const TextInput = (props) => {
  console.log("tjis uis props",props);
  const hasStyles = props.style ? true : false;
  let customStyle = props.style ? props.style : "";
  const hasLabelStyles = props.labelStyle ? true : false;
  let customLabelStyle = props.labelStyle ? props.labelStyle : "";

  let defaultStyle = {
    outline: "none",
    border: "none",
    color: "black",
    backgroundColor: "white",
    marginTop: "2px",
    marginBottom: "2px",
    width: "70px",
    "& .MuiInputBase-root": {
      height: customStyle.height ? customStyle.height : "22px",
      color: customStyle.color ? customStyle.color : "black",
    },
    "&.MuiOutlinedInput-input": {
      padding: "0px 0px 0px 5px",
      top: "1px",
    },
    "&.MuiInputBase-root .Mui-disabled": {
      border: "none",
      outline: "none",
      backgroundColor: "lightDark",
    },
  };

  let invalidStyle = {
    border: "1px solid red",
    backgroundColor: "#fda49a",
  };

  const useStyles = makeStyles({
    style: defaultStyle,
    custom: customStyle,
    invalid: invalidStyle,
    customLabel: customLabelStyle,
  });
  const customClasses = useStyles();

  return (
    <>
      <TextField
        InputProps={{
          disableUnderline: true,
          inputProps: {
            style: {
              textAlign: customStyle.textAlign ? customStyle.textAlign : "left",
              fontSize: customStyle.fontSize ? customStyle.fontSize : "12px",
              fontSize: customStyle.fontSize ? customStyle.fontSize : "12px",
              fontWeight: customStyle.fontWeight ? customStyle.fontWeight : "",
            },
          },
        }}
        className={clsx(
          customClasses.style,
          { [customClasses.custom]: hasStyles },
          {
            [customClasses.invalid]:
              props.invalid && props.shouldValidate && props.touched,
          }
        )}
        variant="standard"
        DataTable={props.DataTable}
        DataColumn={props.DataColumn}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        style={props.style}
      />
    </>
  );
};
export default TextInput;
