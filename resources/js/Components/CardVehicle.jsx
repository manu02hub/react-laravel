import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function CardVehicle({ columna, ancho, imagen }) {
    return (
        <Grid item xs={6} md={4} xl={columna} container>
            <Card sx={{ width: "auto", height: "auto" }}>
                <CardMedia
                    component="img"
                    height={ancho}
                    image={imagen}
                    alt="green iguana"
                />
            </Card>
        </Grid>
    );
}

export default CardVehicle;
