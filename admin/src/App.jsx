import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const App = () => {

  const apoloprop={
    uri:'https://flyby-router-demo.herokuapp.com/',
    cache:new InMemoryCache(),
  }
  const myclient=new ApolloClient(apoloprop)
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
    <div><Tsform/>this is</div>
  </div>)
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<ApolloProvider><App/></ApolloProvider>)