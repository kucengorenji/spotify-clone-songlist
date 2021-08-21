import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/auth'

export const useAuth = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isAuthenticated && window.location.hash) {
      const params = window.location.hash.substr(1).split('&')
      params.forEach(param => {
        const [key, value] = param.split('=')
        if (key === 'access_token') dispatch(login(value))
      })
    }
  }, 
  // eslint-disable-next-line
  [])

  return useSelector(state => state.auth)
}
