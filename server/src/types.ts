// src/types.ts

import { Request } from 'express';

type File = Express.Multer.File;

export interface RequestWithFile extends Request {
  file?: File;
}
