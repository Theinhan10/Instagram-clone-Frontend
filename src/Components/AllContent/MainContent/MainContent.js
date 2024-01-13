import React from 'react'
import "./MainContent.css"
import Grid from '@mui/material/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';

export default function MainContent() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          grid 1
        </Grid>

        <Grid item xs={6}>
            <div>
              <div className='status'>
                <StatusBar/>
              </div>
              
              <div className='mainpage'>
                <MainPage/>
              </div>
            
            </div>
        </Grid>

        <Grid item xs={2}>
          fsdf
        </Grid>

        <Grid item xs={2}>
          dsfsd
        </Grid>




      </Grid>
    </div>
  )
}
