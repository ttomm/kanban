import express, { Application, Request, Response } from 'express';
// process.env["NODE_CONFIG_DIR"] = "./src/config/";
import config from 'config';
config.util.loadFileConfigs('c:/projects/');

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

app.listen(config.get('app.port') || 3000, () => console.log(`App running at port ${config.get('app.port')}`));