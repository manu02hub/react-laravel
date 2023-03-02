import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Head, Link, useForm } from "@inertiajs/react";
import BasicTextFields from "@/Components/TextField";
import BtnSubmit from "@/Components/BtnSubmit";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";

export default function Register() {
    const { data, post, setData, processing, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Grid
                item
                xs={12}
                md={6}
                xl={6}
                container
                justifyContent="center"
                textAlign={"center"}
                marginTop={"30px"}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    xl={12}
                    container
                    justifyContent="center"
                    marginTop={"30px"}
                >
                    <Typography
                        variant="h5"
                        height="10%"
                        width="100vh"
                        sx={{
                            mr: 2,
                            fontFamily: "Segoe UI",
                            fontWeight: 700,
                            fontSize: 60,
                        }}
                    >
                        Welcome to Premiun Cars Rental
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    xl={12}
                    container
                    justifyContent="center"
                >
                    <div style={{ width: "auto" }}>
                        <img
                            src="http://localhost/img/DWES/p4/bugatti.png"
                            width={"500"}
                            style={{ marginTop: "20px" }}
                            sx={{
                                mr: 2,
                            }}
                        ></img>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} xl={6} marginTop={"80px"}>
                <Typography
                    variant="h5"
                    height="10%"
                    width="100vh"
                    sx={{
                        mr: 2,
                        fontFamily: "Segoe UI",
                        fontWeight: 700,
                        fontSize: 30,
                    }}
                    marginBottom="20px"
                >
                    ¡Crea tu cuenta y únete a nosotros!
                </Typography>
                <Box component="form" onSubmit={submit}>
                    <BasicTextFields
                        id="name"
                        label="Nombre"
                        name="name"
                        value={data.name}
                        handleChange={onHandleChange}
                    ></BasicTextFields>
                    <br></br>
                    <BasicTextFields
                        id="email"
                        label="Email"
                        name="email"
                        value={data.email}
                        handleChange={onHandleChange}
                    ></BasicTextFields>
                    <br></br>
                    <BasicTextFields
                        id="password"
                        label="Contraseña"
                        name="password"
                        value={data.password}
                        handleChange={onHandleChange}
                    ></BasicTextFields>
                    <br></br>
                    <BasicTextFields
                        id="password_confirmation"
                        label="Confirmar Contraseña"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        handleChange={onHandleChange}
                    ></BasicTextFields>
                    <br></br>
                    <BtnSubmit processing={processing}>Register</BtnSubmit>
                </Box>

                <Divider />
                <Stack direction="row" spacing={2} marginTop="15px">
                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        fullWidth="50%"
                    >
                        Google
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        fullWidth="50%"
                    >
                        Git Hub
                    </Button>
                </Stack>
            </Grid>
        </GuestLayout>
    );
}
