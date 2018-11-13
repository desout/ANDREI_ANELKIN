import {verify, VerifyErrors} from 'jsonwebtoken';

export const SECRET_TOKEN = 'gfndnkxgdnodgfohifdgohigfhoid';
import {Request, Response} from 'express';

export const checkToken = (req: Request, res: Response, next: any ) => {
  let token: string | undefined = req.headers['authorization']; // Express headers are auto converted to lowercase

  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    verify(token, SECRET_TOKEN, undefined, (err: VerifyErrors, decoded: string | object) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.params.decoded = decoded;
        next();
        return undefined;
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
  return undefined;
};
