import express, { Express } from 'express';

const router = express.Router();

function routes(ap: Express) {
  router.get('/hello', function (req: any, res: any) {
    res.send('hello');
  });
  router.get('/store', function (req: any, res: any) {
    res.send('store items');
  });

  return router;
}

export default routes;
