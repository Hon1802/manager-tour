import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'sql110.infinityfree.com',
  port: 3306,
  username: 'if0_35918754',
  password: 'nxa6vaGQaHCebcj',
  database: 'if0_35918754_booking_tour',
  synchronize: false,
  logging: false,
  entities: [__dirname + '/models/entities/*.ts'],
  subscribers: [],
  migrations: [__dirname + '/migration/*.ts']
});

AppDataSource.initialize()
  .then(() => {
    console.info('Connect success!');
  })
  .catch((err) => {
    console.info('Error during connect to database', err);
  });
