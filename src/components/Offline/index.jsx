import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    setIsOnline(false);
    console.log('OfflineHandle');
  };
  const handleOnline = () => {
    setIsOnline(true);
    console.log('OnlineHandle');
  };

  useEffect(() => {
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>;
  }

  return <p>Jste offline!</p>;
};

export default Offline;
