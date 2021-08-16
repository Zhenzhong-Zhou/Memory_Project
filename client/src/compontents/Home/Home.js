import { useState, useEffect } from "react";
import { Container, Grid, Grow, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Pagination from "../../compontents/Pagination/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

export const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={ setCurrentId }/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={ currentId } setCurrentId={ setCurrentId }/>
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;