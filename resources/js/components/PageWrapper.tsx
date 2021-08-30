import * as React from "react";
import {K2images} from "./K2images/K2images";
import {AppBar, Button, ButtonGroup, makeStyles, Toolbar} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        alignItems: "baseline",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    button: {
        color: "var(--accent-blue)",
        fontWeight: "normal",
        borderColor: "white !important",
        padding: "1rem 2rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        hover: {
            backgroundColor: "none",
        }
    }
    // text: {
    //     padding: theme.spacing(2, 2, 0),
    // },
    // paper: {
    //     paddingBottom: 50,
    // },
    // list: {
    //     marginBottom: theme.spacing(2),
    // },
    // subheader: {
    //     backgroundColor: theme.palette.background.paper,
    // },
    // appBar: {
    //     top: 'auto',
    //     bottom: 0,
    // },
    // grow: {
    //     flexGrow: 1,
    // },
    // fabButton: {
    //     position: 'absolute',
    //     zIndex: 1,
    //     top: -30,
    //     left: 0,
    //     right: 0,
    //     margin: '0 auto',
    // },
}));

export const PageWrapper: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();

    return <>
        <AppBar className={classes.header} position="sticky">
            {/*<Toolbar>*/}
            <Button onClick={()=>history.push('/')}>
                <K2images/>
            </Button>
            <ButtonGroup variant="text" color="primary" aria-label="navigation buttons">
                <Button color="inherit" onClick={()=>history.push('/')} className={classes.button}>Home</Button>
                <Button color="inherit" onClick={()=>history.push('/portfolio')} className={classes.button}>Portfolio</Button>
                <Button color="inherit" onClick={()=>history.push('/pricing')} className={classes.button}>Pricing</Button>
                <Button color="inherit" onClick={()=>history.push('/contact')} className={classes.button}>Contact</Button>
            </ButtonGroup>
            {/*</Toolbar>*/}
        </AppBar>
        {/*<Toolbar />*/}
        {props.children}
    </>;
}
