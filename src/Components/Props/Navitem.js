import React from 'react';
import App from '../../App';

var url = window.location.href;
var urlSplit = url.split('/');


class Navitem extends React.Component{
    
    render(){
        var activeLink = "";
        if(App.returnPageState() == "Home" && this.props.item.label == "Home"){
            activeLink = "active nav-link";
        }else if(App.returnPageState() != "Home" && this.props.item.label != "Home"){
            activeLink = "active nav-link";
        }else{
            activeLink = "nav-link";
        }

        if(this.props.item.label == "Free Newsletter"){
            return(
            <li className = "nav-item">
                <a href={this.props.item.label} data-toggle="modal" data-target = "#subscribeModal" className="nav-link" name = {this.props.item.label}>{this.props.item.label}<span class="sr-only">(current)</span></a>
            </li>
            )
        }
        return(
        <li>
            <a onClick={App.setPage.bind(this, this.props.item.label)} className= {activeLink} name = {this.props.item.label}>{this.props.item.label}</a>
        </li>
        )
    }
}

//TODO put this back: data-toggle="modal" data-target={this.props.item.label == "Subscribe" ? "#subscribeModal" : ""}
export default Navitem;