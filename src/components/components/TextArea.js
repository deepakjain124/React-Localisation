import React from 'react';
import clsx from 'clsx';
import {makeStyles, TextField} from '@material-ui/core';


const TextInput = (props) => {
  const hasStyles = props.style ? true : false;
  let customStyle = props.style ? props.style : '';

  let defaultStyle = {
    outline: 'none',
    backgroundColor: 'white',
    marginTop: '2px',
    marginBottom: '2px',
    width: '70px',
    "& .MuiInputBase-root": {
      height: '22px'
  },
    "&:hover":{
      border:"none",
      outline:"none"
    }
  }
  let invalidStyle = {
    border: '1px solid red',
    backgroundColor: '#fda49a'
  }

  const useStyles = makeStyles({
    style : defaultStyle,
    custom: customStyle,
    invalid: invalidStyle

  })
  const customClasses = useStyles()
  
  return (
    <>
      <label>{props.label}</label>
      <TextField
        className = {clsx(customClasses.style, 
                    {[customClasses.custom]: hasStyles}, 
                    {[customClasses.invalid]: props.invalid && props.shouldValidate && props.touched})}
        variant = "outlined"
        multiline 
        rows={2}
        DataTable = {props.DataTable}
        DataColumn = {props.DataColumn}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled = {props.disabled}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        style={props.style}
      />
    </>
  )
}
export default TextInput;