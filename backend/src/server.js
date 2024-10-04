import app from './app.js';
import sequelize from './database/config/config.js';

const PORT = 3001;

async function startServer() {
  try {
      await sequelize.sync(); // Sincroniza com o banco de dados
      console.log('Banco de dados sincronizado!');
      
      app.listen(PORT, () => {
          console.log(`Servidor rodando na porta ${PORT}`);
      });
  } catch (error) {
      console.error('Erro ao iniciar o servidor:', error);
  }
}

// Inicia o servidor
startServer();