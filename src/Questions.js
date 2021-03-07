import React, { useState } from 'react'

function Questions() {
    const companies = ['Google', 'Facebook', 'Amazon', 'Paytm','Swiggy', 'Zomato','CRED','Coinbase'];
    const [input, setInput] = useState('');
    
    

    const filtered = companies.filter(company =>{
                    const regex= new RegExp(input,'gi');
                    return company.match(regex) || company.match(regex);
                })
    
    console.log(input,companies,filtered);

    return (
        <div className="questions">
            <input className="searchinput" placeholder="Search for a interview" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <h3>Top searched Items</h3>
            {filtered.map((company, index) => {
             return <a href="#"><p className='question' key={index}>Interview Experience at {company}</p></a> 
            })}             
        </div>
    )
}

export default Questions
