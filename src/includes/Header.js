import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/umd/parse';
import match from 'autosuggest-highlight/umd/match';


const Filters = [
    { title: 'All Products' },
    { title: 'New Products' },
    { title: 'Set' },
    { title: 'Skincare' },
    { title: 'Hair & Body Care' },
    { title: 'Accessories' },
  ];
  

export default function Header(){
    const classes = useStyles();
    return (
        <div style={classes.Header}>
        <Grid container className={classes.Header__container} style={{height:'100%', alignItems:'center',paddingLeft:'50px'}}>
        <Grid item md={6}>
            <Typography variant="h5">All Products</Typography>
            <Typography>A 360° look at Lumin</Typography>
        </Grid>
        <Grid item md={6}>
        <Autocomplete
            id="highlights-demo"
            style={{ width: 300 }}
            options={Filters}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField {...params} label="Filter by" variant="outlined" margin="normal" style={{backgroundColor:'#fff'}} />
            )}
            renderOption={(option, { inputValue }) => {
                const matches = match(option.title, inputValue);
                const parts = parse(option.title, matches);

                return (
                <div>
                    {parts.map((part, index) => (
                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400,backgroundColor:'#fff' }}>
                        {part.text}
                    </span>
                    ))}
                </div>
                );
            }}
            />
        </Grid>
        </Grid>
        </div>
    )
}


const useStyles = () => ({ 
    Header:{
        height:'35vh',
        backgroundColor:"#F5F5F4"
    },
    Header__container:{
        display:'flex',
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }

})