import React,  {useState} from 'react'

export default function Flashcard({flashcard, category}) {
    const [flip, setFlip] = useState(false)
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashcard.question}
            </div>
            <div className="back"><p className="pre_wrap">{flashcard.answer}</p></div>
        </div>
    )
    
}
