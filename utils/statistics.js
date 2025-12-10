import { players } from "../data/players.js";

export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayersByPosition(position) {
    return players.filter(player => player.position === position);
}

export function getTotalAssists() {
    return players.reduce((total, player) => total + player.assists, 0)
}

export const getTopScorer = () => players.reduce((maxGoals, player) => maxGoals.goals > player.goals? maxGoals:player)


export function getAverageAge() {
    const sumAge = players.reduce((total, player) => total + player.age, 0)
    return sumAge / players.length
}

export const getPlayersByNationality = (nationality) => players.filter(player => player.nationality === nationality)

export function sortPlayersByGoals() {
    const temp = [...players]
    temp.sort((player1, player2) => player1.goals - player2.goals);
    return temp.reverse()
}
export function getYoungPlayers(maxAge) {
    return players.filter(player => player.age < maxAge)
}

export function getPlayersWithMinGoals(minGoals) {
    return players.filter(player => player.goals >= minGoals)
}

export function calculatePlayerScore(player) {
    return (player.goals * 3) + (player.assists * 2)
}

export function getTop3Scorers() {
    return sortPlayersByGoals().slice(0, 3)
}

export function getAllPlayerNames() {
    return players.map(player => player.name)
}
