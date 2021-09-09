import {io} from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_IMAGE_URL, {
  transports: ['websocket', 'polling'] // use WebSocket first, if available
});

export default socket