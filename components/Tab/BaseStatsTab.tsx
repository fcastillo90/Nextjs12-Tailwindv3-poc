/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  Box, Grid, LinearProgress, Typography,
} from '@mui/material'
import { Stat } from '@/types/pokemon'

const BaseStatsTab = function ({ stats }: {stats: Stat[]}) {
  const getColor = (value: number): 'inherit' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined => {
    if (value >= 70) return 'success'
    if (value <= 35) return 'error'
    return 'info'
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {stats.map((stat) => (
          <Grid container item>
            <Grid item xs={2}>
              <Typography variant="body1" className="text-slate-500">{stat.stat.name}</Typography>
            </Grid>
            <Grid item xs>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {stat.base_stat}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={stat.base_stat > 100 ? 100 : stat.base_stat} color={getColor(stat.base_stat)} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default BaseStatsTab
