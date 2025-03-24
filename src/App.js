import React from "react";
import { Header } from "./components/Header";
import { ComicList } from "./components/ComicList";
import { Footer } from "./components/Footer";
import { BlueBar } from "./components/BlueBar"; // Bonus

function App() {
    return (
        <div className="app">
            <Header />
            <BlueBar />
            <main>
                <ComicList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
