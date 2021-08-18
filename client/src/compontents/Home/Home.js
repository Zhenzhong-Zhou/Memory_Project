import { useState } from "react";
import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { getPostsBySearch } from "../../actions/posts";
import Pagination from "../../compontents/Pagination/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        // dispatch -> fetch search post
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
            history.push(`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`)
        } else {
            history.push("/");
        }
    };

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            searchPost();
        }
    };
    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container children maxWidth={"xl"}>
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={ setCurrentId }/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position={"static"} color={"inherit"}>
                            <TextField name="search" variant={"outlined"} label="Search Memories"
                                       onKeyPress={handleKeyPress}
                                       fullWidth value={search} onChange={(event) => setSearch(event.target.value)}
                            />
                            <ChipInput style={{margin: "10px 0"}} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Search Tags" variant={"outlined"}
                            />
                            <Button className={classes.searchButton} color={"primary"} variant={"contained"} onClick={searchPost}>Search</Button>
                        </AppBar>
                        <Form currentId={ currentId } setCurrentId={ setCurrentId }/>
                        {(!searchQuery && !tags.length) && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;