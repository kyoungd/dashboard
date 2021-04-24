import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import CardSymbolList from "components/Cards/CardSymbolList";

export default function Admin({ children }) {
  const tickers =
    [{
      symbol: "BTX",
      sentimentArrow: "up",
      lastNews: "Apr 20, 2021 11:30 AM"
    }, {
      symbol: "COIN",
      sentimentArrow: "up",
      lastNews: "Apr 20, 2021 9:30 AM"
    }, {
      symbol: "TKAT",
      sentimentArrow: "down",
      lastNews: "Apr 19, 2021 10:21 AM"
    }, {
      symbol: "OCG",
      sentimentArrow: "up",
      lastNews: "Apr 21 2021 2:11 PM"
    }, {
      symbol: "SYPR",
      sentimentArrow: "up",
      lastNews: "Apr 20 2021 6:45 PM"
    }, {
      symbol: "MVIS",
      sentimentArrow: "down",
      lastNews: "Apr 20 2021 7:01 PM"
    }, {
      symbol: "INO",
      sentimentArrow: "down",
      lastNews: "Apr 20 2021 7;14 PM"
    }];

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <CardSymbolList symbols={tickers} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
