import React, { Component } from 'react'
import axios from 'axios' 
import './NvPost.css'

class NvPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Hugo'
    }
 varticle = () => {   
       const nvArticle = {title: this.state.title,
                        body: this.state.content ,
                        auteur: this.state.author,
    }  
    axios.post("https://jsonplaceholder.typicode.com/posts").then((response) => {
        console.log(" ma reponse" + response)
        this.setState({
            title: '',
            content: '',
            author: ''
        })
    }
    )  
 }
    render () {
        return (
            <div className="NvPost form-group">
                <h1>Ajouter un Article</h1>
                <label>Titre</label>
                <input className="form-control" type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Contenu</label>
                <textarea className="form-control" rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Auteur</label>
                <select className="form-control" value= {this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Assalé">Assalé</option>
                    <option value="Oumou">Oumou</option>
                    <option value="Cyril">Cyril</option>
					<option value="Noham">Noham</option>
                </select>
                <button className="btn btn-success my-3" onClick={this.varticle} >Ajouter un Article</button>
            </div>
        );
    }
}

export default NvPost;