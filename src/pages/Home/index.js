import React, {useState} from 'react';
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'

import {MovieIcon} from '../../icons';
import styles from './style';

export default ({history}) => {
    const [searchText, setSearchText] = useState('');

    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextClick = event => {
        setSearchText(''); 
    };

    const handleSearchTextClick = event => {
        history.push("/results?movieName="+searchText);
    };

    return(
        <Container className={classes.Container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <MovieIcon className={classes.movieIcon}/>
                </Grid>
                <TextField
                value={searchText}
                placeholder="Buscar..."
                className={classes.textFieldSearch}
                onChange={handleSearchTextChange}/>
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" color="primary" className={classes.searchButton} size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    );
}