import { UserService } from "./core/user.service.js";
import { UserRepositoryImpl } from "./adapters/userMongo.repository.js";

const userRepositoryImpl = new UserRepositoryImpl();
const userService = new UserService(userRepositoryImpl);

export { userService };
