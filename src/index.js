import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeePage from 'Employee';
import PersistentDrawerLeft from 'components/Drawer/Drawer';
import SkillsPage from 'Skills';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createAuthLink } from 'aws-appsync-auth-link';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, createHttpLink } from "@apollo/client";
Amplify.configure(awsExports);


  const url = awsExports.aws_appsync_graphqlEndpoint
  const region = awsExports.aws_appsync_region                                                                                                                                                                                        
  const auth = {
     type: awsExports.aws_appsync_authenticationType,
      apiKey: awsExports.aws_appsync_apiKey,
  };

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }), 
  createHttpLink({ uri: url })
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),                                                                                                                                                                                          
});

ReactDOM.render(
  <React.StrictMode>
    <>
      <ApolloProvider client={client}>
        <Router>
          <PersistentDrawerLeft />
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path='/Employee' element={<EmployeePage />} />
                <Route path='/Skills' element={<SkillsPage />} />
              </Routes>
          </Router>
        </ApolloProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

