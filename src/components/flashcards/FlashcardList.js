import React from 'react'
import Flashcard from './Flashcard'
import '../../Floatingcard.css'

export default function FlashcardList({flashcards}) {
    return (
        <div className="card-grid">
            {
               flashcards.map((flashcard) => {
                console.log(flashcard)
                return <Flashcard flashcard={flashcard} key={flashcard.fid}/>
               })
            }
        </div>
    )
}