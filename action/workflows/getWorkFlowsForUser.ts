"use server"

import {auth} from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GetWorkflowsForUser() {
    const {userId} = auth();
    if (!userId) {
        throw new Error("unauthenticated");
    }
    //retrieve all workflows for the user
    return prisma.workflow.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "asc",
        },
    })
}