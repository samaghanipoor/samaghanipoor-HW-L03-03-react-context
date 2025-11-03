import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <AppBar 
        position="fixed" 
        sx={{ backgroundColor: '#9e9e9e', zIndex: 1000 }} // طوسی متوسط
>

        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Expense Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/transactions">Transactions</Button>
          <Button color="inherit" component={Link} to="/reports">Reports</Button>
        </Toolbar>
      </AppBar>
      <Toolbar /> 
    </>
  )
}

export default Header
