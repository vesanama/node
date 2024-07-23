const Queue = require('bull');
const emailQueue = new Queue('email', 'redis://127.0.0.1:6379');

emailQueue.process(async (job, done) => {
  console.log(`Sending email to ${job.data.email}`);
  // Aquí se enviaría el email
  done();
});

module.exports = emailQueue;
