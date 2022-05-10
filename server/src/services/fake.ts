// const genFakeQuiz = (subject: string): FakeQuiz => ({
//   questions: genQuiz(subject),
//   subject,
//   date: faker.date.between(
//     "2022-01-01T00:00:00.000Z",
//     "2022-05-08T00:00:00.000Z"
//   ),
//   result: Math.random() > 0.82 ? 15 : Math.ceil(Math.random() * 14),
// });

// const genFakeUser = (num: number) => {
//   const fakeUsers: FakeUser[] = [];
//   for (let i = 0; i < num; i += 1) {
//     fakeUsers.push({
//       date: faker.date.between(
//         "2022-05-01T00:00:00.000Z",
//         "2022-06-01T00:00:00.000Z"
//       ),
//       email: faker.internet.email(),
//     });
//   }
//   return fakeUsers;
// };
