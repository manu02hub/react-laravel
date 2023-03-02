import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import BasicTextFields from "@/Components/TextField";
import BtnSubmit from "@/Components/BtnSubmit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
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

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <Grid
                item
                xs={12}
                md={6}
                xl={6}
                marginTop={"80px"}
                textAlign="center"
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    style={{
                        mr: 2,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    CARSWORLD
                </Typography>

                <Typography
                    variant="h5"
                    height="10%"
                    width="100vh"
                    marginBottom="20px"
                    marginTop={"20px"}
                    style={{
                        mr: 2,
                        fontFamily: "Segoe UI",
                        fontWeight: 700,
                        fontSize: 30,
                    }}
                >
                    ¡Bienvenido de nuevo amante de los coches!
                </Typography>
                <Box component="form" onSubmit={submit}>
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
                    <BtnSubmit processing={processing}>
                        Iniciar Sesión
                    </BtnSubmit>
                </Box>
                <Link
                    href="register"
                    variant="body2"
                    color="inherit"
                    style={{ textDecoration: "none", color:"white" }}
                >
                    {"¿Aún no tienes cuenta? Regístrate"}
                </Link>
            </Grid>
        </GuestLayout>
    );
}
