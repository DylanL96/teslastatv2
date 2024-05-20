import axios from 'axios';
import React, {useState} from 'react';
import {showErrorMessage, showSuccessMessage} from '../helpers/messages';
import {useParams} from 'react-router-dom';

const EditAnalyst = () => {
  const params = useParams();

  const [analystData, setAnalystData] = useState({
    firm: '',
    fullName: '',
    priceTarget: '',
    position: '',
    twitterHandle: ''
  });

  const {firm, fullName, priceTarget, position, twitterHandle, successMessage, errorMessage} = analystData;

  const handleChange = event => {
    setAnalystData({
      ...analystData,
      [event.target.name] : event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(firm === '' || fullName === '' || priceTarget === '' || position === '' || twitterHandle === ''){
      setAnalystData({
        ...analystData, firm: firm, fullName: fullName, priceTarget: priceTarget, position: position, twitterHandle: twitterHandle
      })
    } else {
      const {firm, fullName, priceTarget, position, twitterHandle} = analystData;

      setAnalystData({...analystData, firm: firm, fullName: fullName, priceTarget: priceTarget, position: position, twitterHandle: twitterHandle});

      const url = `http://localhost:8080/api/v1/edit/${params.id}`;
      const changedData = {...analystData, firm: firm, fullName: fullName, priceTarget: priceTarget, position: position, twitterHandle:twitterHandle};

      // console.log('Submitted analyst data: ' , analystData);

      //submitting data to server
      axios.put(url, changedData)
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
      <h2>Edit Form</h2>
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
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Enter Twitter Handle</label>
        <input name="twitterHandle" className="form-control" id="exampleInputDescription" aria-describedby="descriptionHelp" onChange={handleChange}/>
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

export default EditAnalyst