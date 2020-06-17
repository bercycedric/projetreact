import React from "react"
import axios from "axios"
import "./Characters.css"
import DisplayCharacter from "./DisplayCharacter"


class Characters extends React.Component {

    state = {
        characters: []
    }

    getCharacters = async () => {
       const result = await axios.get(
        "https://akabab.github.io/starwars-api/api/all.json"
  )    
        this.setState({ characters : result.data })

//  axios.get("https://akabab.github.io/starwars-api/api/all.json")
//  .then(res => this.setState({characters: res.data }))

      //  fetch("https://akabab.github.io/starwars-api/api/all.json")
       // .then(res => res.json())
       // .then(res => this.setState({characters: res }))

    }
    componentDidMount(){
        this.getCharacters()
    }
    render() {
        
        return (                     
        <div>
            Characters Chicken code School
            <div>
                {this.state.characters.map(character => (
                   <DisplayCharacter character={character}  key={character.id} />
                ))}
            </div>
        </div>
             )}
    
        
    }


export default Characters