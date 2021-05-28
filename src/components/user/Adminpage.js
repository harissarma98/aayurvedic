import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function Admin(){
    return(
        <section class="info_section layout_padding">
        <>
        <Grid container spacing={1} style = {{fontFamily:"monospace"}}>
                <Grid item xs = {2}/>
                <Grid item xs = {8} style ={{margin : "5%"}}>
                    <Card style = {{backgroundColor:"#dde4e6"}}>
                        <Paper style = {{backgroundColor:"#dde4e6"}}>
                            <h1>Welcome to the Admin Board</h1>
                            
                            <Grid container spacing={1} style ={{padding : 40}}>
                            <Grid item xs = {1}/>
                            <Grid item xs = {4} >
                                <Card style = {{backgroundColor:"#c3cacb"}}>
                                    <h3>Manage Doctor</h3>
                                    <br/>
                                    <Button align = "right" href = "/admin/add-user">Add Doctors</Button>
                                    <Button align = "left" href = "/admin/users">View Doctors</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {2}/>
                            <Grid item xs = {4}>
                                <Card style = {{backgroundColor:"#c3cacb"}}>
                                    <h3>Manage Product</h3>
                                    <br/>
                                    <Button align = "right" href = "/admin/add-product">Add Product</Button>
                                    <Button align = "left" href = "/admin/products">View Product</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {1}/>
                            </Grid>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs = {2}/>
        </Grid>
         
        
    
        </>
    
    </section>
    )
} 
export default Admin