import { Gun } from './gun.js';
import { statusUpdateService } from './statusUpdateService.js'
import { createPostStatusCmd } from './createPostStatusCmd.js'
import { ShootCommand, ReloadCommand } from './command.js';
import { Invoker } from './invoker.js';
const command = createPostStatusCmd(statusUpdateService, 'HI!')
const gun = new Gun(3); // Súng với 3 viên đạn

const shootCommand = new ShootCommand(gun);
const reloadCommand = new ReloadCommand(gun);

const invoker = new Invoker();

invoker.run(shootCommand); // Thực thi command bắn
invoker.run(shootCommand);
console.log(shootCommand.serialize()); // In ra thông tin serialized của command bắn

invoker.run(reloadCommand); // Thực thi command nạp đạn
console.log(reloadCommand.serialize()); // In ra thông tin serialized của command nạp đạn

invoker.delay(command,3000);
invoker.runRemotely(command);

