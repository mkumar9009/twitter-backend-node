import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from 'src/users/users.entity';
import { PostEntity } from 'src/posts/posts.entity';
import { PostsRepository } from 'src/posts/posts.repository';
import { HashTagEntity,HashTagPostsEntity } from './hashtag.entity';
import { HashTagPostsRepository, HashTagRepository } from './hashtag.repository';
import { title } from 'process';
@Injectable()
export class HashTagService {
  constructor(private HashTagRepository: HashTagRepository,
              private HashTagPostsRepository: HashTagPostsRepository
              ) {}

  /**
   * @description extract hashtags and save
   * @param text 
   * @param post_id
   * @returns 
   * 
   */

   async extractHashTagFromPost(
     text: string,
     post_id: string
   ):Promise<HashTagEntity>{
    let hashtag=new HashTagRepository();    
    const wordsInPost=text.split(' ');
    //wordsPost=
    for (let i =0; i<wordsInPost.length;i++) {
        if (wordsInPost[i].startsWith('#')){
            //store it in hashtag table
            
            //check if hashtag exists already
            // if yes then pick its hastag id.. get hash tag count nd save
            //else add a new hashtag with recent post count 0
            let tagId=this.getHashTagId(wordsInPost[i])
            hashtag.title= wordsInPost[i]
            hashtag.recent_posts_count=0
            if (tagId){
              let tagcount=this.getHashTagIdCount(tagId)
              hashtag.recent_posts_count=tagcount.recent_posts_count+1
              this.HashTagRepository.update(hashtag)
            }
            else{
              this.HashTagRepository.save(hashtag)
            }
            
        }
    }
      return hashtag
   }
  function getHashTagIdCount(
    tagId: string
  ) {
    const tagcount= await this.HashTagPostsRepository.findOne(tagId);

    return tagcount
  }

  }

  function getHashTagId(title: string, string: any) {
  const tagId= await this.HashTagRepository.findOne(title);

  return tagId
}


