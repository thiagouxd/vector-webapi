module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf664a06332b052598fb58b338673b5d'),
  },
});
