import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import useStyles from "./styles";
import { Grid, TextField, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Divider from '@material-ui/core/Divider';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Switch from '@material-ui/core/Switch';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
        />
    );
}



const DropdownList = ["CheckBox", "Radio", "Short Text", "Paragraph", "Dropdowns"]
const CheckBoxList = ["Option1", "Add Option"]
const Form = () => {
    const classes = useStyles();
    const [selectedMenu, setSelected] = React.useState("CheckBox");
    const [edit, setEdit] = React.useState(false);
    const [optionVal, setOptValue] = React.useState(["Option1", "Add Option"]);

    const increaseCount = (e) => {
       
        var checkList = optionVal.slice();
        if (checkList.length > 2) {
            let value = optionVal.length - 1;
            checkList[optionVal.length - 2] = "Option" + value;
            checkList[optionVal.length - 1] = "Other";
            checkList.push("Add Option")
        }
        else {
            checkList[checkList.length - 1] = "Other";
            checkList.push("Add Option")
        }

        setOptValue(checkList)
    }

    const UpdateCheckBox = (e, index,check) => {

        var checkList = optionVal.slice(); // Make a copy of the emails first.
        if(check == 'Add Option'){
            checkList[index] = e.target.value;
            checkList.push("Add Option")
        }
        else{
            checkList[index] = e.target.value;
        }
      
         // Update it with the modified email.
        setOptValue(checkList)
    }

    const removeCheck = (check) => {
        console.log(check)
        var checkList = optionVal.filter((item) => item != check)
        console.log(checkList)
        setOptValue(checkList)
    }


    return (
        <Grid container
            className={classes.mainContainer}
            spacing={3}>
            <Grid item xs={12} sm={8} className={classes.mainContainer}>
                <Card className={classes.root}>
                    <Grid container className={classes.gridMargin}>
                        <Grid item xs={6} sm={8}>
                            <TextField id="standard" label="Question"
                                classes={{ root: classes.formControl }}
                            />


                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <FormControl variant="outlined" classes={{ root: classes.formControl }}>
                                <InputLabel id="demo-simple-select-outlined-label">Select Option</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={selectedMenu}
                                    onChange={(e) => setSelected(e.target.value)}
                                    label="Age"
                                >
                                    {DropdownList.map((item) =>

                                        <MenuItem value={item}>
                                            <span style={{ display: "flex" }}>
                                                {item == "CheckBox" ? <CheckBoxIcon /> :
                                                    (item == 'Short Text' ? <ShortTextIcon /> :
                                                        (item == "Paragraph" ? <SubjectIcon /> :
                                                            (item == "Dropdowns" ? <ArrowDropDownCircleIcon /> : <RadioButtonCheckedIcon />)))}
                                                <span style={{ marginLeft: "5px" }}>
                                                    {item}
                                                </span>
                                            </span>
                                        </MenuItem>

                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {selectedMenu == "Short Text" || selectedMenu == "Paragraph" ?
                        <Grid container className={classes.gridMargin}>
                            <Grid item xs={6} sm={7}>
                                <p className={classes.placeholder}> {selectedMenu == "Short Text" ? "Short Answer Text" : "Long Answer Text"} </p>
                            </Grid>
                        </Grid>
                        : null}

                    {selectedMenu == "CheckBox" || selectedMenu == "Radio" || selectedMenu == "Dropdowns" ?




                        (
                            optionVal.map((check, index) =>

                                (<Grid container className={classes.gridMargin}>
                                    <Grid item xs={6} sm={12} style={{ display: "inline-flex !important" }}>

                                        {selectedMenu == "CheckBox" ?

                                            <Checkbox

                                                name="checkedB"
                                                color="primary"
                                            /> :
                                            (selectedMenu == "Radio" ?

                                                <StyledRadio /> :
                                                <span className={classes.adjustindex}>
                                                {index+1+" . "} </span>)


                                        }


                                        <TextField id="standard-basic" value={check} onChange={(e) => UpdateCheckBox(e, index,check)}
                                        onClick={(e) => increaseCount(e)}
                                            name={check}
                                            className={classes.formcontrolCheck} />
                                        {check == "Add Option" ?
                                            <span>
                                                "or"
                                        <Button color="primary" onClick={(e) => increaseCount(e)}>add Other</Button>
                                            </span> : null}


                                        <CloseIcon onClick={(e) => removeCheck(check)} style={{ marginRight: "20px", float: "right" }} />






                                    </Grid>

                                </Grid>)
                            ))

                        : null}

<Divider />
<p style={{float:"right", display:"inline-flex"}}> 
<FileCopyIcon  className={classes.iconadjust} />
<DeleteOutlineIcon  className={classes.iconadjust}/>
<Divider orientation="vertical" flexItem />
<span className={classes.iconadjust}>
Required 
</span>
<Switch  className={classes.iconadjust}/>
<MoreVertIcon  className={classes.iconadjust}/>
</p>

                </Card>
            </Grid>
        </Grid>

    )
}

export default Form;