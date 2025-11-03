import React from 'react'
import { Container,Typography } from '@mui/material'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
        <Typography variant='h4' gutterBottom>
            Welcom To Dashboard
        </Typography>
        <Link to="/transactions">
            Go To transactions
        </Link>
    </Container>
  )
}

export default Dashboard