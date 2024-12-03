import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const App = () => {
   //apoloprop=
  const myclient=new ApolloClient({
    uri:'https://flyby-router-demo.herokuapp.com/',
    cache:new InMemoryCache(),
  })
console.log("hi")
  myclient.query({query:gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `,}).then((result) => console.log("result",result));
  return(<div className="container">
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>)
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)