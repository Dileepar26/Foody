import {useContext} from 'react'
import { contexthook } from '../context/Createcontext'
export const Usecontext = () => {
    const context = useContext(contexthook)
    if(!context) {
        throw Error('error')
    }
  return context
}
