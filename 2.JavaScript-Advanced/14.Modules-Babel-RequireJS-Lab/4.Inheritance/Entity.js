class Entity {
  constructor(name) {
    if (new.target === Entity) {
      throw new Error
    }

    this.name = name
  }
}

//noinspection Eslint
module.exports = Entity