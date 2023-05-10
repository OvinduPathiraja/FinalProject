import React from "react";
import { useState } from "react";


 const data = [
  {
    name: "BLOOD BANK SEARCH",
    columns: ["DONOR NUMBER", "NAME OF DONOR", "TELEPHONE NUMBER","ENTER BLOOD TYPE","ENTER LOCATION OF BLOOD BANK","ENTER AMOUNT OF BLOOD DONATED","REWARD POINTS","ENTER COMMENTS ABOUT THE DONOR"],
    rows: [
      { DonorNo: "20", DonorName: "John",DTelephoneNo: "000000000",DBloodType:"+AB",DLocation:"Narahepitiya",DAmtOfBlood:2,Reward:2,Comments:"Nice" },
      { DonorNo: "20", DonorName: "John",DTelephoneNo: "000000000",DBloodType:"+AB",DLocation:"Narahepitiya",DAmtOfBlood:2,Reward:2,Comments:"Nice" },
      { DonorNo: "20", DonorName: "John",DTelephoneNo: "000000000",DBloodType:"+AB",DLocation:"Narahepitiya",DAmtOfBlood:2,Reward:2,Comments:"Nice" },
      { DonorNo: "20", DonorName: "John",DTelephoneNo: "000000000",DBloodType:"+AB",DLocation:"Narahepitiya",DAmtOfBlood:2,Reward:2,Comments:"Nice" },

    ],
  },
  {
    name: "HOSPITAL SEARCH",
    columns: ["BLOOD TYPE", "AMOUNT OF BLOOD AVAILABLE OF THE GIVEN BLOOD TYPE", "LOCATION","TELEPHONE NUMBER"],
    rows: [
      { HBloodtype: "+AB", HAmtOfBlood: "2", HLocation: "Matara",HTelephoneNo:"0000000000" },
      { HBloodtype: "+AB", HAmtOfBlood: "2", HLocation: "Matara",HTelephoneNo:"0000000000" },
      { HBloodtype: "+AB", HAmtOfBlood: "2", HLocation: "Matara",HTelephoneNo:"0000000000" },
    ],
  },
  {
    name: "DONOR HISTORY",
    columns: ["NIC", "DATE OF DONATION", "BLOOD TYPE","QUANTITY OF BLOOD DONATED IN PINTS"],
    rows: [
      { NIC: "000000000", DHDate: "11/2/2023", DHBloodtype:"+B",DHAmtOfBlood:2 },
      { NIC: "000000000", DHDate: "11/2/2023", DHBloodtype:"+B",DHAmtOfBlood:2 },
      { NIC: "000000000", DHDate: "11/2/2023", DHBloodtype:"+B",DHAmtOfBlood:2 },
    ],
  },
  {
    name: "BLOOD BANK HISTORY",
    columns: ["NAME OF HOSPITAL", "DATE OF DONATION", "BLOOD TYPE","QUANTITY OF BLOOD SENT IN PINTS"],
    rows: [
      { HospitalName: "000000000", BBDate: "11/2/2023", BBHBloodtype:"+B",BBHAmtOfBlood:2 },
      { HospitalName: "000000000", BBDate: "11/2/2023", BBDHBloodtype:"+B",BBHAmtOfBlood:2 },
      { HospitalName: "000000000", BBDate: "11/2/2023", BBDHBloodtype:"+B",BBHAmtOfBlood:2 },
    ],
  },
  {
    name: "HOSPITAL HISTORY",
    columns: ["NIC", "DATE OF DONATION", "BLOOD TYPE","QUANTITY OF BLOOD DONATED IN PINTS"],
    rows: [
      { BloodBankName: "000000000", HDate: "11/2/2023", HBloodtype:"+B",HAmtOfBlood:2 },
      { BloodBankName: "000000000", HDate: "11/2/2023", HBloodtype:"+B",HAmtOfBlood:2 },
      { BloodBankName: "000000000", HDate: "11/2/2023", HBloodtype:"+B",HAmtOfBlood:2 },
    ],
  },
];

 const Table = ({ selectedData }) => {
  if (!selectedData) {
    return <div>No data selected</div>;
  }

  return (
    <div>
      <h2>{selectedData.name}</h2>
      <table>
        <thead>
          <tr>
            {selectedData.columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedData.rows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export {Table, data}