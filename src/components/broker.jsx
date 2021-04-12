import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import InfoBoxes from './shared/infoBoxes';
import Table from './shared/table';
import axios from 'axios';

export default function Client() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/user?page=2`, { headers: { 'app-id': process.env.REACT_APP_API_APP_ID } })
      .then(({ data }) => setData(data.data))
      .catch(console.error)
  }, []);

  return (
    <Container style={{ marginTop: '50px' }}>
      <InfoBoxes emails={data.length} conversions={0} />
      <br />
      <Table referrals={data} tab={'broker'} />
    </Container>
  )
}