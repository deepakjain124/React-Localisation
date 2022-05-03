import React from "react";
import classes from "./Calendar.module.css";

const Calendar = (props) => {
  console.log("props", props);
  //onChangeHandler =() =>{return true};
  return (
    <div className={[classes.calBox, classes[props.flexTen]].join(" ")}>
      {props.label ? (
        <div>
          <p className={`${classes.calLabel} ${classes[props.dateLabel]}`}>
            {props.label}
          </p>
        </div>
      ) : null}
      <input
        className={`${[classes[props.CustomWidth]].join(" ")} ${
          props.className
        }  ${classes.CalendarInput}`}
        type="date"
        style={props.style}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Calendar;
