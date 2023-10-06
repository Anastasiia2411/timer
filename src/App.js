import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import { addLog, clearLog, addPending, clearPending, removeActionFromQueue, addToQueue } from "./store/actions";

import Button from "./components/Button";

function App() {
    const dispatch = useDispatch();
    const logs = useSelector((state) => state.logs);
    const pending = useSelector((state) => state.pending);
    const actionQueue = useSelector((state) => state.actionQueue);

    const waitFor = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

    useEffect(() => {
        if (actionQueue.length > 0 && !pending) {
            processAction(actionQueue[0]);
        }
    }, [actionQueue]);

    const processAction = async (seconds) => {
        const clickTime = new Date();
        dispatch(addPending({
            seconds,
            clickTime,
            logTime: clickTime,
            message: "wait...",
        }));
        await waitFor(seconds);
        const logTime = new Date();
        const passedTime = Math.round((logTime - clickTime) / 1000);
        dispatch(clearPending());
        dispatch(addLog({
            seconds,
            clickTime,
            logTime,
            message: `Button N°${seconds}: ${logTime.toLocaleTimeString()} - ${clickTime.toLocaleTimeString()} (${passedTime} sec)`,
        }));
        dispatch(removeActionFromQueue(seconds));
    };

    const handleClick = (seconds) => {
        dispatch(addToQueue(seconds));
    };

    const handleClear = () => {
        dispatch(clearLog());
    };

    return (
        <section className="App">
            <div className={"App__button-wrapper"}>
                <Button text={"1 sec"} action={() => handleClick(1)}/>
                <Button text={"2 sec"} action={() => handleClick(2)}/>
                <Button text={"3 sec"} action={() => handleClick(3)}/>
                <Button text={"Clear"} action={handleClear}/>
            </div>
            <div>
                <h2>Time</h2>
                <ul className={"App__list"}>
                    {logs.map((entry, index) => (
                        <li className={"App__list-el"} key={index}>
                            <p className={"App__number-paragraph"}>{index + 1}. </p>
                            <p className={"App__log-paragraph"}>{entry.message}</p>
                        </li>
                    ))}
                    {pending && (
                        <li className={"App__list-el"}>
                            <p className={"App__number-paragraph"}>{logs.length + 1}. </p>
                            <p className={"App__log-paragraph"}>{pending.message}</p>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default App;

