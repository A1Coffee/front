import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import Hat from "./components/hat"
import Face from "./components/face"
import Comm from "./components/comment"
import Mono from "./components/mono"
import Info from "./components/info"
import Slide from "./components/slider"
import End from "./components/end"
// import App from './App'
import './css/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"))

function App() {

    return (<div className="name">
      
      <Hat/>
      <Face/>
      <Comm/>
      <Mono/>
      <Info/>
      <Slide/>
      <End/>
    </div>)
}

app.render(<App />)