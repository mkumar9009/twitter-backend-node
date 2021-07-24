import { EntityRepository, Repository } from 'typeorm';
import { HashTagEntity,HashTagPostsEntity } from './hashtag.entity';

@EntityRepository(HashTagEntity)
export class HashTagRepository extends Repository<HashTagEntity> {}

@EntityRepository(HashTagPostsEntity)
export class HashTagPostsRepository extends Repository<HashTagPostsEntity> {}