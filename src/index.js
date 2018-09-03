import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';

const options= {
   timeout:5000,
   position:"bottom center",
   transition:"fade",
}

class Root extends Component{
   render(){
      return(
          <AlertProvider template={AlertTemplate} {...options}>
		 <App/>
	    </AlertProvider>
	)
   }
}

ReactDOM.render(<Root />, document.getElementById('root'));
