import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CardAdmin({ imagen, modelo, precio, id }) {
    return (
        <>
            <Grid item xs={6} md={6} xl={6}>
                <Card>
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
                        <Button endIcon={<EditIcon />} size="small">
                            <Link
                                href={route("coche-edit", { id })}
                                variant="body2"
                                color="inherit"
                                style={{
                                    textDecoration: "none",
                                    color: "warning",
                                    textAlign: "center",
                                }}
                            >
                                Edit
                            </Link>
                        </Button>
                        <Button endIcon={<DeleteIcon />} size="small">
                            <Link
                                href={route("coche-destroy", { id })}
                                variant="body2"
                                color="inherit"
                                style={{
                                    textDecoration: "none",
                                    color: "danger",
                                    textAlign: "center",
                                }}
                            >
                                Destroy
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
