import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createMember(data) {
  console.log({ data });

  const member = await prisma.member.create({
    data: data,
  });
  return member;
}

export async function getManyMembers() {
  const members = await prisma.member.findMany({});
  return members;
}

export async function getOneMember(id) {
  const member = await prisma.member.findFirst({
    where: { id },
  });
  return member;
}

export async function updateMember(id, data) {
  const member = await prisma.member.update({
    where: { id },
    data: data,
  });
  return member;
}

export async function deleteMember(id) {
  const member = await prisma.member.delete({
    where: { id },
  });
  return member;
}
