import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Typography from "@mui/material/Typography";
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert";
import Link from '@mui/material/Link';

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [visibility, setVisibility] = useState(true);
    const [authError, setAuthError] = useState(false);
    const [errorDelay, setErrorDelay] = useState(false);
    const navigate = useNavigate();
    const context = useContext(UserContext);


    const name = method === "login" ? "Login" : "Registration";

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();

        try {
            const response = await api.post(route, { username, password })
            console.log(response)
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                context?.fetchUser();
                navigate("/");
            } else {
                navigate("/login/");
            }
        } catch (error) {
            console.log(error);
            setAuthError(true);
            setErrorDelay(true);
        } finally {
            setLoading(false);
        };
    };

    function handleVisibility() {
        setVisibility(!visibility);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorDelay(false);
        }, 4000
        )
        return () => clearTimeout(timer);
    }, [errorDelay]);


    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {errorDelay && <Alert severity="error" sx={{ position: "absolute", top: 10, display: "flex", alignItems: "center" }}>The username or password is not correct</Alert>}
            <form onSubmit={handleSubmit} className="form-container">
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                    <h1>{name}</h1>
                </Box>
                <Box sx={{ height: "100%", gap: 1, mb: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <FormControl>
                        <InputLabel htmlFor="input-username">
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                <AccountCircle sx={{ mr: "4px" }} />Username
                            </Typography>
                        </InputLabel>
                        <Input error={authError} type="text" id="input-username" className="form-input" aria-describedby="my-helper-text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="input-password" sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                <KeyIcon sx={{ mr: "4px" }} />Password
                            </Typography>
                        </InputLabel>
                        <Input error={authError} type={visibility ? "password" : "text"} id="input-password" className="form-input" aria-describedby="my-helper-text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {password && <Button size="small" sx={{ position: "absolute", p: 0, minWidth: 0, color: "grey", bottom: "0px", right: "-25px" }} onClick={handleVisibility} >
                            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Button>}
                    </FormControl>
                </Box>
                <Button loading={loading} sx={{ width: "100%", backgroundColor: errorDelay && "red" }} variant="contained" type="submit">Submit</Button>
                {method === "login" && <Box sx={{ my: "10px" }}>Don't have an account? <Link href="/register">Sing up</Link></Box>}
            </form>
        </Box>
    );
}

export default Form;