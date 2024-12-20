import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ContextApi = createContext();



export const ContextApiProvider = ({ children }) => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(`https://randomuser.me/api/?page=1&results=10&results=10`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const value = {
    data,
    loading,
  }

  return (
    <ContextApi.Provider value={value}>
      {children}
    </ContextApi.Provider>
  )
}

