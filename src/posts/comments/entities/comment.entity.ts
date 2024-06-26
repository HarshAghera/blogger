import { Post } from '@app/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  body: string;

  @ManyToOne(() => Post, (post) => post.comments, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  post: Post;
}
