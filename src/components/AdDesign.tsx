import {useState}from "react"

export function AdDesign() {
    //state hook has Two Parts
    //Variable to track the state, --set the value
    //Function used to change the state
    const [flavor, setFlavor] = useState('Chocolate');
    const [isLight, setIsLight] = useState(true);


    return (
        <div id="AdDesign">
            <h2>Ad Design</h2>
            <h2>What to Support:</h2>

            <div className="button-bar">
                <button>Chocolate</button>
                <button>Vanilla</button>
                <button>Strawberry</button>
            </div>

            <h2>Color Theme</h2>
            <div className="button-bar">
                <button>Light</button>
                <button>Dark</button>
            </div>
        </div>
    )
}