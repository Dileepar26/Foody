import {createContext} from 'react'
export const  contexthook = createContext()
export const Createcontext = ({children}) => {
  return (
    <contexthook.Provider>
        {children}
    </contexthook.Provider>
  )
}
