import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSupplierService } from './create-supplier/create-supplier.service';
import { CreateSupplierDto } from './create-supplier/dto/create-supplier.dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { FindAllSuppliersService } from './find-all/find-all-suppliers.service';

@Controller('supplier')
export class SupplierController {
  constructor(
    private readonly createSupplierService: CreateSupplierService,
    private readonly findAllSuppliersService: FindAllSuppliersService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.createSupplierService.create(createSupplierDto);
  }

  @Get()
  findAll() {
    return;
  }
}
