import React from 'react';

const NavigationBar = () => {
  return (
    <div className='header-section'>
      <div className='logo-section'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" alt="main-logo" className="logo" />
      </div>
      <div className='nav-section'>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tesla Financials
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/delivery">Delivery's</a>
                  <a className="dropdown-item" href="/income">Revenue and Operating Income</a>
                  <a className="dropdown-item" href="/operatingexpense">Operating Expenses</a>
                  <a className="dropdown-item" href="/netincome">Net Income</a>
                  <a className="dropdown-item" href="/margins">Margins</a>
                  <a className="dropdown-item" href="/cashflow">Cash Flow</a>
                  <a className="dropdown-item" href="/cash">Cash</a>
                  <a className="dropdown-item" href="/revenuemultiple">Revenue Multiple</a>
                  <a className="dropdown-item" href="/superchargers">Superchargers Installed</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
