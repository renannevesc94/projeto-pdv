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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('suppliers')
@ApiTags('Suppliers')
@ApiBearerAuth()
export class SupplierController {
  constructor(
    private readonly createSupplierService: CreateSupplierService,
    private readonly findAllSuppliersService: FindAllSuppliersService,
    private readonly deleteSupplierService: DeleteSupplierService,
    private readonly updateSupplierService: UpdateSupplierService,
  ) {}

  /** Cria um novo fornecedor */
  @Post()
  @UsePipes(new TrimBodyPipe())
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return await this.createSupplierService.create(createSupplierDto);
  }

  /** Busca todos os fornecedores */
  @Get()
  async findAll() {
    return await this.findAllSuppliersService.findAll();
  }

  /** Deleta um fornecedor */
  @Delete(':id')
  @UsePipes(new TrimBodyPipe())
  async delete(@Param('id') id: number) {
    return await this.deleteSupplierService.delete(+id);
  }

  /** Atualiza um fornecedor */
  @Patch(':id')
  @UsePipes(new TrimBodyPipe())
  async update(
    @Param('id') id: number,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return await this.updateSupplierService.update(+id, updateSupplierDto);
  }
}
