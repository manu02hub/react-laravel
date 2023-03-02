import React from "react";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function CardShopPay({
    modelo,
    marca,
    precio,
    imagen,
    setPrecioTotal
}) {
    const [cantidad, setCantidad] = useState(1);

    const modificarCantidad = (e) => {
        setCantidad(e.target.value);
        addCantidad();
    };

    const addCantidad = () => {
        setPrecioTotal((total) => total + precio * cantidad);
    }


    return (
        <Grid item xs={12} md={12} xl={12} container justifyContent="center">
            <Divider />
            <Card sx={{ display: "flex", width: "90%" }}>
                <CardMedia
                    component="img"
                    sx={{ width: "30%" }}
                    image={imagen}
                    alt="Live from space album cover"
                />

                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "50%",
                            }}
                        >
                            <Typography component="div" variant="h5">
                                {modelo}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                            >
                                {marca}
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                marginTop="20px"
                            >
                                {precio} €
                            </Typography>
                        </Box>
                        {/* <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            textAlign={"center"}
                        >
                            x1
                        </Typography> */}
                        <TextField
                            id="outlined-basic"
                            label="Unidades"
                            variant="outlined"
                            type={"number"}
                            value={cantidad}
                            onChange={modificarCantidad}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}
