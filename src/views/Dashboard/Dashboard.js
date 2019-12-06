import React from 'react';
import {TextField, Typography, FormHelperText} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {LTR} from '../../direction';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import {Plugins} from "@capacitor/core";


const {Geolocation} = Plugins;

const styles = (theme) => ({
    root: {
        
        /*flip: false*/
    },
    myRaw: {
        display: "flex"
    },

    ele1: {
        color: "pink",
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundColor: 'red',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'blue',
          },
    },
   

  
});

class Dashboard extends React.Component {
    
    getGeoLocation = ()=>{
        Geolocation.getCurrentPosition().then((position)=>{
            const {latitude, longitude} = position.coords;
            alert(`lat: ${latitude}, long: ${longitude}`);
        });
    }

    render(){

        const {root,myRaw,ele1} = this.props.classes;
        const {width} = this.props;/* width: 'sm' \ 'xl' \ ... */
        
        

        return (
            <React.Fragment>
                <Typography variant="h3">
                    DASHBOARD GRAPHS
                </Typography>         
                    <LTR>
                        <TextField  margin="normal" type="text" label="name" />
                    </LTR>

                    <div className = {ele1}>
                        This is a responsive element - {width}
                        <button onClick={this.getGeoLocation}>Get Coordinates</button>
                    </div>

                    
            </React.Fragment>
        );
    }

}
//export default withStyles(styles)(Dashboard);
export default compose(
    withStyles(styles),
    withWidth()
)(Dashboard);
