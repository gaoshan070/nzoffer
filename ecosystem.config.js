module.exports = {
  apps: [
    {
      name: 'offer111',
      script: './server/index.js',

      watch: false,
      instance_var: 'OFFER111-888',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
