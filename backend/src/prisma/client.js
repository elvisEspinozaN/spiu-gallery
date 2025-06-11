// prisma instance, to be called anywhere if need DB interaction
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = prisma;
