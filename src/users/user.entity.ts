/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';
import * as bcrypt from 'bcryptjs';
@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;   

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // @Column()
  // @UpdateDateColumn()
  // updateAt: Date;

  /* @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);

  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  } */
}

