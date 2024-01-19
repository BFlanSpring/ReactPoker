import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

const API_BASE = "https://deckofcardsapi.com/api/deck";

function Deck() {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [shuffling, setShuffling] = useState(false);

    useEffect(function loadDeck() {
        async function fetchData() {
            const res = await axios.get(`${API_BASE}/new/shuffle/`);
            console.log(res.data);
            setDeck(res.data);
        }
        fetchData();
    }, []);

    async function draw() {
        try {
            const cardDrawn = await axios.get(`${API_BASE}/${deck.deck_id}/draw/`);
            if (cardDrawn.data.remaining === 0) throw new Error ("No Cards left to draw!");
            const card = cardDrawn.data.cards[0];

            setDrawn(d => [
                ...d,
                {
                    id: card.code,
                    name: card.suit + " " + card.value,
                    image: card.image
                },
            ]);
        } catch (err) {
            alert(err);
        }
    }

    async function shuffle() {
        setShuffling(true);
        try {
            await axios.get(`${API_BASE}/${deck.deck_id}/shuffle/`);
            setDrawn([]);
        }   catch (err) {
            alert(err);
        }   finally {
            setShuffling(false);
        }
    }

    function renderDrawButton() {
        if (!deck) return null;
    
        return (
            <button
                className="Deck-Button"
                onClick={draw}
                disabled={shuffling}>
                Draw Card
            </button>
        );
    }
    
    function renderShuffleButton() {
        if (!deck) return null;
        return (
          <button
            className="Deck-Button"
            onClick={shuffle}
            disabled={shuffling}>
            Shuffle Deck
          </button>
        );
    }
    

    return (
        <main className="Deck">
            {renderDrawButton()}
            {renderShuffleButton()}

            <div className = "Card-Table" >{
                drawn.map(c => (
                    <Card key={c.id} name={c.name} image={c.image} />
                ))}
            </div>
        </main>
    );


    
}

export default Deck;