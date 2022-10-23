import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  birthday: string

  @Column()
  teamFans: '統一' | '兄弟'
}
