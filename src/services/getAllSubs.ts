import axios from 'axios';
import { Sub, SubsResponseFromApi } from '../components/types';

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs)
}

//desde una API con Fetch
/* const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return fetch('http://una-api.com').then(res => res.json())
} */
//desde una API con Axios
const fetchSubs = async (): Promise<SubsResponseFromApi> => {
  const res = await axios
    .get('http://una-api.com');
    return res.data;
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map(subFromApi => {
    const {
      months: subMonths,
      profileUrl: avatar,
      nick,
      description
    } = subFromApi
    return {
      nick,
      subMonths,
      avatar,
      description
    }
  })
}