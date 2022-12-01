import React, {useState, useEffect} from 'react'
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

const Home = ({name, lastName, department, address, phoneNumber}) => {
    const [members, setmembers] = useState([]);
    const paperStyle = {padding:'50px 20px', width:"100%", margin:"20px auto"}

    const deleteMember = id => {
        fetch( `http://localhost:8080/members/${id}`, {
           method:"Delete",
           mode:"cors"
        });
      };
   
      const editMember = id => {
       const member = {name, lastName, department, address, phoneNumber}
       fetch( `http://localhost:8080/members/${id}`, {
          method:"PUT",
          headers:{"content-Type":"application/json"},
          body:JSON.stringify(member),
          mode:"cors"
       });
     };

    useEffect(() => {
        fetch("http://localhost:8080/members")
        .then(res => res.json())
        .then((result) => {
            setmembers(result);
        }
        )
    
       }, [members]);
  return (
    <div className='members-list'>

         {members.map(member => (

            <section key={member.id}>

             
               <Container>
                  <Paper elevation={3} style={paperStyle}>

               <p className='member'>
                  Name: { member.name}<br/>
                  Last Name: {member.lastName}<br/>
                  Department: {member.department}<br/>
                  Adress: {member.address}<br/>
                  Phone number: {member.phoneNumber}
               </p> 

               <div className='buttons'>
               <Link to={`/EditMember/${member.id}`}>
               <button className='edit-button' onclick={() => editMember(member.id)}>Edit</button>
               </Link>
               <button className='delete-button' variant="contained" onClick={()=> deleteMember(member.id)}>Delete</button>  
               </div>
               </Paper>
               </Container>

              
               

            </section>

        ))}

    </div>
  )
}

export default Home