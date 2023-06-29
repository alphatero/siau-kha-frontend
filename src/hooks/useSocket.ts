import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const socketUrl = 'wss://siau-kha-backend-wtqd.onrender.com/';

type Props = {
  url?: string;
};

// export const useSocket = (props: Props) => {
//   const { url } = props;
//   const [socket, setSocket] = useState<Socket | null>(null);

//   const connect = useCallback(() => {
//     const newSocket = io(socketUrl + url);

//     newSocket.on('connect', () => {
//       console.log('connected');
//     });

//     newSocket.on('disconnect', () => {
//       console.log('disconnected');
//     });

//     newSocket.on('error', () => {
//       socket?.disconnect();
//     });

//     setSocket(newSocket);
//   }, []);

//   const disconnect = useCallback(() => {
//     socket?.close();
//   }, [socket]);

//   useEffect(() => {
//     connect();
//     return () => {
//       disconnect();
//     };
//   }, []);

//   return { socket, connect, disconnect };
// };

// export default useSocket;
