import { Router } from "express";
import { CreateBusinessController } from "../../../../modules/business/useCases/createBusiness/createBusinessController";
import { DeleteBusinessController } from "../../../../modules/business/useCases/deleteBusiness/deleteBusinessController";
import { FindBusinessByIdController } from "../../../../modules/business/useCases/findBusinessById/findBusinessByIdController";
import { FindBusinessByTradeNameController } from "../../../../modules/business/useCases/findBusinessByTadeName/findBusinessByTradeNameController";
import { ListBusinessController } from "../../../../modules/business/useCases/listBusiness/listBusinessController";
import { UpdateBusinessController } from "../../../../modules/business/useCases/updateBusiness/updateBusinessController";

const businessRoutes = Router();

const createBusinessController = new CreateBusinessController();
const listBusinessController = new ListBusinessController();
const updateBusinessController = new UpdateBusinessController();
const findBusinessByIdController = new FindBusinessByIdController();
const findBusinessByTradeNameController =
  new FindBusinessByTradeNameController();
const deleteBusinessController = new DeleteBusinessController();

businessRoutes.post("/", createBusinessController.handle);
businessRoutes.get("/list", listBusinessController.handle);
businessRoutes.patch("/", updateBusinessController.handle);
businessRoutes.get("/", findBusinessByIdController.handle);
businessRoutes.get("/search", findBusinessByTradeNameController.handle);
businessRoutes.delete("/", deleteBusinessController.handle);

export { businessRoutes };
