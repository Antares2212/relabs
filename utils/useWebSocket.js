export const useWebSocket = () => {
  const websocket = new WebSocket('wss://test.relabs.ru/event')

  const openSocket = () => {
    websocket.onopen = () => {
      console.log('Сокет открыт');
    }
  }
  
  const getData = (data) => {
    websocket.onmessage = (event) => {
      data.value.push(JSON.parse(event.data))
    } 
  }

  const closeSocket = () => {
    websocket.close()
    console.log('Сокет Закрыт');
  }
  
  return {
    openSocket,
    getData,
    closeSocket
  }
}
