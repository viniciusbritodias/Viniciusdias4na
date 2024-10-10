import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://vinicius4na_5xrp_user:Vh0IOEGJevyyuupPC4ttY7684gBzPF45@dpg-crh2mf5svqrc7387b5mg-a.oregon-postgres.render.com/vinicius4na_5xrp';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;