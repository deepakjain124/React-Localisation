import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/InputBase";
import { getThemeProps } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

const CalenderControl =(props) => {
  const defaultStyle = {
    outline:'none',
    width: "125px",
    marginLeft:'10px',
    marginRight:'10px',
    marginTop:'2px',
    height:'22px',
    backgroundColor: "rgb(255, 255, 255)",
    color: "black",
      "& .MuiOutlinedInput-input": {
        padding:"0px 0px 0px 0px"
      }
    };
  const useStyles = makeStyles({ 
    field: defaultStyle,
    custom: props.style ? props.style : "",
    
  });
  const classes = useStyles()
  return (
    <>
      <label className={classes.labelMargin}>{props.label}</label>
      <TextField className = {clsx(classes.field,classes.custom)}
        inputProps={{ style: { outline: 'none', fontSize: 11, disableUnderline: true } }}
        name = {props.name}
        type="date"
        variant="outlined"
        pointer='cursor'
        disableUnderline
        onChange = {props.onChange} 
        value = {props.value}
      />
    </>
  );
}

export default CalenderControl;
