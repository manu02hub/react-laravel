import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Head } from "@inertiajs/react";

export const mainListItems = (
    <React.Fragment>
        <Link
            href={route("dashboard")}
            variant="body2"
            color="inherit"
            style={{
                textDecoration: "none",
                color: "white",
                textAlign: "center",
            }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>

        <Link
            href={route("coche-index")}
            variant="body2"
            color="inherit"
            style={{
                textDecoration: "none",
                color: "white",
                textAlign: "center",
            }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Coches" />
            </ListItemButton>
        </Link>

        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <Link
            href={route("logout")}
            variant="body2"
            color="inherit"
            style={{
                textDecoration: "none",
                color: "white",
                textAlign: "center",
            }}
            method="post"
        >
            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);
