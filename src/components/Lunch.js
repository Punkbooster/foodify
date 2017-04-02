import React from 'react'

const Lunch = (props) => (
  <div className="panel panel-primary col-md-6">
     <div className="panel-heading">
       {props.lunch.restaurantName} - {props.lunch.time}
     </div>
     <ul className="list-group">
       {props.lunch.users.map(user => (
         <li key={user} className="list-group-item">
           {user}
         </li>
       ))}
     </ul>
     <button className='btn btn-danger' onClick={() => props.onCloseClick(props.lunch.id)}>
       Remove lunch
     </button>
   </div>
)

export default Lunch
