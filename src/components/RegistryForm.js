import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

const RegistryForm = () => {
    let navigate = useNavigate();
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
    fetch("http://localhost:8080/members/add",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(member)
       
    }).then( navigate('/'))
    .then(() => {
        console.log("New member added")
    });
    
   };  

  return (
    <div>
       <div className='member-form' >
        
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
            <h2 className='add-member-title'>Add a new member</h2>
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


export default RegistryForm
