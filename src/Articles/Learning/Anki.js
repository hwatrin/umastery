import React from 'react';

class Anki extends React.Component{
    
    constructor(){
        super()

        this.state = {
            title: "The one app that will actually help you earn better grades"
        }
    }
    render(){
        return(
        <div className = "Articles">
            <h1>The one app that will actually help you have better grades</h1>
            <br></br>
            <p>In 1945....</p>
        </div>
        )
    }
}

export default Anki;