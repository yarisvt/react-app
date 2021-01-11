import '../css/App.css';
import React, {useState, useEffect} from "react";

import {Grid, Button, Typography} from "@material-ui/core";

export default function App() {
    useEffect(() => {
        const interval = setInterval(getCurrentTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const [time, setTime] = useState("");


    function getCurrentTime() {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }
        fetch("/api/time", requestOptions)
            .then((response) => response.json())
            .then((data) => setTime(data.time))
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={getCurrentTime}>Get current Time</Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h4">{time}</Typography>
            </Grid>
        </Grid>
    )
}