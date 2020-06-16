import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetModule } from './asset/asset.module';
import { LocationModule } from './location/location.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // Type cast important to specify which TypeOrmModuleOptions useFactory() is returning
        type: configService.get<string>(
          'database.type',
          'postgres',
        ) as 'postgres',
        host: configService.get<string>('database.host', 'postgres'),
        port: configService.get<number>('database.port', 5432),
        username: configService.get<string>('database.user', 'postgres'),
        password: configService.get<string>('database.password', ''),
        database: configService.get<string>('database.name'),
        synchronize: configService.get<boolean>('database.synchronize'),
        autoLoadEntities: true,
      }),
    }),
    AssetModule,
    LocationModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
