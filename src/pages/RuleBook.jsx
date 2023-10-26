import React from "react";
import { Document, Page } from "react-pdf";
const RuleBook = () => {
  return <div className="w-full h-screen">
    <h1 className="cardo text-6xl text-center py-0 mb-2">RuleBook</h1>
    <div className="w-10/12 h-3/4 mx-auto">
      <iframe className="border-2 border-white rounded-xl box3"
        src="./rule-book.pdf"
        width="100%"
        height="100%"
        title="RuleBook"
        
      />
    </div>
  </div>;
};

export default RuleBook;
