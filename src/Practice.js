import React from 'react'
import TextareaAutosize from "@mui/material/TextareaAutosize"


const Practice = ({minrows,color,backgroundcolor}) => {

    const a={
        border:"1px solid green",
        color:color,
        backgroundColor:backgroundcolor
    }
  return (
    <TextareaAutosize minRows={minrows} style={a}/>
  )
}

export default Practice