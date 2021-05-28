import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
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
class ListDoctorsComponent extends Component {

    constructor(props) {
    super(props)
    this.state = {
    users: [],
    show: false,
    message: ''
    }
    }
    
    componentDidMount() {
    ApiService.fetchUsers()
    .then((res) => {
    this.setState({users: res.data})
    });
    } 
    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
        .then(res => {
        if(res.data != null) {
        this.setState({"show":true, message : 'Doctor deleted successfully.'});
        setTimeout(() => this.setState({"show":false}), 3000);
        this.setState({
        users: this.state.users.filter(user => user.id !== userId)
        });
        } else {
        this.setState({"show":false});
        }
        })
        } 
    editUser = (id) => {
        this.props.history.push('/admin/edit-user/'+ id);
        }
        
        addUser = () => {
        this.props.history.push('/admin/add-user');
        }
        
        render() {
        const {users} = this.state; 
        return (
            <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
            <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
            </div>
            <Typography variant="h4" style={style}>Doctor Details</Typography>
            <Button variant="contained" color="primary" onClick={() => this.addUser()}>
            Add Doctor
            </Button> 
            <Table>
<TableHead>
<TableRow>
<TableCell align="right">Id</TableCell>
<TableCell align="right">Doctorname</TableCell>
<TableCell align="right">Doctorimg</TableCell>
<TableCell align="right">Address</TableCell>
<TableCell align="right">Contact</TableCell>
<TableCell align="right">Description</TableCell>

</TableRow>
</TableHead>
<TableBody> 
{
users.length === 0 ?
<TableRow>
<TableCell colSpan="6" align="center">No Users Available.</TableCell>
</TableRow> 
:
users.map(row => (
<TableRow key={row.id}>
<TableCell align="right">
{row.id} 
</TableCell>
<TableCell align="right">{row.doctorname}</TableCell>
<TableCell align="right"><img src={row.doctorimg} alt= "doctor" width="150" height="150" /></TableCell>
<TableCell align="right">{row.address}</TableCell>
<TableCell align="right">{row.contact} </TableCell>
<TableCell align="right">{row.description}</TableCell>
<TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
<TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>
</TableRow> 
))
}
</TableBody>
</Table>

</div>
);
}

}

export default ListDoctorsComponent; 