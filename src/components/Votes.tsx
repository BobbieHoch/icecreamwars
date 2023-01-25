import { useState } from 'react';
import '../CSS/Votes.css'

export function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);

    function getTotal() {
        return chocolateVotes + strawberryVotes + vanillaVotes;
    }
    
    function displayPercentage(n:number, total:number) {
        if (total == 0) {
            return '0.0%';
        }
        else {
            return (n / total).toFixed(1) + "%";
        }
    }


    return (
        <div className="Votes">
            <h2>Vote</h2>
            <div className="button-bar">
            <button>Chocolate</button>
            <button>Vanilla</button>
            <button>Strawberry</button>

            </div>
            
        </div>
        
    )
    
}