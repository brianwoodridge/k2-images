import * as React from "react";
import {Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {ReactElement} from "react";
import {
    AttachMoney,
    Folder,
    MoneyRounded, PhotoLibrary,
    PhotoLibraryRounded,
    QueryBuilder,
    QueryBuilderRounded
} from "@material-ui/icons";

interface props {
    className?: string
    title: string
    costText: string
    hoursText: string
    photosText: string
}

//TODO remove
function generate(element: ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export const PriceComponent: React.FC<props> = (props) => {
    const [dense, setDense] = React.useState(true);

    return <>
        <Grid item xs={12} md={6}>
            <Typography variant="h6">
                {props.title}
            </Typography>
            <List dense={dense}>
                <ListItem>
                    <ListItemAvatar><Avatar><QueryBuilder/></Avatar></ListItemAvatar>
                    <ListItemText
                        primary="Hours"
                        secondary={props.hoursText}
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar><Avatar><PhotoLibrary/></Avatar></ListItemAvatar>
                    <ListItemText
                        primary="Photos"
                        secondary={props.photosText}
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar><Avatar><AttachMoney/></Avatar></ListItemAvatar>
                    <ListItemText
                        primary="Cost"
                        secondary={props.costText}
                    />
                </ListItem>
            </List>
        </Grid>
    </>;
}
