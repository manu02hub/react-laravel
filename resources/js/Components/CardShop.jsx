import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "@inertiajs/react";

export default function CardShop({ imagen, modelo, precio, id }) {
    return (
        <>
            <Grid item xs={6} md={4} xl={3} container justifyContent="center">
                <Card sx={{ width: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        style={{ marginTop: "10px" }}
                        image={imagen}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {modelo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {precio}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button endIcon={<ShoppingCartIcon />} size="small">
                            <Link
                                href={route("add", { id })}
                                variant="body2"
                                color="inherit"
                                style={{
                                    textDecoration: "none",
                                    color:"inherit",
                                    textAlign: "center",
                                }}
                            >
                                Añadir a carrito
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
