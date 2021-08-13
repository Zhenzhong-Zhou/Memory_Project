import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./compontents/Posts/Posts";
import Form from "./compontents/Form/Form";
import memory from "./images/memory.png"
import useStyles from "./styles.js"

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth={"lg"}>
            <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
                <Typography className={classes.heading} variant={"h2"} align={"center"}>Memory</Typography>
                <img className={classes.image} src={memory} alt={"memory"} height={"60"} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify={"space-between"} alignItems={"stretch"} spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;