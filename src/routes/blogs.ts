import { Router,Request,Response } from "express";
import { deleteItem, getItem, postItem, updateItem,getItems } from "../controllers/blog";

const router=Router();
router.get("/",getItems);
router.get("/:id",getItem);
router.post("/",postItem);
router.put("/:id",updateItem);
router.delete("/:id",deleteItem); 
export{router};
