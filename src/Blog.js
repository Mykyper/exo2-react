import React, { Component } from 'react'
import NvPost from './NvPost'
import PostModale from './PostModale'
import './Blog.css'
import axios from 'axios'
import Post from './Post'
class Blog extends Component {
   state ={
    posts:[],
    selectPostId : null,
     toggle : false

   }
   
   componentDidMount(){
     axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
         const articles = response.data; 
         const postAuteur = articles.map((post)=>{return{
            ...post,auteur: "Hook" 
         }})
         console.log(articles);
         this.setState({
            posts:postAuteur
         })
     })
   }
   selectId =(id)=>{
    console.log(id)
    this.setState({
        selectPostId : id
    })

this.setState({
    toggle: true
})

   }

          fermer = () =>{
            this.setState({
                toggle: false
            })
          }

    render () {
        const posts = this.state.posts.map(post=>{
            return <Post  titre = {post.title} corps = {post.body} key = {post.id} auteur = {post.auteur} clicked={()=>this.selectId(post.id)}/> 
                   
            
        })
        console.log(posts)
        return (
            <div>
                <section>
                
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale  
                 id = {this.state.selectPostId}
                 cacher = {this.fermer}  change = {this.state.toggle}
                 />
                <section className="Posts">
                    {posts}
                    
                </section>

            </div>
        );
    }
}

export default Blog;