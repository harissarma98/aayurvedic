import React, { Component } from 'react'
import ProductService from "../../service/ProductService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
display: 'flex',
justifyContent: 'center'
} 
class ListProductsComponent extends Component {

    constructor(props) {
    super(props)
    this.state = {
    products: [],
    show: false,
    message: ''
    }
    }
    
    componentDidMount() {
    ProductService.fetchProducts()
    .then((res) => {
    this.setState({products: res.data})
    });
    } 
    deleteProduct = (productId) => {
        ProductService.deleteProduct(productId)
        .then(res => {
        if(res.data != null) {
        this.setState({"show":true, message : 'Product deleted successfully.'});
        setTimeout(() => this.setState({"show":false}), 3000);
        this.setState({
        products: this.state.products.filter(product => product.id !== productId)
        });
        } else {
        this.setState({"show":false});
        }
        })
        } 
    editProduct = (id) => {
        this.props.history.push('/admin/edit-product/'+ id);
        }
        
        addProduct = () => {
        this.props.history.push('/admin/add-product');
        }
        
        render() {
        const {products} = this.state; 
        return (
            <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
            <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
            </div>
            <Typography variant="h4" style={style}>Product Details</Typography>
            <Button variant="contained" color="primary" onClick={() => this.addProduct()}>
            Add Product
            </Button> 
            <Table>
<TableHead>
<TableRow>
<TableCell align="right">Id</TableCell>
<TableCell align="right">Productname</TableCell>
<TableCell align="right">Productimg</TableCell>
<TableCell align="right">Address</TableCell>
<TableCell align="right">Contact</TableCell>
<TableCell align="right">Description</TableCell>

</TableRow>
</TableHead>
<TableBody> 
{
products.length === 0 ?
<TableRow>
<TableCell colSpan="6" align="center">No Products Available.</TableCell>
</TableRow> 
:
products.map(row => (
<TableRow key={row.id}>
<TableCell align="right">
{row.id} 
</TableCell>
<TableCell align="right">{row.productname}</TableCell>
<TableCell align="right"><img src={row.productimg} alt= "product" width="150" height="150" /></TableCell>
<TableCell align="right">{row.address}</TableCell>
<TableCell align="right">{row.contact} </TableCell>
<TableCell align="right">{row.description}</TableCell>
<TableCell align="right" onClick={() => this.editProduct(row.id)}><CreateIcon /></TableCell>
<TableCell align="right" onClick={() => this.deleteProduct(row.id)}><DeleteIcon /></TableCell>
</TableRow> 
))
}
</TableBody>
</Table>

</div>
);
}

}

export default ListProductsComponent; 