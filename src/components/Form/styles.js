import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    formControlselect:{

    margin: theme.spacing(1),
    minWidth: 120,
    },


    [theme.breakpoints.up('xs')]: {
        root: {
            minWidth: 300,
            marginLeft: '5px !important',
            marginRight: '5px !important'
        },
        formControl: {
            margin: '5px !important',
            width: "50% !important",

        }

    },

    [theme.breakpoints.up('sm')]: {
        root: {
            minWidth: 400,
            marginLeft: '10px !important',
            marginRight: '10px !important'
        },
        formControl: {
            margin: '5px !important',
            width: "75% !important",

        }

    },

    [theme.breakpoints.up('md')]: {
        root: {
            minWidth: 530,
            borderLeft: '10px solid #4285f4 !important',
            marginLeft: '10px !important',
            marginRight: '10px !important'
            // display: 'flex !important'
        },

        formControl: {
            margin: '10px !important',
            width: "75% !important"
        },

        formControlLabel: {
            marginLeft: "3px !important"
        }

    },

    [theme.breakpoints.up('lg')]: {
        root: {
            minWidth: 1000,
            borderLeft: '10px solid #4285f4 !important'
            // display: 'flex !important'
        },

        formControl: {
            margin: '10px !important',
            width: "90% !important"
        },

        formControlLabel: {
            marginLeft: "3px !important"
        }

    },




    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },

    rootRadio: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },


    gridMargin: {
        margin: "10px !important",
        marginBottom: "20px !important"
    },

    placeholder: {
        borderBottom: "1px dotted #000",
        textDecoration: "none",
        margin: "10px",
        color: '#70757a !important'
    },
    formcontrolCheck: {
    
        width: "70% !important"
    },

    adjustindex: {
        marginLeft: "10px !important",
        marginTop: "10px !important",
        display: "inline-flex !important",
        marginRight: "10px !important"
    },

    iconadjust: {
        marginLeft: "10px !important",
        marginRight: "10px !important"
    },
    marginAlter:{
        marginTop:"0px !important"
    }


}));