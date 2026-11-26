/* Колода «Еда и рестораны»: кафе, ресторан, бар, доставка. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'food', title: 'Еда и рестораны', sub: 'кафе, ресторан, бар, доставка',
  phrases: [
    /* ───── 1. Простые: короткие реплики и базовые шаблоны заказа ───── */

    { id: 'fd-dinner-ready', ru: 'Ужин готов!', ctx: 'зовём к столу',
      en: ['Dinner is ready!', "Dinner's ready!", 'Dinner is served!', 'Food is ready!', "Food's ready!"],
      note: 'Завтрак, обед и ужин — без артикля: *Dinner is ready*, have lunch, after breakfast.',
      traps: [
        { after: '', start: true, keys: 't', say: 'Приёмы пищи — без артикля: *Dinner is ready*, не The dinner.' },
        { after: 'dinner ', start: true, keys: 'r', say: 'Нужен глагол: Dinner *is* ready.' }
      ] },
    { id: 'fd-help-yourself', ru: 'Угощайтесь!', ctx: 'хозяин гостям за столом',
      en: ['Help yourself!', 'Help yourselves!', 'Please help yourself!', 'Go ahead, help yourself!', 'Dig in!'],
      note: '*Help yourself* — «берите сами, не стесняйтесь». Можно уточнить: Help yourself to some salad.' },
    { id: 'fd-enjoy-meal', ru: 'Приятного аппетита!', ctx: 'перед едой',
      en: ['Enjoy your meal!', 'Enjoy!', 'Bon appetit!', 'Enjoy your food!', 'Enjoy your dinner!'],
      note: 'Дословного «приятного аппетита» в английском нет. Говорят *Enjoy your meal* или просто Enjoy!',
      traps: [
        { after: '', start: true, keys: 'gp', say: 'Good appetite — калька. По-английски: *Enjoy your meal!*' }
      ] },
    { id: 'fd-for-here', ru: 'Я буду здесь, не с собой.', ctx: 'в кофейне, ответ кассиру',
      en: ['For here, please.', "It's for here, please.", "That's for here, please.", 'For here.', "I'll have it here, please."],
      note: 'Кассир спросит: For here or to go? Здесь — *for here*, с собой — to go.' },
    { id: 'fd-no-ice', ru: 'Без льда, пожалуйста.', ctx: 'заказ напитка',
      en: ['No ice, please.', 'Without ice, please.', 'No ice for me, please.', 'With no ice, please.', 'Hold the ice, please.'],
      note: 'Коротко отказаться от ингредиента — *no* + слово: no ice, no sugar, no onions.' },
    { id: 'fd-two-beers', ru: 'Два пива, пожалуйста.', ctx: 'в баре',
      en: ['Two beers, please.', '2 beers, please.', 'Can we get two beers, please?', 'Can I get two beers, please?', "We'll have two beers, please.", 'Could we get two beers, please?'],
      note: 'В заказе напитки считают: *two beers*, two coffees, three waters.',
      traps: [
        { after: ['two beer', '2 beer'], keys: ' ,', say: 'Два пива — *two beers*: в заказе beer считается, нужно -s.' }
      ] },
    { id: 'fd-keep-change', ru: 'Сдачи не надо.', ctx: 'расплачиваемся наличными',
      en: ['Keep the change.', 'Keep the change, please.', 'You can keep the change.', 'Please keep the change.'],
      note: '*Keep the change* — «оставьте сдачу себе». Готовая формула, дословно «не надо» не переводят.' },
    { id: 'fd-soup-cold', ru: 'Мой суп холодный.', ctx: 'жалоба официанту',
      en: ['My soup is cold.', "My soup's cold.", 'The soup is cold.', 'This soup is cold.'],
      note: 'Без глагола нельзя: my soup *is* cold. Вежливее начать с Excuse me.',
      traps: [
        { after: ['my soup ', 'the soup ', 'this soup '], start: true, keys: 'c', say: 'Нужен глагол: my soup *is* cold.' }
      ] },
    { id: 'fd-delicious', ru: 'Это очень вкусно!', ctx: 'хвалим еду',
      en: ['This is delicious!', "It's delicious!", 'This is really delicious!', 'This is so good!', "It's so good!", 'This is really good!'],
      note: '*Delicious* уже значит «очень вкусно», поэтому very с ним не ставят. Усилить можно словом really.',
      traps: [
        { after: ['this is ', "it's ", 'it is '], start: true, keys: 'v', say: 'Не very delicious. Просто *delicious* или really delicious.' }
      ] },
    { id: 'fd-smells-good', ru: 'Пахнет вкусно!', ctx: 'на кухне',
      en: ['It smells good!', 'That smells good!', 'It smells so good!', 'It smells great!', 'Smells good!', 'It smells delicious!'],
      note: 'После smell, taste, look идёт прилагательное: *smells good*. Наречие well тут не ставят.',
      traps: [
        { after: 'smells ', keys: 'w', say: 'После smell — прилагательное: *smells good*, не well.' }
      ] },
    { id: 'fd-is-it-spicy', ru: 'Это острое?', ctx: 'вопрос о блюде',
      en: ['Is it spicy?', 'Is this spicy?', 'Is that spicy?', 'Is it hot?', 'Is this one spicy?', 'Is this dish spicy?'],
      note: 'Острая еда — *spicy*. Hot тоже говорят, но оно значит и «горячее». Sharp — только про нож.',
      traps: [
        { after: ['is it s', 'is this s', 'is that s', 'is this one s', 'is this dish s'], start: true, keys: 'h', say: 'Sharp — про нож. Острая еда — *spicy*.' }
      ] },
    { id: 'fd-dont-eat-meat', ru: 'Я не ем мясо.', ctx: 'предпочтения в еде',
      en: ["I don't eat meat.", "I don't eat any meat.", "I'm vegetarian.", "I'm a vegetarian."],
      note: "Отрицание строят через *don't*: I don't eat meat. Про еду вообще — без артикля.",
      traps: [
        { after: 'i ', start: true, keys: 'n', say: "Не I not eat. Отрицание — через *don't*: I don't eat meat." }
      ] },
    { id: 'fd-im-full', ru: 'Я наелся, спасибо.', ctx: 'за столом, отказ от добавки',
      en: ["I'm full, thank you.", "I'm full, thanks.", "Thanks, I'm full.", "Thank you, I'm full.", "I'm stuffed, thank you.", "I'm stuffed, thanks."],
      note: "*I'm full* — «я сыт, больше не могу». Разговорный вариант — I'm stuffed." },
    { id: 'fd-im-done', ru: 'Я всё, спасибо.', ctx: 'официант забирает тарелку',
      en: ["I'm done, thank you.", "I'm done, thanks.", "I'm finished, thank you.", "I'm finished, thanks.", "I'm all done, thank you.", "I'm all set, thank you."],
      note: "Доел и можно уносить — *I'm done* или I'm finished. I'm ready значит «готов начать»." },
    { id: 'fd-ready-to-order', ru: 'Мы готовы сделать заказ.', ctx: 'зовём официанта',
      en: ["We're ready to order.", "We're ready to order now.", "I think we're ready to order.", "We'd like to order.", "We'd like to order now.", 'We would like to order.'],
      note: 'Сделать заказ в ресторане — просто *order*: ready to order. Слово make тут не нужно.' },
    { id: 'fd-the-same', ru: 'Мне то же самое, пожалуйста.', ctx: 'заказ вслед за другом',
      en: ["I'll have the same, please.", "I'll have the same.", 'The same for me, please.', 'Same for me, please.', "I'll have the same thing, please.", "I'll have the same thing."],
      note: "С same всегда the: *the same*. I'll have the same — «мне то же, что и ему».",
      traps: [
        { after: ["i'll have ", 'i will have '], start: true, keys: 's', say: 'С same всегда артикль: *the same*.' }
      ] },
    { id: 'fd-soup-of-day', ru: 'Я буду суп дня.', ctx: 'заказ в ресторане',
      en: ["I'll have the soup of the day.", "I'll have the soup of the day, please.", "I'd like the soup of the day.", 'I would like the soup of the day.', "I'll take the soup of the day.", "I'll get the soup of the day."],
      note: "*I'll have* — главный шаблон заказа. Блюдо из меню — с the: the soup of the day, the steak.",
      traps: [
        { after: 'i w', start: true, keys: 'a', say: "I want звучит резко. Заказывают так: *I'll have* или I'd like." },
        { after: ['have ', 'like ', 'take ', 'get '], keys: 's', say: 'Блюдо из меню — с артиклем: *the soup of the day*.' }
      ] },
    { id: 'fd-latte-to-go', ru: 'Можно мне латте с собой, пожалуйста?', ctx: 'в кофейне',
      en: ['Can I get a latte to go, please?', 'Can I get a latte to go?', 'Could I get a latte to go, please?', 'Can I have a latte to go, please?', "I'll have a latte to go, please.", 'A latte to go, please.'],
      note: 'С собой — *to go*: a latte to go. В Британии скажут to take away.',
      traps: [
        { after: 'latte ', keys: 'w', say: 'С собой — *to go*. Не with me.' }
      ] },
    { id: 'fd-large-americano', ru: 'Большой американо, пожалуйста.', ctx: 'в кофейне',
      en: ['A large americano, please.', 'Large americano, please.', 'Can I get a large americano, please?', "I'll have a large americano, please.", 'Can I have a large americano, please?', "I'd like a large americano, please."],
      note: 'Размеры напитков: small, medium, *large*. Про стакан кофе big обычно не говорят.' },
    { id: 'fd-sit-outside', ru: 'Можно нам сесть на улице?', ctx: 'выбираем столик',
      en: ['Can we sit outside?', 'Could we sit outside?', 'Can we get a table outside?', 'Could we get a table outside?', 'Can we have a table outside?', 'Could we have a table outside?'],
      note: 'Столик на улице — *outside*, одним словом и без предлога. On the street — это на проезжей части.',
      traps: [
        { after: ['sit o', 'table o'], keys: 'n', say: 'On the street — на проезжей части. Столик на улице — *outside*.' }
      ] },
    { id: 'fd-still-water', ru: 'Мне воду без газа, пожалуйста.', ctx: 'заказ напитка',
      en: ["I'll have still water, please.", "I'd like still water, please.", 'I would like still water, please.', 'Still water, please.', 'Still water for me, please.', 'Can I get still water, please?'],
      note: 'Вода без газа — *still water*, с газом — sparkling water. Without gas не говорят.',
      traps: [
        { after: ['have ', 'like ', 'get '], keys: 'w', say: 'Без газа — *still water*. Water without gas — калька.' },
        { after: '', start: true, keys: 'w', say: 'Без газа — *still water*. Water without gas — калька.' }
      ] },
    { id: 'fd-pass-salt', ru: 'Передай соль, пожалуйста.', ctx: 'за столом',
      en: ['Could you pass the salt, please?', 'Can you pass the salt, please?', 'Could you pass me the salt, please?', 'Can you pass me the salt, please?', 'Pass the salt, please.', 'Would you pass the salt, please?'],
      note: 'За столом просят *pass*: pass the salt, pass the bread. Вещь на столе конкретная, поэтому the.' },

    /* ───── 2. Средние: предлоги, артикли, устойчивые связки ───── */

    { id: 'fd-book-tonight', ru: 'Хочу забронировать столик на сегодняшний вечер.', ctx: 'звонок в ресторан',
      en: ["I'd like to book a table for tonight.", 'I would like to book a table for tonight.', "I'd like to reserve a table for tonight.", "I'd like to make a reservation for tonight.", 'Can I book a table for tonight?', 'Could I book a table for tonight?'],
      note: 'Сегодня вечером — *tonight*, одним словом. Забронировать столик — book или reserve a table.',
      traps: [
        { after: 'for to', keys: 'd', say: 'Сегодня вечером — *tonight*. Today evening не говорят.' }
      ] },
    { id: 'fd-reservation-at-seven', ru: 'У нас бронь на семь часов.', ctx: 'на входе в ресторан',
      en: ['We have a reservation at seven.', "We have a reservation at seven o'clock.", 'We have a reservation for seven.', "We have a reservation for seven o'clock.", 'We have a reservation at 7.', 'We have a booking at seven.'],
      note: 'Точное время — с *at*: at seven. Reservation — исчисляемое, нужен артикль a.',
      traps: [
        { after: ['reservation ', 'booking '], keys: 'o', say: 'Точное время — с *at*: at seven. Не on.' },
        { after: 'we have ', start: true, keys: 'rb', say: 'Нужен артикль: *a reservation*.' }
      ] },
    { id: 'fd-under-my-name', ru: 'Столик забронирован на моё имя.', ctx: 'на входе в ресторан',
      en: ['The table is booked under my name.', 'The table is reserved under my name.', 'The reservation is under my name.', 'The booking is under my name.', 'The table is booked in my name.', "It's booked under my name."],
      note: 'Бронь на имя — *under* my name. Реже говорят in my name, но не on.',
      traps: [
        { after: ['booked ', 'reserved ', 'reservation is ', 'booking is '], keys: 'of', say: 'На моё имя — *under* my name. Не on и не for.' }
      ] },
    { id: 'fd-table-by-window', ru: 'Можно нам столик у окна?', ctx: 'выбираем столик',
      en: ['Could we have a table by the window?', 'Can we have a table by the window?', 'Could we get a table by the window?', 'Can we get a table by the window?', 'Could we sit by the window?', 'Could we have a table near the window?'],
      note: 'У окна — *by the window*. By в значении «рядом»: by the door, by the sea.' },
    { id: 'fd-how-long-wait', ru: 'Сколько ждать столик?', ctx: 'мест нет, очередь',
      en: ['How long is the wait for a table?', 'How long is the wait?', 'How long do we have to wait for a table?', 'How long will we have to wait for a table?', "What's the wait for a table?", 'How long do we have to wait?'],
      note: 'Wait бывает и существительным: *How long is the wait?* Ждать чего-то — wait for.',
      traps: [
        { after: 'how long ', start: true, keys: 't', say: 'How long to wait — не вопрос. Спросите *How long is the wait?*' },
        { after: 'to wait ', keys: 'a', say: 'Ждать чего-то — wait *for*: wait for a table.' }
      ] },
    { id: 'fd-another-glass', ru: 'Можно мне ещё один бокал вина?', ctx: 'заказ в ресторане',
      en: ['Could I get another glass of wine?', 'Can I get another glass of wine?', 'Could I have another glass of wine?', 'Can I have another glass of wine?', 'Could I get one more glass of wine?', 'Another glass of wine, please.'],
      note: 'Ещё один — *another*, слитно: another glass, another beer. Или one more.' },
    { id: 'fd-sauce-on-side', ru: 'Можно соус отдельно?', ctx: 'просим не поливать блюдо',
      en: ['Can I get the sauce on the side?', 'Could I get the sauce on the side?', 'Can I have the sauce on the side?', 'Could I have the sauce on the side?', 'Sauce on the side, please.', 'Can you put the sauce on the side?'],
      note: 'Отдельно, не поливая блюдо — *on the side*: dressing on the side, fries on the side.' },
    { id: 'fd-whats-in-dish', ru: 'Что входит в это блюдо?', ctx: 'вопрос официанту',
      en: ["What's in this dish?", "What's in this?", "What's in it?", "What's in that dish?", 'What is this dish made of?', 'What does this dish have in it?'],
      note: "Блюдо как еда — *dish*, а plate — сама тарелка. Про состав спрашивают What's in it?" },
    { id: 'fd-come-with-fries', ru: 'Бургер идёт с картошкой фри?', ctx: 'вопрос о блюде',
      en: ['Does the burger come with fries?', 'Does the burger come with French fries?', 'Does it come with fries?', 'Is the burger served with fries?', 'Does this burger come with fries?', 'Do fries come with the burger?'],
      note: 'Что идёт к блюду — *come with*: Does it come with fries? Картошка фри в США — fries.',
      traps: [
        { after: ['burger ', 'does it ', 'do fries '], keys: 'g', say: '«Идёт с» про гарнир — *come with*. Не go with.' },
        { after: ['burger come', 'it come'], keys: 's', say: 'После does — без -s: *Does it come*.' }
      ] },
    { id: 'fd-dairy', ru: 'В этом есть молочные продукты?', ctx: 'аллергия, вопрос о блюде',
      en: ['Does this have dairy in it?', 'Does it have dairy in it?', 'Does this contain dairy?', 'Does it contain dairy?', 'Is there dairy in this?', 'Is there any dairy in it?'],
      note: 'Молочные продукты — одним словом *dairy*. Does it have ... in it? — обычный вопрос про состав.',
      traps: [
        { after: ['have ', 'contain ', 'is there ', 'any '], keys: 'm', say: 'Молочные продукты — *dairy*. Milk products — калька.' },
        { after: ['does this ha', 'does it ha'], start: true, keys: 's', say: 'После does — *have*, не has.' }
      ] },
    { id: 'fd-without-cheese', ru: 'Можете сделать это без сыра?', ctx: 'просим изменить блюдо',
      en: ['Can you make it without cheese?', 'Could you make it without cheese?', 'Can you make this without cheese?', 'Could you make this without cheese?', 'Can I get it without cheese?', 'Could I get it without cheese?'],
      note: 'Готовить, делать еду — *make*, не do: make a salad, make it without cheese.',
      traps: [
        { after: ['can you ', 'could you '], start: true, keys: 'd', say: 'Про еду — *make*, не do: make it without cheese.' }
      ] },
    { id: 'fd-oat-milk', ru: 'Можно на овсяном молоке?', ctx: 'в кофейне',
      en: ['Can I get it with oat milk?', 'Could I get it with oat milk?', 'Can I have it with oat milk?', 'Can you make it with oat milk?', 'Could you make it with oat milk?', 'With oat milk, please.'],
      note: 'На каком молоке — *with*: with oat milk, with almond milk. Предлог on сюда не подходит.',
      traps: [
        { after: ['get it ', 'have it ', 'make it '], keys: 'o', say: 'На овсяном молоке — *with* oat milk. Не on.' }
      ] },
    { id: 'fd-warm-it-up', ru: 'Можете подогреть, пожалуйста?', ctx: 'в кофейне, про выпечку',
      en: ['Could you warm it up, please?', 'Can you warm it up, please?', 'Could you heat it up, please?', 'Can you heat it up, please?', 'Could you warm this up, please?', 'Could you warm it up?'],
      note: 'Подогреть — *warm up* или heat up. Короткое it встаёт в середину: warm it up.',
      traps: [
        { after: ['warm ', 'heat '], keys: 'u', say: 'Местоимение — в середину: *warm it up*.' }
      ] },
    { id: 'fd-on-tap', ru: 'Какое у вас есть разливное пиво?', ctx: 'в баре',
      en: ['What do you have on tap?', "What's on tap?", 'What beers do you have on tap?', 'What have you got on tap?', 'What do you have on draft?', 'What draft beers do you have?'],
      note: 'Разливное пиво — *on tap* или draft beer. Tap — это кран.' },
    { id: 'fd-start-tab', ru: 'Можно открыть счёт?', ctx: 'в баре, платим в конце',
      en: ['Can I start a tab?', 'Could I start a tab?', 'Can I open a tab?', 'Could I open a tab?', 'Can we start a tab?', 'Can we open a tab?'],
      note: '*Tab* — счёт в баре, куда записывают заказы и который закрывают в конце вечера.' },
    { id: 'fd-drink-to-that', ru: 'Давайте выпьем за это!', ctx: 'тост',
      en: ["Let's drink to that!", "I'll drink to that!", "Let's drink to this!", "Let's toast to that!", 'Cheers to that!'],
      note: 'Выпить за что-то — drink *to*: drink to that, drink to your health.',
      traps: [
        { after: ['drink ', 'toast ', 'cheers '], keys: 'f', say: 'Выпить за — drink *to*. Не for.' }
      ] },
    { id: 'fd-didnt-order', ru: 'Извините, я это не заказывал.', ctx: 'принесли не то',
      en: ["Excuse me, I didn't order this.", "Sorry, I didn't order this.", "I didn't order this.", "Excuse me, I didn't order that.", "Excuse me, this isn't what I ordered.", "Sorry, this isn't what I ordered."],
      note: "После *didn't* глагол в первой форме: didn't order. Прошедшее время уже в did.",
      traps: [
        { after: ["i didn't order", 'i did not order'], keys: 'e', say: "После didn't — первая форма: *didn't order*, не ordered." }
      ] },
    { id: 'fd-split-check', ru: 'Давай разделим счёт пополам.', ctx: 'платим с другом',
      en: ["Let's split the check.", "Let's split the bill.", "Let's split the check in half.", "Let's split it.", "Let's go halves.", "Let's split the check fifty-fifty."],
      note: 'Разделить счёт — *split the check*. Divide — это про математику.',
      traps: [
        { after: "let's ", start: true, keys: 'd', say: 'Счёт не divide, а *split*: split the check.' },
        { after: 'split ', keys: 'cb', say: 'Нужен артикль: *the check*.' }
      ] },
    { id: 'fd-pay-separately', ru: 'Мы хотели бы заплатить раздельно.', ctx: 'просим счёт',
      en: ["We'd like to pay separately.", 'We would like to pay separately.', "We'll pay separately.", "We're paying separately.", 'Can we pay separately?', 'Separate checks, please.'],
      note: 'Каждый за себя — *pay separately* или separate checks. Вместе — pay together.',
      traps: [
        { after: 'sep', keys: 'e', say: 'Пишется *separately*: после sep идёт a.' }
      ] },
    { id: 'fd-tip-included', ru: 'Чаевые включены?', ctx: 'перед оплатой',
      en: ['Is the tip included?', 'Is tip included?', 'Is the tip included in the bill?', 'Is service included?', 'Is the service charge included?', 'Is gratuity included?'],
      note: 'Чаевые — *tip*, в единственном числе. Пассив: is included, с -d на конце.',
      traps: [
        { after: ['tip include', 'service include', 'charge include', 'gratuity include'], keys: '?', say: 'Пассив: *is included*, с -d на конце.' }
      ] },
    { id: 'fd-tastes-like', ru: 'На вкус как курица.', ctx: 'пробуем новое блюдо',
      en: ['It tastes like chicken.', 'This tastes like chicken.', 'That tastes like chicken.', 'Tastes like chicken.'],
      note: 'На вкус как — *tastes like* + существительное. Taste здесь глагол, поэтому без is.' },
    { id: 'fd-what-to-drink', ru: 'Что будешь пить?', ctx: 'предлагаем гостю',
      en: ['What would you like to drink?', 'What do you want to drink?', 'What can I get you to drink?', 'What can I get you?', 'What are you drinking?', 'What are you having?'],
      note: 'Предложить напиток — *What would you like to drink?* Гостю это вежливее, чем What do you want.' },
    { id: 'fd-brought-wine', ru: 'Я принёс бутылку вина.', ctx: 'пришли в гости',
      en: ['I brought a bottle of wine.', "I've brought a bottle of wine.", 'I brought some wine.', 'I brought you a bottle of wine.', 'We brought a bottle of wine.'],
      note: 'Bring — неправильный глагол: bring, *brought*. Бутылка вина — a bottle of wine.' },
    { id: 'fd-delivery-fee', ru: 'Сколько стоит доставка?', ctx: 'заказ по телефону',
      en: ['How much is delivery?', 'How much is the delivery fee?', 'How much is the delivery?', 'How much does delivery cost?', 'How much is the delivery charge?', "What's the delivery fee?"],
      note: 'Услуга вообще — без артикля: *How much is delivery?* Плата за неё — the delivery fee.' },
    { id: 'fd-leave-at-door', ru: 'Оставьте у двери, пожалуйста.', ctx: 'комментарий курьеру',
      en: ['Please leave it at the door.', 'Please leave the order at the door.', 'Leave it at the door, please.', 'Please leave it by the door.', 'Please leave it at my door.', 'Just leave it at the door, please.'],
      note: 'У двери — *at the door*. Глаголу leave нужно дополнение: leave it, а не просто leave.' },

    /* ───── 3. Сложнее: времена, порядок слов, ложные друзья ───── */

    { id: 'fd-sides-with-fish', ru: 'Какой гарнир идёт к рыбе?', ctx: 'вопрос о блюде',
      en: ['What sides come with the fish?', 'What comes with the fish?', 'What side dishes come with the fish?', 'What does the fish come with?', 'What sides does the fish come with?', 'What side comes with the fish?'],
      note: 'Гарнир — *side* или side dish. Garnish — это веточка зелени для украшения.',
      traps: [
        { after: 'what ', start: true, keys: 'g', say: 'Garnish — зелень для украшения. Гарнир — *side* или side dish.' }
      ] },
    { id: 'fd-still-waiting', ru: 'Мы всё ещё ждём наши напитки.', ctx: 'напоминаем официанту',
      en: ["We're still waiting for our drinks.", "We're still waiting for the drinks.", "We still haven't gotten our drinks.", "We still haven't got our drinks.", "We haven't gotten our drinks yet.", "We still don't have our drinks."],
      note: 'Ждать чего-то — wait *for*. Действие длится прямо сейчас, поэтому are waiting.',
      traps: [
        { after: 'waiting ', keys: 'ot', say: 'Ждать чего-то — wait *for*: waiting for our drinks.' },
        { after: 'we still ', start: true, keys: 'w', say: "Прямо сейчас — Continuous: *We're still waiting*." }
      ] },
    { id: 'fd-food-hasnt-come', ru: 'Мою еду ещё не принесли.', ctx: 'долго ждём заказ',
      en: ["My food hasn't come yet.", "My food hasn't arrived yet.", "My order hasn't come yet.", "My order hasn't arrived yet.", "My food still hasn't come.", "My food isn't here yet."],
      note: "С yet — Present Perfect: *hasn't come yet*. Yet ставят в самый конец.",
      traps: [
        { after: ['my food ', 'my order '], start: true, keys: 'd', say: "С yet — Present Perfect: *hasn't come yet*, не didn't come." },
        { after: ["hasn't c", 'has not c'], keys: 'a', say: "Третья форма come — тоже *come*: hasn't come." }
      ] },
    { id: 'fd-change-tables', ru: 'Можно нам пересесть за другой столик?', ctx: 'шумно или дует',
      en: ['Could we move to another table?', 'Can we move to another table?', 'Could we move to a different table?', 'Could we change tables?', 'Can we change tables?', 'Could we switch tables?'],
      note: 'Пересесть — *move to another table*. Или change tables: во множественном, столиков в обмене два.',
      traps: [
        { after: ['change table', 'switch table'], keys: '?', say: 'Меняют один столик на другой, поэтому множественное: *change tables*.' }
      ] },
    { id: 'fd-mistake-on-check', ru: 'Кажется, в счёте ошибка.', ctx: 'проверяем счёт',
      en: ["I think there's a mistake on the check.", "I think there's a mistake in the check.", "I think there's a mistake on the bill.", "I think there's a mistake in the bill.", "There's a mistake on the check.", "It seems there's a mistake on the check."],
      note: "Начинают с *there's*: there's a mistake on the check. В Британии счёт — the bill.",
      traps: [
        { after: 'i think ', start: true, keys: 'i', say: "Не In the check is. Начните с *there's a mistake*." },
        { after: ["there's ", 'there is '], keys: 'me', say: 'Нужен артикль: *a mistake*.' }
      ] },
    { id: 'fd-tip-in-cash', ru: 'Давай оставим чаевые наличными.', ctx: 'платим картой',
      en: ["Let's leave the tip in cash.", "Let's leave a tip in cash.", "Let's tip in cash.", "Let's leave a cash tip."],
      note: 'Наличными — *in cash*, картой — by card. Оставить чаевые — leave a tip.',
      traps: [
        { after: 'tip ', keys: 'b', say: 'Наличными — *in cash*. By говорят про карту: by card.' },
        { after: 'leave the tip', keys: 's', say: 'Чаевые по-английски в единственном числе: *the tip*.' }
      ] },
    { id: 'fd-when-order-arrive', ru: 'Когда привезут мой заказ?', ctx: 'ждём доставку',
      en: ['When will my order arrive?', 'When will my order get here?', 'When will my order be here?', 'When will my order be delivered?', 'When is my order arriving?', 'When will my order come?'],
      note: 'В вопросе will идёт перед подлежащим: *When will my order arrive?*',
      traps: [
        { after: 'when ', start: true, keys: 'mt', say: 'В вопросе will идёт раньше: *When will my order* arrive?' }
      ] },
    { id: 'fd-pickup-order', ru: 'Я хочу сделать заказ на самовывоз.', ctx: 'звонок в ресторан',
      en: ["I'd like to place an order for pickup.", 'I would like to place an order for pickup.', "I'd like to place a pickup order.", "I'd like to order takeout.", "I'd like to place an order to go.", "I'd like to place a takeout order."],
      note: 'Заказ не делают, а размещают: *place an order*. Самовывоз — pickup, еда навынос — takeout.',
      traps: [
        { after: 'like to ', keys: 'md', say: 'Заказ — *place an order*. Не make и не do.' }
      ] },
    { id: 'fd-item-missing', ru: 'В моём заказе не хватает одной позиции.', ctx: 'проблема с доставкой',
      en: ['One item is missing from my order.', "There's an item missing from my order.", 'An item is missing from my order.', 'My order is missing an item.', 'Something is missing from my order.', 'One dish is missing from my order.'],
      note: 'Не хватает — *is missing*. Откуда — missing *from* my order.',
      traps: [
        { after: ['item is missing ', 'item missing ', 'dish is missing ', 'something is missing '], keys: 'i', say: 'Не хватает в заказе — missing *from* my order. Не in.' },
        { after: '', start: true, keys: 'i', say: 'Начните с того, чего не хватает: *One item is missing*.' }
      ] },
    { id: 'fd-wrong-order', ru: 'Мне привезли не тот заказ.', ctx: 'проблема с доставкой',
      en: ['I got the wrong order.', 'I received the wrong order.', 'They brought me the wrong order.', 'They delivered the wrong order.', 'I was given the wrong order.', 'You sent me the wrong order.'],
      note: 'Не тот — *the wrong*: the wrong order, the wrong address. Всегда с the.',
      traps: [
        { after: ['got ', 'received ', 'me ', 'delivered ', 'given '], keys: 'wa', say: 'С wrong — определённый артикль: *the wrong order*.' },
        { after: ['got ', 'received ', 'me ', 'delivered ', 'given '], keys: 'n', say: 'Не тот — *the wrong* order. Not that order не говорят.' }
      ] },
    { id: 'fd-too-salty', ru: 'На мой вкус, слишком солёное.', ctx: 'оцениваем блюдо',
      en: ["It's too salty for my taste.", "It's too salty for me.", 'This is too salty for me.', "It's a bit too salty for me.", "It's too salty for my liking.", 'This is too salty for my taste.'],
      note: 'Солёный — *salty*, а salted значит «посоленный». На мой вкус — for my taste.',
      traps: [
        { after: 'too salt', keys: 'e', say: 'Salted — «посоленный», как salted butter. Пересолено — *too salty*.' },
        { after: 'salty ', keys: 'o', say: 'На мой вкус — *for* my taste. Не on.' }
      ] },
    { id: 'fd-best-burger', ru: 'Это лучший бургер, который я ел в жизни.', ctx: 'хвалим еду',
      en: ["This is the best burger I've ever had.", "It's the best burger I've ever had.", "That's the best burger I've ever had.", "This is the best burger I've ever eaten.", "This is the best burger that I've ever had.", "This is the best burger I've had."],
      note: "После превосходной степени — Present Perfect: the best burger *I've ever had*. Про еду говорят had.",
      traps: [
        { after: 'burger ', keys: 'w', say: "Без which и what: the best burger *I've ever had*." },
        { after: ['this is ', "it's ", "that's ", 'it is ', 'that is '], start: true, keys: 'b', say: 'С превосходной степенью — the: *the best burger*.' }
      ] },
    { id: 'fd-compliments-chef', ru: 'Передайте мои комплименты шеф-повару!', ctx: 'официанту после ужина',
      en: ['My compliments to the chef!', 'Compliments to the chef!', 'Please give my compliments to the chef.', 'Give my compliments to the chef!', 'Please send my compliments to the chef.'],
      note: 'Повар в ресторане — *chef*. Chief — это начальник. Формула: My compliments to the chef!',
      traps: [
        { after: 'the ch', keys: 'i', say: 'Chief — начальник. Повар — *chef*.' }
      ] }
  ]
});
