import {
    Column, 
    CreateDateColumn, 
    Entity,
    UpdateDateColumn, 
    DeleteDateColumn, 
    PrimaryGeneratedColumn 
    } from "typeorm";

@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer')
    ci: number;

    @Column('varchar', { length: 50 })
    nombres: string;

    @Column('varchar', { length: 50 })
    primer_Apellido: string;

    @Column('varchar', { length: 50 })
    segundo_Apellido: string;

    @Column('date')
    fecha_Nacimiento: Date;
    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;
}
