/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import { PokemonContext } from '@/hooks/appContext'

const AboutTab = function () {
  const { pokemonData } = useContext(PokemonContext)

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
            {pokemonData?.species.name}
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Height</Typography>
          </Grid>
          <Grid item xs>
            {pokemonData?.height}
            "
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Weight</Typography>
          </Grid>
          <Grid item xs>
            {pokemonData?.weight}
            {' '}
            lb
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Typography variant="body1" className="text-slate-500">Abilities</Typography>
          </Grid>
          <Grid item xs>
            {pokemonData?.abilities.map((ability) => `${ability.ability.name} `)}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutTab
