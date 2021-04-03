const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);

const port = process.env.PORT || 3003;

server.listen(port, () => {
  console.log(`APP started on port ${port}`);
});




/* 


            СОЗДАТЬ 5 НОВЫХ МОДЕЛЕЙ И МИГРАЦИЙ. МИНИМУМ 5 АТРИБУТОВ.
            
            npx sequelize --help

*/


