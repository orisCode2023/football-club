import { players } from '../data/players.js';


export function getAllPlayers() {
    return players;
}

export const findPlayerById = (id) => {
    return players.find(player => player.id === id);
};


export function createPlayer(name, position, age, nationality){
    return {
        id: players.length + 1,
        name: name,
        position: position,
        age: age,
        goals: 0,
        assists: 0,
        matches: 0,
        nationality: nationality
    }
}

export function addPlayer(playerData, player) {
    playerData.push(player)
}

// TODO 2: Write a function to remove a player by id
// The function should:
// - Accept id as parameter
// - Find the player index in the array
// - Remove the player from the array
// - Return the removed player (or null if not found)
export function removePlayer(id) {

}

// TODO 3: Write a function to update player data
// The function should:
// - Accept id and newData as parameters
// - Find the player by id
// - Update the player's properties with newData
// - Return the updated player
export function updatePlayer(id, newData) {
}

// TODO 4: Write a function to find player by name (partial match)
// The function should:
// - Accept name as parameter (string)
// - Return player whose name includes the search term
// - Make the search case-insensitive
// Use: find() and includes() methods
export const findPlayerByName = (name) => {

};