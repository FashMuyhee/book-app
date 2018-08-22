import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Footer from '../footer'
import Navbar from '../navbar'
import axios from 'axios';
import UserDetail from "../../pages/user_detail";
import UserSettings from "../../pages/user_settings";


class User extends Component {
   state = {
    res : [],
    image: '',
    imageUrl:'',
    loading:false
   }
   token = this.props.match.params.token

   handleImageChange=(e)=> {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
       this.setState({
        file: file,
        imageUrl: reader.result
       });
    }

    reader.readAsDataURL(file)

    //call the upload function
   }

   //get user details
   getUserProfile = (token) => {
    axios({
       method:'GET',
       url:`http://127.0.0.1:8000/api/user`,
       headers:{
        'accepts': 'application/json',
        'authorization': `Bearer ${token}`
       }
    })
        .then( res =>{
         this.setState({res})
        }).catch( error =>{

       console.log(error)
    });
   }

   componentDidMount(){
    this.getUserProfile(this.token)
    console.log('mounted')
   }


   render() {
    let {imageUrl} = this.state;
    let imagePreview = null;
    if (imageUrl) {
       imagePreview = (<img src={imageUrl} alt="avatar"
                    className="img-circle img-no-padding img-responsive" style={{'height': '150px',
        'width': '-webkit-fill-available'}}/>);
    } else {
       imagePreview = (<img src={require('../../images/avatar.jpg')} alt="avatar"
                    className="img-circle img-no-padding img-responsive" style={{'height': '150px',
        'width': '-webkit-fill-available'}}/>);
    }

    return(
        <div>
         <div>
            <Navbar/>
         </div>
         <div className="wrapper">
            <div className="page-header page-header-xs" data-parallax="true" style={{"backgroundImage": `url(${require('../../images/profileBg.jpg')})`}} >
             <div className="filter"/>
            </div>
            <div className="section profile-content">
             <div className="owner">
                <div className="avatar">
                 {imagePreview}
                </div>
                <div className="imagePicker">
                 <button className='btn btn-just-icon btn-danger'>
                    <i className="nc-icon lg nc-camera-compact"/>
                 </button>
                 <input type="file" className='btn btn-just-icon btn-danger'name='image' accept='image/*' title='Select Image' onChange={(e)=>this.handleImageChange(e)}/>
                </div>
                <div className="name">
                 <h4 className="title">Jane Faker<br/></h4>
                 <h6 className="description">Music Producer</h6>
                </div>
             </div>

             <div className="container">
                <div className="row">
                 <div className="col-md-6 ml-auto mr-auto text-center">
                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised,
                     Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a
                     warm, intimate feel with a solid groove structure. </p>
                    <br/>
                    <Link className="btn btn-outline-default btn-round" to="/settings"><i className="nc-icon nc-settings"/> Settings</Link>
                 </div>
                </div>
                <br/>
                
                <div>
			 <Route  path="/user" component={UserDetail} />
			 <Route path="/settings" component={UserSettings} />
		    </div>

             </div>
            </div>
         </div>
         <div>
            <Footer/>
         </div>
        </div>

    )
   }

}

export default User;