function toQueryString(obj: any, prefix = ''): string {
  const str = []

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue

    const value = obj[key]
    const newKey = prefix ? `${prefix}[${key}]` : key

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      str.push(toQueryString(value, newKey))
    } else if (Array.isArray(value)) {
      value.forEach((val, i) => {
        str.push(`${newKey}[${i}]=${encodeURIComponent(val)}`)
      })
    } else {
      str.push(`${newKey}=${encodeURIComponent(value)}`)
    }
  }

  return str.join('&')
}


export const useStrapi = async <T>(
  path: string,
  query: Record<string, any> = {},
  options: {
    key?: string
    lazy?: boolean
    server?: boolean
    serverOnly?: boolean
    revalidate?: number | false
  } = {}
) => {
  const config = useRuntimeConfig()
  const queryString = toQueryString(query)
  const url = `${config.public.strapiURL}/${path}${queryString ? `?${queryString}` : ''}`

  return await useFetch<T>(url, {
    key: options.key || `${path}?${queryString}`,
    lazy: options.lazy ?? false,
    server: options.server ?? true,
    serverOnly: options.serverOnly ?? false,
    revalidate: options.revalidate ?? false,
    transform: (res: { data: T }) => res.data
  })
}
