const { PORT } = require('./common/config');
require('./app').listen(PORT, () => console.log(`Server started on port ${PORT}`));
