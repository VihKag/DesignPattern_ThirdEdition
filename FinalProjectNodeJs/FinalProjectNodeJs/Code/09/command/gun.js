export class Gun {
    constructor(bulletCount) {
      this.bulletCount = bulletCount;
    }
    
    shoot() {
      if (this.bulletCount > 0) {
        console.log('BANG! Headshot!!!');
        this.bulletCount--;
        console.log(this.bulletCount+'/3');
      } else {
        console.log('Out of bullets.');
      }
    }
  
    reload() {
      this.bulletCount = 3;
      console.log('Reloaded. Gun has 3 bullets now.');
    }

    hide(){
        if(this.bulletCount>1){
            console.log('Hide the gun. Gun has '+this.bulletCount+' bullets');
        }else{
            console.log('Hide the gun. Gun has '+this.bulletCount+' bullet');
        }
    }
}

