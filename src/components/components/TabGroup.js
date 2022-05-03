import React, { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import Close from "@material-ui/icons/Close";
import clsx from "clsx";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import "./TabGroup.css";

const useStyles = makeStyles({
  root: {
    background: "#B8CCE4",
    color: "#0F243E",
    minHeight: "36px !important",
    border: "1px solid #fff",

    "&:hover": {
      // background: "#0F243E !important",
      // color: "#fff !important",
    },
    "&:focus": {
      outline: "none",
      borderRadius: "0",
    },
    "&.MuiButtonBase-root": {
      background: "#B8CCE4",
      color: "#0F243E",
      marginRight: "2px",
      minHeight: "35px !important",
      padding: "0 0 0 10px",
    },
    "&.Mui-selected": {
      background: "#0F243E",
      color: "#fff !important",
      border: "1px soild #0F243E",
    },
    minHeight: "35px !important",
  },
  defaultTab: {
    background: "#B8CCE4",
    color: "#0F243E",
    minHeight: "35px !important",
    border: "1px solid #fff",
    "&:hover": {
      // background: "#0F243E !important",
      // color: "#fff !important",
    },
    "&:focus": {
      outline: "none",
      borderRadius: "0",
    },
    "&.MuiButtonBase-root": {
      background: "#B8CCE4",
      color: "#0F243E",
      marginRight: "2px",
      minHeight: "35px !important",
      padding: "0 10px",
    },
    "&.Mui-selected": {
      background: "#0F243E",
      color: "#fff !important",
      border: "1px soild #0F243E",
    },
    "& .MuiTabPanel-root": {
      padding: 0,
    },
  },
});

const TabGroupControl = (props) => {
  const classes = useStyles();

  let DataList = props.dataList;
  let Labels = props.defaultLabels;
  let defaultContents = props.defaultContent;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    const tagNames = ["svg", "path"];

    if (!tagNames.includes(event.target.nodeName)) {
      setValue(newValue);
    } else {
      event.preventDefault();
    }
  };

  let CustomTabs = "";
  let customValue = Labels.length;

  let DefaultTabs =
    Labels &&
    Labels.map((data) => (
      <Tab
        label={data.label}
        value={data.value}
        className={classes.defaultTab}
        style={{
          position: data.isStikcy ? data.isStikcy : "",
          left: data.left ? data.left : 0,
          top: "0",
          zIndex: "9",
        }}
      ></Tab>
    ));

  function CloseTab(event, index) {
    const tagNames = ["svg", "path"];

    if (tagNames.includes(event.target.nodeName)) {
      const totalTab = DataList.length;

      index = index + 1;

      if (value == index) {
        //  view tab is same operation tab

        if (value == totalTab) {
          //  either it is last tab or not

          setValue((prevState) => prevState - 1);
        } else {
          setValue((prevState) => prevState);
        }
      } else if (value > index) {
        //  view tab after operation tab

        setValue((prevState) => prevState - 1);
      } else if (value < index) {
        //  view tab before operation tab

        if (index == totalTab) {
          setValue((prevState) => prevState);
        }
      }

      props.OnCloseClick(index - 1);
    }
  }

  const getCustomTabs = () => {
    if (props.isDashboard && props.isDashboard == "true") {
      CustomTabs =
        DataList &&
        DataList.map((data, i) => (
          <Tab
            label={
              <span>
                {data.FlightNo
                  ? `${data.FlightNo}(${data.Orig}-${data.Dest})`
                  : `${data}`}{" "}
                <IconButton
                  size="small"
                  onClick={(event) => CloseTab(event, i)}
                >
                  <Close
                    style={{
                      height: "12px",
                      width: "12px",
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </span>
            }
            value={customValue + i}
            iconPosition="end"
            className={classes.root}
          />
        ));
    } else {
      CustomTabs =
        DataList &&
        DataList.map((data, i) => (
          <Tab
            label={
              <span>
                {data.FlightNo
                  ? `${data.FlightNo}(${data.Orig}-${data.Dest})`
                  : `${data}`}{" "}
                <IconButton
                  size="small"
                  onClick={(event) => CloseTab(event, i)}
                >
                  <Close
                    style={{
                      height: "12px",
                      width: "12px",
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </span>
            }
            value={customValue + i}
            className={classes.root}
            style={{
              justifyContent: "center",
              height: "35px",
            }}
          />
        ));
    }
    return CustomTabs;
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext
        value={value}
        sx={{
          [`& .${tabsClasses.root}`]: {
            "&.MuiTabs-root": { minHeight: "35px !important" },
          },
        }}
        style={{ minHeight: "35px !important" }}
      >
        <TabList
          onChange={handleChange}
          // aria-label="lab API tabs example"
          variant="scrollable"
          scrollButtons={DataList.length > 6 ? true : false}
          // allowScrollButtonsMobile
          sx={{
            [`&.${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: "1 !important" },
            },
            position: "relative",
            overflowX: "scroll",
          }}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          {DefaultTabs}

          {getCustomTabs()}
        </TabList>
        <Box
          style={{
            border: "1px solid black",
            padding: "5px",
            background: "#E5EDF8",
          }}
        >
          {defaultContents &&
            defaultContents.map((ele, i) => (
              <TabPanel value={ele.value} key={ele.value}>
                {ele.content}
              </TabPanel>
            ))}

          {DataList &&
            DataList.map((ele, i) => (
              <TabPanel value={customValue + i}>{props.customContent}</TabPanel>
            ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export default TabGroupControl;
