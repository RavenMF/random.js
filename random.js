class random {
  static choice(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  static randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
