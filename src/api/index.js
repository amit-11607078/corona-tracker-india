import axios from "axios";

const url = 'https://api.covid19india.org/data.json';

// https://api.covid19india.org/v4/timeseries.json

// https://api.rootnet.in/covid19-in/stats/history

var dailyData;

export const fetchStateData = async () => {

    try {
        const { data:{ statewise} } = await axios.get(url);
        return statewise;
    
    } catch (error) {
        console.log(error);
    }
    
}


export const fetchDailyData = async () => {
    try {
        const {data:{cases_time_series}} = await axios.get(url);
        const dailyData = cases_time_series;
        return dailyData;
        
    } catch (error) {
        console.log(error);
    }
}
