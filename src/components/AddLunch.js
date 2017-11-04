import React from 'react'

const AddLunch = (props) => (
  <div className='container col-md-12'>
    <div className='col-md-6 pull-right'>
      <div className='panel panel-primary pull-right'>
        <div className='panel-heading'>
          Add Lunch
        </div>
        <div className='panel-body'>
          <form className='bs-example bs-example-form'>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Place & Time</span>
              <input className="form-control" aria-describedby="basic-addon1"/>
            </div>
            <br />
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default AddLunch
