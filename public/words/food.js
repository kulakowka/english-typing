/* Слова с картинками. Строка: ['слово|другие верные варианты', 'перевод', 'что на картинке (для генерации)'].
   Картинка лежит в img/<id колоды>/<слово>.webp. Проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'w-food', kind: 'words', title: 'Еда и напитки', sub: 'фрукты, овощи, готовая еда',
  words: [
    ['apple', 'яблоко', 'a red apple with a leaf'],
    ['banana', 'банан', 'a yellow banana'],
    ['orange', 'апельсин', 'an orange'],
    ['lemon', 'лимон', 'a lemon'],
    ['strawberry', 'клубника', 'a strawberry'],
    ['grapes', 'виноград', 'a bunch of purple grapes'],
    ['watermelon', 'арбуз', 'a slice of watermelon'],
    ['pineapple', 'ананас', 'a pineapple'],
    ['cherry|cherries', 'вишня', 'two red cherries on a stem'],

    ['tomato', 'помидор', 'a red tomato'],
    ['cucumber', 'огурец', 'a green cucumber'],
    ['carrot', 'морковь', 'a carrot with green tops'],
    ['potato', 'картошка', 'a brown potato'],
    ['onion', 'лук', 'a yellow onion'],
    ['garlic', 'чеснок', 'a head of garlic'],
    ['pepper|bell pepper', 'перец', 'a red bell pepper'],
    ['mushroom', 'гриб', 'a white button mushroom'],
    ['corn', 'кукуруза', 'an ear of corn'],

    ['bread', 'хлеб', 'a loaf of bread'],
    ['cheese', 'сыр', 'a wedge of yellow cheese with holes'],
    ['egg', 'яйцо', 'a white chicken egg'],
    ['butter', 'сливочное масло', 'a block of butter on a butter dish'],
    ['milk', 'молоко', 'a glass bottle of milk'],
    ['rice', 'рис', 'a bowl of cooked white rice'],
    ['pasta|spaghetti', 'паста', 'a plate of spaghetti'],
    ['soup', 'суп', 'a bowl of soup with a spoon'],
    ['salad', 'салат', 'a bowl of green salad'],

    ['fish', 'рыба', 'a whole raw fish'],
    ['sausage', 'сосиска', 'a grilled sausage'],
    ['pizza', 'пицца', 'a whole pizza'],
    ['sandwich', 'сэндвич', 'a sandwich'],
    ['cake', 'торт', 'a cake with a slice cut out'],
    ['ice cream', 'мороженое', 'an ice cream cone'],
    ['honey', 'мёд', 'a jar of honey with a wooden dipper'],
    ['coffee', 'кофе', 'a cup of black coffee on a saucer'],
    ['tea', 'чай', 'a glass cup of tea with a tea bag']
  ]
});
