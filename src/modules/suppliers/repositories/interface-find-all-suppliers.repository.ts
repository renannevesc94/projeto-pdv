import { Supplier } from '../supplier.entity';

export abstract class IFindAllSuppliersRepository {
  abstract findAll(): Promise<Supplier[]>;
}
