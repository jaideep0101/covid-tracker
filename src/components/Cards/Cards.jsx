import React from "react";
import {Card,CardContent,Typography,Grid} from '@mui/material';
import styles from "./Cards.module.css"

const Cards =(data)=>{
    console.log(data)
  
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
<Grid item component={Card}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Infected</Typography>
        <Typography variant="h5"></Typography>
        <Typography color="textSecondary"></Typography>
        <Typography variant="body2">Number of active cases of COVID-19</Typography>
    </CardContent>
</Grid>
<Grid item component={Card}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
        <Typography variant="h5"></Typography>
        <Typography color="textSecondary">Real data</Typography>
        <Typography variant="body2">Number of active cases of COVID-19</Typography>
    </CardContent>
</Grid>
<Grid item component={Card}>
    <CardContent>
        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
        <Typography variant="h5"></Typography>
        <Typography color="textSecondary">Real data</Typography>
        <Typography variant="body2">Number of active cases of COVID-19</Typography>
    </CardContent>
</Grid>
           </Grid>
       </div>
    )
}

export default Cards;