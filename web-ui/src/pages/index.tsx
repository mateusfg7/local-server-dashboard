/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { format } from 'date-fns'

import weatherApi from '../services/api'
import hostList from '../services/hosts.json'

import { Container, Main, Clock, Content, Host } from '../styles/pages/index'
import { GetServerSideProps } from 'next'

interface WeatherCurrent {
  location: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
  }
  current: {
    last_updated: string
    temp_c: number
    is_day: number
    condition: {
      text: string
      icon: string
      humidity: number
    }
  }
}

interface Props {
  weatherData: WeatherCurrent
}

const Home: React.FC<Props> = ({ weatherData }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [search, setSearch] = useState<string>()

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date())
    }, 500)
  }, [])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()

    alert(search)

    window.location.replace(`https://anon.sx/search?q=${search}`)
  }

  return (
    <div>
      <Head>
        <title>L.S.D.</title>
      </Head>

      <Container>
        <Main>
          <Clock>
            <div className="hour">
              <p>{format(currentDate, 'p')}</p>
            </div>
            <div className="weather">
              <p>{weatherData.current.temp_c}°</p>
              <Image
                src={`https:${weatherData.current.condition.icon}`}
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
  const weatherRequest = await weatherApi.get('current.json')
  const weatherData: WeatherCurrent = weatherRequest.data

  return {
    props: {
      weatherData
    }
  }
}
