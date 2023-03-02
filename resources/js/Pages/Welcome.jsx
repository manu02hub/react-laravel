import { Link, Head } from "@inertiajs/react";
import { Grid } from "@mui/material";
import Cars from "@/Layouts/CarsLayout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import BtnFilter from "@/Components/BtnFilter";
import CardVehicle from "@/Components/CardVehicle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import StickyFooter from "@/Components/Footer";
import { Icon } from "@mui/material";

export default function Welcome(props) {
    const logos = [
        "http://localhost/img/DWES/p4/logos/audi.png",
        "http://localhost/img/DWES/p4/logos/mclaren.png",
        "http://localhost/img/DWES/p4/logos/lambo.png",
        "http://localhost/img/DWES/p4/logos/porsche.png",
        "http://localhost/img/DWES/p4/logos/maseratti.png",
        "http://localhost/img/DWES/p4/logos/dodge.png",
    ];

    let cartaLogo = [];

    for (let index = 0; index < logos.length; index++) {
        cartaLogo.push(
            <Grid item xs={6} md={4} xl={2} container>
                <Card sx={{ width: 300, height: "auto" }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="120"
                            image={logos[index]}
                            alt="green iguana"
                        />
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    return (
        <>
            <Head title="Welcome" />
            <Cars>
                <Container maxWidth="xl" style={{ marginTop: "70px" }}>
                    <Grid container height={"100%"}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    xl={6}
                                    container
                                    justifyContent="center"
                                    marginTop={"80px"}
                                    marginX={"30px"}
                                >
                                    <Typography
                                        variant="h5"
                                        height="10%"
                                        width="100%"
                                        sx={{
                                            mr: 2,
                                            fontFamily: "Segoe UI",
                                            fontWeight: 700,
                                            fontSize: 70,
                                        }}
                                    >
                                        Premiun Cars Rental in Spain
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        marginTop={"90px"}
                                        sx={{
                                            mr: 2,
                                            fontFamily: "Segoe UI",
                                            textAlign: "justify",
                                            marginRight: "100px",
                                        }}
                                    >
                                        El viaje es más importante que el
                                        destino. Es por eso que Automobiles se
                                        esfuerza constantemente por mejorar la
                                        experiencia de conducción, abriendo
                                        nuevos horizontes que miran al futuro de
                                        la movilidad. Los servicios conectados
                                        están disponibles desde el primer
                                        instante a bordo a través del
                                        Infotainment System (IS), un sistema
                                        intuitivo que accede a la información
                                        directamente a través de la red y que
                                        permite gestionarla de un modo fácil y
                                        rápido. La experiencia no termina en el
                                        destino, sino que continúa a distancia.
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    xl={5}
                                    container
                                    justifyContent="center"
                                >
                                    <div className=" w-100">
                                        <img
                                            src="http://localhost/img/DWES/p4/lb2.png"
                                            width={"auto"}
                                            className="imgCoche"
                                            style={{ marginTop: "70px" }}
                                        ></img>
                                    </div>
                                </Grid>
                                {cartaLogo}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container
                    maxWidth="xl"
                    style={{
                        marginTop: "70px",
                        marginLeft: "100px",
                        marginRight: "100px",
                    }}
                >
                    <Grid container height={"100%"}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    xl={12}
                                    container
                                    justifyContent="center"
                                    textAlign="center"
                                    marginTop={"30px"}
                                >
                                    <Typography
                                        variant="h5"
                                        height="10%"
                                        width="100%"
                                        sx={{
                                            mr: 2,
                                            fontFamily: "Segoe UI",
                                            fontWeight: 700,
                                            fontSize: 65,
                                        }}
                                    >
                                        Our Vehicle Fleet
                                    </Typography>

                                    <Typography
                                        variant="body"
                                        marginTop={"65px"}
                                        sx={{
                                            mr: 2,
                                            fontFamily: "Segoe UI",
                                            textAlign: "justify",
                                            fontWeight: 400,
                                            fontSize: 25,
                                        }}
                                    >
                                        Proporcionamos a nuestros clientes las
                                        emociones de conducción más increíbles.
                                    </Typography>
                                    <Typography
                                        variant="body"
                                        sx={{
                                            mr: 2,
                                            fontFamily: "Segoe UI",
                                            textAlign: "justify",
                                            fontWeight: 400,
                                            fontSize: 25,
                                        }}
                                    >
                                        Es por eso que solo tenemos autos de
                                        clase mundial en nuestros pies.
                                    </Typography>
                                </Grid>

                                {/* {cartaLogo} */}
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    xl={12}
                                    container
                                    justifyContent="center"
                                    textAlign="center"
                                    marginTop={"30px"}
                                >
                                    <Stack
                                        spacing={2}
                                        direction="row"
                                        marginBottom={"30px"}
                                    >
                                        <BtnFilter
                                            textBtn={"Premium"}
                                        ></BtnFilter>
                                        <BtnFilter
                                            textBtn={"Coupe"}
                                        ></BtnFilter>
                                        <BtnFilter
                                            textBtn={"Hypercars"}
                                        ></BtnFilter>
                                        <BtnFilter
                                            textBtn={"SportCar"}
                                        ></BtnFilter>
                                        <BtnFilter
                                            textBtn={"Electrick"}
                                        ></BtnFilter>
                                        <BtnFilter textBtn={"Suv"}></BtnFilter>
                                    </Stack>
                                </Grid>
                                <CardVehicle
                                    ancho={300}
                                    columna={4}
                                    imagen={
                                        "http://localhost/img/DWES/p4/cartas/audi.jpg"
                                    }
                                ></CardVehicle>
                                <CardVehicle
                                    ancho={300}
                                    columna={4}
                                    imagen={
                                        "http://localhost/img/DWES/p4/cartas/dodge.jpg"
                                    }
                                ></CardVehicle>
                                <CardVehicle
                                    ancho={300}
                                    columna={4}
                                    imagen={
                                        "http://localhost/img/DWES/p4/cartas/lambo.jpg"
                                    }
                                ></CardVehicle>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    xl={12}
                                    container
                                    justifyContent="center"
                                    textAlign="center"
                                    marginLeft={"30px"}
                                    marginRight={"30px"}
                                    marginBottom={"20px"}
                                    spacing={2}
                                >
                                    <CardVehicle
                                        ancho={200}
                                        columna={3}
                                        imagen={
                                            "http://localhost/img/DWES/p4/cartas/maseratti.jpg"
                                        }
                                    ></CardVehicle>
                                    <CardVehicle
                                        ancho={200}
                                        columna={3}
                                        imagen={
                                            "http://localhost/img/DWES/p4/cartas/mclaren.jpg"
                                        }
                                    ></CardVehicle>
                                    <CardVehicle
                                        ancho={200}
                                        columna={3}
                                        imagen={
                                            "http://localhost/img/DWES/p4/cartas/porche.jpg"
                                        }
                                    ></CardVehicle>
                                    <CardVehicle
                                        ancho={200}
                                        columna={3}
                                        imagen={
                                            "http://localhost/img/DWES/p4/cartas/ferrari.jpg"
                                        }
                                    ></CardVehicle>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    xl={12}
                                    container
                                    justifyContent="center"
                                    textAlign="center"
                                    marginBottom={"30px"}
                                >
                                    <Typography
                                        variant="body"
                                        height="10%"
                                        width="100%"
                                        sx={{
                                            mr: 2,
                                            fontFamily: "Segoe UI",
                                            fontWeight: 500,
                                            fontSize: 30,
                                        }}
                                    >
                                        <Link
                                            href="/"
                                            style={{
                                                textDecoration: "none",
                                                color: "white",
                                            }}
                                        >
                                            <Button
                                                variant="outlined"
                                                style={{
                                                    color: "white",
                                                    border: "white 1px solid",
                                                }}
                                                endIcon={
                                                    <ArrowForwardIcon fontSize="large"></ArrowForwardIcon>
                                                }
                                            >
                                                Show All Models
                                            </Button>
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <StickyFooter justifyContent="bottom"></StickyFooter>
            </Cars>
        </>
    );
}
