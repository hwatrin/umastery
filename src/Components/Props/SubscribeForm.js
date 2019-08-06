import React from 'react';

class SubscribeForm extends React.Component{
    constructor(){
        super();

        this.state = {
            email: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            email: event.target.value
        })
    }

    render(){
        let button = <button className = "form-control btn-primary">Subscribe</button>
             
        if(this.state.email == ""){
            button = <button className = 'form-control btn-disabled' disabled>Subscribe</button>
        }else{
            button = <button className = 'form-control btn-primary'>Subscribe</button>
        }
        
        return(
            <form action = "formsubmitted.php">
                <h2>Create the life you want today</h2>
                <h6>Sign up to receive weekly emails on how to learn and achieve more.</h6>
                <br></br>
                <div className = "form-group">
                    <input type="email" name = "email" onChange = {this.onChange} className="form-control" placeholder="Your best email here"/>
                </div>
                <br></br>
                {button}
            </form>
        )
    }
}

export default SubscribeForm;