import express from 'express';
import homeController from '../controller/homeController';
import userController from '../controller/userController'
const router = express.Router();

const initWebRouter = (app) => {
    // router.get("/", (req, res) => {
    //     return res.send("Hello word with Thái Bình")
    // });
    //theo mo hinh MVC
    router.get("/", homeController.getHomePage);
    router.get("/crud", homeController.getCRUD);

    router.post("/post-crud", homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD)
    router.get('/edit-crud', homeController.getEditCRUD)

    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD)



    router.post('/api/login', userController.handleLogin)


    return app.use("/", router);
}

module.exports = initWebRouter;

//get là lấy, post là thêm, delete là xóa, put cập nhập