import React, {Fragment} from 'react'
import ReactDom from 'react-dom'
import 'bootswatch/dist/lux/bootstrap.min.css';


import List from './containers/List'

const App =()=>{

    return(
        <Fragment>
        <nav className="navbar navbar-dark bg-dark border-bottom border-white">
            <a href="/" className="navbar-brand">
                Images
            </a>
        </nav>
        
         <main className="bg-dark">
            <div className="container">
                <h1 className="p-4 text-white"> POSTERS</h1>
                <List></List>
            </div>
        </main>
        </Fragment>
    )
}

ReactDom.render(
     <App></App>,
     document.getElementById('root')
     );
