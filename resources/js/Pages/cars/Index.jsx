import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BtnSubmit from "@/Components/BtnSubmit";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BasicTextFields from "@/Components/TextField";
import Cardadmin from "@/Components/CardAdmin";

export default function IndexCoches(props) {
    const { data, post, setData, processing, reset } = useForm({
        modelo: "",
        marca: "",
        precio: "",
        imagen: "",
    });

    useEffect(() => {
        return () => {
            reset("modelo", "marca", "precio", "imagen");
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

        post(route("coche-store"));
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Modelos" />

            <Container>
                <Grid sx={{ flexGrow: 1 }} container spacing={1}>
                    <Grid xs={12} md={7} xl={7}>
                        <Grid sx={{ flexGrow: 1 }} container spacing={1}>
                            {props.coches.map((car) => (
                                <Cardadmin
                                    key={car.id}
                                    imagen={car.imagen}
                                    modelo={car.modelo}
                                    precio={car.precio + " $"}
                                    id={car.id}
                                ></Cardadmin>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={5} xl={5}>
                        <Card sx={{ width: "auto" }}>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    height="10%"
                                    sx={{
                                        mr: 2,
                                        fontFamily: "Segoe UI",
                                        fontWeight: 700,
                                        fontSize: 30,
                                    }}
                                    marginBottom="20px"
                                >
                                    ¡Sube el nuevo modelo! {props.coches[0].id}
                                </Typography>
                                <Box component="form" onSubmit={submit}>
                                    <BasicTextFields
                                        id="modelo"
                                        label="Modelo Coche"
                                        name="modelo"
                                        value={data.modelo}
                                        handleChange={onHandleChange}
                                    ></BasicTextFields>
                                    <br></br>
                                    <BasicTextFields
                                        id="marca"
                                        label="Marca"
                                        name="marca"
                                        value={data.marca}
                                        handleChange={onHandleChange}
                                    ></BasicTextFields>
                                    <br></br>
                                    <BasicTextFields
                                        id="precio"
                                        label="Precio"
                                        name="precio"
                                        value={data.precio}
                                        type="number"
                                        handleChange={onHandleChange}
                                    ></BasicTextFields>
                                    <br></br>
                                    <BasicTextFields
                                        id="imagen"
                                        label="Imagen Coche"
                                        name="imagen"
                                        value={data.imagen}
                                        type="file"
                                        handleChange={onHandleChange}
                                    ></BasicTextFields>
                                    <br></br>
                                    <BtnSubmit processing={processing}>
                                        Añadir Coche
                                    </BtnSubmit>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </AuthenticatedLayout>
    );
}
