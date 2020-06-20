import React, {useState} from 'react'
import {Link} from 'react-router-dom'


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
        title:'Login', 
        path : '/login'
    }

]
//interating through navlink array 

export default function Navigation () {

    const [menuActive, setMenuActive] = useState(false)
    return (

    <nav className="site-navigation" role="navigation">
        <span className = "menu-title"> </span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul> 
            {navLinks.map((link,index) =>(
                    <li key={index}>
                        
                        <Link to={link.path}>{link.title}</Link>
                                    
                    </li>
            ))}

             
        </ul>
       
       </div>

       <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)}/>

   </nav>
)
}
