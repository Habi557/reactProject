import React, { useState } from 'react';

const ContentEditable = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [content, setContent] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (!content.trim()) {
            setContent('');
        }
    };

    const handleInput = (e) => {
        setContent(e.target.innerText);
    };

    return (
        <div
            contentEditable
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
            style={{
                margin: '10px',
                height: '100px',
                outline: 'none',
                cursor: 'text',
                color: content ? 'black' : 'gray',
            }}
            
        >
            {!isFocused && !content && (
                <span style={{ pointerEvents: 'none', opacity: 0.6 }}>
                   What do you want to talk about?
                </span>
            )}
            {isFocused && !content && ''}
        </div>
    );
};

export default ContentEditable;
