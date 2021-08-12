import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import logo from "../../assets/images/frosh2021logo.svg"
import "../../assets/scss/_font.scss";
import "../../assets/scss/_navigation.scss";

import {Link} from 'react-router-dom'

const styleSheet = {
  root: {

    padding:0,
    margin:0
  },
  paper: {
    color:"black"
  },
  list : {
    width : 100,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "black",
    cursor : "pointer",
  },
  list:{
    color: "black"

  },buttons:{
    marginLeft:'auto',
    color: 'black',
    height: "100%",
  },
  button:{
    margin:11,
    fontSize: "1.5vw",
  },
  links:{
    color: 'black', 
    padding:0,
    fontFamily: 'TopSecret',

    '&:hover': {
      color: "#be103f",
   }
  },
   register:{
    color: 'white',
    backgroundColor : "#aa4a40",
    fontFamily: 'Montserrat',
    fontSize: 24,
    
    '&:hover': {
      backgroundColor: "white",
   }
  }

  
}


//array with nav bar parts
const navLinks = [
  {
      title : 'Home', 
      path: '/'
  },
  {
    title: 'Schedule',
    path: '/schedule',
  },
  {
    title: 'Coordinators',
    path: '/coordinators',
  },
  {
      title: "Blog",
      path: '/blog'
  }, 
  {
    title: 'FAQ',
    path :'/faq'

  },
  {
    title: 'Resources',
    path:'/resources'
  },
]


class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 880){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 880){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div className={styleSheet.root}>
        <AppBar position="fixed"  style={{ margin: 0, padding: 0, background:'white', boxShadow: 'blur',height:60}} >
          <Toolbar style={{background: 'white'}}>
          
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

            
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}
         classes={{paper: this.props.classes.paper}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>
              

         
            <List classes = {{list: this.props.classes.list}}>
            {navLinks.map((link,index) =>(
               <ListItem key = {1} button divider><Link to={link.path} classes={{links: this.props.classes.links}}>{link.title}</Link> </ListItem>
               ))}
                 {/* <ListItem key = {1} button divider ><a href="https://mcgill-orientation-week.eventus.io">Register now!</a></ListItem> */}
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar position="fixed"  style={{flexGrow:0, margin: 0, padding: 0, background:'white', boxShadow: 'blur', height:'5vw',}}>
        <Toolbar>
            <div className="logo">
              <img className="logo-img" src={logo} alt="Frosh 2021:The Ultimate Heist logo"></img>
            </div>
            <div className={classes.buttons}>
            
              {navLinks.map((link,index) =>(
                  <Button className={classes.button}>
                    <Link to={link.path} className={classes.links}>{link.title}</Link>
                  </Button>))}
            
              {/* <Button  className={classes.register}><a className={classes.register} href="https://mcgill-orientation-week.eventus.io">Register now!</a></Button> */}
            </div>

        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);