import Character from './character';

export default class Team {
  constructor() {
    this.teams = [];
  }

  addCharacter(personal) {
    this.teams.push(personal);
  }

  [Symbol.iterator]() {
    let i = -1;
    const { teams } = this;
    return {
      next() {
        i += 1;
        return {
          value: teams[i] ? new Character(teams[i]) : undefined,
          done: i >= teams.length,
        };
      },
    };
  }
}
