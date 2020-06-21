import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components/common'
import trending from '../assets/mocks/trending' 
import featured from '../assets/mocks/trending' 

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
        post.author = 'Massy Mahamli'
        post.description = 'coucou ça va'
    })
}

const recentPosts = [... trending, ...featured, ...featured]
mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastPost = featured.pop()

export default function Blog() {
    return <main className="blog">
    <section className="container home"> 
    <div className = "row"> 
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
    </main>
    
}