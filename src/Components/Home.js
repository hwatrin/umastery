import React from 'react';

//import the card in order to use it as a component
import Card from './Bootstrap/Card';

//import neccessary image URLs
import PlainBrain from './Images/PlainBrain.PNG'
import Checklist from './Images/Checklist.PNG'
import Vision from './Images/PlainUpandUp.PNG';
import App from '../App';


//this is the html that will display on the home page of the app
class Home extends React.Component{
    constructor(){
        super()

        this.state = { 
            cards:[
                {
                    id: "Learn",
                    title: "Learn Faster",
                    text: "Learn the techniques to learn faster and remember things for longer that you were never taugth in school.",
                    imgURL: PlainBrain,
                    click:this.handleClick
                },
                {
                    id: "Accomplish",
                    title: "Accomplish More",
                    text: "Want to make quicker progress on your goals? Learn how to get more of the things that matter done using strategies employed by top performers.",
                    imgURL: Checklist,
                    click: this.handleClick
                },
                {
                    id: "Vision",
                    title: "Find Your Vision",
                    text: "Don't know exactly what you want with your life? Or perhaps you do but don't quite know how to get there? Find out how you can not only have a vision for the future but see that vision come to fruition.",
                    imgURL: Vision,
                    click:this.handleClick
                }
            ],
            card:{
                title: "Learn Faster"
            }
        }
    }

    handleClick(event){
        App.setPage("Articles");
    }

    render(){
        let cards = this.state.cards.map(function(card){
            return(
                <Card cardInfo = {card}/>
            )
        });
        return(
            <div>
                <div id = "Jumbo" className="jumbotron vertical-center">
                    <div className = "container">
                    <h1 className="display-4">uMastery</h1>
                    <p className="lead">You are the person who achieves your goals, this is the platform you use to do it.</p>
                    <hr className="my-4"/>
                    <a className="btn btn-lg" id = "jumboButton" onClick={App.setPage.bind(this,"Vision")} role="button">Learn how</a>
                    </div>
                </div>
                <div className = "card-deck container" style = {{textAlign: 'center', margin: 'auto'}}> 
                    {cards}                 
                </div>
            </div>
        )
    }
}

export default Home; 