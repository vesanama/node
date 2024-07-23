const emailQueue = require('../jobs/emailQueue');

exports.someEndpoint = async (req, res) => {
  // lógica de tu endpoint

  emailQueue.add({ email: 'user@example.com' });
  res.send('Job added to queue');
};
