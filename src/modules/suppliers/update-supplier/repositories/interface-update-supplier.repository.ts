import { Supplier } from '../../supplier.entity';
import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';
export abstract class IUpdateSupplierRepository {
  abstract update(
    id: number,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier>;
}
