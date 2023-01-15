import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainApp from "./components/MainApp";
import NewTab from "./components/NewTab";
import useLocalStorage from './hooks/useLocalStorage'

function App (){
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return(
      <Router>
          <Routes>
          <Route path="/"  element={<MainApp html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJs={setJs} srcDoc={srcDoc} setSrcDoc={setSrcDoc}/>}/>
          <Route path="/NewTab"  element={<NewTab srcDoc={srcDoc}/>}/>
          </Routes>
      </Router>
  )
}
export default App;