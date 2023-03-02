import React from "react";
import Cars from "@/Layouts/CarsLayout";
import { Grid } from "@mui/material";
import CardShop from "@/Components/CardShop";
import StickyFooter from "@/Components/Footer";

export default function Shop(props) {
    return (
        <Cars>
            <Grid
                sx={{ flexGrow: 1 }}
                container
                spacing={2}
                marginTop={"80px"}
                marginRight={"100px"}
                marginLeft={"100px"}
            >
                <Grid item xs={12} marginBottom="40px">
                    <Grid container justifyContent="center" spacing={2}>
                        {props.cars.map((car) => (
                            <CardShop
                                key={car.id}
                                imagen={car.imagen}
                                modelo={car.modelo}
                                precio={car.precio + " $"}
                                id={car.id}
                            ></CardShop>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <StickyFooter justifyContent="bottom"></StickyFooter>
        </Cars>
    );
}
