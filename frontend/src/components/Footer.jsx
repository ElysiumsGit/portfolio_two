import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between mt-16 bg-foreground-1 text-white p-6 text-sm font-medium">
      <h1>© {new Date().getFullYear()} Arter. All rights reserved.</h1>
      <h1>Developed by: John Carlo</h1>
    </footer>
  )
}

export default Footer