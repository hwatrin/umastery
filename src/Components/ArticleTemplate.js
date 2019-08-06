import React from 'react';

class ArticleTemplate extends React.Component{
    constructor(){
        super();

        this.state = {

        }
    }


    render(){
        return(
            <div className = "Articles">
                <h1 className = "ArticleTitle">{this.props.title}</h1>
                <p className = "ArticleContent">{this.props.children}</p>
            </div>
        )
    }
}

export default ArticleTemplate;