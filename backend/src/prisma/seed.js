const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function main() {
  // admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@email.com" },
    update: {},
    create: {
      email: "admin@email.com",
      password: await bcrypt.hash("password", 10),
      role: "admin",
    },
  });

  // artwork
  const styles = [
    "Traditional",
    "Realism",
    "Fine Line",
    "Black and Grey",
    "Color",
    "Floral",
    "Minimal Art",
    "Botanical",
  ];

  const artworks = [];

  for (let i = 1; i <= 20; i++) {
    const style = styles[Math.floor(Math.random() * styles.length)];
    artworks.push({
      title: `Tattoo Design ${i}`,
      description: `Beautiful ${style.toLowerCase()} tattoo design`,
      imageUrl: "https://source.unsplash.com/random/400x600/?tattoo,",
      style,
    });
  }

  await prisma.artwork.createMany({
    data: artworks,
    skipDuplicates: true,
  });

  // appointment
  const appointments = [];
  const statuses = ["pending", "confirmed", "rejected"];

  for (let i = 1; i <= 10; i++) {
    const dayOffset = Math.floor(Math.random() * 30) + 1;
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);

    appointments.push({
      clientName: `Client ${i}`,
      clientEmail: `client${i}@email.com`,
      date,
      message: `I'd like to get a ${
        styles[Math.floor(Math.random() * styles.length)]
      } style tattoo`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }

  await prisma.appointment.createMany({
    data: appointments,
    skipDuplicates: true,
  });

  console.log("DB seeded successfully");
  console.log("Admin user created: ", admin);
  console.log(`${artworks.length} artworks created`);
  console.log(`${appointments.length} appointments created`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
