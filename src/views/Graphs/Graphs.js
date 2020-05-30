import React from 'react';
import TodosList from "../../components/TodosList";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import Modal from "../../components/Modal";
import { Grid } from '@material-ui/core';
import GraphA from './GraphA';
import GraphB from './GraphB';


const Graphs = ()=>{
    return (
        <div style={{padding: '3.2rem'}}>
<Grid container spacing ={ 4}>
<Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
        <GraphA/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
       <GraphA/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          C
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          D
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
       <GraphB/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
         F
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          G
             </Grid>
</Grid>
</div>
);

}

export default Graphs;