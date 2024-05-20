import axios from 'axios';
import React, {useState} from 'react';
import {showErrorMessage, showSuccessMessage} from '../helpers/messages';

const CreateAnalyst = () => {

  const [analystData, setAnalystData] = useState({
    firm: '',
    fullName: '',
    priceTarget: '',
    position: '',
    successMessage: false,
    errorMessage: false,
    loading: false
  });

  const {firm, fullName, priceTarget, position, successMessage, errorMessage} = analystData;

  const handleChange = event => {
    setAnalystData({
      ...analystData,
      [event.target.name] : event.target.value,
      successMessage: '',
      errorMessage: ''
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(firm === '' || fullName === '' || priceTarget === '' || position === ''){
      setAnalystData({
        ...analystData,
        errorMessage: 'All fields are required'
      })
    } else {
      setAnalystData({...analystData, successMessage: 'Succesfully added'})
      // console.log('Submitted analyst data: ' , analystData);

      //submitting data to server
      axios.post('http://localhost:8080/api/v1/add', analystData)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }

  }

  const createPostForm = () => (
    <div className="signup-form">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Enter Firm</label>
        <input name="firm" className="form-control" id="input-firm" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Enter Full Name</label>
        <input name="fullName" className="form-control" id="exampleInputDescription" aria-describedby="descriptionHelp" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Enter Price Target</label>
        <input name="priceTarget" className="form-control" id="exampleInputDescription" aria-describedby="descriptionHelp" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Enter Position</label>
        <input name="position" className="form-control" id="exampleInputDescription" aria-describedby="descriptionHelp" onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
  return (
    <div>
      <div>{successMessage && showSuccessMessage(successMessage)}</div>
      <div>{errorMessage && showErrorMessage(errorMessage)}</div>
      <div>{createPostForm()}</div>
    </div>

  )
}

export default CreateAnalyst