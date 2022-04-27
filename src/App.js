import './App.scss';
import {Home} from "./pages";
import {Footer, Header} from "./components";

function App() {
    return [
        <Header/>,
        <Home/>,
        <Footer/>
    ];
}

export default App;
