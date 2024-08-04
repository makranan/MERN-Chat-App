import { createContext, useContext, useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineStatus, setOnlineStatus] = useState([]);
  const { authState } = useAuthContext();

  useEffect(() => {
    if (authState) {
      const socket = io('http://localhost:5000', {
        query: {
          userId: authState._id,
        },
      });

      setSocket(socket);

      socket.on('getOnlineStatus', (data) => {
        setOnlineStatus(data);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authState]);

  return (
    <SocketContext.Provider value={{ socket, onlineStatus }}>
      {children}
    </SocketContext.Provider>
  );
};
