import { useState, createContext, useEffect } from 'react'

const DonacionesContext = createContext()

const DonacionesProvider = ({ children }) => {
  return (
        <DonacionesContext.Provider
          value={{
          }}
        >
          {children}
        </DonacionesContext.Provider>
  )
}
