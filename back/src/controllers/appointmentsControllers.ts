import { Request, Response, response } from "express";
import {
  cancelAppointment,
  detailAppointment,
  getAllAppointment,
  newAppointment,
} from "../services/appointmentService";
import Appointment from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await getAllAppointment();
    res.status(200).json(appointments);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAppointmentById = async (req: Request, res: Response)=> {
  const { appId } = req.params;
  try {
    const appointment = await detailAppointment(Number(appId));
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const schedule = async (req: Request, res: Response) => {
  const { id, date, time, userId } = await req.body;
  try {
    const newTurn = await newAppointment({
      id,
      date,
      time,
      userId,
    });
    res.status(201).json(newTurn);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const cancel = async (req: Request, res: Response) => {
  const { appId } = req.params;
  try {
    await cancelAppointment(Number(appId));
    res.status(200).json({ message: "Turno Cancelado" });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};