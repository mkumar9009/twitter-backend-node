import { MooBaseEntity } from 'src/commons/base.entity';
import { PostEntity } from 'src/posts/posts.entity';
import { Column, Entity, ManyToOne,JoinColumn } from 'typeorm';

@Entity('hashtag_posts')
export class HashTagPostsEntity extends MooBaseEntity {

  @Column({ length:36, nullable: false })
  hashtag_id: string;

  @Column({ length:36, nullable: false })
  recent_posts_count: number;
}

@Entity('hashtags')
export class HashTagEntity extends MooBaseEntity {
  @Column({ length: 240, nullable: true })
  title: string;

  @ManyToOne(() => PostEntity)
  @JoinColumn({ name: 'id' })
  post_id: PostEntity


}