import EmpathyLayout from "@/components/layout/empathyLayout";
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import { ReactElement } from "react";

const Login = () => {
    const paperStyle = { padding: 20, height: "70vh", width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const btnstyle = { margin: "8px 0" };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter username" fullWidth required />
                <TextField label="Password" placeholder="Enter password" type="password" fullWidth required />
                <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
                    Sign in
                </Button>
                <Typography>
                    <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography>
                    {" "}
                    Do you have an account ?<Link href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

Login.getLayout = (page: ReactElement) => {
    return <EmpathyLayout>{page}</EmpathyLayout>;
};

export default Login;
