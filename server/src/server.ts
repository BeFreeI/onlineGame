const { PORT }  = require('./common/config');
const server = require('./app');


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
