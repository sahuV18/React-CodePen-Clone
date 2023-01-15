/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function MainApp(props) {
  const {html,css,js,setHtml,setCss,setJs,srcDoc,setSrcDoc,lint}=props
  const [name,setName] = React.useState('');
  const [ud,setUd] = React.useState(name);

  const handleChange = (event) =>{
    setName(event.target.value);
  }

  const handleClick=()=>{
    setUd(name);
  }

  const refesh=()=>{
    setSrcDoc('')
    setHtml('')
    setCss('')
    setJs('')
  }

  return (
    <div className='grid'>
      <div className='top-bar'>
        <div>
          <div>
          <h1>Cpe</h1>
          <p>createYourOwnCodingJourney</p>
          </div>
        </div>
        <div>
          <button onClick={refesh}>Refesh</button>
        </div>
        <div className='name'>
        {/* <TextField id="outlined-basic" onChange={handleChange} label="Outlined" variant="outlined" /> */}
          <input placeholder='Enter Your Name' onChange={handleChange}></input> 
          <button onClick={handleClick}>Click</button>
          {/* <Button variant="outlined" onClick={handleClick}>Outlined</Button> */}
          
        </div>
        {/* <div>
          <button>White Theme</button>
        </div> */}
      </div>
      <div className='display'>
        {ud ? <h2 id='text'> Hello {ud}, welcome to Cpe, Happy Coding!!!</h2>:null}
      </div>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
        <div className="bpane">
          <div className='output'>
            <div>
              <h3>Output</h3>
            </div>
            <div>
              <Link to="/newTab" >
              <button>Maximize Screen</button>
              </Link>
            </div>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
          />
        </div>
      </div>  
    </div>
  )
}
export default MainApp;
