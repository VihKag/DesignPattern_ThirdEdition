import superagent from 'superagent'

export class Invoker {
    constructor() {
      this.history = [];
    }
  
    run(command) {
        this.history.push(command);
        command.run();
        console.log('Command executed');
    }
    
    undo() {
        const command = this.history.pop();
        command.undo();
        console.log('Command undone');
    }

    delay (command, delay) {
        setTimeout(() => {
          console.log('Executing delayed command', command.serialize())
          this.run(command)
        }, delay)
    }
  
    async runRemotely (command) {
        await superagent
          .post('http://localhost:3000/cmd')
          .send({ json: command.serialize() })
    
        console.log('Command executed remotely', command.serialize())
    }
  }
  