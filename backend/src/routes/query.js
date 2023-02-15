const router = require("express").Router();
const authUser = require("../middleware/authUser");
const authTeacher = require("../middleware/authTeacher");
const controllerQuery = require("../controllers/query");

router.post("/new-query", authTeacher, controllerQuery.create);
router.get("/get-queries/:_id", authUser, controllerQuery.getQueries);
router.get("/get-query/:_id", authUser, controllerQuery.getQuery);
router.put("/update-query/:_id", authTeacher, controllerQuery.updateQuery);
router.delete("/delete-query/:_id", authTeacher, controllerQuery.deleteQuery);

module.exports = router;
