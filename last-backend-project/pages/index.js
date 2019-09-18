import React from 'react';
import axios from 'axios';

axios.get('http://localhost:4000/api/users')
.then(users => {
    console.log(users)
})
.catch(err => {
    console.log(err)
});

axios.post('http://localhost:4000/api/login', {
    username: "marques",
    password: "johnson"
})
   .then(res =>  {
       console.log(res);
   })
   .catch(err => {
       console.log(err);
   });

   axios.post('http://localhost:4000/api/register', {
       username: "marques",
       password: "johnson"
   })
   .then(res => {
       console.log(res);
   })
   .catch(err => {
       console.log(err);
   });

const Index = () => (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
  
  export default Index;