import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function contentRatings() {
    const nsfw = await prisma.contentRatings.upsert(
        {
            where: { id: 1},
            update: {},
            create: {
                rating: "NSFW",
            }
        }
    )

    const suggestive = await prisma.contentRatings.upsert(
        {
            where: { id: 2},
            update: {},
            create: {
                rating: "Suggestive",
            }
        }
    )

    const sfw = await prisma.contentRatings.upsert(
        {
            where: { id: 3},
            update: {},
            create: {
                rating: "SFW",
            }
        }
    )

    console.log({nsfw, suggestive, sfw})
}
