const optionCors = {
  origin: '*',
  methods: 'GET,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Authorization',
  ],
};

module.exports = { optionCors };
