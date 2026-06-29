import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  )
}