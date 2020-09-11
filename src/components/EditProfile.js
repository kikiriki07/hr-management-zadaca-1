import React from 'react';

import '../style/EditProfile.css';

import DATA from '../data/employeeData';

class EditProfile extends React.Component {
  constructor() {
    super();

    this.state ={
      name: DATA.Name,
      email: DATA.Email,
      phoneNumber: DATA.PhoneNumber,
      address: DATA.Address,
      dateOfBirth: DATA.DateOfBirth,
      dateOfEmployment: DATA.DateOfEmployment,
      position: DATA.Position,
      numberOfVacationDays: DATA.NumberOfVacationDays
    };
  }

  handleEditBtnClick = () => {
    this.setState((oldState) => ({...oldState, ...this.state.name}))
  }

  handleFormSubmission = (e) => {
    e.preventDefault();
    this.state.name = e.value;
  }

  render() {
    return (
      <div className="edit-profile">
        <p>Edit Profile</p>
        <div className="inputs">
        <h3>
          <button onClick={this.handleEditBtnClick} label="Edit">EDIT</button>
        </h3> <br />
        <h4>
          Name: <input type="text" value={this.state.name} /> 
        </h4> <br />
        <h4>
          Email: <input type="email" value={this.state.email} /> 
        </h4> <br />
        <h4>
          Phone Number: <input type="text" value={this.state.phoneNumber} /> 
        </h4> <br />
        <h4>
          Address: <input type="text" value={this.state.address} /> 
        </h4> <br />
        <h4>
          Date of birth: <input type="date" value={this.state.dateOfBirth} /> 
        </h4> <br />
        <h4>
          Date of employment: <input type="date" value={this.state.dateOfEmployment} /> 
        </h4> <br />
        <h4>
          Position: <input type="text" value={this.state.position} /> 
        </h4> <br />
        <h4>
          Number of vacation days: <input type="text" value={this.state.numberOfVacationDays} /> 
        </h4> <br />
        <h3>
          <button type="submit" onClick={this.handleFormSubmission} label="Submit">SUBMIT</button>
        </h3>
        </div>
      </div>
    );
  }
}

export default EditProfile;