import React from 'react';

function Tsform(props) {

   const [name,setname]=React.useState('')
   const [age,setage]=React.useState(0)

type MyUserName = { name: string };
  type MyUserAge = { age: number };
  type UserWithAge =MyUserName & MyUserAge;

  function cigaretteUser(colleStu: UserWithAge, tillageInput: MyUserAge): boolean {
    console.log(colleStu, tillageInput);
    return colleStu.age >= tillageInput.age;
  }


    return (
        <div>
            <input type="text" value={name} onChange={()=>{setname()}} />
            <input type="text" value={age} onChange={()=>{setage()}} />
        </div>
    );
}

export default Tsform;