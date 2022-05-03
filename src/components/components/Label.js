import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

export default function App(props) {
    const styles= (props.style)? props.style:"";

    let defaultStyle =  {
      marginTop:'5px',
      marginLeft: '5px',
      fontSize: '11px',
      color: '#0f243e',
    } 
    const useStyles = makeStyles({
      default: defaultStyle,
      custom: styles
    })
      const classes = useStyles();
      
      const fontVariant = props.variant ? props.variant:"body2";
    return (
          <Typography variant={fontVariant} className={clsx(classes.default, classes.custom)}>{props.text}</Typography>
        
    );
}