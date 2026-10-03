import React from 'react'

const Cartao = ({ cabecalho, children }) => {
  return (
    <div className="border-1 surface-border border-round-md p-3 surface-card shadow-1">
      <div className="text-sm text-color-secondary font-medium mb-2">
        {cabecalho}
      </div>
      <hr className="my-2 surface-border border-top-1 border-none" />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Cartao