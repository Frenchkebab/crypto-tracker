import React, { createContext, useContext, useEffect, useState } from 'react';
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'USD') {
      setSymbol('$');
    } else if (currency === 'KRW') {
      setSymbol('₩');
    } else {
      setSymbol('₹');
    }
  }, [currency]); // whenever currency changes this runs

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  useContext(Crypto);
};
