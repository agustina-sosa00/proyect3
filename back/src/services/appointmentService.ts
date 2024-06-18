import IAppointment from "../interface/IAppointment";
import { UserModel, appointmentModel } from "../config/data-source";
import Appointment from "../entities/Appointment";
import IAppointmentDto from "../dto/appointmentDto";
import User from "../entities/User";

let appointments: IAppointment[] = [];

//  función que retorna el arreglo completo de turnos.
//NO DA ERROR
export const getAllAppointment =async ():Promise<Appointment[]> => {
  const returnAppointments: Appointment[]= await appointmentModel.find();
  return returnAppointments;
};

// función que obtiene el detalle de un turno por ID.
// NO DA ERROR
export const detailAppointment = async (
  appId: number
): Promise<Appointment> => {
  const details: Appointment | null = await appointmentModel.findOneBy({id: appId})
  if (!details) throw new Error("El turno no fue encontrado.");
  return details;
};

//  función crea un nuevo turno,

export const newAppointment = async (
  scheduleAppointment: IAppointmentDto
): Promise<Appointment> => {
  const newAppointment: Appointment | null = appointmentModel.create(scheduleAppointment);
  await appointmentModel.save(newAppointment);

  const user: User | null = await UserModel.findOneBy({id: scheduleAppointment.userId})
  if(!user) throw Error("Usuario inexistente");
  newAppointment.user = user;
  await appointmentModel.save(newAppointment);
  return newAppointment;
};

//  función que reciba el id de un turno específico y cambiar su estado a “cancelled”.
export const cancelAppointment = async (appId: number): Promise<void> => {
  const cancel: Appointment | null = await appointmentModel.findOneBy({id: appId} );
  if (!cancel) throw new Error("Turno no existe");

  cancel.status = 'canceled';
  await appointmentModel.save(cancel);
};
