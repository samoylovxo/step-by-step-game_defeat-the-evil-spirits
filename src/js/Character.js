export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;

    if (new.target === Character) {
      throw new Error('Нельзя создавать больше одного экземпляров');
    }
  }
}
