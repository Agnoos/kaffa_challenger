import axios from 'axios';

const url = 'http://worldclockapi.com/api/json/utc/now'

const fetchData = async () => {


    try {
        const { data: { currentDateTime, utcOffset, dayOfTheWeek, currentFileTime } } = await axios.get(url)
        return {currentDateTime, utcOffset, dayOfTheWeek, currentFileTime};
    } catch (error) {

    }
}
export default fetchData

