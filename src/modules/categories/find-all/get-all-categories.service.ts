import { Injectable } from '@nestjs/common';
import { IFindAllCategoriesRepository } from './repositories/interface-find-all-categories.repository';

@Injectable()
export class FindAllCategoriesService {
  constructor(
    readonly findAllCategoriesRepository: IFindAllCategoriesRepository,
  ) {}

  async findAll() {
    return await this.findAllCategoriesRepository.findAll();
  }
}
