import React from 'react';
import {Route,Routes} from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import AnalystComponent from './Components/AnalystComponent';
import CreateAnalyst from './Components/CreateAnalyst';
import DeliveryPage from './Components/DeliveryPage';
import EditAnalyst from './Components/EditAnalyst';
import MarginsPage from './Components/MarginsPage';
import NavigationBar from './Components/NavigationBar';
import NetIncomePage from './Components/NetIncomePage';
import CashflowPage from './Components/CashFlowPage';
import CashPage from './Components/CashPage';
import RevOpIncome from './Components/RevOpIncome';
import SuperChargerPage from './Components/SuperChargerPage';
import RevenueMultiplePage from './Components/RevenueMultiplePage';
import OperatingExpensePage from './Components/OperatingExpensePage';

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path = '/' element={<AnalystComponent/>}/>
        <Route exact path = '/create' element={<CreateAnalyst/>}/>
        <Route exact path = '/about' element={<AboutPage/>}/>
        <Route exact path = '/delivery' element={<DeliveryPage/>}/>
        <Route exact path = '/income' element={<RevOpIncome/>}/>
        <Route exact path = '/operatingexpense' element={<OperatingExpensePage/>}/>
        <Route exact path = '/netincome' element={<NetIncomePage/>}/>
        <Route exact path = '/margins' element={<MarginsPage/>}/>
        <Route exact path = '/cashflow' element={<CashflowPage/>}/>
        <Route exact path = '/cash' element={<CashPage/>}/>
        <Route exact path = '/revenuemultiple' element={<RevenueMultiplePage/>}/>
        <Route exact path = '/superchargers' element={<SuperChargerPage/>}/>
        <Route exact path = '/api/v1/:id' element={<EditAnalyst/>}/>
      </Routes>
    </div>
  )
}

export default App;
