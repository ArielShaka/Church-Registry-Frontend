import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

const EditMember = ({setMembers}) => {
    let navigate = useNavigate();

    const {id}=useParams();

   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [department, setDepartment] = useState('');
   const [address, setAddress] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
   const formStyle = {margin:"0px 0px 10px 0px" }

   
   

   const handleNameChange = e => {
    setName(e.target.value);
   };

   const handleLastNameChange = e => {
    setLastName(e.target.value);
   };

   const handleDepartmentChange = e => {
    setDepartment(e.target.value);
   };

   const handleAddressChange = e => {
    setAddress(e.target.value);
   };

   const handleNumberChange = e => {
    setPhoneNumber(e.target.value);
   };

   const handleClick = e => {
    e.preventDefault()
    const member = {name, lastName, department, address, phoneNumber}
    fetch(`http://localhost:8080/members/${id}`,{
        method:"PUT",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(member)
       
    }).then( navigate('/'))
    .then(() => {
        console.log("New member added")
    });
    
   };  

   useEffect(() => {
     loadUser()
   }, [])

   const loadUser = async () => {
    const member = {name, lastName, department, address, phoneNumber}
    fetch(`http://localhost:8080/members/${id}`,{
        method:"GET",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(member),
   })
}

  return (
    <div>
       <div className='member_form--name' >
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
       >
        <Container>
          <Paper elevation={3} style={paperStyle}>
            <h2 className='add-member-title'>Edit Member</h2>
      <TextField style={formStyle} id="outlined-basic" label="Name" variant="outlined" value={name}  onChange={handleNameChange} fullWidth /><br />
      <TextField style={formStyle} id="outlined-basic" label="Last Name" variant="outlined" value={lastName}  onChange={handleLastNameChange} fullWidth /><br />
      <TextField style={formStyle} id="outlined-basic" label="Department" variant="outlined" value={department}  onChange={handleDepartmentChange} fullWidth /><br />
      <TextField style={formStyle} id="outlined-basic" label="Address" variant="outlined" value={address} onChange={handleAddressChange} fullWidth /><br />
      <TextField style={formStyle} id="outlined-basic" label="Phone Number" variant="outlined" value={phoneNumber}onChange={handleNumberChange} fullWidth />
      <Button className='submit-button' variant="contained" onClick={handleClick}>Submit</Button>
      </Paper>
      </Container>
    </Box>
    

       </div>
    </div>
  )
}


export default EditMember
