const { PORT }  = require('./common/config');
const app = require('./app');
const { CLIENT_RENEG_LIMIT } = require('tls');

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
