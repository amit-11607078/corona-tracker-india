import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchStateData } from './api';


class App extends React.Component {
    state = {
        data: [],
        lstate: '',
        
    }


    async componentDidMount () {
        const fetchedData  = await fetchStateData();
        this.setState({ data: fetchedData });
 }

    

    handelStateChange = async (optionState) => {
        const fetchedData  = await fetchStateData();
        const optionedState = fetchedData.filter( (state) => state.state === optionState )
        this.setState({ data: optionedState, lstate: optionState });
    }

    

    render(){
        const {data, lstate} = this.state;
        return(
            <div className={styles.container}> 
                <Cards data={ data }/>
                {/* <CountryPicker /> */}
                <CountryPicker onHandelStateChange={this.handelStateChange}/>
                <Chart data={data} lstate={lstate} /> 
            </div>
        );
    }
};

export default App; 