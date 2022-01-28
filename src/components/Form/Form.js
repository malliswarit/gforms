import React, { useEffect } from 'react';
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
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll, updateList } from "../redux/actions/fetchItems";
import { loader } from "../redux/actions/commonAction";
import CircularProgress from '@material-ui/core/CircularProgress';

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


const cardList = [{
    DropdownList: ["CheckBox", "Radio", "Short Text", "Paragraph", "Dropdowns", "Linear Scale"],
    CheckBoxList: [{ label: "Option1", checkvalue: false, radiovalue: false }, { label: "Add Option", checkvalue: false, radiovalue: false }],
    // CheckBoxList: ["Option1", "Add Option"]
}]


const Form = () => {
    const classes = useStyles();
    const [selectedMenu, setSelected] = React.useState("CheckBox");
    const [edit, setEdit] = React.useState(false);
    const [optionVal, setOptValue] = React.useState([]);
    const dispatch = useDispatch();
    const cardItemsList = useSelector(state => state.fetchCards.cardList);
    const isLoading = useSelector(state => state.common.isLoading);
    useEffect(async () => {
        await dispatch(loader(true))
        await dispatch(fetchAll())
        setOptValue(cardItemsList)
        await dispatch(loader(false))

        // Safe to add dispatch to the dependencies array
    }, [dispatch])



    const handleSelect = (value, pindex) => {

        let checkFullList = [...cardItemsList];
        let item = { ...checkFullList[pindex] }
        item.SelectType = value;
        console.log(item)
        checkFullList[pindex] = item;
        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
    }

    const increaseCount = (pindex) => {

        let checkFullList = [...optionVal];
        let item = { ...checkFullList[pindex] }
        var checkList = checkFullList[pindex].CheckBoxList.slice();
        if (checkList.length > 2) {
            let value = checkList.length - 1;
            checkList[checkList.length - 2] = { label: "Option" + value, value: false };
            checkList[checkList.length - 1] = { label: "Other", value: false };
            checkList.push({ label: "Add Option", value: false })
        }
        else {
            checkList[checkList.length - 1] = { label: "Other", value: false };
            checkList.push({ label: "Add Option", value: false })
        }




        item.CheckBoxList = checkList;
        checkFullList[pindex] = item;

        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
    }

    const CheckBoxChange = (e, pindex, index) => {
        console.log(e)
        let checkFullList = [...optionVal];
        let item = { ...checkFullList[pindex] }

        if (e.target.type == "radio") {

            var checkList = checkFullList[pindex].CheckBoxList.slice();
            checkList[index].radiovalue = e.target.checked ? true : false;
            item.CheckBoxList = checkList;
            checkFullList[pindex] = item;

        }
        else {

            var checkList = checkFullList[pindex].CheckBoxList.slice();
            checkList[index].checkvalue = e.target.checked ? true : false;
            item.CheckBoxList = checkList;
            checkFullList[pindex] = item;


        }
        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
        console.log(checkFullList)


    }



    const UpdateCheckBox = (e, index, check, pindex) => {

        console.log(check)

        let checkFullList = [...optionVal];
        let item = { ...checkFullList[pindex] }

        var checkList = checkFullList[pindex].CheckBoxList.slice();


        if (check.label == 'Add Option') {
            checkList[index].label = e.target.value;
            checkList.push({ label: "Add Option", value: false })
        }
        else {
            checkList[index].label = e.target.value;
        }

        item.CheckBoxList = checkList;
        checkFullList[pindex] = item;

        // checkFullList[pindex].CheckBoxList = checkList;
        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
        console.log(checkFullList)
    }

    const removeCheck = (check, pindex) => {

        let checkFullList = [...optionVal];
        let item = { ...checkFullList[pindex] }
        var checkList = checkFullList[pindex].CheckBoxList.filter((item) => item.label != check.label);;
        item.CheckBoxList = checkList;
        checkFullList[pindex] = item;
        console.log(checkFullList)

        //      // 1. Make a shallow copy of the items
        // let items = [...this.state.items];
        // // 2. Make a shallow copy of the item you want to mutate
        // let item = {...items[1]};
        // // 3. Replace the property you're intested in
        // item.name = 'newName';
        // // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        // items[1] = item;
        // // 5. Set the state to our new copy
        // this.setState({items});    

        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
    }

    const setCardCopy = (carditem) => {

        let checkFullList = [...optionVal, carditem];
        console.log(checkFullList)
        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
    }

    const deleteCard = (pindex) => {

        let checkFullList = [];
        for (let i = 0; i < optionVal.length; i++) {
            if (i !== pindex) {
                checkFullList.push(optionVal[i]);
            }
        }

        dispatch(updateList(checkFullList))
        setOptValue(checkFullList)
    }


    return (
        <Grid container
            className={classes.mainContainer}
            spacing={3}>


            {cardItemsList && cardItemsList.map((carditem, pindex) =>
                <Grid item xs={12} sm={8} className={classes.mainContainer}>

                    <Card className={classes.root}>
                        <Grid container className={classes.gridMargin}>
                            <Grid item xs={12} sm={6} md={6} lg={8}>
                                <TextField id="standard" label="Question"
                                    classes={{ root: classes.formControl }}
                                    InputProps={{ disableUnderline: true }}
                                />


                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Select Option</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={carditem.SelectType}
                                        onChange={(e) => handleSelect(e.target.value, pindex)}
                                        label="Select Option"
                                    >
                                        {carditem.DropdownList.map((item) =>

                                            <MenuItem value={item}>
                                                <span style={{ display: "flex" }}>
                                                    {item == "CheckBox" ? <CheckBoxIcon /> :
                                                        (item == 'Short Text' ? <ShortTextIcon /> :
                                                            (item == "Paragraph" ? <SubjectIcon /> :
                                                                (item == "Dropdowns" ? <ArrowDropDownCircleIcon /> :
                                                                    (item == "Linear Scale" ? <LinearScaleIcon /> : <RadioButtonCheckedIcon />))))}
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
                        {carditem.SelectType == "Short Text" || carditem.SelectType == "Paragraph" ?
                            <Grid container className={classes.gridMargin}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <p className={classes.placeholder}> {carditem.SelectType == "Short Text" ? "Short Answer Text" : "Long Answer Text"} </p>
                                </Grid>
                            </Grid>
                            : null}

                        {carditem.SelectType == "Linear Scale" ?
                            <Grid container className={classes.gridMargin}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <p> Test </p>
                                </Grid>
                            </Grid>
                            : null}



                        {carditem.SelectType == "CheckBox" || carditem.SelectType == "Radio" || carditem.SelectType == "Dropdowns" ?




                            (
                                carditem.CheckBoxList.map((check, index) =>

                                    (<Grid container className={classes.gridMargin}>
                                        <Grid item xs={12} sm={12} style={{ display: "inline-flex !important" }}>

                                            {carditem.SelectType == "CheckBox" ?

                                                <Checkbox
                                                    checked={check.checkvalue}
                                                    color="primary"
                                                    onChange={(e) => CheckBoxChange(e, pindex, index)}
                                                /> :
                                                (carditem.SelectType == "Radio" ?

                                                    <StyledRadio onChange={(e) => CheckBoxChange(e, pindex, index)} value={check.radiovalue} /> :
                                                    (carditem.SelectType == "Dropdowns" ?
                                                        <span className={classes.adjustindex}>
                                                            {index + 1 + " . "} </span> :

                                                        null
                                                    ))


                                            }


                                            <TextField id="standard-basic" value={check.label} onChange={(e) => UpdateCheckBox(e, index, check, pindex)}
                                                margin="normal"
                                                onClick={check.label == "Add Option" ? (e) => increaseCount(pindex) : null}
                                                name={check.label}
                                                className={`${classes.formcontrolCheck} ${classes.marginAlter}`}

                                            />
                                            {check.label == "Add Option" ?
                                                <span>
                                                    "or"
                                        <Button color="primary" onClick={(e) => increaseCount(pindex)}>add Other</Button>
                                                </span> : null}


                                            <CloseIcon onClick={(e) => removeCheck(check, pindex)} style={{ marginRight: "20px", float: "right" }} />






                                        </Grid>

                                    </Grid>)
                                ))

                            : null}

                        <Divider />
                        <p style={{ float: "right", display: "inline-flex" }}>
                            <FileCopyIcon className={classes.iconadjust} onClick={() => setCardCopy(carditem)} />
                            <DeleteOutlineIcon className={classes.iconadjust} onClick={() => deleteCard(pindex)} />
                            <Divider orientation="vertical" flexItem />
                            <span className={classes.iconadjust}>
                                Required
</span>
                            <Switch className={classes.iconadjust} color="primary" />
                            <MoreVertIcon className={classes.iconadjust} />
                        </p>

                    </Card>

                </Grid>
            )}
        </Grid>

    )
}

export default Form;