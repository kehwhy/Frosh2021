import React from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

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
        <span className = "menu-title"> </span>
 
        <ul> 
            {navLinks.map((link,index) =>(
                    <li key={index}>
                        
                        <Link to={link.path}>{link.title}</Link>
                                    
                    </li>
            ))}
        </ul>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

    </nav>)
}
