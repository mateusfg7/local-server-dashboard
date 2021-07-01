import React, { useEffect } from 'react'
import Head from 'next/head'

import links from '../services/links'

import LinkCard from '../components/LinkCard'

import { Main, Header, Content } from '../styles/pages/index'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>L.S.D.</title>
      </Head>

      <Main>
        <Header>
          <div>
            <h1>L.S.D.</h1>
            <p>Local Server Dashboard</p>
          </div>
          <div>
            <h2>Hora</h2>
            <h2>Clima</h2>
          </div>
        </Header>

        <Content>
          <div className="cards">
            {links.map(service => (
              <LinkCard url={service.url} background={service.mainColor}>
                {service.title}
              </LinkCard>
            ))}
          </div>
        </Content>
      </Main>
    </div>
  )
}

export default Home
