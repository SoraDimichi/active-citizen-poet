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
//   return verseSplitted.flat();
// };
// ------------------------------------------------------------------------------------------------
// const testVerse = `В час, когда утомлен бездействием душно-тяжелым
// Или делом бесплодным — делом хуже безделья,—
// Я под кров свой вхожу — и с какой-то тоской озираю
// Стены, ложе да стол, на котором по глупой,
// Старой, вечной привычке ищу поневоле глазами,
// Нет ли вести какой издалека, худой или доброй
// Все равно, лишь бы вести, и роюсь заведомо тщетно —
// Так, чтоб рыться,— в бумагах... В час, когда
// обливает
// Светом серым своим финская ночь комнату,— снова
// Сердце болит и чего-то просит, хотя от чего-то
// Я отрекся давно, заменил неизвестное что-то —
// Глупое, сладкое что-то — суровым, холодно-
// печальным
// Нечто... Пусть это нечто звучит душе одномерно,
// Словно маятник старых часов,— зато для желудка
// Это нечто здоровей... Чего тебе, глупое сердце?
// Что за вестей тебе хочется? Знай себе, бейся
// ровнее,
// Лучше будет, поверь... Вести о чем-нибудь малом,
// Дурны ль они, хороши ль, только кровь понапрасну
// волнуют.
// Лучше жить без вестей, лучше, чтоб не было даже
// И желаний о ком да о чем-нибудь знать. И чего же
// Надо тебе, непокорное, гордое сердце,— само ты
// Хочешь быть господином, а просишь все уз да неволи,
// Женской ласки да встречи горячей... За эти
// Ласки да встречи — плохая расплата, не всё ли
// Ты свободно любить, ничего не любя... не завидуй.
// Бедное сердце больное — люби себе всё, или вовсе
// Ничего не любя — от избытка любви одиноко,
// Гордо, тихо страдай, да живи презрением вволю.`;
//
// const testFrase = 'Нужна помощь посадить дерево';
//
// const arrayOfWords = (evName) => evName
//   .toLowerCase()
//   .replace(/[._~:/?#[\]@!$&'()*+,;=-]+/gi, '')
//   .split(' ');
//
// const arrOfWordsWithArrOfChars = (arrOfWords) => {
//   const arrOfWordsWithArrsOfChars = [];
//   arrOfWords.forEach((word) => {
//     arrOfWordsWithArrsOfChars.push(word.split(''));
//   });
//   return arrOfWordsWithArrsOfChars;
// };
//
// const getArrOfIndexArr = (verse, letterKeys) => {
//   let index = 0;
//   let indexReal = 0;
//   let rCutVerse = verse;
//   const arrOfIndexArr = [];
//   let indexArr = [];
//   for (let k = 0; k < letterKeys.length; k++) {
//     let i = 0;
//     indexArr = [];
//     while (i < letterKeys[k].length) {
//       index = rCutVerse.indexOf(letterKeys[k][i]);
//       if (index !== -1) {
//         rCutVerse = rCutVerse.slice(index + 1, rCutVerse.length);
//         indexReal += (i === 0 && k === 0) ? index : index + 1;
//         indexArr.push(indexReal);
//         i += 1;
//       } else break;
//     }
//     arrOfIndexArr.push(indexArr);
//   }
//   if (arrOfIndexArr.flat().length === letterKeys.flat().length) {
//     return arrOfIndexArr;
//   }
//   return undefined;
// };
//
// const replaceChars = (verse, arrOfIndexArr) => {
//   console.log(arrOfIndexArr);
//   let encryptedVerse = verse;
//   for (let k = arrOfIndexArr.length - 1; k >= 0; k--) {
//     for (let i = arrOfIndexArr[k].length - 1; i >= 0; i--) {
//       console.log(verse.charAt(arrOfIndexArr[k][i]));
//       encryptedVerse = `${encryptedVerse.substring(0, arrOfIndexArr[k][i])}<span className="word-color-${k + 1}">${encryptedVerse.charAt(arrOfIndexArr[k][i])}</span>${encryptedVerse.substring(arrOfIndexArr[k][i] + 1)}`;
//     }
//   }
//   console.log(encryptedVerse);
// };
//
// // eslint-disable-next-line max-len
// replaceChars(testVerse, getArrOfIndexArr(testVerse, arrOfWordsWithArrOfChars(arrayOfWords(testFrase))));
//-------------------------------------------------------------------------------------------------

// console.log(testVerse.charAt(154));
// // console.log('+++++++++++++++++++++++++++++++');
// // console.log(lCutVerse);
//
// checkVerse(testVerse, makeRegex(testFrase));

// verse.replace(letterRegex, `${letterKey}`);

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
// // console.log(filterIt(verb, 'Lexem'));

module.exports = {
  getVerses,
};
