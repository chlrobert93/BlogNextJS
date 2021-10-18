module.exports = {
  reactStrictMode: true,
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

//phase----> averigua en que fase estamos es funcion de nextjs
/*Esto nos permite configurar claves en el código tanto en la rutas API como en 
    cualquier otro conponente
  */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: '',
        mongodb_password: '',
        mongodb_clustername: '',
        mongodb_database: '',
      },
    };
  }

  return {
    env: {
      mongodb_username: '',
        mongodb_password: '',
        mongodb_clustername: '',
        mongodb_database: '',
    },
  };
};
