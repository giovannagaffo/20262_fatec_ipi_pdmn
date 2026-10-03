import React from 'react'

const Creditos = () => {
  return (
    <div className="flex justify-content-center gap-4 text-sm text-600 mt-2">
      <a 
        href="https://www.geoapify.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary no-underline hover:underline"
      >
        Powered by Geoapify
      </a>
      <span>|</span>
      <a 
        href="https://www.openstreetmap.org/copyright" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary no-underline hover:underline"
      >
        &copy; OpenStreetMap contributors
      </a>
    </div>
  )
}

export default Creditos