import React from 'react';
import Android from './Images/Android.svg';
import iPhone from './Images/iPhone.svg';

let iconSize = '50px';

class Footer extends React.Component{
    render(){
        return(
            <div id = "Footer" style = {{textAlign: "center", marginTop: '50px'}}>
                <p style={{color: 'darkgrey'}}>Copyright &copy; uMastery 2019</p>
            </div>
        )
    }
}

export default Footer;