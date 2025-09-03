import React from 'react'
import ReactDOM from 'react-dom/client'
//import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './index.css'
import  Navigation  from './Navigation'
//import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const App = () => {
   //apoloprop=

  return(<div className="container">
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div><Navigation/></div>
    <div></div>
  </div>)
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)