const { PORT }  = require('./common/config');
const app = require('./app');

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));