import React from 'react'
import Layout from "../components/Layout"
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
// import Skeleton from '@mui/material/Skeleton'
import CircularProgress from '@mui/material/CircularProgress'
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
      <Box sx={{ mt: 2 }}>
        {loading ?
          (<Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ display: "flex", justifyContent: "center" }} color="inherit" />
          </Box>
          ) : (
            data && Array.isArray(data) && (
              <ul>
                {data.map((person, index) => (
                  <li key={index}><a href={`profile/${person?.id}`}>{person?.username}</a></li>
                ))}
              </ul>
            ))}
      </Box>
    </Layout>
  )
}

export default Home;