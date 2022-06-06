import { getConfig } from 'src/configs/index';

export interface DatabaseConfig {
  type: 'mysql';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  logging: boolean;
}

export const defaultConfig = {
  ...getConfig().get<DatabaseConfig>('default'),
  autoLoadEntities: true,
};
