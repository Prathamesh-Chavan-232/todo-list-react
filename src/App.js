import "./App.css";
import Header from "./Components/Header"; // Header is a default export
import { Footer } from "./Components/Footer"; // Footer is a named export, {} i.e specification required to import a non default function
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Header title='Todo List' searchBar={false} />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
