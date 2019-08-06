//**In order to change the properties of this page use the state variable**/


import React from 'react';

//import props here
import Navitem from './Props/Navitem';
import App from '../App';


//TOOD: Delete this import at the appropriate time
import Modal from './Bootstrap/Modal';
import SubscribeForm from './Props/SubscribeForm';


class Navbar extends React.Component{
    constructor(){
        super()

        //change the navitems here
        this.state ={
            navitems:[
                {
                    label:"Home"
                },
                {
                    label:"Articles"
                },
                {
                    label:"Free Newsletter"
                }
            ]
        }

    }

  

    render(){
        
        let modalContent = {
            id: "subscribeModal"
        }
        let navitemsMapped = this.state.navitems.map(item => (<Navitem  item = {item}/>))
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">uMastery</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {navitemsMapped}
                        <Modal content={modalContent}><SubscribeForm /></Modal>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;