const router = require("express").Router();
const controllerUser = require("../controllers/user");
const authSuperAdmin = require("../middleware/authSuperAdmin");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const authTeacher = require("../middleware/authTeacher");
const authUser = require("../middleware/authUser");

router.post("/activation", controllerUser.activateEmail);
router.get("/activation/:activation_token", controllerUser.activateEmail);
router.post("/login", controllerUser.login);
router.post("/refresh_token", controllerUser.getAccessToken);
router.post("/forgot", controllerUser.forgotPassword);
router.post("/register_superAdmin/:_id", controllerUser.registerSuperAdmin);
router.post("/reset", authUser, controllerUser.resetPassword);
router.post("/reset-forgotten", auth, controllerUser.resetPasswordForgotten);

router.get("/info", auth, controllerUser.getUserInfo);

router.get("/all_admin", authSuperAdmin, controllerUser.getAdminAllInfo);
router.post("/register_admin", authSuperAdmin, controllerUser.register);
router.get("/get_admin/:_id", authSuperAdmin, controllerUser.getAdminInfo);
router.put("/update_admin/:_id", authSuperAdmin, controllerUser.updateUser);
router.delete("/delete_admin/:_id", authSuperAdmin, controllerUser.deleteUser);

router.get("/get_user/:_id", authUser, controllerUser.getAdminInfo);
router.put("/update_user/:_id", authAdmin, controllerUser.updateUser);
router.get("/all_teacher", authAdmin, controllerUser.getTeacherAllInfo);
router.get("/all_students_register/", authAdmin, controllerUser.getUsersAllStudentsRegister);
router.get("/all_students/:_id", authUser, controllerUser.getUsersAllStudents);
router.get("/cohort/all_students/:_id", authTeacher, controllerUser.getUsersAllStudents);
router.delete("/delete_user/:_id", authAdmin, controllerUser.deleteUser);
router.post("/register_teacher", authAdmin, controllerUser.register);
router.post("/register_student", authAdmin, controllerUser.register);

module.exports = router;
