import Team from '../team';

test('test symbol', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newTeam = new Team();
  newTeam.addCharacter(char);
  newTeam.addCharacter(char);
  newTeam.addCharacter(char);

  expect([...newTeam]).toEqual([char, char, char]);
});
