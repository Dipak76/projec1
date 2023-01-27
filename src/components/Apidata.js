import React from 'react'; 
import { useEffect, useState } from "react"; 
 
function Apidata() { 
    const [fetchData, setData] = useState([]); 
 
const getData = async () => { 
 
try { 
 
await fetch("https://reqres.in/api/users?page=2") 
 
.then((res) => res.json()) 
 
.then((json) => { 
 
setData(json.data); 
 
console.log(json.data); 
 
}); 
 
} catch (e) { 
 
console.log(e); 
 
} 
 
}; 
 
const searchInput = (event) => { 
 
const search = event.target.value.toLowerCase(); 
 
const findData = fetchData.filter((user) => { 
 
return `${user.id}${user.email}${user.first_name} `
 
.toLocaleLowerCase() 
 
.includes(search); 
 
}); 
 
setData(findData); 
 
}; 
 
useEffect(() => { 
 
getData(); 
 
}, []); 
 
return ( 
 
<div className="tabledata"> 
 
<input type="text" placeholder="Search your name" onInput={searchInput} width="60px" height="30px"/> 
<br></br> 
<br></br> 
 
<table border='1px'> 
 
<thead> 
 
<th>Id</th> 
 
<th>Email</th> 
 
<th>First-name</th> 
 
<th>Last Name</th> 
 
</thead> 
 
<tbody> 
 
{fetchData.map((item) =>{  
 
 return ( 
 
<tr> 
 
<td>{item.id}</td> 
 
<td>{item.email}</td> 
 
<td>{item.first_name}</td> 
 
<td>{item.last_name}</td> 
 
</tr> 
 ); 
} 
)} 
 
</tbody> 
 
</table> 
 
</div> 
 
); 
 
} 
 
 
export default Apidata;
