import React from 'react'

const AddLunch = (props) => (
  <div className='container'>
    <h3>
      Add Lunch
    </h3>
    <form className='bs-example bs-example-form col-md-8'>
      <div className="input-group"> <span className="input-group-addon" id="basic-addon1">Place & Time</span>
        <input className="form-control" aria-describedby="basic-addon1"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
)

export default AddLunch
