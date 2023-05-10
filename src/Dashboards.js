import React from "react";
import "./Dashboards.css";
import Navigation from "./Navigation";
import  donor from "./images/donor.jpg";

function Dashboards(props) {

  let choice = 'donor';
  let content = '';


  switch(choice){
    case 'donor':
      content = <div>
      <Navigation userType="donor"/>
      <div className="container">
        <div className="dashboard">
          <h1>WELCOME {props.name}!</h1>
          <h2>YOUR DASHBOARD</h2>
          <img src={donor}/>
        </div>
        <div className="dashboardinfo">
          <h3>PERSONAL INFORMATION</h3>
          <ul>
            <li>
              NAME: {props.name}
            </li>
            <li>
              DATE OF BIRTH: {props.date}
            </li>
            <li>
              DONOR NUMBER: {props.number}
            </li>
            <li>
              ADDRESS: {props.address}
            </li>
            <li>
              TELEPHONE: {props.telephone}
            </li>
            <li>
              BLOOD TYPE:{props.bloodType}
            </li>
          </ul>
          <button>LOGOUT</button>
        </div>

      </div>

</div>
  break;
  case 'admin':
    content=<div>
          <Navigation userType="admin"/>
    <div className="container">
      <div className="dashboard">
        <h1>WELCOME {props.name}!</h1>
        <h2>YOUR DASHBOARD</h2>
      </div>
      <div className="dashboardinfo">
        <h3>PERSONAL INFORMATION</h3>
        <ul>
          <li>
            <strong>NAME:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
</div>
break;
case 'hospital':
  content=<div>
         <Navigation userType="hospital"/>
  <div className="container">
    <div className="dashboard">
      <h1>WELCOME {props.name}!</h1>
      <h2>YOUR DASHBOARD</h2>
    </div>
    <div className="dashboardinfo">
      <h3>PERSONAL INFORMATION</h3>
      <ul>
        <li>
          <strong>NAME OF HODPITAL:</strong> {props.name}
        </li>
        <li>
          <strong>DISTRICT OF THE HOSPITAL:</strong> {props.district}
        </li>
        <li>
          <strong>TELEPHONE NUMBER:</strong> {props.telephone}
        </li>
        <li>
          <strong>ADDRESS:</strong> {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;
case 'bloodbank':
  content=<div>
         <Navigation userType="bloodbank"/>
  <div className="container">
    <div className="dashboard">
      <h1>WELCOME {props.name}!</h1>
      <h2>YOUR DASHBOARD</h2>
    </div>
    <div className="dashboardinfo">
      <h3>PERSONAL INFORMATION</h3>
      <ul>
        <li>
          <strong>NAME OF BLOOD BANK:</strong> {props.name}
        </li>
        <li>
          <strong>DISTRICT OF BLLOD BANK:</strong> {props.district}
        </li>
        <li>
          <strong>TELEPHONE:</strong> {props.telephone}
        </li>
        <li>
          <strong>ADDRESS:</strong> {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;


  }
  return (
<div>
{content}
</div>
  );
}

export default Dashboards;

