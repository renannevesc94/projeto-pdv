import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSupplierService } from './create-supplier/create-supplier.service';
import { CreateSupplierDto } from './create-supplier/dto/create-supplier.dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { FindAllSuppliersService } from './find-all/find-all-suppliers.service';
import { DeleteSupplierService } from './delete-supplier/delete-supplier.service';
import { UpdateSupplierService } from './update-supplier/update-supplier.service';

@Controller('suppliers')
export class SupplierController {
  constructor(
    private readonly createSupplierService: CreateSupplierService,
    private readonly findAllSuppliersService: FindAllSuppliersService,
    private readonly deleteSupplierService: DeleteSupplierService,
    private readonly updateSupplierService: UpdateSupplierService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return await this.createSupplierService.create(createSupplierDto);
  }

  @Get()
  async findAll() {
    return await this.findAllSuppliersService.findAll();
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async delete(@Param('id') id: number) {
    return await this.deleteSupplierService.delete(+id);
  }

  @Patch(':id')
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async update(@Param('id') id: number, @Body() updateSupplierDto: any) {
    return await this.updateSupplierService.update(+id, updateSupplierDto);
  }
}
