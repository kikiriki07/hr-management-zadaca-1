import React from "react";

import '../style/MyProfile.css';

import DATA from '../data/employeeData';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    render(){
      const { name, email, phoneNumber, address, dateOfBirth, dateOfEmployment, position, numberOfVacationDays } = this.state;
        return (
            <div className="my-profile">
                <h1>My Profile Information</h1>
                <div className="profile-info">
                  <h3>Name: {name}</h3>
                  <h3>Email: {email}</h3>
                  <h3>Phone number: {phoneNumber}</h3>
                  <h3>Address: {address}</h3>
                  <h3>Date of birth: {dateOfBirth}</h3>
                  <h3>Date of employment: {dateOfEmployment}</h3>
                  <h3>Position (Job title): {position}</h3>
                  <h3>Number of vacation days: {numberOfVacationDays}</h3>
                  <form action="editProfile">
                    <input type="submit" value="EDIT YOUR INFORMATION" />
                  </form>
                </div>
                </div>
        );
    }
};

export default MyProfile;
