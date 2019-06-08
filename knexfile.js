// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambdaProjectsActions.db3' 
    },
    useNullAsDefault: true
  }
};
