import {prisma} from '@/lib/prisma'; export async function GET(){return Response.json(await prisma.order.findMany({include:{items:{include:{product:true}}},orderBy:{createdAt:'desc'}}))}
