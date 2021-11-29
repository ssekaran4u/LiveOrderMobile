import React, { useEffect } from "react";
import MobileRouter from "./router/MobileRouter";
import "./App.css";
import "./PwAApp.css";
// import styles from './App.css'

import { Provider } from "react-redux";
import store from "./store";

import { BrowserView, MobileView } from "react-device-detect";

// window.store = store;

function App() {


	return (
		<Provider store={store}>
			<div className="App">
				<MobileRouter />
				{/*<MobileView>
				</MobileView>*/}
			</div>
		</Provider>
	);
}

export default App;
