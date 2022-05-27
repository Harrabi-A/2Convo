import io from 'socket.io-client'

const socketInitial = io.connect("http://localhost:3030")

export const Socket = (socket = socketInitial , action) => {
    return socket;
} 

export default Socket;