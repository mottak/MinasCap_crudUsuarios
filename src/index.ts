import express from 'express';
import { errorMiddleware } from './main/middleware/errorMiddleware';
import routes from './main/routes';

const PORT = 3000

const app = express();
app.use(express.json())

app.use(routes)

app.use(errorMiddleware)


app.listen(PORT, () => console.log(`RUNNING PORT ${PORT}`));