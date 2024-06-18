import {Router} from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRoutes";
const indexRouter = Router();

indexRouter.use('/users', usersRouter)
indexRouter.use('/appointments', appointmentsRouter);

export default indexRouter;