import React from 'react';
import PropTypes from 'prop-types';
import {compose, fromRenderProps} from 'recompose';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    submitIcon: {
      marginRight: theme.spacing.unit*2,
      marginleft: theme.spacing.unit*2,
    }
  });
  


class Login extends React.Component {
    _isMounted = false;

    state = {
        username: '',
        password: '',
        isInProgress: true,
        errorMsg: ''
    }
    
    componentDidMount(){
      this._isMounted = true;
      checkIfAuth()
        .then(({isAuth})=>{     
            if(this._isMounted){
              this.setState(()=>({
                isInProgress: false
              
              }))
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
      this.setState(()=>({
        isInProgress: true
      
      }))
      const {username, password} = this.state;
          signIn({username,password}).then(({isAuth})=>{
            if(this._isMounted){
              this.setState(()=>({
                isInProgress: false
              }))
            }
      }).catch((e)=>{
        if(this._isMounted){
          const {message} = e;
          this.setState((prevState)=>({
            errorMsg: message,
            isInProgress: false

          }))
        }
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
          Sign in - {this.state.isInProgress && "loading..."}
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
                 disabled={this.state.isInProgress}
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
                onChange={this.onPasswordChange}
                disabled={this.state.isInProgress}
             />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          {
            this.state.errorMsg &&
            <FormControl fullWidth error aria-describedby="component-error-text">
              <FormHelperText >* {this.state.errorMsg}</FormHelperText>
            </FormControl>
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.logIn}
            disabled = {this.state.isInProgress}
          >
            {this.state.isInProgress &&  <CircularProgress className={classes.submitIcon} color="primary" size={20}/>}
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

