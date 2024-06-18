import { Request, Response } from "express";
import User from "../entities/User";
import {
  createUserService,
  findUserByCredentialId,
  getAllUsersService,
  getUserByIdService,
} from "../services/usersServices";
import { validateCredential } from "../services/credentailsServices";

// retorna el array desde service
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// retorna los datos de un user identificado por id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User | null = await getUserByIdService(Number(id));

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password, id } =
    await req.body;
try {
  const newUser: User = await createUserService({
    id,
    name,
    email,
    birthdate,
    nDni,
    username,
    password,
  });
  res.status(200).json(newUser);
} catch (error: any) {
  res.status(400).json("Error al crear usuario. Verificar los datos.");
}
  
};

export const login = async (req: Request, res: Response) => {
  const {username, password} = req.body;
  try {
    const credential = await validateCredential({username, password});
    const user = await findUserByCredentialId(credential)
    res.status(200).json({login: true, user})
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
