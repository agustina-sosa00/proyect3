
import {UserModel}  from "../config/data-source";
import IUserDto from "../dto/IUserDto";
import Credential from "../entities/Credential";
import User from "../entities/User";

import { createCredential } from "./credentailsServices";



// retorna el array de usuarios junto con los turnos que tiene el usuario
export const getAllUsersService = async ():Promise<User[]> => {
  const allUsers: User[] = await UserModel.find({
    relations: {appointments: true} 
  }); //busca todo lo que hay en la bbdd y ademas trae la relacion de appointments, es decir que te imprime todos los turnos que el usuario tiene 
  return allUsers;
};

// esta funcion retorna un usuario por su id y las relaciones
export const getUserByIdService = async (id: number):Promise<User> => {
  const foundUser: User | null = await UserModel.findOne({where: {id}, relations: ['appointments']});
  if (!foundUser) throw new Error("Usuario no encontrado");
  return foundUser;
};

// función crea un nuevo usuario
export const createUserService = async (createUserDto: IUserDto): Promise<User> => {
  const newUser: User = UserModel.create(createUserDto);
  const newCredential: Credential = await createCredential({
    username: createUserDto.username,
    password: createUserDto.password
  });

   await UserModel.save(newUser);
   newUser.credential = newCredential;
   await UserModel.save(newUser);
   if(!newUser)throw new Error("Error al crear usuario");
  return newUser;
};


export const findUserByCredentialId = async (credentialId : number): Promise<User | null> => {
  const foundUser: User | null = await UserModel.findOneBy({credential: {id: credentialId}});
  return foundUser;
}