import React, { Component } from "react";
import {makeStyles} from 'react';
import Close from "@material-ui/icons/Close";

const CloseButton = (props) => {
    const customStyle = props.style ? props.style : "";
    return (
        <Close style={customStyle} onClick={props.onClick} />
    );
};

export default CloseButton;