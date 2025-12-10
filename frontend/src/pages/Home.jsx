import React from 'react'
import Layout from "../components/Layout"
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton'
import api from '../api'


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/people");
        setData(response.data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center" }}><b>Peoples</b></Box>
      <Box sx={{ mt: 2, display: "flex", flexGrow: 1, minHeight: 0 }}>
        {loading ?
          (<Skeleton variant="rounded" animation="wave" width={"100%"} height="calc(100vh - 120px)" />
          ) : (
            data && Array.isArray(data) && (
              <ul>
                {data.map((person, index) => (
                  <li key={index}>{JSON.stringify(person)}</li>
                ))}
              </ul>
            ))}
      </Box>
    </Layout>
  )
}

export default Home;