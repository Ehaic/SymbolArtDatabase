import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {contentRatings} from "./seeders/seedContentRatings";
import {users} from "./seeders/seedUsers";


async function main() {
    await contentRatings();
    await users();
}


main()
    .catch ((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
