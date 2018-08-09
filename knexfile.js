// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection:'postgress://localhost/tower-db' 
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
 
};
