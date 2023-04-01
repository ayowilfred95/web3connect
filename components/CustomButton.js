import {useWeb3Modal } from '@web3modal/react';
import { useState } from 'react';
import { useAccount, useDisconnect} from 'wagmi';

export default function CustomButton () {
    const[loading, setLoading] = useState(false);
    const{open} = useWeb3Modal();
    const {address,isConnected} = useAccount();
    const {disconnect} = useDisconnect();

    const label = isConnected ? "Disconnect" : "connect your wallet"

    async function onOpen (){
        setLoading(true);
        await open();
        setLoading(false);
    }

    function onClick () {
        if(isConnected) {
            disconnect();
        }else {
            onOpen();
        }
    }
    return (
        <div>
              <button onClick={onClick} disabled={loading}>
            {loading ? "Loading..." : label}
        </button>
        {address}
        </div>
    )
}
