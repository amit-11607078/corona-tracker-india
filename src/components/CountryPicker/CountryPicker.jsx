import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchStateData } from '../../api';



const CountryPicker = ( {onHandelStateChange}  ) => {

    const [fetchedState, setFetchedState] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

            setFetchedState(await fetchStateData());
    }
    
        fetchAPI();
    }, [fetchStateData]);
    return (
        
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => onHandelStateChange(e.target.value)}>
                <option value="">India</option>
                {fetchedState.map( (state, i) => <option key={i} value={state.state} >{state.state}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;