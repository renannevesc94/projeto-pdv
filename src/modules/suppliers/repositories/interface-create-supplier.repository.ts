import { Supplier } from '../supplier.entity';
import { CreateSupplierDto } from '../dto/create-supplier.dto';

export abstract class ICreateSupplierRepository {
  abstract create(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
}
