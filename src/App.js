import React from 'react';

//import components from every page here
import Navbar from './Components/Navbar'

//import onetime components here
import Home from './Components/Home'
import Articles from './Components/Articles'
import Footer from './Components/Footer';


//import css files here
import './App.css';
import Goals from './Articles/Vision/Goals';
import ArticleTemplate from './Components/ArticleTemplate';

//all article imports under here
//import vision articles here
import Inversion from './Articles/Vision/Inversion';
import Vision from './Articles/Vision/Vision';

//import learning articles here
import Anki from './Articles/Learning/Anki.js';

//import accomplishing articles here
import Pomodoro from './Articles/Accomplishing/Pomodoro.js';

//allow us to change the main content of the page from one object

let currentPage = 'Home';
class App extends React.Component{
  constructor(){
    super();

    App.setPage = App.setPage.bind(this)
    App.returnPageState = App.returnPageState.bind(this);
    //make an array to set our state value
    let mainContentSetter = [];
      mainContentSetter['Home'] = <Home />
      mainContentSetter['Articles'] = <Articles />
      mainContentSetter['Subscribe'] = <Home />
      mainContentSetter['Learn'] = <h1>Learn</h1>
      mainContentSetter['Accomplish'] = <h1>Accomplish</h1>
      mainContentSetter['Vision'] = <h1>Vision</h1>
      mainContentSetter['Inversion'] = <Inversion />
      mainContentSetter['Anki'] = <Anki />
      mainContentSetter['Pomodoro'] = <Pomodoro />
      mainContentSetter['Vision'] = <Vision />
      
  

    this.state = {
      //the purpose of this variable is to choose the content on the page
      pageState: 'Home',
      mainContent: mainContentSetter
    }

  }
  static returnPageState(){
    return this.state.pageState;
  }
  static setPage(page){
    if(page == undefined){
      this.setState({
        pageState: 'Articles'
      })
    }else{
      this.setState({
        pageState: page
      })
    }
    
  }
  
  //this allows other pages to affect what content goes on the page
  //currently it is called in the Navbar and Home files only
  
 

  render(){
    return(
        <div>
            <Navbar />
            {this.state.mainContent[this.state.pageState]}
            <Footer />
        </div>
    )
  }
}

export default App;
