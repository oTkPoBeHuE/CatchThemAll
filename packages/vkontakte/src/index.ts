import * as dotenv from 'dotenv';
import { start } from "./easy_bot";

dotenv.config();

start(process.env.VK_TOKEN, process.env.USER_ID);
