// prisma instance, to be called anywhere if need be (reusable connection)
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = prisma;
