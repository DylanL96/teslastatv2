import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import {API_KEY} from '../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

const AnalystComponent = () => {
  let navigate = useNavigate();
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [delPost, setDelPost] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [stockPrice, setStockPrice] = useState('');
  const [order, setOrder] = useState('ASC');
  const [numOrder, setNumOrder] = useState('ASC');
  

  const getAnalystInformation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/analysts");
      setData(response.data);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getAnalystInformation();
    // eslint-disable-next-line
  }, []);

  const getStockPrice = async () => {
    try{
      const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=c7bgnnaad3ia366ftn0g`);
      setStockPrice(response.data.c)
      console.log(response.data)
      setDate(((response.data)))
    }catch(error){
      console.log(error)
    }
  };

  useEffect(() => {
    getStockPrice();
  }, [])

 
  const deleteHandler = id => {
    axios.delete(`http://localhost:8080/api/v1/delete/${id}`)
      .then(result => {
        setDelPost(delPost.filter(element => element._id !==id));
        console.log('Deleted!')
      })
      .catch(error => {
        console.log(error)
      })
  };


  const editHandler = id => {
    navigate(`/api/v1/${id}`)
  }

 
  const renderTable = () => {
    return data?.map((dat) => (  // data? checks to see if data exists
      <tr key={dat.id}>
        <td>{dat.firm}</td>
        <td>{dat.fullName}</td>
        <td>{dat.priceTarget}</td>
        <td>{dat.position}</td>
        <td>{(((dat.priceTarget - stockPrice) / stockPrice) * 100).toLocaleString()}</td>
        <td>{(dat.priceTarget * quantity).toLocaleString()}</td>
        {/* <td id='trash-delete' onClick={()=>deleteHandler(dat.id)}><FontAwesomeIcon icon={faTrash}/></td>
        <td id='trash-delete' onClick={()=>editHandler(dat.id)}><FontAwesomeIcon icon={faTrash}/></td> */}
      </tr>
    ))
  };

  const sortFunction = (col) => {
    if(order === 'ASC'){
      const sorted = [...data].sort((a,b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('DSC')
    }
    if(order === 'DSC'){
      const sorted = [...data].sort((a,b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('ASC')
    }
  }

  const sortNumFunction = (col) => {
    if(numOrder === 'ASC'){
      const sorted = [...data].sort((a,b) => a[col] - b[col]
      );
      setData(sorted);
      setNumOrder('DSC')
    }
    if(numOrder === 'DSC'){
      const sorted = [...data].sort((a,b) =>b[col] - a[col]
      );
      setData(sorted);
      setNumOrder('ASC')
    }
  }
  
 
  return (
    <React.Fragment>
      {/* Center container */}
      <div className='center-container'>
        {/* Message Section */}

        <div className='message-container'>
          <div className="stock-name-section"> 
            <p className="stock-name">Tesla Inc.</p>
            <label className="stock-sign-label">$TSLA </label>
          </div>
          <div className="stock-price-section">
             <p className="mrkt-info">as of open</p>
             <p className="stock-price">
              {stockPrice}
             </p>
          </div>
        </div>
        {/* Bc this is async, we put ? so that date would finish loading and then displays */}
         <p className="last-updated"> Last Updated: {(Date(date?.t))} </p>

        {/* Input Section */}
          <div className='input-section'>
            <label>Your Number of Shares: </label>
            <input className="textInputBox" type="number" placeholder='# of shares..' onChange={e => setQuantity(e.target.value)}/>
          </div>
      </div>

        {/* Table Section */}
        <div className='table-section'>
          <Table className="table" striped bordered hover size='sm'>
            <thead>
              <tr >
                <th onClick= {()=>sortFunction('firm')}>FIRM</th>
                <th onClick= {()=>sortFunction('fullName')}>Analyst</th>
                <th onClick= {()=>sortNumFunction('priceTarget')}>Price Target ($)</th>
                <th onClick= {()=>sortFunction('position')}>Position</th>
                <th>Upside/Downside %</th>
                <th>Your Potential Value ($)</th>
                {/* <th>Delete</th>
                <th>Edit</th> */}
              </tr>
            </thead>
              <tbody>
              {renderTable()}
              </tbody>
            </Table> 
        </div>
    </React.Fragment>
  )

}

export default AnalystComponent;