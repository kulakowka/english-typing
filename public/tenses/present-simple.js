/* Тема-время. Строка: ['+', 'русское предложение', 'English sentence.|another version.', ловушки?, заметка?].
   '+' утверждение, '-' отрицание, '?' вопрос. Ловушка: [after, keys, say, start?]. Правила форм — в forms.
   Проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 't-present-simple', kind: 'tense', title: 'Present Simple', sub: 'привычки, факты, расписания',
  forms: {
    '+': 'I, you, we, they + глагол. He, she, it + глагол с *-s*: she *works*.',
    '-': "*don't* + глагол. С he, she, it — *doesn't* + глагол без -s.",
    '?': '*Do* + кто + глагол? С he, she, it — *Does* + кто + глагол без -s?'
  },
  items: [
    ['+', 'Я работаю из дома.', 'I work from home.'],
    ['-', 'Я не ем сладкое.', "I don't eat sweets.|I don't eat sugar.|I don't eat sweet things.", [['i ', 'n', "Одного not мало, нужен вспомогательный глагол: I *don't* eat.", true]]],
    ['?', 'Ты говоришь по-английски?', 'Do you speak English?', [['', 'y', 'Вопрос начинается с *Do*: Do you speak...?', true]]],
    ['+', 'Она работает в банке.', 'She works at a bank.|She works in a bank.', [['she work', ' ', 'С he, she, it глагол получает *-s*: she *works*.']]],
    ['-', 'Она не пьёт кофе.', "She doesn't drink coffee.", [['she do', 'n', "С he, she, it — *doesn't*.", true]]],
    ['?', 'Она работает по субботам?', 'Does she work on Saturdays?|Does she work on Saturday?', [['do', ' ', 'С he, she, it — *Does*.', true], ['does she work', 's', 'После does глагол без -s: does she *work*?']]],
    ['+', 'Мы живём в большом городе.', 'We live in a big city.|We live in a large city.'],
    ['-', 'Он не водит машину.', "He doesn't drive.|He doesn't drive a car.", [[["doesn't drive", 'does not drive'], 's', "После doesn't глагол без -s: doesn't *drive*."]]],
    ['?', 'Где ты живёшь?', 'Where do you live?', [['where ', 'y', 'После where нужен do: where *do you* live?', true]]],
    ['+', 'Он каждый день встаёт в семь.', 'He gets up at seven every day.|He gets up at 7 every day.|Every day he gets up at seven.', [['he get', ' ', 'С he, she, it глагол получает *-s*: he *gets* up.']]],
    ['-', 'Мы не работаем по выходным.', "We don't work on weekends.|We don't work on the weekend.|We don't work at weekends.|We don't work on the weekends."],
    ['?', 'Во сколько начинается фильм?', 'What time does the movie start?|What time does the film start?|When does the movie start?|When does the film start?|What time does the movie begin?', [[['what time ', 'when '], 't', 'Нужен does: what time *does* the movie start?', true]]],
    ['+', 'Поезд отправляется в девять.', 'The train leaves at nine.|The train leaves at 9.|The train departs at nine.', [['the train leave', ' ', 'Поезд — это it, значит *leaves*.']]],
    ['-', 'Они здесь не живут.', "They don't live here."],
    ['?', 'Сколько стоит этот билет?', 'How much does this ticket cost?|How much is this ticket?|How much does the ticket cost?', [['how much does this ticket cost', 's', 'После does глагол без -s: *cost*.']]],
    ['+', 'Вода закипает при ста градусах.', 'Water boils at 100 degrees.|Water boils at one hundred degrees.|Water boils at a hundred degrees.', [['water boil', ' ', 'Water — это it, значит *boils*.']]],
    ['-', 'Я не знаю ответа.', "I don't know the answer."],
    ['?', 'Ты часто готовишь?', 'Do you cook often?|Do you often cook?|Do you cook a lot?'],
    ['+', 'Я обычно пью кофе по утрам.', 'I usually drink coffee in the morning.|I usually have coffee in the morning.|I usually drink coffee in the mornings.'],
    ['-', 'Мой брат не смотрит телевизор.', "My brother doesn't watch TV.|My brother doesn't watch television.", [['my brother do', 'n', "My brother — это he, значит *doesn't*."]]],
    ['?', 'Чем занимается твой брат?', 'What does your brother do?', [['what ', 'y', 'Нужен does: what *does* your brother do?', true]]],
    ['+', 'Моя сестра говорит на трёх языках.', 'My sister speaks three languages.|My sister speaks 3 languages.', [['my sister speak', ' ', 'My sister — это she, значит *speaks*.']]],
    ['-', 'Этот автобус здесь не останавливается.', "This bus doesn't stop here.|The bus doesn't stop here."],
    ['?', 'Он живёт рядом?', 'Does he live nearby?|Does he live near here?|Does he live close by?', [['does he live', 's', 'После does глагол без -s: does he *live*?']]],
    ['+', 'Они часто ходят в кино.', 'They often go to the movies.|They often go to the cinema.'],
    ['-', 'Я не понимаю этого слова.', "I don't understand this word.|I don't understand that word."],
    ['?', 'Почему ты так думаешь?', 'Why do you think so?|Why do you think that?'],
    ['+', 'Он много читает.', 'He reads a lot.', [['he read', ' ', 'С he, she, it глагол получает *-s*: he *reads*.']]],
    ['-', 'Она никогда не опаздывает.', "She is never late.|She's never late.|She never comes late.", [['she ', 'd', 'С never второе отрицание не нужно: she *is never* late.', true]]],
    ['?', 'Как часто вы видитесь?', 'How often do you see each other?|How often do you meet?'],
    ['+', 'Мы видимся каждую неделю.', 'We see each other every week.|We meet every week.'],
    ['-', 'Мы не говорим по-французски.', "We don't speak French."],
    ['?', 'Ты знаешь этого человека?', 'Do you know this person?|Do you know that person?|Do you know this man?|Do you know that man?'],
    ['+', 'Мой день начинается с пробежки.', 'My day starts with a run.|My day begins with a run.', [[['my day start', 'my day begin'], ' ', 'My day — это it, значит *starts*.']]],
    ['-', 'Здесь зимой не идёт снег.', "It doesn't snow here in winter.|It doesn't snow here in the winter.|It doesn't snow here during the winter."],
    ['?', 'У неё есть машина?', 'Does she have a car?|Has she got a car?', [['does she ha', 's', 'После does — *have*, а не has.']]]
  ]
});
