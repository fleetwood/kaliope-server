import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";
import console from "console";
import { UUIDMock } from "graphql-scalars";

const prisma = new PrismaClient();

import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const now = () => new Date();
type mockPost = {
  title: string;
  subtitle: string | null;
  content: string;
};

function rand(min: number = 0, max: number = 1) {
  if (min && !max) {
    max = min + 1;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const mockPosts = (total: number = 1): { data: mockPost[] } => {
  const posts: mockPost[] = [];
  for (let i = 1; i <= total; i++) {
    let r = rand(2);
    posts.push({
      title: lorem.generateSentences(1),
      subtitle: r > 0 ? lorem.generateSentences(r) : null,
      content: lorem.generateParagraphs(1),
    });
  }
  return { data: posts };
};

const sentences = (total: number = 1) => lorem.generateSentences(total);
const par = (total?: number) => lorem.generateParagraphs(total || rand(3));
const subtitleMaybe = () => (rand() > 0 ? sentences(1) : null);

const password = async () => hash("testing");

const confirm = async(user:any) => {
  console.log(`Seeded ${user.display_name} (${user.userid})`);
  let result = await prisma.user.findFirst({where: {username: user.username}})
  console.log(`\t${JSON.stringify(result,null,2)}`)
  console.log('>>>>>>>>>>>>>>>>')
  return;
}

async function main() {
  const tamiko = await prisma.user.create({
    data: {
      username: "Tamiko",
      email: "TamikoRittenburg@test.com",
      password: await password(),
      uid: "TamikoRittenburgTamikoRittenburg",
      display_name: "Tamiko Rittenburg",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/68.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(tamiko);

  const delinda = await prisma.user.create({
    data: {
      username: "Delinda",
      email: "DelindaLicup@test.com",
      password: await password(),
      uid: "DelindaLicupDelindaLicup",
      display_name: "Delinda Licup",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/62.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(delinda);

  const julian = await prisma.user.create({
    data: {
      username: "Julian",
      email: "JulianTaillon@test.com",
      password: await password(),
      uid: "JulianTaillonJulianTaillon",
      display_name: "Julian Taillon",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/81.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(julian);

  const kitty = await prisma.user.create({
    data: {
      username: "Kitty",
      email: "KittyBratta@test.com",
      password: await password(),
      uid: "KittyBrattaKittyBratta",
      display_name: "Kitty Bratta",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/36.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(kitty);

  const kary = await prisma.user.create({
    data: {
      username: "Kary",
      email: "KaryRarig@test.com",
      password: await password(),
      uid: "KaryRarigKaryRarig",
      display_name: "Kary Rarig",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/55.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(kary)

  const wei = await prisma.user.create({
    data: {
      username: "Wei",
      email: "WeiGonyaw@test.com",
      password: await password(),
      uid: "WeiGonyawWeiGonyaw",
      display_name: "Wei Gonyaw",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(wei)

  const marisha = await prisma.user.create({
    data: {
      username: "Marisha",
      email: "MarishaKealy@test.com",
      password: await password(),
      uid: "MarishaKealyMarishaKealy",
      display_name: "Marisha Kealy",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  await confirm(marisha)

  const nydia = await prisma.user.create({
    data: {
      username: "Nydia",
      email: "NydiaGrazzini@test.com",
      password: await password(),
      uid: "NydiaGrazziniNydiaGrazzini",
      display_name: "Nydia Grazzini",
      photo_url: "https://xsgames.co/randomusers/assets/avatars/female/98.jpg",
      created_at: now(),
      updated_at: now(),
      posts: {
        create: {
          title: sentences(),
          subtitle: subtitleMaybe(),
          content: par(),
        },
      },
    },
  });
  console.log(`Seeded ${nydia.display_name} (${nydia.userid})`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
