export class CheckBullets {
  constructor(bullets) {
    this.bullets = bullets;
  }

  async * [Symbol.asyncIterator]() {
    for (const bullet of this.bullets) {
      try {
        if (bullet > 0) {
          yield 'Súng còn đạn';
        } else if (bullet === 0) {
          yield 'Vui lòng nạp đạn';
        } else {
          throw new Error('Invalid bullet value');
        }
      } catch (err) {
        yield `Súng hỏng: ${err.message}`;
      }
    }
  }
}
