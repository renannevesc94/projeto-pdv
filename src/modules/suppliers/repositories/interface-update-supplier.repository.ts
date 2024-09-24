import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';
import { Supplier } from '../supplier.entity';

export abstract class IUpdateSupplierRepository {
  abstract update(
    id: number,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier>;
}
