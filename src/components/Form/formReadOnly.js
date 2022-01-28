import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./styles";
import { Grid, TextField, Button } from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from '@material-ui/core/RadioGroup';

import { useDispatch, useSelector } from "react-redux";
import { updateCard, existingCard } from "../redux/actions/fetchItems";

import { loader } from "../redux/actions/commonAction";
import CircularProgress from "@material-ui/core/CircularProgress";

function StyledRadio(props) {
  const classes = useStyles();
  return (
    <Radio
      className={classes.rootRadio}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
      label={props.label}
    />
  );
}

const cardList = [
  {
    Question: "Where is Shridi ?",
    value: "",
    type: "Short Text",
  },
  {
    Question: "Where is Srisailam ?",
    RadiooptionList: ["Maharastra", "Vishnupuram", "Hyderabad"],
    type: "Radio",
    value: "",
  },
  {
    Question: "Where is Shridi ?",
    checkBoxoptionList: ["Maharastra", "Vishnupuram", "Hyderabad"],
    type: "checkbox",
    value: [],
  },

];

const ReadOnlyForm = (props) => {
  const classes = useStyles();
  const [selectedMenu, setSelected] = React.useState("CheckBox");
  const sampleData = useSelector(state => state.fetchCards.sample);
  const [optionVal, setOptValue] = React.useState([]);

  const paragraphTypes = ["Short Text", "Paragraph"];
  const CheckRadiotypes = ["checkbox", "Radio"];
  const dispatch = useDispatch();
  console.log(optionVal);

  useEffect(async () => {
    await dispatch(loader(true))
    await dispatch(existingCard())
    setOptValue(sampleData)
    await dispatch(loader(false))

    // Safe to add dispatch to the dependencies array
  }, [dispatch])

  console.log(optionVal)
  const handleRadioButton = async (e, pindex, index, checkItem) => {
    console.log(e);
    let checkFullList = [...sampleData];

    if (e.target.type == "radio") {
      console.log(e.target.value);
      checkFullList[pindex].value = e.target.value;
      if (e.target.value === "Vishnupuram") {
        let itemAdd = {
          Question: "Where is my house?",
          value: "",
          type: "Short Text",
        }
        checkFullList.splice(pindex + 1, 0, itemAdd)
      }
      if (e.target.value === "Hyderabad") {
        let itemAdd = {
          Question: "Where is Hussain Sagar?",
          RadiooptionList: ["HItech", "Panjagutta", "Tankbund"],
          type: "Radio",
          value: "",
        }
        checkFullList.splice(pindex + 1, 0, itemAdd)
      }
    } else {
      if (checkItem) {
        checkFullList[pindex].value = checkFullList[pindex].value.includes(checkItem) ?
          checkFullList[pindex].value.filter(c => c !== checkItem) : [...checkFullList[pindex].value, checkItem]
      }
    }


    await dispatch(updateCard(checkFullList))
    setOptValue(checkFullList);
  };

  const submitData = () => {
   props.updateIndex(true, 1)
  }

  const handleFieldChange = async (e, pindex) => {

    console.log("text field")
    console.log(e.target.value)
    let checkFullList = [...sampleData];
    checkFullList[pindex].value = e.target.value;
    console.log(checkFullList)
    await dispatch(updateCard(checkFullList))
    setOptValue(checkFullList);
  }


  return (
    <Grid container className={classes.mainContainer} spacing={3}>
      <Grid container className={classes.mainContainer} spacing={3}>
        {sampleData &&
          sampleData.map((carditem, pindex) => (
            <Grid item xs={12} sm={8} className={classes.mainContainer}>
              <Card className={classes.root}>
                {/* <Grid container className={classes.gridMargin}>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <TextField
                    id="standard"
                    label={carditem.Question}
                    classes={{ root: classes.formControl }}
                    InputProps={{ disableUnderline: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}></Grid>
              </Grid> */}
                {paragraphTypes.includes(carditem.type) ? (
                  <Grid container className={classes.gridMargin}>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="standard"
                        label={carditem.Question}
                        classes={{ root: classes.formControl }}
                        onChange={(e) => handleFieldChange(e, pindex)}
                      />
                    </Grid>
                  </Grid>
                ) : null}

                {CheckRadiotypes.includes(carditem.type) ? (
                  <Grid container className={classes.gridMargin}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      style={{ display: "inline-flex !important" }}
                    >
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField
                          id="standard"
                          label={carditem.Question}
                          classes={{ root: classes.formControl }}
                          InputProps={{ disableUnderline: true }}

                        />
                      </Grid>

                      {carditem.type == "checkbox"
                        ? carditem.checkBoxoptionList.map((item, index) => (
                          <React.Fragment>

                            <FormControlLabel
                              size="small"
                              control={                             
                               
                                <Checkbox
                                  checked={carditem.value.includes(item)}
                                  onChange={(e) => handleRadioButton(e, pindex, index, item)}     color="primary"/>}
                              label={item}                           
                            />
                            <br />
                          </React.Fragment>
                        ))
                        : carditem.RadiooptionList.map((item, index) => (
                          <React.Fragment>
                            <RadioGroup
                              value={carditem.value}
                              onChange={(e) =>
                                handleRadioButton(e, pindex, index)
                              }
                            > <FormControlLabel
                                value={item}
                                control={<Radio color="primary" />}
                                label={item}


                              /></RadioGroup>


                          </React.Fragment>
                        ))}
                    </Grid>
                  </Grid>
                ) : null}
              </Card>
            </Grid>
          ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={submitData} style={{ marginTop: "30px" }}> Submit </Button>
    </Grid>

  );
};

export default ReadOnlyForm;
