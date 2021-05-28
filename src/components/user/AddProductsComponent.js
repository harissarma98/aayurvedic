import React, { Component } from 'react'
import ProductService from "../../service/ProductService";
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

class AddProductsComponent extends Component{
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
productname: '',
productimg: '',
address: '',
contact:'',
description: '',
show: false
}
}

saveProduct = (e) => {
e.preventDefault();
let product = {
id: this.state.id, 
productname: this.state.productname, 
productimg: this.state.productimg, 
address: this.state.address, 
contact: this.state.contact, 
description: this.state.description
};

ProductService.addProduct(product)
.then(res => {
if(res.data != null) {
this.setState({show:true, message : 'Product added successfully.'});
setTimeout(() => this.setState({show:false}), 3000);
setTimeout(() => this.productList(), 3000);
} else {
this.setState({show:false});
}
});
}

productList = () => {
return this.props.history.push('/admin/products');
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
console.log(" Productimgdata",e.target.result)
elements.push(e.target.result)
this.setState({productimg:elements[0]})
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

<Typography variant="h4" style={style}>Add product</Typography>
<form style={formContainer}>
<TextField type="text" placeholder="productname" fullWidth margin="normal" name="productname" value={this.state.productname} onChange={this.onChange}/>
<TextField type="text" placeholder="productimg" fullWidth margin="normal" name="productimg" value={this.state.productimg} onChange={this.onChange}/>
<TextField type="text" placeholder="address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
<TextField type="text" placeholder="contact" fullWidth margin="normal" name="contact" value={this.state.contact} onChange={this.onChange}/>
<TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
<input type="file" multiple onChange={this.onFileChangeHandler }/>
<img src={this.state.productimg}/>
<Button variant="contained" color="primary" onClick={this.saveProduct}>Save</Button>
</form>
</div>
);
}
}

export default AddProductsComponent; 