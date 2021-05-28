import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const formContainer = {
display: 'flex',
flexFlow: 'row wrap'
};

const style ={
display: 'flex',
justifyContent: 'center'

}

class AddDoctorsComponent extends Component{
constructor(props){
super(props);
this.state ={
// username: '',
// password: '',
// firstName: '',
// lastName: '',
// age: '',
// salary: '',
id: '',
doctorname: '',
doctorimg: '',
address: '',
contact:'',
description: '',
show: false
}
}

saveUser = (e) => {
e.preventDefault();
let user = {
id: this.state.id, 
doctorname: this.state.doctorname, 
doctorimg: this.state.doctorimg, 
address: this.state.address, 
contact: this.state.contact, 
description: this.state.description
};

ApiService.addUser(user)
.then(res => {
if(res.data != null) {
this.setState({show:true, message : 'Doctor added successfully.'});
setTimeout(() => this.setState({show:false}), 3000);
setTimeout(() => this.userList(), 3000);
} else {
this.setState({show:false});
}
});
}

userList = () => {
return this.props.history.push('/admin/users');
}

onChange = (e) =>
this.setState({ 
[e.target.name]: e.target.value 
});

onFileChangeHandler = (e) => {
e.preventDefault();
var elements=[];
console.log(e.target.files.length)
let files = e.target.files
console.log(files)
for(let i = 0; i<e.target.files.length; i++){
let reader = new FileReader()
reader.readAsDataURL(files[i])
reader.onload = (e) => {
console.log(" Doctorimgdata",e.target.result)
elements.push(e.target.result)
this.setState({doctorimg:elements[0]})
}
console.log(elements)
}
}

render() {
return(
<div>
<div style={{"display":this.state.show ? "block" : "none"}}>
<MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
</div>

<Typography variant="h4" style={style}>Add doctor</Typography>
<form style={formContainer}>
<TextField type="text" placeholder="doctorname" fullWidth margin="normal" name="doctorname" value={this.state.doctorname} onChange={this.onChange}/>
<TextField type="text" placeholder="doctorimg" fullWidth margin="normal" name="doctorimg" value={this.state.doctorimg} onChange={this.onChange}/>
<TextField type="text" placeholder="address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
<TextField type="text" placeholder="contact" fullWidth margin="normal" name="contact" value={this.state.contact} onChange={this.onChange}/>
<TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
<input type="file" multiple onChange={this.onFileChangeHandler }/>
<img src={this.state.doctorimg}/>
<Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
</form>
</div>
);
}
}

export default AddDoctorsComponent; 