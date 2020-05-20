import React from 'react'


const Card = ({elemento}) => {
    return(
        <div className="col-md-4">
            <div className="card">
                <img src={elemento.url} alt={elemento.title} className="card-img-top" width="100"/>
                <div className="card-body">
                    <h4>{elemento.title} {elemento.albumId}</h4>
                    <p>{elemento.id}</p>
                </div>
            </div>
        </div>
    )
}

export default Card

