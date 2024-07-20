const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function createEvent(data) {
  console.log({ data });

  const event = await prisma.event.create({
    data: data,
  });
  return event;
}

export async function getManyEvents() {
  const events = await prisma.event.findMany({});
  return events;
}

export async function getOneEvent(id) {
  const event = await prisma.event.findFirst({
    where: { id },
  });
  return event;
}

export async function updateEvent(id, data) {
  const event = await prisma.event.update({
    where: { id },
    data: data,
  });
  return event;
}

export async function deleteEvent(id) {
  const event = await prisma.event.delete({
    where: { id },
  });
  return event;
}
