import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './style.css';

const Renderer = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

ReactDOM.render(<Renderer />, document.getElementById('root'));