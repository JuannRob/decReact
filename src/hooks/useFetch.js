import axios from 'redaxios'
import { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_API_URL

export function useFetch (query, deps = []) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const params = new URLSearchParams(query)

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true)
        const response = await axios.get(`${BASE_URL}/decretos`, { params })
        setData(response.data.data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, deps)

  return { data, isLoading, error }
}
