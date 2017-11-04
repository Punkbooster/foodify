import React from 'react'

const Lunch = (props) => (
  <div className='container col-md-6'>
    <div className='panel panel-default'>
      <div className='panel-heading'>
        {props.lunch.restaurantName}
        - {props.lunch.time}
      </div>
      <div className='panel-body'>
        <ul className='list-group'>
          {props.lunch.users.map(user => (
            <li key={user} className='list-group-item'>
              {user}
            </li>
          ))}
        </ul>
        <button className='btn btn-danger pull-right' onClick={() => props.onRemoveClick(props.lunch.id)}>
          Remove lunch
        </button>
      </div>

    </div>
  </div>
)

export default Lunch
