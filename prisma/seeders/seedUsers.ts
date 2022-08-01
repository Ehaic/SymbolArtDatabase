import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export async function users() {

    const password = await bcrypt.hash("password1", 10);
    const user = await prisma.user.upsert({
        where: {id: 1},
        update: {
            username: "admin",
            emailAddress: "admin@admin.com",
            password: password,
        },
        create: {
            username: "admin",
            emailAddress: "admin@admin.com",
            password: password,
        }
    })

    console.log(user);
}
