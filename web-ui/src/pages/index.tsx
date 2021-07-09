import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { format } from 'date-fns'

import {
  getCurrentWeatherData,
  CurrentWeatherData
} from '../utils/getWeatherData'
import getCurrentBackgroundUrl from '../utils/getCurrentBackgroundUrl'
import hostList from '../services/hosts.json'

import { Container, Main, Clock, Content, Host } from '../styles/pages/index'
import { GetServerSideProps } from 'next'

interface Props {
  currentWeatherData: CurrentWeatherData
}

const Home: React.FC<Props> = ({ currentWeatherData }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [search, setSearch] = useState<string>()
  const [backgroundUrl, setBackgroundUrl] = useState(
    getCurrentBackgroundUrl(currentDate, currentWeatherData)
  )

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date())
      setBackgroundUrl(getCurrentBackgroundUrl(currentDate, currentWeatherData))
    }, 500)
  }, [])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()

    window.location.replace(`https://anon.sx/search?q=${search}`)
  }

  return (
    <div>
      <Head>
        <title>L.S.D.</title>
      </Head>

      <Container backgroundUrl={backgroundUrl}>
        <Main>
          <Clock>
            <div className="hour">
              <p>{format(currentDate, 'p')}</p>
            </div>
            <div className="weather">
              <p>{currentWeatherData.current.temp_c}°</p>
              <Image
                src={`https:${currentWeatherData.current.condition.icon}`}
                width={70}
                height={70}
              />
            </div>
          </Clock>
          <Content>
            <header>
              <h1>Welcome, Mateus</h1>
              <p>Today is {format(currentDate, 'EEEE, LLLL d')}</p>
            </header>
            <div className="services">
              {hostList.map(host => (
                <Host
                  href={host.url}
                  key={host.service}
                  target="_blank"
                  rel="noreferrer"
                  color={host.mainColor}
                >
                  <div>{host.title}</div>
                </Host>
              ))}
            </div>
            <div className="search">
              <form onSubmit={handleSearch}>
                <input
                  type="search"
                  name="search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </form>
            </div>
          </Content>
        </Main>
      </Container>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const currentWeatherData = await getCurrentWeatherData()

  return {
    props: {
      currentWeatherData
    }
  }
}
