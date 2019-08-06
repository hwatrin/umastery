import React from 'react';

//import props here
import ArticleLink from './Props/ArticleLink'
import App from '../App';

class Articles extends React.Component{
    constructor(){
        super();
        this.state = {
            Learning:[
                {
                    label: "The one app that will actually give you better grades",
                    link: "Anki"
                }
            ],
            Accomplishing:[
                {
                    label: "The productivity tool you probably won't use, but definitely should",
                    link: "Pomodoro"
                }
            ],
            Vision:[
                {
                    label: "You are the person who achieves your goals",
                    link: "Vision"
                },
                {
                    label: "How will I fail?",
                    link: "Inversion"
                }
            ]
        }

    }


    render(){
        App.setPage();
        let learningArticles = this.state.Learning.map(function(article){
            return(
            <ArticleLink propObject = {article}/>
            )
        })
        let accomplishingArticles = this.state.Accomplishing.map(article => (
            <ArticleLink propObject = {article} />
        ))
        let visionArticles = this.state.Vision.map(article => (
            <ArticleLink propObject = {article} />
        ))
        let propObject = {
            label: "Inversion",
            link: "Inversion"
        }
        return(
            <div className = "Articles">
                <h1 style = {{textAlign: 'center'}}>Articles</h1>
                <p>
                    Here you will find the secrets to creating the life you 
                    want through having a personal vision, mastering skills more effectively,
                    and getting more done. I'll be upfront the solutions on this page are not easy
                    and will take effort to implement into your life. If you take the time to
                    you will see as many others have that they work. Everything written is backed
                    by science or the experiences of successful people and can help you accomplish things
                    you don't think you are capable of right now. 
                </p>
                <div id = "ArticleLinks">
                    <div id = "learningArticles">
                        <b>Learning</b>  
                        {learningArticles}  
                        <br></br>
                    </div>
                    <div id = "accomplishArticles">
                        <b>Accomplishing</b>
                        {accomplishingArticles}
                        <br/>                    
                    </div>
                    <div id = "learningArticles">
                        <b>Vision</b>
                        {visionArticles}
                        <br></br>

                    </div>
                </div>
            </div>
        )
    }
}

export default Articles;