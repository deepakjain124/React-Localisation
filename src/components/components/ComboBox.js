import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/NativeSelect";
//import  './theme.css';
import { mergeClasses } from "@material-ui/styles";

const SelectComp = (props) => {
  const hasStyles = props.style ? true : false;
  let customStyle = props.style ? props.style : "";

  let invalidStyle = {
    border: "1px solid red",
    backgroundColor: "#fda49a",
  };

  let iconStyle = {
    " & .MuiNativeSelect-icon": {
      top: "0",
    },
  };

  let defaultStyle = {
    textAlign: "center",
    backgroundColor: "#fff",
    width: "70px",
    fontSize: "11px",
    height: customStyle.height ? customStyle.height : "21px",
    outline: "none",
    border: "none",
    "& .MuiSvgIcon-root": {
      color: "rgb(255, 255, 255)",
      backgroundColor: "#95B3D7",
      height: customStyle.height ? customStyle.height : "21px",
    },
    "& .MuiNativeSelect-select": {
      padding: "0",
      fontSize: customStyle.fontSize ? customStyle.fontSize : "12px",
    },
    border: "1 soild #fff",
  };

  let defaultStyleMenu = {
    fontSize: "11px",
  };

  const useStyles = makeStyles({
    style: defaultStyle,
    iconStyle: iconStyle,
    custom: customStyle,
    invalid: invalidStyle,
    defaultMenu: defaultStyleMenu,
  });

  const customClasses = useStyles();
  let Options = props.options.map((e, key) => (
    <option
      style={{
        fontSize: "12px",
        textAlign: props.textAlign ? props.textAlign : "center",
      }}
      className={customClasses.defaultMenu}
      key={key}
      value={e.value}
    >
      {e.listname}
    </option>
  ));

  return (
    <Select
      className={clsx(
        customClasses.style,
        customClasses.iconStyle,
        { [customClasses.custom]: hasStyles },
        {
          [customClasses.invalid]:
            props.invalid && props.shouldValidate && props.touched,
        }
      )}
      name={props.name}
      onChange={props.onChange}
      disabled={props.disabled}
      autoWidth
      disableUnderline
      style={props.style}
    >
      {Options}
    </Select>
  );
};

export default SelectComp;
