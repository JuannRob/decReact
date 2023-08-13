import React from 'react'
import Header from './components/layout/Header'
import Search from './pages/Search'
import Footer from './components/layout/Footer'
import Results from './pages/Results'
import Details from './pages/Details'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="container flex w-3/4 xl:w-3/5 flex-grow flex-col justify-center self-center">
        <div className="wrapper w-full bg-main-color p-5 my-11 xl:my-0">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/decretos" element={<Results />} />
            <Route path="/decretos/details" element={<Details />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  )
}
