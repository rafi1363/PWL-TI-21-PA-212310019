import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChapterOne from '../ChapterOne'

export default function BaseRoute() {
  return (
    <React.Suspense>
        <Routes>
            <Route index element={<ChapterOne />} />
            <Route path="home" element={<Home />} />
        </Routes>
    </React.Suspense>
  )
}


const Home = () => {
  return <h3>this is home </h3>;
};