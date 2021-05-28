import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
display: 'flex',
justifyContent: 'center'
}

class EditDoctorsComponent extends Component {

constructor(props){
super(props);
this.state ={
id: '', 
doctorname: '',
doctorimg: '',
address: '',
contact: '',
description:'',
show: false,
message: ''

}
}

componentDidMount() {
const userId = this.props.match.params.id;
// ApiService.fetchUserById(userId)
// console.log(userId);
ApiService.fetchUserById(userId)
.then((res) => {
let user = res.data;
this.setState({
id: user.id, 
doctorname: user.doctorname,
doctorimg: user.doctorimg,
address:user.address,
contact: user.contact,
description:user.description,

})
});
} 
onChange = (e) =>
this.setState({ [e.target.name]: e.target.value });

saveUser = (e) => {
e.preventDefault();
let user = {id: this.state.id, doctorname: this.state.doctorname, doctorimg: this.state.doctorimg,address: this.state.address, contact: this.state.contact, description: this.state.description};
ApiService.editUser(user)
.then(res => {
if(res.data != null) {
this.setState({show:true, message : 'Doctor Updated successfully.'});
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
    
    render() {
    return (
    <div>
    <div style={{"display":this.state.show ? "block" : "none"}}>
    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
    </div>
    <Typography variant="h4" style={style}>Edit Doctor</Typography>
    <form> 
    <TextField type="text" placeholder="id" fullWidth margin="normal" name="id" disabled readonly="true" value={this.state.id}/>
<TextField type="text" placeholder="doctorname" fullWidth margin="normal" name="doctorname" value={this.state.doctorname} onChange={this.onChange}/>
<TextField type="text" placeholder="doctorimg" fullWidth margin="normal" name="doctorimg" value={this.state.doctorimg} onChange={this.onChange}/>
<TextField type="text" placeholder="address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
<TextField type="text" placeholder="contact" fullWidth margin="normal" name="contact" value={this.state.contact} onChange={this.onChange}/>
<TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

<Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
</form>
</div>
);
}
}

export default EditDoctorsComponent; 