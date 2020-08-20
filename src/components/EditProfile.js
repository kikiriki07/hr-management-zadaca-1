import React from 'react';

import MyProfile from './MyProfile';
import DATA from '../data/employeeData';

class EditProfile extends React.Component {

  /*constructor(props){
    super(props);

    this.state = {
      name: MyProfile.name,
      email: MyProfile.email,
      phoneNumber: MyProfile.phoneNumber,
      address: MyProfile.address,
      dateOfBirth: MyProfile.dateOfBirth,
      dateOfEmployment: MyProfile.dateOfEmployment,
      position: MyProfile.position,
      numberOfVacationDays: MyProfile.numberOfVacationDays
    }
  }
  
*/

    render() {
      return (
        <div>
          <h1>Edit Profile</h1>
          <form>
            <label for="name">Edit Name: </label>
            <input type="text" />
          </form>
          <br />
          <form>
            <label for="email">Edit Email: </label>
            <input type="email" />
          </form>
          <br />
          <form>
            <label for="phoneNum">Edit Phone Number: </label>
            <input type="text" />
          </form>
          <br />
          <form>
            <label for="address">Edit Address: </label>
            <input type="text" />
          </form>
          <br />
          <form>
            <label for="dateB">Edit Date Of Birth: </label>
            <input type="date" />
          </form>
          <br />
          <form>
            <label for="dateE">Edit Date Of Employment: </label>
            <input type="date" />
          </form>
          <br />
          <form>
            <label for="position">Edit Position: </label>
            <input type="text" />
          </form>
          <br />
          <form>
            <label for="numVac">Edit Number Of Vacation Days: </label>
            <input type="number" />
          </form>
          <br />
          <form action="profile">
            <button /*onClick={}*/>
              SUBMIT
            </button>
          </form>
        </div>
      );
    }
  }
  
  export default EditProfile;