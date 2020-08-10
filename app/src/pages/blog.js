import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components/common'
import trending from '../assets/mocks/trending' 
import featured from '../assets/mocks/trending' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const trendingConfig = {
    1:{
        gridArea: '1 / 2 / 3 / 3'
        
    }
}

const featuredConfig = {

    0:{
        gridArea: '1 / 1 / 2 / 3', 
        height : '300px'
    },
    1:{
        height : '300px'
    }, 
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }

}

//merge our style with our post object 
const mergeStyles = function (posts, config){
    posts.forEach((post, index) => 
    {
        post.style = config[index]
        post.author = post.author
        post.description = post.description
    })
}

const recentPosts = [... trending, ...featured, ...featured]
mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastPost = featured.pop()

export default function Blog() {
    return <main className="blog">
    <section className="container home"> 
    <div className = "row-top"> 
        <section className= "featured-posts-container">
        <PostMasonry posts = {featured} columns= {2} tagsOnTop={true}/>
        <MasonryPost post={lastPost}  tagsOnTop={true}/>
        </section> 
     </div>
     </section>
    <section className="container home"> 
    <div className = "row"> 
        <h1>Recent Posts</h1>
        <PostGrid posts = {recentPosts}/>
    </div>
    </section>
        <section className="container home"> 
        <div className = "row"> 
        <PostMasonry posts = {trending} columns={3}/>
    </div>
    </section>

    <section className="ending">
      <footer className="footerend">
      <h2>McGill EUS Frosh 2020</h2>
      <section>
    
                <p className="p1" >Address : 845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4
                <br></br> <br></br>
                Phone : (514) 398-4455
                <br></br> <br></br>
                Email : oweek.mcgilleus.ca
                </p>
        <p className="p2">&copy; McGill EUS 2020 <br/>Made with 💕 by Massy Mahamli</p>
        <div className="social-container">
        <a
        href="https://www.youtube.com/c/McGillEngineeringOrientationWeek/"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="0.1x" />
      </a>
      <a
        href="https://www.facebook.com/EngineeringFrosh/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="0.1x" />
      </a>
      <a
        href="https://www.instagram.com/engineeringfrosh/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="0.1x" />
      </a>
      </div>
        </section>
    
        </footer>
        </section>
    </main>
    
}