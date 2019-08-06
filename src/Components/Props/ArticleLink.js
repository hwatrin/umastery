import React from 'react';
import App from '../../App';

class ArticleLink extends React.Component{
    render(){
        return(
            <div>
                - <a onClick={App.setPage.bind(this, this.props.propObject.link)}><span className="ArticleLink">{this.props.propObject.label}</span></a>
            </div>
        )
    }
}

export default ArticleLink;