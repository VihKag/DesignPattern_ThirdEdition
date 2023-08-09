export class ShootCommand {
    constructor(gun) {
      this.gun = gun;
    }
  
    run() {
      this.gun.shoot();
    }
  
    hide() {
      this.gun.reload();
    }
  
    serialize() {
      return { type: 'shoot' };
    }
  }
  
  export class ReloadCommand {
    constructor(gun) {
      this.gun = gun;
    }
  
    run() {
      this.gun.reload();
    }
  
    serialize() {
      return { type: 'reload' };
    }
  }
  