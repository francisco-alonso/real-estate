import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [accountsState, setAccountsState] = useState([]);

  useEffect(() => {
      loadBlockchainData()
  }, []);
  
  const loadBlockchainData = async () => {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    
    setAccountsState(accounts);
  }

  return (
    <div>
      <h1>Ethereum Provider</h1>
      {
        JSON.stringify(accountsState)
      }
    </div>
  );
}

export default App;
