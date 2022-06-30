import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Modal } from '../dist/index'

const container = document.getElementById('root');
const root = createRoot(container);
const App = () => {
    return (
        <div className="container">
            <Modal
                title="测试卡片标题11"
                content="测试卡片内容22"
            />
        </div>
    )
}


root.render(<App />);