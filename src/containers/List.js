import React, {Fragment} from 'react'
import Card from '../components/Card/Card'
import { element } from 'prop-types';

const API = 'https://jsonplaceholder.typicode.com/albums/1/photos'

class List extends React.Component{

    constructor(){
        super();
        this.state={
            data:[],
            searchTerm:'',
            error:'',
            indice:[]
        }
    }

    async componentDidMount(){
        //const res =await fetch('../../assets/data.json')
        const res = await fetch(`${API}`)
        const resJson = await res.json();
        this.setState({data:resJson})
        
    }

    async handleSubmit(e){

        
        e.preventDefault();
        if(!this.state.searchTerm){
            
            return this.setState({error:'escribe otra cosa'})
            
        }
        
        

        const res = await fetch(`${API}`)
        const res2 = await res.json();
        console.log(res2[this.state.searchTerm]);
        const res3 = res2[this.state.searchTerm]
        

    }

    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e)=>this.handleSubmit(e)} >
                            <input type="text" 
                            className="form-control" 
                            placeholder="search"
                            onChange={e=>this.setState({searchTerm:parseInt(e.target.value)})}
                            autoFocus
                            />
                        </form>
                        <p className="text-white">
                            {this.state.error ? this.state.error:''}
                        </p>
                    </div>
                </div>
                <div className="row">
            {
                    this.state.data.map(elemento =>{
                        return <Card elemento={elemento}></Card>
                })
            }
                </div>
            </Fragment>
        )
    }
}



export default List

