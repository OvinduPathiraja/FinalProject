import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import "./Location1";

function Navigation(props) {
  return (
    <div className="navbar">

      {props.userType === "donor" && (
        <ul className="navUl">
          <li>
            <a href="/Dashboards">DONOR DASHBOARD</a>
          </li>
          <li>
            <a href="/Table?tableName=DONOR HISTORY">DONATION HISTORY</a>
          </li>
          <li>
            <a href="/Donorpoints">VIEW DONOR POINTS</a>
          </li>
          <li>
            <a href="/FAQS">FAQS</a>
          </li>
          <li>
            <a href="/Location1">FIND NEAREST LOCATION</a>
          </li>
        </ul>
      )}
      {props.userType === "admin" && (
        <ul className="navUl">
          <li>
            <Link to="/Pendingrequests">PENDING REQUESTS</Link>
          </li>
          <li>
            <Link to="/Acceptedrequests">ACCEPTED REQUESTS</Link>
          </li>
        </ul>
      )}
      {props.userType === "hospital" && (
        <ul className="navUl">
          <li>
            <Link to="/Table">HOSPITAL HISTORY</Link>
          </li>
          <li>
            <Link to="/Table">FIND BLOOD BANKS</Link>
          </li>
          <li>
            <Link to="/BloodCountChart">BLOOD CHART</Link>
          </li>
        </ul>
      )}
      {props.userType === "bloodbank" && (
        <ul className="navUl">
          <li>
            <Link to="/BloodCountChart">BLOOD CHART</Link>
          </li>
          <li>
            <Link to="/Table">DONOR BASE</Link>
          </li>
          <li>
            <Link to="/Table">BLOOD BANK HISTORY</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navigation;
