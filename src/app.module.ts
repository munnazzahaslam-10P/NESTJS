import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filters/exception.filter';
import { AuthGuard } from './guards/auth.guard';
import { RecentSearchInterceptor } from './interceptors/recent-search.interceptor';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { RequestService } from './request.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true, expandVariables: true, envFilePath: '.env', load: [] }),
    UsersModule.register({ env: 'DEV', port: '4567' }),
    RouterModule.register([{
      path: 'users', module: UsersModule,
      // children: [{path: 'account', module: AccountsModule}]
    }])],
  controllers: [AppController],
  providers: [
    AppService,
    RequestService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: RecentSearchInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*');
  }
}
