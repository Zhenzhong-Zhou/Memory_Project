import React, { Fragment, useState } from "react";
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";

import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";


const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const isSignup = false;

    const handleSubmit = () => {

    };

   const handleChange = () => {

   }

    const handleShowPassword = () => handleShowPassword(() => setShowPassword((preShowPassword) => !preShowPassword));

    return (
        <Container component={"main"} maxWidth={"xs"}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant={"h5"}>{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <Fragment>
                                    <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastname" label="Last Name" handleChange={handleChange} half />
                                </Fragment>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button className={classes.submit} type={"submit"} fullWidth variant={"contained"} color={"primary"}>
                        { isSignup ? "Sign Up" : "Sign In" }
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;