import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { MessageCard } from '../dist/index'

const container = document.getElementById('root');
const root = createRoot(container);
const App = () => {
    return (
        <div className="container">
            <MessageCard
                title="测试卡片标题"
                content="测试卡片内容"
            />
        </div>
    )
}


root.render(<App />);