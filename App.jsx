import React, { useState } from 'react'

function App() {
  const[value,setValue]=useState("")
  return (
    <div className='Calculator'>
      <div className='Container'>
 <form action="">
  <div className='inp'>
    <input type="text" value={value}/>
  </div>
  
  
    <div>
      <input type="Button" value= "Ac" onClick={(e=>setValue(""))}  />
      <input type="Button" value= "Dc"onClick={e=> setValue(value . slice(0, -1))} />
      <input type="Button" value= "." onClick={(e=>setValue(value+ e.target.value))} />
      <input type="Button" value= "/" onClick={(e=>setValue(value+ e.target.value))}/>
    </div>
    <div>
      <input type="Button" value= "9" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "8" onClick={(e=>setValue(value+ e.target.value))} />
      <input type="Button" value= "7" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "*"/>
    </div>
    <div>
      <input type="Button" value= "6" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "5" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "4" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "+" onClick={(e=>setValue(value+ e.target.value))}/>
    </div>
    <div>
      <input type="Button" value= "3" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "2" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "1" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "-" onClick={(e=>setValue(value+ e.target.value))}/>
    </div>
    <div>
      <input type="Button" value= "0" onClick={(e=>setValue(value+ e.target.value))}/>
      <input type="Button" value= "00" onClick={(e=>setValue(value+ e.target.value))} />
      <input type="Button" className='eql' value= "=" onClick={(e=>setValue(eval(value)))}/>
      
    </div>
    </form>
    </div>
    </div>
    
  )
}

export default App
