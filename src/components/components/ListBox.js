import React, { useState } from 'react';
import './theme.css';
 
const ListBox = (props) => {
    let InputData = props.InputData;
    let Options = InputData.map((data) =>
        <option key={data} value={data}>
            {data}
        </option>
    );
  return (
    <div className="ListBox">
        <select
            multiple
            name={props.listname}
            onChange={props.onChange}>
            {Options}
        </select>
    </div>
  );
}
 
export default ListBox;