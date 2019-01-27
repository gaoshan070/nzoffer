module.exports = {
  apps: [
    {
      name: 'offer111',
      script: './server/index.js',

      max_memory_restart: '1.9G',
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
