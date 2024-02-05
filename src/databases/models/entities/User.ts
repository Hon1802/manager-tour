import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id!: number;

  @Column({ type: 'varchar', length: 50 })
  public email!: string;

  @Column({ type: 'varchar', length: 255 })
  public password!: string;

  @Column({ type: 'varchar', length: 50 })
  public name!: string;

  @Column({ type: 'tinyint', name: 'user_flg' })
  public userFlg!: number;

  @Column({ type: 'date', nullable: true, name: 'date_of_birth' })
  public dateOfBirth!: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  public phone!: string;

  @Column({ type: 'text', nullable: true })
  public address!: string;

  @Column({ type: 'tinyint', name: 'del_flg' })
  public delFlg!: number;

  @Column({ type: 'bigint', nullable: true, name: 'created_by' })
  public createdBy!: number;

  @Column({ type: 'datetime', nullable: true, name: 'created_at' })
  public createdAt!: Date;

  @Column({ type: 'bigint', nullable: true, name: 'updated_by' })
  public updatedBy!: number;

  @Column({ type: 'datetime', nullable: true, name: 'updated_at' })
  public updatedAt!: Date;

  @Column({ type: 'bigint', nullable: true, name: 'deleted_by' })
  public deletedBy!: number;

  @Column({ type: 'datetime', nullable: true, name: 'deleted_at' })
  public deletedAt!: Date;
}
