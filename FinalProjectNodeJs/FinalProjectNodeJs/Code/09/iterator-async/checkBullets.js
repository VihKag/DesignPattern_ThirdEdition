export class CheckBullets {
  constructor(bullets) {
    this.bullets = bullets;
  }

  [Symbol.asyncIterator]() {
    const bulletIterator = this.bullets[Symbol.iterator]();

    return {
      async next() {
        const avalue = bulletIterator.next();

        if (avalue.done) {
          return { done: true };
        }
        const bullet = avalue.value;
        try {
          if (bullet > 0) {
            return { done: false, value: 'Súng còn đạn' };
          } else if (bullet === 0) {
            return { done: false, value: 'Vui lòng nạp đạn' };
          }else{
            throw new Error("Vui lòng sửa súng!!!");
          }
        } catch (err) {
          return { done: false, value: `Súng hỏng: ${err.message}` };
        }

        return { done: true };
      },
    };
  }
}
