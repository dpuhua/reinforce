const isDev = process.env.NODE_ENV === 'development'
let config = {};
if (isDev) {
  config = {
    port: '8687',
    NODE_ENV: `'${process.env.NODE_ENV}'`,
    db_name: "'test'",
    db_user: "'root'",
    db_pw: "'dph123'",
    db_host: "'47.92.206.102'",
    db_port: "'8306'",
    db_dialect: "'mysql'"
  }
} else {
  config = {
    port: '8687',
    NODE_ENV: `'${process.env.NODE_ENV}'`,
    db_name: "'test'",
    db_user: "'root'",
    db_pw: "'dph123'",
    db_host: "'47.92.206.102'",
    db_port: "'8306'",
    db_dialect: "'mysql'"
  }
}

module.exports = config
