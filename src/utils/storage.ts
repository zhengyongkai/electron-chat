export function getLocalStorage(key: string, parseJson = false): string | null | object {
  const data = localStorage.getItem(key)
  return parseJson ? JSON.parse(data ?? '{}') : localStorage.getItem(key)
}

export function setLocalStorage(key: string, value = ''): void {
  return localStorage.setItem(key, value)
}
