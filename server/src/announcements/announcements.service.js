import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createAnnouncement(data) {
  console.log({ data });

  const announcement = await prisma.announcement.create({
    data: data,
  });
  return announcement;
}

export async function getManyAnnouncements() {
  const announcements = await prisma.announcement.findMany({});
  return announcements;
}

export async function getOneAnnouncement(id) {
  const announcement = await prisma.announcement.findFirst({
    where: { id },
  });
  return announcement;
}

export async function updateAnnouncement(id, data) {
  const announcement = await prisma.announcement.update({
    where: { id },
    data: data,
  });
  return announcement;
}

export async function deleteAnnouncement(id) {
  const announcement = await prisma.announcement.delete({
    where: { id },
  });
  return announcement;
}
