import * as React from "react";
import {K2images} from "./K2images/K2images";
import {AppBar, Button, ButtonGroup, makeStyles, Toolbar} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        alignItems: "baseline",
        justifyContent: "space-between",
        flexDirection: "row",
        fontFamily: "avenir-lt-w01_85-heavy1475544,avenir-lt-w05_85-heavy,sans-serif",
        fontSize: "40px"
    },
    // button: {
    //     color: "var(--accent-blue)",
    //     fontWeight: "normal",
    //     borderColor: "white !important",
    //     padding: "1rem 2rem",
    //     marginTop: "2rem",
    //     marginBottom: "2rem",
    //     hover: {
    //         backgroundColor: "none",
    //     }
    // }
}));

export const Home: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();

    return <>
        <AppBar className={classes.header} position="sticky">
            {/*<Toolbar>*/}
            <Button onClick={()=>history.push('/')}>
                K2 IMAGES
            </Button>
            <ButtonGroup variant="text" color="primary" aria-label="navigation buttons">
                <Button color="inherit" onClick={()=>history.push('/')} className={"button"}>Home</Button>
                <Button color="inherit" onClick={()=>history.push('/portfolio')} className={"button"}>Portfolio</Button>
                <Button color="inherit" onClick={()=>history.push('/pricing')} className={"button"}>Pricing</Button>
                <Button color="inherit" onClick={()=>history.push('/contact')} className={"button"}>Contact</Button>
            </ButtonGroup>
            {/*</Toolbar>*/}
        </AppBar>
        {/*<Toolbar />*/}
        {props.children}
        {/*<div className="indented-children">*/}
        {/*    <a href="tel:{{config('app.contact_phone')}}">*/}
        {/*        <x-icons.phone/>*/}
        {/*        : {{config('app.contact_phone')}}</a>*/}
        {/*    <a href="https://instagram.com/{{config('app.ig_handle')}}" target="_blank">*/}
        {/*        <x-icons.instagram/>*/}
        {/*        : {{'@' . config('app.ig_handle')}}</a>*/}
        {/*    <a href="mailto:{{config('app.contact_email')}}">*/}
        {/*        <x-icons.email/>*/}
        {/*        : {{config('app.contact_email')}}</a>*/}
        {/*</div>*/}

    </>;
}
