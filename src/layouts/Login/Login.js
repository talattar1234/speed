import React from 'react';
import PropTypes from 'prop-types';
import {compose, fromRenderProps} from 'recompose';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {signIn, checkIfAuth} from '../../logics/userSettingsLogic';
import {getAuthMode} from '../../selectors/userSettingsSelector';
//import {setUserSettingsFromToken} from '../../logics/userSettingsLogic';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });
  


class Login extends React.Component {
    _isMounted = false;

    state = {
        username: '',
        password: '',
        isInProgress: false
    }
    
    componentDidMount(){
      this._isMounted = true;
      checkIfAuth()
        .then(({isAuth})=>{
          if(isAuth === true){
            if(this._isMounted){
              this.setState(()=>({
                isInProgress: false
              }))
            }
        
          }
        })
        .catch((e)=>{

        })
      
    }

    componentWillUnmount(){
      this._isMounted = false;
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(()=>({
            username
        }))
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(()=>({
            password
        }))
    }

    logIn = (e)=> {
      e.preventDefault();  
      const {username, password} = this.state;
          signIn({username,password}).then(({isAuth})=>{
              // set error msg
      });  
    }

    render() {
        const { classes, isAuth } = this.props;

        let { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
        if(isAuth){
          return <Redirect to={from} />
        }

  return (
    <main className={classes.main}>
    
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email"
                 name="email"
                 autoComplete="email"
                 autoFocus
                 value={this.state.username}
                 onChange={this.onUsernameChange}
                  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input 
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onSubmit={this.onPasswordChange}
             />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.logIn}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
    }

}

const mapStateToProps = (state) => ({
  isAuth: getAuthMode(state)
})



export default compose(withStyles(styles),connect(mapStateToProps))(Login)

