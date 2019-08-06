import React from 'react';
//TODO: add this code once I have images for each card:
//


class Card extends React.Component{
    
    render(){
        let propsHandle = this.props.cardInfo; 
        return(
                <div id = {propsHandle.id} className = "card col-sm-4 HomeCard" style={{width: "18rem"}} onClick = {propsHandle.click}>
                    <img id = {propsHandle.id} style = {{transform:'scale(.33,1)'}} src={propsHandle.imgURL} className="img-fluid" alt="..."/>
                    <div id = {propsHandle.id} className = "card-body">
                        <h5 id = {propsHandle.id} style = {{margin: 'auto', textAlign: 'Center'}}className = "card-title">{propsHandle.title}</h5>
                        <p id = {propsHandle.id} className= "card-text">{propsHandle.text}</p>
                    </div>
                </div>
                
        )
    }
}

export default Card;