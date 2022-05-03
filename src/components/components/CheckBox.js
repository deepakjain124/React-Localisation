import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import SquareIcon from "@mui/icons-material/Square";

const CheckboxControl = (props) => {
  const useStyles = makeStyles({
    root: {
      "&:hover": {
        backgroundColor: "transparent",
      },

      border: "1px solid #8db3e2",
      width: "13px",
      height: "13px",
      backgroundColor: "white",
      borderRadius: 0,
      padding: 0,
      color: "transparent",
      fontSize: "12px",
    },

    checkedIcon: {
      "&.MuiSvgIcon-root": {
        width: props.checkwidth ? props.checkwidth : "75%",
        height: props.checkheight ? props.checkheight : "75%",
        backgroundColor: props.iconColor ? props.iconColor : "black",
        padding: 1,
      },
    },
  });

  const classes = useStyles();
  let cssStyle = props.style ? props.style : "";
  const useCustomStyles = makeStyles({
    style: cssStyle,
  });
  const customClasses = useCustomStyles();
  let lableStyle = props.style ? props.style : "";
  const useLabelCustomStyle = makeStyles({
    style: lableStyle,
  });

  return (
    <FormControlLabel
      className="custom-checkbox"
      control={
        <Checkbox
          onChange={props.onChange}
          className={clsx(classes.root, customClasses.style)}
          disabled={props.disabled}
          defaultChecked={false}
          disableRipple
          color="default"
          icon={
            <SquareOutlinedIcon
              className={clsx(classes.icon, customClasses.style)}
            />
          }
          vlaue="checked"
          checkedIcon={
            <SquareIcon
              className={clsx(customClasses.style, classes.checkedIcon)}
            />
          }
          inputProps={{ "aria-label": "decorative checkbox" }}
          DataTable={props.DataTable}
          DataColumn={props.DataColumn}
        />
      }
      label={
        <span
          style={{
            fontSize: props.labelfontSize ? props.labelfontSize : "12px",
            color: props.labelColor ? props.labelColor : "#000",
            fontFamily: props.labelfontFamily ? props.labelfontFamily : "",
            fontStyle: props.labelfontStyle ? props.labelfontStyle : "",
            padding: "0 5px",
          }}
        >
          {props.label}
        </span>
      }
    />
  );
};

export default CheckboxControl;
