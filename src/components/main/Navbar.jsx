import React from 'react';
import CompanyLogo from '../../assets/images/company-logo.png';
function Navbar() {
  return (
    <>
      <div className="navbar bg-red shadow-sm">
        <div className="flex-1">
          <a className="text-xl cursor-pointer">
            <img src={CompanyLogo} alt="Logo" />
          </a>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details className='z-999'>
                <summary>Products</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Industry</a>
                  </li>
                  <li>
                    <a>Four Wheels</a>
                  </li>
                  <li>
                    <a>Two Wheels</a>
                  </li>
                  <li>
                    <a>Truck And Heavy Equipment</a>
                  </li>
                  <li>
                    <a>Export</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
