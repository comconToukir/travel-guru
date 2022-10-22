import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const Home = () => {
  const { isLoading, data } = useQuery('places', () => {
    return axios.get('http://localhost:5000/')
  })

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  console.log(isLoading, data?.data);
  return (
    <div>
      {
        data?.data.map(place => <p>{place.placeInfo.name}</p>)
      }
    </div>
  );
};

export default Home;