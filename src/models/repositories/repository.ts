import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user-repository'

const commonRepositories = [
    UserRepository,
];

@Module({
  imports: [TypeOrmModule.forFeature(commonRepositories, 'default')],
  exports: [TypeOrmModule],
})
export class DatabaseCommonRepository {}