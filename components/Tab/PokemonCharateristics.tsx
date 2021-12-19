import React from 'react'
import {
  Tabs, Tab, Container,
} from '@mui/material'
import AboutTab from './AboutTab'
import EvolutionTab from './EvolutionTab'
import BaseStatsTab from './BaseStatsTab'

const TabPanel = function (props: any) {
  const {
    children, value, index, ...other
  } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  )
}

const PokemonCharateristics = function () {
  const [value, setValue] = React.useState(0)

  return (
    <>
      <Container maxWidth="md">
        <Tabs value={value} onChange={(_event, newValue) => setValue(newValue)} centered>
          <Tab label="About" />
          <Tab label="Evolution" />
          <Tab label="Base Stats" />
          <Tab label="Types" />
        </Tabs>
        <div className="mt-10">
          <TabPanel value={value} index={0}>
            <AboutTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EvolutionTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <BaseStatsTab />
          </TabPanel>
          <TabPanel value={value} index={3}>
            Types
          </TabPanel>
        </div>
      </Container>
    </>
  )
}

export default PokemonCharateristics
