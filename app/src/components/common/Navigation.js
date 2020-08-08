import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import title from '../../assets/images/frosh2020-logoforwebsite2.svg'



const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 1,
  },
  
  menuButton: {
  
  },
  title: {
    color: 'black', 
 
  },
  list:{


},buttons:{
  marginLeft:'auto',
  color: 'black', 
  
 


},
button:{
  margin:11,
  fontSize: 15,
  


},
links:{
   
  color: 'black', 
  padding:0,
  '&:hover': {
    color: "#aa4a40",
 },



},
  logo:{
    padding:0,
    margin: 0

  },
  register:{
    color: 'white',
    backgroundColor : "#aa4a40",
  },
 
}));


//array with nav bar parts
const navLinks = [
    {
        title : 'Home', 
        path: '/'
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
//interating through navlink array 

export default function Navigation () {
    const classes = useStyles();
    const [menuActive, setMenuActive] = useState(false)
    return (

    
   <nav className="site-navigation" role="navigation">
    <div className={classes.root}>
    <AppBar position="fixed"  style={{ margin: 0, padding: 0, background: 'white', boxShadow: 'blur'}}>
          <Toolbar>
          <img src={title} alt="logo" className={classes.logo}/>
        
            <div className={classes.buttons}>
            
            {navLinks.map((link,index) =>(
                <Button className={classes.button}>
                  

                  <Link to={link.path} className={classes.links}>{link.title}</Link>
                              
             
                        
            </Button>))}
            <Button  className={classes.register}>Register now!</Button>
              </div>
 
        
      </Toolbar>
    </AppBar>
    </div>
</nav>
)
}
