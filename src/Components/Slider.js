import {React} from 'react';
import {useEffect, useState}from 'react';


function Slider(){
const[user, setUser] = useState([{
    id:"", name:"", email:"", username:""
}])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setUser(res))
},[])

return(
    <div>
        <h1>Slider</h1>
        {user.map(e=>e.name)}
        {user.map(e=>e.email)}
    </div>
);
}
export default Slider;
