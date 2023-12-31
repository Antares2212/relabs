export const dateTime = () => {
  const getDataByTimestamp = (second) => {
    const now = new Date(second * 1000)
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')

    const dateFormatted = `${day}.${month}.${year}`
    const timeFormatted = `${hours}:${minutes}`
    const fullTime = `${dateFormatted} ${timeFormatted}`

    return fullTime
  }

  return {
    getDataByTimestamp
  }
}


