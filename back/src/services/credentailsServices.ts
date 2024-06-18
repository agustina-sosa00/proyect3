// En el servicio de credenciales:

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

import ICredentialDto from "../dto/ICredentialDto";
import Credential from "../entities/Credential";
import { credentialModel } from "../config/data-source";


// repository


// Función para crear un nuevo par de credenciales
export const createCredential = async (createCredentialDto: ICredentialDto): Promise<Credential> => {
  const newCredential: Credential = credentialModel.create(createCredentialDto);
  await credentialModel.save(newCredential);
  return newCredential; // Retornar el ID del nuevo par de credenciales creado
};

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
// recibe username y password
export const validateCredential = async (validateCredentialDto: ICredentialDto): Promise<number> => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credential | null = await credentialModel.findOneBy({username});

  if (!foundCredential) throw new Error("Usuario no encontrado");
  if(password !== foundCredential.password) throw new Error("Password incorrecto"); //si la contraseña es distinta al de la bbdd retorna error
  
  return foundCredential.id; // Retornar el ID de las credenciales validadas
};