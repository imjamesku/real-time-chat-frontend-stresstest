import React, { useState } from 'react'
import WebSocketInstance from '../../services/WebSocket'

const StressTest = () => {
    const [timeData, setTimeData] = useState({
        startTest: 0,
        endTime: 0
    });

    const [numMessages, setNumMessages] = useState(1)
    const [message, setMessage] = useState('test test test')
    // const timeData = 1;
    const startTest = () => {
        const messageObject = {
            from: 'tester',
            text: message
        };
        const startTime = performance.now()
        for (let i = 0; i < numMessages; i++) {
            WebSocketInstance.newChatMessage(messageObject);
        }
        const endTime = performance.now()
        setTimeData({ startTime, endTime })

    }

    return (
        <div>
            <h1>Stress test</h1>
            <label htmlFor="numberOfMessages">number of messages: </label>
            <input id="numberOfMessages" name="numberOfMessages" type="number" placeholder="number of messages" value={numMessages} onChange={e => setNumMessages(e.target.value)} />
            <br />
            <label htmlFor="message">message: </label>
            <br />
            <textarea id="message" name="message" cols="30" rows="10" placeholder="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <br />
            <button onClick={startTest}>test</button>
            <p>start time: {timeData.startTime}</p>
            <p>end time: {timeData.endTime}</p>
            <p>time taken: {timeData.endTime - timeData.startTime}</p>
        </div>
    )
}

export default StressTest;