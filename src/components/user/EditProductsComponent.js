import React, { Component } from 'react'
import ProductService from "../../service/ProductService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
display: 'flex',
justifyContent: 'center'
}

class EditProductsComponent extends Component {

constructor(props){
super(props);
this.state ={
id: '', 
productname: '',
productimg: '',
address: '',
contact: '',
description:'',
show: false,
message: ''

}
}

componentDidMount() {
const productId = this.props.match.params.id;
// ApiService.fetchUserById(userId)
// console.log(userId);
ProductService.fetchProductById(productId)
.then((res) => {
let product = res.data;
this.setState({
id: product.id, 
productname: product.productname,
productimg: product.productimg,
address:product.address,
contact: product.contact,
description:product.description,

})
});
} 
onChange = (e) =>
this.setState({ [e.target.name]: e.target.value });

saveProduct = (e) => {
e.preventDefault();
let product = {id: this.state.id, productname: this.state.productname, productimg: this.state.productimg,address: this.state.address, contact: this.state.contact, description: this.state.description};
ProductService.editProduct(product)
.then(res => {
if(res.data != null) {
this.setState({show:true, message : 'Product Updated successfully.'});
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
    
    render() {
    return (
    <div>
    <div style={{"display":this.state.show ? "block" : "none"}}>
    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
    </div>
    <Typography variant="h4" style={style}>Edit Product</Typography>
    <form> 
    <TextField type="text" placeholder="id" fullWidth margin="normal" name="id" disabled readonly="true" value={this.state.id}/>
<TextField type="text" placeholder="productname" fullWidth margin="normal" name="productname" value={this.state.productname} onChange={this.onChange}/>
<TextField type="text" placeholder="productimg" fullWidth margin="normal" name="productimg" value={this.state.productimg} onChange={this.onChange}/>
<TextField type="text" placeholder="address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
<TextField type="text" placeholder="contact" fullWidth margin="normal" name="contact" value={this.state.contact} onChange={this.onChange}/>
<TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

<Button variant="contained" color="primary" onClick={this.saveProduct}>Save</Button>
</form>
</div>
);
}
}

export default EditProductsComponent; 