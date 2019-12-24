module.exports = {
  apps: [{
    name: 'reinfource',
    script: 'dist/app.js',
    args: 'one two',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '2G',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    out_file: './out.log',
    error_file: './error.log',
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '47.92.206.102',
      ref: 'origin/master',
      repo: 'git@github.com:dpuhua/reinfource.git',
      path: '/app/reinfource',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env prod'
    }
  }
};
