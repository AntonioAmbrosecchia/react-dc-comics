import React from "react";
import { Header } from "./components/Header";
import ComicList from "./components/ComicList";
import { Footer } from "./components/Footer";
import { Jumbotron } from "./components/Jumbotron";
import { BlueBar } from "./components/BlueBar"; // Bonus

function App() {
    return (
        <div className="app">
            <Header />
            <Jumbotron />
            <main>
                <ComicList />
                <BlueBar />
            </main>
            <Footer />
        </div>
    );
}

export default App;
