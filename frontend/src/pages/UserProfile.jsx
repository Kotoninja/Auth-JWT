import React from 'react';
import { useParams, useNavigate, replace } from 'react-router-dom';
import Layout from '../components/Layout';
import api from '../api';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const UserProfile = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/people/${params.id}`);
        setData(response.data);
      } catch (err) {
        // console.log(err)
        navigate("/404", { state: false })
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  return (
    <Layout>
      <Box sx={{ border: 2, borderColor: "grey.400", p: 2, borderRadius: 4, display: "flex", gap: 3 }}>
        {
          loading
            ?
            <Skeleton variant="circular" width={100} height={100} />
            :
            <Avatar sx={{ width: 100, height: 100 }}>
              <Typography sx={{ fontSize: 60 }}>
                {data?.username[0].toUpperCase()}
              </Typography>
            </Avatar>
        }

        <Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "grey.500", fontSize: 14 }}>
              username:
            </Typography>
            <Box sx={{ fontSize: 25 }}>
              {loading
                ?
                <Skeleton variant="text" />
                :
                <Typography>
                  {data?.username}
                </Typography>
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
};

export default UserProfile;