import React from 'react'
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
        title: 'Contact Us',
        path :'/contact-us'

    },
    {
        title:'Login', 
        path : '/login'
    }

]
//interating through navlink array 

export default function Navigation () {
    return (<nav className="site-navigation">
        <span> McGill Engineering Frosh</span>
        <ul> 
            {navLinks.map((link,index) =>(
                    <li key={index}>
                        
                        <Link to={link.path}>{link.title}</Link>
                                    
                    </li>
            ))}
        </ul>
    </nav>)
}
