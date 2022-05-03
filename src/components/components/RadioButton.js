import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const RadioButton = (props) => {
  const hasStyles = props.style ? true : false;
  let customStyle = props.style ? props.style : "";

  let invalidStyle = {
    border: "1px solid red",
    backgroundColor: "#fda49a",
  };

  let defaultStyle = {
    // backgroundColor: "white",
    display: "block",

    position: "relative",
    top: "10px",
    right: "3px",
  };
  const useStyles = makeStyles({
    style: defaultStyle,
    custom: customStyle,
    invalid: invalidStyle,
  });

  const customClasses = useStyles();
  let kvPair = props.options;

  let Options = null;

  if (kvPair) {
    if (!Array.isArray(kvPair)) {
      kvPair = [kvPair];
    }
    Options = kvPair.map((data) => (
      <FormControlLabel
        value={data.id ? data.id : ""}
        control={
          <Radio
            id={props.id}
            sx={{
              color: props.color ? props.color : "#8DB3E2",
              "&.Mui-checked": {
                color: props.checkcolor ? props.checkcolor : "#0F243E",
                borderColor: "#8DB3E2",
              },
              "& .MuiSvgIcon-root": {
                fontSize: props.radioboxsize ? props.radioboxsize : 13,
                backgroundColor: "#fff",
                borderRadius: "50%",
              },
            }}
            size={props.size ? props.size : ""}
          />
        }
        label={
          <span
            style={{ fontSize: props.labelFont ? props.labelFont : "10px" }}
          >
            {data.name ? data.name : kvPair}
          </span>
        }
      />
    ));
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.title}</FormLabel>
      <RadioGroup
        className={clsx(
          customClasses.style,
          { [customClasses.custom]: hasStyles },
          {
            [customClasses.invalid]:
              props.invalid && props.shouldValidate && props.touched,
          }
        )}
        row
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        size="small"
      >
        {Options}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButton;
