const Verse = require('../models/verse');

const INTERNAL_SERVER_ERROR = 500;

const getVerses = (req, res) => Verse.find({})
  .then((verses) => res.status(200)
    .send(verses))
  .catch((err) => {
    switch (err.name) {
      default:
        return res.status(INTERNAL_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
    }
  });

// const test = `Забывши волнения жизни мятежной,
// Один жил в пустыне рыбак молодой.
// Однажды на скале прибрежной,
// Над тихой прозрачной рекой
// Он с удой беспечно
// Сидел
// И думой сердечной
// К прошедшему счастью летел.`;
//
// const splitVerse = (verse) => {
//   let verseLocal = verse;
//   const verseSplitted = [];
//   while (verseLocal !== '') {
//     const lexem = verseLocal.match(/^[а-яёa-z]+/i);
//     if (lexem !== null) {
//       verseSplitted.push(lexem);
//       verseLocal = verseLocal.replace(lexem, '');
//     } else {
//       const symbol = verseLocal.match(/^\s+|[._~:/?#[\]@!$&'()*+,;=-]+/);
//       verseSplitted.push(symbol);
//       verseLocal = verseLocal.replace(symbol, '');
//     }
//   }
//   // return verseSplitted.flat();
//   console.log(verseSplitted.flat());
// };
//
// const splitFrase = (frase) => frase
//   .replace((/[._~:/?#[\]@!$&'()*+,;=-]+/), '')
//   .toLowerCase()
//   .split(/\s/);
//
// console.log(splitFrase(test));
//
// const createVerseObject = (verseArr) => {
//   const verseObject = Object.create({});
//   for (let i = 0; i < verseArr.length; i++) {
//     verseObject[`e${i}`] = { name: verseArr[i] };
//   }
//   console.log(verseObject);
// };
//
// createVerseObject(splitVerse(test));
//
// splitVerse(test);
//
module.exports = {
  getVerses,
};

// function filterIt(arr, searchKey) {
//   return arr.filter((obj) => Object.keys(obj).some((key) => obj[key].includes(searchKey)));
// }
//
// const verb = [
//   {
//     Lexem: 'убрать',
//     PartOfSpeech: 'глагол',
//     ParadigmJson: {
//       Name: 'убрать',
//       Grammar: 'глагол, переходный',
//       Groups: [
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: 'Инфинитив',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убрать',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 1,
//         },
//         {
//           Name: 'Будущее время',
//           Table: [
//             [
//               {
//                 Value: 'уберу',
//                 Prefix: 'я ',
//                 Row: null,
//               },
//               {
//                 Value: 'уберём',
//                 Prefix: 'мы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'уберёшь',
//                 Prefix: 'ты ',
//                 Row: null,
//               },
//               {
//                 Value: 'уберёте',
//                 Prefix: 'вы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'уберёт',
//                 Prefix: 'он, она, оно ',
//                 Row: null,
//               },
//               {
//                 Value: 'уберут',
//                 Prefix: 'они ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: 'Прошедшее время',
//           Table: [
//             [
//               {
//                 Value: 'убрал',
//                 Prefix: 'я, ты, он ',
//                 Row: null,
//               },
//               {
//                 Value: 'убрали',
//                 Prefix: 'мы, вы, они ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убрала',
//                 Prefix: 'я, ты, она ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убрало',
//                 Prefix: 'оно ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: 'Действит. причастие прош. вр.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убравший',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Страдат. причастие прош. вр.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убранный',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Деепричастие прош. вр.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убрав, *убравши',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: '',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Ед. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Мн. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Повелительное накл.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убери',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'уберите',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Побудительное накл.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: '',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'уберёмте',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 3,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: 'Инфинитив',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убраться',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 1,
//         },
//         {
//           Name: 'Будущее время',
//           Table: [
//             [
//               {
//                 Value: 'уберусь',
//                 Prefix: 'я ',
//                 Row: null,
//               },
//               {
//                 Value: 'уберёмся',
//                 Prefix: 'мы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'уберёшься',
//                 Prefix: 'ты ',
//                 Row: null,
//               },
//               {
//                 Value: 'уберётесь',
//                 Prefix: 'вы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'уберётся',
//                 Prefix: 'он, она, оно ',
//                 Row: null,
//               },
//               {
//                 Value: 'уберутся',
//                 Prefix: 'они ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: 'Прошедшее время',
//           Table: [
//             [
//               {
//                 Value: 'убрался',
//                 Prefix: 'я, ты, он ',
//                 Row: null,
//               },
//               {
//                 Value: 'убрались',
//                 Prefix: 'мы, вы, они ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убралась',
//                 Prefix: 'я, ты, она ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убралось',
//                 Prefix: 'оно ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: 'Причастие прош. вр.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убравшийся',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Деепричастие прош. вр.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убравшись',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 2,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: '',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Ед. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Мн. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Повелительное накл.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'уберись',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'уберитесь',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Побудительное накл.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: '',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'уберёмтесь',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 3,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: 'Инфинитив',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убирать',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 1,
//         },
//         {
//           Name: 'Настоящее время',
//           Table: [
//             [
//               {
//                 Value: 'убираю',
//                 Prefix: 'я ',
//                 Row: null,
//               },
//               {
//                 Value: 'убираем',
//                 Prefix: 'мы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убираешь',
//                 Prefix: 'ты ',
//                 Row: null,
//               },
//               {
//                 Value: 'убираете',
//                 Prefix: 'вы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убирает',
//                 Prefix: 'он, она, оно ',
//                 Row: null,
//               },
//               {
//                 Value: 'убирают',
//                 Prefix: 'они ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: 'Прошедшее время',
//           Table: [
//             [
//               {
//                 Value: 'убирал',
//                 Prefix: 'я, ты, он ',
//                 Row: null,
//               },
//               {
//                 Value: 'убирали',
//                 Prefix: 'мы, вы, они ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убирала',
//                 Prefix: 'я, ты, она ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убирало',
//                 Prefix: 'оно ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: '',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Наст. время',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Прош. время',
//                 Prefix: null,
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Действит. причастие',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убирающий',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'убиравший',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Страдат. причастие',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убираемый',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: '',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Деепричастие',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убирая',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'убирав, *убиравши',
//                 Prefix: ' (не) ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 3,
//           RowCount: 4,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: '',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Ед. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Мн. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Повелительное накл.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убирай',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'убирайте',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 3,
//           RowCount: 2,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: 'Инфинитив',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убираться',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 1,
//         },
//         {
//           Name: 'Настоящее время',
//           Table: [
//             [
//               {
//                 Value: 'убираюсь',
//                 Prefix: 'я ',
//                 Row: null,
//               },
//               {
//                 Value: 'убираемся',
//                 Prefix: 'мы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убираешься',
//                 Prefix: 'ты ',
//                 Row: null,
//               },
//               {
//                 Value: 'убираетесь',
//                 Prefix: 'вы ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убирается',
//                 Prefix: 'он, она, оно ',
//                 Row: null,
//               },
//               {
//                 Value: 'убираются',
//                 Prefix: 'они ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: 'Прошедшее время',
//           Table: [
//             [
//               {
//                 Value: 'убирался',
//                 Prefix: 'я, ты, он ',
//                 Row: null,
//               },
//               {
//                 Value: 'убирались',
//                 Prefix: 'мы, вы, они ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убиралась',
//                 Prefix: 'я, ты, она ',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'убиралось',
//                 Prefix: 'оно ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 2,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: '',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Наст. время',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Прош. время',
//                 Prefix: null,
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Причастие',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убирающийся',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'убиравшийся',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Деепричастие',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убираясь',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'убиравшись',
//                 Prefix: ' (не) ',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 3,
//           RowCount: 3,
//         },
//         {
//           Name: '',
//           Table: [
//             [
//               {
//                 Value: '',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Ед. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'Мн. ч.',
//                 Prefix: null,
//                 Row: null,
//               },
//             ],
//             [
//               {
//                 Value: 'Повелительное накл.',
//                 Prefix: null,
//                 Row: null,
//               },
//               {
//                 Value: 'убирайся',
//                 Prefix: '',
//                 Row: null,
//               },
//               {
//                 Value: 'убирайтесь',
//                 Prefix: '',
//                 Row: null,
//               },
//             ],
//           ],
//           ColumnCount: 3,
//           RowCount: 2,
//         },
//       ],
//     },
//   },
// ];
//
// console.log(filterIt(verb, 'Lexem'));
