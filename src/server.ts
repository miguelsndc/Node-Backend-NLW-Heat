import { serverHttp } from './app';
const port = process.env.port || 3333;

serverHttp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
