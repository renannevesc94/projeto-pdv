import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateSupplierService } from './services/create-supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { UpdateSupplierDto } from './dto/UppdateSupplier.dto';
import { FindAllSuppliersService } from './services/find-all-suppliers.service';
import { DeleteSupplierService } from './services/delete-supplier.service';
import { UpdateSupplierService } from './services/update-supplier.service';

@Controller('suppliers')
export class SupplierController {
  constructor(
    private readonly createSupplierService: CreateSupplierService,
    private readonly findAllSuppliersService: FindAllSuppliersService,
    private readonly deleteSupplierService: DeleteSupplierService,
    private readonly updateSupplierService: UpdateSupplierService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return await this.createSupplierService.create(createSupplierDto);
  }

  @Get()
  async findAll() {
    return await this.findAllSuppliersService.findAll();
  }

  @Delete(':id')
  @UsePipes(new TrimBodyPipe())
  async delete(@Param('id') id: number) {
    return await this.deleteSupplierService.delete(+id);
  }

  @Patch(':id')
  @UsePipes(new TrimBodyPipe())
  async update(
    @Param('id') id: number,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return await this.updateSupplierService.update(+id, updateSupplierDto);
  }
}
