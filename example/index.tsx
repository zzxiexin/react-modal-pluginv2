import * as React from 'react';
import { createRoot } from 'react-dom/client';
import MessageCard from '../src/components/MessageCard';

const container = document.getElementById('root');
const root = createRoot(container);
const App = () => {
    return (
        <div className="container">
            <MessageCard
                title="卡片一"
                content="这里是内容"
            />
        </div>
    )
}


root.render(<App />);