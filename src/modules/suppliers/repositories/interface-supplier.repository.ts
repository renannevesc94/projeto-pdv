import { Supplier } from '../supplier.entity';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';

export abstract class ISupplierRepository {
  abstract create(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
  abstract delete(id: number): any;
  abstract findAll(): Promise<Supplier[]>;
  abstract update(
    id: number,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier>;
}
