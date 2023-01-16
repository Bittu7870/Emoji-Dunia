import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function createEntry(entryTerm){
    return(
        <Entry 
            key = {entryTerm.id}
            emoji = {entryTerm.emoji}
            name = {entryTerm.name}
            description = {entryTerm.meaning}
        />
    )
}

function App(){
    return(
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createEntry)}
            </dl>
        </div>
    )
}
export default App;