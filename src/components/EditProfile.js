import React, { Component } from "react";

import MyProfile from './MyProfile';
import DATA from '../data/employeeData';

class EditProfile extends React.Component {
  render() {
    return(
      <div>
        <h1>Edit profile info</h1>
        <form>
          <label for="name">Edit name:</label>
          <input type="text" id="name" />
          <br />
          <label for="email">Edit email:</label>
          <input type="email" id="email" />
          <br />
          <label for="phoneNum">Edit phone number:</label>
          <input type="text" id="phoneNum" />
          <br />
          <label for="address">Edit address:</label>
          <input type="text" id="address" />
          <br />
          <label for="dateB">Edit date of birth:</label>
          <input type="date" id="dateB" />
          <br />
          <label for="dateE">Edit date of employment:</label>
          <input type="text" id="name" />
          <br />
          <label for="position">Edit position:</label>
          <input type="text" id="position" />
          <br />
          <label for="numV">Edit number of vacation days:</label>
          <input type="number" id="numV" />
          <br />
          <form action="/profile">
            <button>
              SUBMIT
            </button>
          </form>
        </form>
      </div>
    )
  }
}
export default EditProfile;