import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import { lightBlue, orange, pink, grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export default function Dashboard(props) {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "nombre",
            headerName: "Nombre",
            width: 150,
            editable: true,
        },
        {
            field: "correo",
            headerName: "Correo",
            width: 150,
            editable: true,
        },
    ];

    const rows = [
        { id: 2, nombre: "Lannister", correo: "Cersei" },
        { id: 3, nombre: "Lannister", correo: "Jaime" },
        { id: 4, nombre: "Stark", correo: "Arya" },
        { id: 5, nombre: "Targaryen", correo: "Daenerys" },
        { id: 6, nombre: "Melisandre", correo: null },
        { id: 7, nombre: "Clifford", correo: "Ferrara" },
        { id: 8, nombre: "Frances", correo: "Rossini" },
        { id: 9, nombre: "Roxie", correo: "Harvey" },
    ];

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} md={12} xl={4}>
                    <Card
                        sx={{ maxWidth: 345, bgcolor: lightBlue[400] }}
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                    marginTop={"25px"}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: lightBlue[100],
                                        }}
                                    >
                                        <PeopleIcon></PeopleIcon>
                                    </Avatar>
                                </Stack>
                            </CardMedia>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    45 New Clients
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Card
                        sx={{ maxWidth: 345, bgcolor: orange[400] }}
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                    marginTop={"25px"}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: orange[100],
                                        }}
                                    >
                                        <LocalShippingIcon></LocalShippingIcon>
                                    </Avatar>
                                </Stack>
                            </CardMedia>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    5 New Delivery
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={4}>
                    <Card
                        sx={{ maxWidth: 345, bgcolor: pink[400] }}
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                    marginTop={"25px"}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: pink[100],
                                        }}
                                    >
                                        <BarChartIcon></BarChartIcon>
                                    </Avatar>
                                </Stack>
                            </CardMedia>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    200 $ Last Month
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} md={6} xl={6}>
                    <Card
                        sx={{
                            height: "400px",
                            width: "100%",
                            bgcolor: lightBlue[400],
                            padding: "10px",
                            paddingBottom: "70px",
                        }}
                    >
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
                            ¡Tus usuarios!
                        </Typography>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                            sx={{ bgcolor: grey[900] }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    );
}
