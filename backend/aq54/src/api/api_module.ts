import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api_services';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
