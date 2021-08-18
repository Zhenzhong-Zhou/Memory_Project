import { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
    console.log(post);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem("profile"));

    const handleClick = async () => {
        const finalComments = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComments, post._id));
        setComments(newComments);
        setComment("");
    };

    return (
         <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography key={i} variant="subtitle1" gutterBottom>
                            {c}
                        </Typography>
                        ))}
                </div>
                {user?.result?.name && (
                    <div style={{ width: "70%" }}>
                        <Typography gutterBottom variant="h6">Write a Comment</Typography>
                        <TextField fullWidth rows={4} variant={"outlined"} label="Comment" multiline
                                   value={comment} onChange={(e) => setComment(e.target.value)}
                        />
                        <Button style={{ marginTop: "10px" }} fullWidth disabled={!comment} variant={"contained"} color={"primary"} onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;