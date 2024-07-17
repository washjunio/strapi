module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Use '0.0.0.0' para permitir que o Azure defina o host
  port: env.int('PORT', process.env.PORT), // Use process.env.PORT sem valor padrão
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});