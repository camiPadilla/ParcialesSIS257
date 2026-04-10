import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonasService {
  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) {}
  
  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    let persona = await this.personaRepository.findOneBy({
      ci: createPersonaDto.ci,
      nombres: createPersonaDto.nombres.trim(),
      primer_Apellido: createPersonaDto.primer_Apellido.trim(),
      segundo_Apellido: createPersonaDto.segundo_Apellido.trim(),
    });
    if (persona) throw new Error('La persona ya existe');
    const newPersona = this.personaRepository.create(createPersonaDto);
    return this.personaRepository.save(newPersona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
  const persona = await this.personaRepository.findOne({ where: { id } });
  if (!persona) throw new Error('La persona no existe');
  return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const persona = await this.findOne(id);
    Object.assign(persona, updatePersonaDto);
    return this.personaRepository.save(persona);
  }

  async remove(id: number): Promise<void> {
    await this.personaRepository.delete(id);
  }
}
