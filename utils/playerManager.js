import { players } from '../data/players.js';


export function getAllPlayers() {
    return players;
}

export const findPlayerById = (id) => {
    return players.find(player => player.id === id);
};


export function createPlayer(name, position, age, nationality) {
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

export function addPlayer(playersData, player) {
    playersData.push(player)
}

export function removePlayer(id) {
    const removed = findPlayerById(id)
    const index = players.findIndex(playerId => playerId.id === id)
    players.splice(removed, 1)
    return removed === -1 ? null : removed
}

export function updatePlayer(id, newData) {
    const find = findPlayerById(id)
    Object.assign(find, newData)
    return find
}

export const findPlayerByName = (name) => {
    const find = players.find((player => player.name.includes(name)))
    return find
};

