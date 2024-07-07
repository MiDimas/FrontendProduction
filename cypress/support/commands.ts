import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as commentCommands from './commands/comments';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(commentCommands);

export {};
