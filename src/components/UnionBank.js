import React from 'react'
import AndhraBank from './AndhraBank'
import CorpBank from './CorpBank'
let UnionBank = () =>{
     return (
     <div>
         <h1>Union Bank</h1>
         <AndhraBank name="Andhra Bank" location="Vijayawada"/>
         <CorpBank name="Corporation Bank" location="Vizag"/>
     </div>)
}

export default UnionBank;
