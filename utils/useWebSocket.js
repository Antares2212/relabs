import { ref } from 'vue'

export const useWebSocket = (url) => {
  const data = ref([])
  const websocket = new WebSocket(url)
  
  websocket.onmessage = (event) => {
    data.value.push(JSON.parse(event.data))
  }
  
  function send(message) {
    websocket.send(message)
  }

  function close() {
    websocket.close()
  }
  
  return {
    data,
    send,
    close
  }
}
