import { Module } from '@nestjs/common';
import { CarsController } from './Controllers/cars/cars.controller';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [],
})
export class AppModule {}
