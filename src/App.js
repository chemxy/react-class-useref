import './App.css';
import { useRef, useState } from "react";

function App() {

    const countRef = useRef(0);
    const [count, setCount] = useState(0);

    function incrementCountBy1() {
        const newCount = count + 1;
        setCount(newCount);
        console.log(`count: ${newCount}, count ref: ${countRef.current}`);
    }

    function incrementCountRefBy1() {
        countRef.current += 1;
        console.log(`count: ${count}, count ref: ${countRef.current}`);
    }

    function incrementCountAndRefBy1() {
        countRef.current += 1;
        incrementCountBy1();
    }

    return (
        <>
            <div>
                <p>count: {count}</p>
            </div>
            <div>
                <p>count ref: {countRef.current}</p>
            </div>

            <div>
                <button className="button" onClick={incrementCountBy1}> increment count by 1</button>
            </div>
            <div>
                <button className="button" onClick={incrementCountRefBy1}> increment count ref by 1</button>
            </div>
            <div>
                <button className="button" onClick={incrementCountAndRefBy1}> increment both count & count ref by 1
                </button>
            </div>
        </>
    );
}

export default App;