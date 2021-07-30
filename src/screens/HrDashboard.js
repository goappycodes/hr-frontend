import React from 'react'
import {Link} from 'react-router-dom'
function HrDashboard() {
    return (
        <div>
            <h1>HR dash board</h1>
          <p>  <Link to={'/invite-employee'}>Invite Employee</Link></p>
        </div>
    )
}

export default HrDashboard
