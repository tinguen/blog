import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { AppService } from './app.service'
import { UsersModule } from './user/users.module'
import { AuthModule } from './auth/auth.module'
import { PostsModule } from './post/posts.module'
import { CommentsModule } from './comment/comments.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.database.env']
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_LOCALHOST'),
        port: 5432,
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: true,
        sortSchema: true,
        debug: !(configService.get<string>('NODE_ENV') === 'production'),
        playground: !(configService.get<string>('NODE_ENV') === 'production'),
        context: ({ req }): any => ({ req })
      }),
      inject: [ConfigService]
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    CommentsModule
  ],
  providers: [AppService]
})
export class AppModule {}
