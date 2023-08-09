import { CheckBullets } from './checkBullets.js';

async function main() {
  const checkbullets = new CheckBullets([2, 1, 0, -5, 3]);

  for await (const bullet of checkbullets) {
    console.log(bullet);
  }
}

main();
