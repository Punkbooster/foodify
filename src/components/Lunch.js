import React from 'react'

const Lunch = (props) => (
  <div className="panel panel-primary col-md-6">
     <div className="panel-heading">
       {props.lunch.restaurantName} - {props.lunch.time}
     </div>
     {console.log(props)}
     <ul className="list-group">
       {props.lunch.users.map(user => (
         <li key={user} className="list-group-item">
           {user}
         </li>
       ))}
     </ul>
   </div>
)

export default Lunch
