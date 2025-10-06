import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';

// Vygeneruje všechny CRUD operace
generateAllCrud();

export const schema = builder.toSchema();