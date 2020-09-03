import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  
componentDidMount(){
    axios.get('http://localhost:2500/api/users/profile/5f4ea5657fc64846577cbaaf' )
    .then(res => {
        console.log(res);
       
    })
    .catch((err) => {
        console.log(err.res.data); // you can get the response like this
    });
}


    render() { 
        if(localStorage.getItem('token')==null){
            return Redirect("/");
        }

    return ( <h1>Hi</h1> );
    }
}
 
export default Profile;