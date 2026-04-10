import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePersonaDto {
    @IsNotEmpty({ message: 'La cedula de identidad es obligatoria' })
    @IsInt({ message: 'La cedula de identidad debe ser un numero entero' })
    @Transform(({ value }): number | undefined => (typeof value === 'string' ? parseInt(value, 10) : value))
    readonly ci: number;

    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El nombre no puede tener mas de 50 caracteres' })
    @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
    readonly nombres: string;

    @IsNotEmpty({ message: 'El primer apellido es obligatorio' })
    @IsString({ message: 'El primer apellido debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El primer apellido no puede tener mas de 50 caracteres' })
    @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
    readonly primer_Apellido: string;

    @IsNotEmpty({ message: 'El segundo apellido es obligatorio' })
    @IsString({ message: 'El segundo apellido debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El segundo apellido no puede tener mas de 50 caracteres' })
    @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
    readonly segundo_Apellido: string;

    @IsNotEmpty({ message: 'La fecha de nacimiento es obligatoria' })
    @IsString({ message: 'La fecha de nacimiento debe ser una cadena de texto' })
    @Transform(({ value }): Date | undefined => (typeof value === 'string' ? new Date(value) : value))
    readonly fecha_Nacimiento: Date;
}
