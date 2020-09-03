import React,{Component} from 'react';
//import { BrowserRouter as Link, useHistory } from "react-router-dom";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        localStorage.clear();
   // const history = useHistory();
   // history.push("/");
    
   if(localStorage.getItem('ab')!=null){
    return ( <h1>Logout</h1>  );
    
   } else {
    return ( <h1>You are not Logged In</h1>  );
   }
       
    }
}
 
export default Logout;