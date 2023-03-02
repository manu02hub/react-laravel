import React from "react";
import Cars from "@/Layouts/CarsLayout";
import CardShopPay from "@/Components/CardShopPay";
import { Grid } from "@mui/material";
import PayPal from "@/Components/PayPal";
import { useState } from "react";

export default function Carrito(props) {

    function suma() {
        var su = 0;
        props.carrito.map((car) => (su = su + parseInt(car.precio)));
        return su;
    }

    const precio = props.carrito.map(suma);

    const [precioTotal, setPrecioTotal] = useState(parseInt(precio));

    return (
        <Cars>
            <Grid
                sx={{ flexGrow: 1 }}
                container
                spacing={2}
                marginTop={"80px"}
                marginRight={"20px"}
            >
                <Grid item xs={12} md={8} xl={8}>
                    <Grid container justifyContent="center" spacing={2}>
                        {props.carrito.map((car) => (
                            <CardShopPay
                                key={car.id}
                                imagen={car.imagen}
                                modelo={car.modelo}
                                precio={car.precio}
                                marca={car.marca}
                                setPrecioTotal={setPrecioTotal}
                            ></CardShopPay>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Grid container justifyContent="center" spacing={2}>
                        <PayPal total={precioTotal}></PayPal>
                    </Grid>
                </Grid>
            </Grid>
        </Cars>
    );
}
