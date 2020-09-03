import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {state: this.props.location.state }
    }
  

    render() { 
        if(localStorage.getItem('ab')==null){
            return Redirect("/");
        }

    return ( <h1>{this.state.state.name}</h1> );
    }
}
 
export default Profile;