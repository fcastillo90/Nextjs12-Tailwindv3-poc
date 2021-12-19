/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Pokemon } from '@/types/pokemon'

const AboutTab = function ({ data }: {data: Pokemon}) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Species</Typography>
          </Grid>
          <Grid item xs>
            {data.species.name}
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Height</Typography>
          </Grid>
          <Grid item xs>
            {data.height}
            "
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Weight</Typography>
          </Grid>
          <Grid item xs>
            {data.weight}
            {' '}
            lb
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Abilities</Typography>
          </Grid>
          <Grid item xs>
            {data.abilities.map((ability) => `${ability.ability.name} `)}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutTab
