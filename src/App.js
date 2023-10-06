import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLog, clearLog, addPending, clearPending, removeActionFromQueue, addToQueue } from "./store/actions";
import { AppSection, ButtonWrapper, LogParagraph, NumberParagraph, TimeList, TimeListEl } from "./styles/app-styles";
import createGlobalStyle from "./styles/index"

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
            message: `Button N° ${seconds}:${clickTime.toLocaleTimeString()} -  ${logTime.toLocaleTimeString()} (${passedTime} sec)`,
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
        <AppSection>
            <ButtonWrapper>
                <Button text={"1 sec"} action={() => handleClick(1)}/>
                <Button text={"2 sec"} action={() => handleClick(2)}/>
                <Button text={"3 sec"} action={() => handleClick(3)}/>
                <Button text={"Clear"} action={handleClear}/>
            </ButtonWrapper>
            <div>
                <h2>Time</h2>
                <TimeList>
                    {logs.map((entry, index) => (
                        <TimeListEl className={"App__list-el"} key={index}>
                            <NumberParagraph className={"App__number-paragraph"}>{index + 1}.</NumberParagraph>
                            <LogParagraph>{entry.message}</LogParagraph>
                        </TimeListEl>
                    ))}
                    {pending && (
                        <TimeListEl className={"App__list-el"}>
                            <NumberParagraph className={"App__number-paragraph"}>{logs.length + 1}.</NumberParagraph>
                            <LogParagraph>{pending.message}</LogParagraph>
                        </TimeListEl>
                    )}
                </TimeList>
            </div>
        </AppSection>
    );
}

export default App;

