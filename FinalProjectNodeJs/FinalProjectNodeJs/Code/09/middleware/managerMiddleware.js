export class managerMiddleware {
    constructor() {
      this.handlers = [];
    }
  
    use(handler) {
      this.handlers.push(handler);
    }
  
    execute(context) {
      let index = 0;
  
      const next = () => {
        if (index < this.handlers.length) {
          const handler = this.handlers[index++];
          handler(context, next);
        }
      };
  
      next();
    }
  }