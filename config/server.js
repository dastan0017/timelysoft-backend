module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e73efbb8bb6a9a6abe59b8819ebea85d'),
    },
  },
});
