import React from "react";

import Cards from "./components/Cards/Cards";
import {Chart,CountryPicker} from "./components";//used indexjs in component
import { fetchData } from "./api";

import styles from './App.module.css'

class App extends React.Component {

    state = {
        data : {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }
    render() {
        const {data} = this.state;
      return(
            <div className = {styles.container}>
              <Cards data = {data}></Cards>
              <Chart></Chart>
              <CountryPicker></CountryPicker>
            </div>
        )
    }
}

export default App;