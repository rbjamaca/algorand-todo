import * as React from "react";

import Bio from "./components/Bio";
import Header from "./components/Header";
import SendWave from "./components/SendWave";
import Wallet from "./components/Wallet";

import useWallet from "./hooks/useWallet";

import "./App.css";
import WaveList from "./components/WaveList";

export default function App({peraWallet}) {
	const {
		walletInstalled,
		walletConnected,
		networkName,
		isMumbai,
		connectWallet,
		loading,
		writeLoading,
		waveList,
		totalWaves,
		sendWave,
		sendCake,
		optIn,
		optedIn,
		sendHype,
		onTodoAction,
		handleDisconnectWalletClick
	} = useWallet(peraWallet);

	if (!localStorage.getItem('PeraWallet.BridgeURL')) {
		localStorage.setItem('PeraWallet.BridgeURL', 'wss://a.bridge.walletconnect.org')
	}

	return (
		<div className="mainContainer">
			<div className="dataContainer">
				<Header />
				<Wallet
					handleDisconnectWalletClick={handleDisconnectWalletClick}
					optedIn={optedIn}
					optIn={optIn}
					loading={loading}
					walletInstalled={walletInstalled}
					walletConnected={walletConnected}
					isMumbai={isMumbai}
					networkName={networkName}
					connectWallet={connectWallet}
				/>
				<Bio />
				<SendWave
					walletInstalled={walletInstalled}
					walletConnected={walletConnected}
					isMumbai={isMumbai}
					onTodoAction={onTodoAction}
					loading={loading}
					writeLoading={writeLoading}
					totalWaves={totalWaves}
					sendWave={sendWave}
					sendCake={sendCake}
					sendHype={sendHype}
				/>
				<WaveList onTodoAction={onTodoAction} waveList={waveList} />
			</div>
		</div>
	);
}
