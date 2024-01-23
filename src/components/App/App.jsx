import React, { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

const App = () =>{
    const headerText = useState('Name It!');
    const [headerExpanded, setheaderExpanded] = useState(true);
    const [suggestedNames, setsuggestedNames] = useState([]);

    const handleInputChange = (inputText) =>{
        setheaderExpanded(!inputText);
        setsuggestedNames(inputText ? name(inputText) : []);
    };
    return(
        <>
            <Header headerExpanded={headerExpanded} headTitle={headerText}/>
            <SearchBox onInputChange={handleInputChange}/>
            <ResultsContainer suggestedNames={suggestedNames}/>
        </>
    )
}

export default App;
