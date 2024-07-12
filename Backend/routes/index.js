import express from "express"
import auth from "./authRoutes.js"
import users from "./userRoutes.js"
import orders from "./orderRoutes.js"
import trash from "./trashRoutes.js"

const router = express.Router()

router.use("/auth", auth)
router.use("/users", users)
router.use("/orders", orders)
router.use("/trash", trash)

export default router