/* Колода «Путешествия»: аэропорт, отель, транспорт, город. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'travel', title: 'Путешествия', sub: 'аэропорт, отель, транспорт, город',
  phrases: [
    /* ───── 1. Простые: короткие фразы и базовые слова поездки ───── */

    { id: 'tr-window-seat', ru: 'Можно мне место у окна?', ctx: 'регистрация на рейс',
      en: ['Can I have a window seat?', 'Could I have a window seat?', 'Can I get a window seat?', 'Could I get a window seat?', 'May I have a window seat?', 'Can I have a seat by the window?'],
      note: 'Место у окна — *a window seat*, у прохода — an aisle seat. Без предлогов.' },
    { id: 'tr-on-vacation', ru: 'Я здесь в отпуске.', ctx: 'паспортный контроль',
      en: ["I'm here on vacation.", "I'm on vacation.", "I'm here on holiday.", "I'm here for vacation.", "I'm on vacation here.", "I'm on holiday."],
      note: 'В отпуске — *on vacation* (в Британии on holiday). Предлог on, артикля нет.',
      traps: [
        { after: ["i'm here ", 'i am here ', "i'm ", 'i am '], start: true, keys: 'i', say: 'В отпуске — *on* vacation. Не in.' }
      ] },
    { id: 'tr-staying-week', ru: 'Я пробуду здесь неделю.', ctx: 'паспортный контроль',
      en: ["I'm staying for a week.", "I'm staying here for a week.", "I'll be here for a week.", "I'll stay for a week.", "I'm here for a week.", "I'll be staying for a week."],
      note: "Сколько пробудете — *for* a week, for ten days. О планах на поездку говорят I'm staying." },
    { id: 'tr-nothing-to-declare', ru: 'Мне нечего декларировать.', ctx: 'на таможне',
      en: ['I have nothing to declare.', "I don't have anything to declare.", "I've got nothing to declare.", 'Nothing to declare.'],
      note: "Отрицание в английской фразе одно: *have nothing* или *don't have anything*.",
      traps: [
        { after: ["don't have ", 'do not have '], keys: 'n', say: "Два отрицания подряд не ставят: *don't have anything* или *have nothing*." }
      ] },
    { id: 'tr-return-ticket', ru: 'Вот мой обратный билет.', ctx: 'паспортный контроль',
      en: ["Here's my return ticket.", 'Here is my return ticket.', 'This is my return ticket.', "Here's my ticket back.", 'Here is my ticket back.'],
      note: "Обратный билет — *return ticket*. Протягивая что-то, говорят *Here's...*",
      traps: [
        { after: ["here's my ", 'here is my ', 'this is my '], start: true, keys: 'b', say: 'Обратный билет — *return ticket*. Back ticket не говорят.' }
      ] },
    { id: 'tr-seat-taken', ru: 'Это место занято?', ctx: 'в самолёте, в поезде',
      en: ['Is this seat taken?', 'Is this seat occupied?', 'Is anyone sitting here?', 'Is somebody sitting here?', 'Is someone sitting here?', 'Is anybody sitting here?'],
      note: 'Занято — *taken*, свободно — free. Busy говорят про людей и телефонную линию.',
      traps: [
        { after: 'is this seat ', start: true, keys: 'b', say: 'Про место — *taken*. Busy — это про человека или линию.' }
      ] },
    { id: 'tr-blanket', ru: 'Можно мне плед, пожалуйста?', ctx: 'в самолёте',
      en: ['Could I have a blanket, please?', 'Can I have a blanket, please?', 'Could I get a blanket, please?', 'Can I get a blanket, please?', 'May I have a blanket, please?', 'Could I have a blanket?'],
      note: 'Просьба к бортпроводнику: *Could I have...?* Плед и одеяло — одно слово: blanket.',
      traps: [
        { after: ['have a ', 'get a '], keys: 'p', say: 'Plaid — это узор в клетку. Плед — *blanket*.' }
      ] },
    { id: 'tr-what-time-land', ru: 'Во сколько мы приземляемся?', ctx: 'в самолёте',
      en: ['What time do we land?', 'When do we land?', 'What time are we landing?', 'When are we landing?', 'What time do we arrive?', 'What time will we land?'],
      note: 'Приземляться — *land*, взлетать — take off. О расписании можно в Present Simple: do we land.' },
    { id: 'tr-traveling-alone', ru: 'Я путешествую один.', ctx: 'паспортный контроль',
      en: ["I'm traveling alone.", "I'm traveling by myself.", "I'm traveling on my own.", "I'm here alone.", "I'm here by myself.", "I'm here on my own."],
      note: 'Один, без спутников — *alone* или by myself. Lonely значит «одинокий, грустный».',
      traps: [
        { after: ['traveling ', 'here '], keys: 'l', say: 'Lonely — «одинокий, грустный». Без спутников — *alone*.' }
      ] },
    { id: 'tr-walk-there', ru: 'Туда можно дойти пешком?', ctx: 'вопрос прохожему',
      en: ['Can I walk there?', 'Can I get there on foot?', 'Is it within walking distance?', 'Can you walk there?', 'Can I go there on foot?', 'Can we walk there?'],
      note: 'Идти пешком — просто *walk*. Можно и *on foot*. There — без предлога to.',
      traps: [
        { after: 'there ', keys: 'b', say: 'Пешком — *on foot*. А проще одним словом: *walk there*.' },
        { after: ['walk t', 'go t', 'get t'], keys: 'o', say: 'There — без to: *walk there*.' }
      ] },
    { id: 'tr-looking-for-street', ru: 'Я ищу эту улицу.', ctx: 'показываем адрес прохожему',
      en: ["I'm looking for this street.", "I'm trying to find this street.", "I'm looking for that street."],
      note: 'Искать — *look for*. Search — это про интернет и обыск, find — уже «найти».',
      traps: [
        { after: ["i'm ", 'i am '], start: true, keys: 's', say: 'Search — про поиск в интернете. Искать место — *look for*.' },
        { after: 'looking ', keys: 't', say: 'Искать — look *for*: looking for this street.' }
      ] },
    { id: 'tr-lost', ru: 'Кажется, я заблудился.', ctx: 'просим помощи на улице',
      en: ["I think I'm lost.", 'I think I got lost.', "I think I've gotten lost.", "I'm afraid I'm lost.", 'I seem to be lost.'],
      note: "Заблудился — *I'm lost* или I got lost. Lost здесь прилагательное, поэтому с am.",
      traps: [
        { after: 'i think i ', start: true, keys: 'l', say: "I lost — «я потерял». Заблудился — *I'm lost*." }
      ] },
    { id: 'tr-pharmacy-nearby', ru: 'Здесь поблизости есть аптека?', ctx: 'вопрос прохожему',
      en: ['Is there a pharmacy near here?', 'Is there a pharmacy nearby?', 'Is there a pharmacy around here?', 'Is there a drugstore near here?', 'Is there a drugstore nearby?', 'Is there a pharmacy close by?'],
      note: '«Есть ли» — *Is there...?* Near here, nearby и around here значат одно и то же.',
      traps: [
        { after: 'is ', start: true, keys: 'h', say: 'Не Is here. «Есть ли тут» — *Is there* a pharmacy?' }
      ] },
    { id: 'tr-nearest-atm', ru: 'Где ближайший банкомат?', ctx: 'вопрос прохожему',
      en: ['Where is the nearest ATM?', "Where's the nearest ATM?", 'Where is the closest ATM?', "Where's the closest ATM?", 'Where can I find the nearest ATM?', 'Where can I find an ATM?'],
      note: 'С превосходной степенью — the: *the nearest*, the closest, the best. Банкомат — ATM.',
      traps: [
        { after: ['where is ', "where's ", 'find '], keys: 'nc', say: 'С nearest и closest нужен the: *the nearest ATM*.' }
      ] },
    { id: 'tr-take-pictures', ru: 'Здесь можно фотографировать?', ctx: 'в музее',
      en: ['Can I take pictures here?', 'Can I take photos here?', 'Can we take pictures here?', 'Is it okay to take pictures here?', 'Am I allowed to take pictures here?', 'Are we allowed to take photos here?'],
      note: 'Фотографировать — *take pictures* или take photos. Глагол take, не make.',
      traps: [
        { after: ['can i ', 'can we ', 'okay to ', 'allowed to '], keys: 'm', say: 'Фотографии не make, а *take*: take pictures.' }
      ] },
    { id: 'tr-admission', ru: 'Сколько стоит вход?', ctx: 'у кассы музея',
      en: ['How much is admission?', 'How much is the entrance fee?', 'How much is the admission?', 'How much is it to get in?', 'How much does it cost to get in?', 'How much is entry?'],
      note: 'Плата за вход — *admission* или entrance fee. Entrance без fee — это сама дверь.' },
    { id: 'tr-museum-close', ru: 'До скольки работает музей?', ctx: 'у кассы музея',
      en: ['What time does the museum close?', 'When does the museum close?', 'What time do you close?', 'How late is the museum open?', 'Until what time is the museum open?', 'What time does the museum close today?'],
      note: 'Про часы работы — *close* и *open*. Work говорят про людей и технику.',
      traps: [
        { after: 'does the museum ', keys: 'w', say: 'Музей не work. Про часы работы — *close* и *open*.' },
        { after: '', start: true, keys: 't', say: 'Не Till what time. Проще: *What time does the museum close?*' }
      ] },
    { id: 'tr-lost-passport', ru: 'Я потерял паспорт.', ctx: 'в полиции, в посольстве',
      en: ['I lost my passport.', "I've lost my passport."],
      note: 'По-английски вещь всегда чья-то: *my passport*. Формы глагола: lose — lost — lost.',
      traps: [
        { after: 'lost ', keys: 'p', say: 'Нужно my: *lost my passport*.' }
      ] },
    { id: 'tr-missed-flight', ru: 'Я опоздал на рейс.', ctx: 'на стойке авиакомпании',
      en: ['I missed my flight.', "I've missed my flight.", 'I missed the flight.', "I've missed the flight.", 'I missed my plane.'],
      note: 'Опоздал и не улетел — *missed my flight*. Miss — без предлога.',
      traps: [
        { after: ['i ', "i'"], start: true, keys: 'wm', say: 'Late — опаздываю или опоздал, но успел. Не улетел — *I missed my flight*.' }
      ] },
    { id: 'tr-luggage-didnt-arrive', ru: 'Мой багаж не прилетел.', ctx: 'после прилёта',
      en: ["My luggage didn't arrive.", "My luggage hasn't arrived.", "My baggage didn't arrive.", "My bags didn't arrive.", "My suitcase didn't arrive.", "My bag didn't arrive."],
      note: "Про багаж говорят *arrive*. Luggage — единственное число: hasn't arrived, а не haven't." },

    /* ───── 2. Средние: предлоги, ложные друзья, устойчивые связки ───── */

    { id: 'tr-get-to-gate', ru: 'Как пройти к выходу на посадку номер пять?', ctx: 'в аэропорту',
      en: ['How do I get to gate five?', 'How do I get to gate 5?', 'Where is gate five?', "Where's gate five?", 'Where is gate 5?', "Where's gate 5?"],
      note: 'Выход на посадку — *gate*. С номером артикль не нужен: gate five, room 12, platform 3.',
      traps: [
        { after: ['get to ', 'where is ', "where's "], keys: 'e', say: 'Выход на посадку — *gate*. Exit — это выход из здания.' },
        { after: ['get to ', 'where is ', "where's "], keys: 't', say: 'С номером артикль не нужен: *gate five*.' }
      ] },
    { id: 'tr-check-bag', ru: 'Я хочу сдать эту сумку в багаж.', ctx: 'регистрация на рейс',
      en: ["I'd like to check this bag.", 'I would like to check this bag.', "I'd like to check in this bag.", 'I want to check this bag.', 'I need to check this bag.', "I'd like to check this bag in."],
      note: 'Сдать в багаж — *check a bag* или check in a bag. Слово luggage тут не нужно.' },
    { id: 'tr-check-in-flight', ru: 'Здесь можно зарегистрироваться на рейс?', ctx: 'в аэропорту',
      en: ['Can I check in for my flight here?', 'Could I check in for my flight here?', 'Can I check in here for my flight?', 'Can I check in for the flight here?', 'Is this where I check in for my flight?', 'Can I check in here?'],
      note: 'Регистрация на рейс — *check in*, как и в отеле. На рейс — check in *for* my flight.',
      traps: [
        { after: ['can i ', 'could i '], start: true, keys: 'r', say: 'На рейс не register, а *check in*.' },
        { after: 'check in ', keys: 'ot', say: 'На рейс — check in *for* my flight. Не on и не to.' }
      ] },
    { id: 'tr-carry-on', ru: 'Эту сумку можно взять в ручную кладь?', ctx: 'регистрация на рейс',
      en: ['Can I take this bag as a carry-on?', 'Can I bring this bag as a carry-on?', 'Could I take this bag as a carry-on?', 'Can I take this bag as hand luggage?', 'Can I take this bag on board?', 'Can I take this bag on the plane?'],
      note: 'Ручная кладь — *a carry-on* (в Британии hand luggage). Взять как ручную кладь — *as* a carry-on.' },
    { id: 'tr-boarding-start', ru: 'Во сколько начинается посадка?', ctx: 'в аэропорту',
      en: ['What time does boarding start?', 'When does boarding start?', 'What time does boarding begin?', 'When does boarding begin?', 'What time is boarding?', 'When is boarding?'],
      note: 'Посадка в самолёт — *boarding*. Landing — это приземление. В вопросе нужен does.',
      traps: [
        { after: ['what time does ', 'when does ', 'what time is ', 'when is '], start: true, keys: 'l', say: 'Landing — это приземление. Посадка в самолёт — *boarding*.' },
        { after: ['what time ', 'when '], start: true, keys: 'b', say: 'В вопросе нужен does: *What time does boarding start?*' }
      ] },
    { id: 'tr-connecting-flight', ru: 'У меня стыковочный рейс.', ctx: 'паспортный контроль',
      en: ['I have a connecting flight.', "I've got a connecting flight.", 'I have a connection.', "I'm catching a connecting flight."],
      note: 'Стыковочный рейс — *a connecting flight* или просто a connection. Ожидание между рейсами — layover.' },
    { id: 'tr-staying-hotel', ru: 'Я остановился в отеле в центре.', ctx: 'паспортный контроль',
      en: ["I'm staying at a hotel downtown.", "I'm staying in a hotel downtown.", "I'm staying at a hotel in the city center.", "I'm staying in a hotel in the city center.", "I'll be staying at a hotel downtown.", "I'm staying at a downtown hotel."],
      note: "Остановиться в отеле — *stay at a hotel*. О текущей поездке — Continuous: I'm staying.",
      traps: [
        { after: 'i ', start: true, keys: 's', say: "Не I stay и не I stopped. О текущей поездке — *I'm staying*." },
        { after: ['staying at ', 'staying in '], keys: 'h', say: 'Нужен артикль: *a hotel*.' }
      ] },
    { id: 'tr-turn-on-meter', ru: 'Включите счётчик, пожалуйста.', ctx: 'в такси',
      en: ['Could you turn on the meter, please?', 'Can you turn on the meter, please?', 'Could you turn the meter on, please?', 'Please turn on the meter.', 'Can you turn the meter on, please?', 'Could you use the meter, please?'],
      note: 'Включить прибор — *turn on*. Счётчик в такси — *meter*, а counter — это стойка или прилавок.',
      traps: [
        { after: ['could you ', 'can you ', 'please '], start: true, keys: 'i', say: 'Include — «включить в состав». Включить прибор — *turn on*.' },
        { after: ['turn on the ', 'turn the ', 'use the '], keys: 'c', say: 'Счётчик в такси — *meter*. Counter — это стойка или прилавок.' }
      ] },
    { id: 'tr-my-seat', ru: 'Простите, кажется, это моё место.', ctx: 'в самолёте',
      en: ['Excuse me, I think this is my seat.', "Excuse me, I think that's my seat.", 'Sorry, I think this is my seat.', "Sorry, I think that's my seat.", "Excuse me, I think you're in my seat.", "Sorry, I think you're in my seat."],
      note: 'Место, где сидят, — *seat*. *I think* смягчает фразу: вы не обвиняете, а уточняете.',
      traps: [
        { after: ['is my ', "that's my ", 'in my '], keys: 'p', say: 'Место в самолёте — *seat*. Place — это место вообще.' }
      ] },
    { id: 'tr-vegetarian-meal', ru: 'Я заказывал вегетарианское питание.', ctx: 'в самолёте',
      en: ['I ordered a vegetarian meal.', 'I ordered the vegetarian meal.', 'I requested a vegetarian meal.', "I've ordered a vegetarian meal.", 'I booked a vegetarian meal.', 'I pre-ordered a vegetarian meal.'],
      note: 'Порция еды в самолёте — *a meal*. Food — еда вообще, её не считают.',
      traps: [
        { after: 'vegetarian ', keys: 'f', say: 'Порцию еды называют *meal*. Food не считают: a food не говорят.' }
      ] },
    { id: 'tr-reservation-under', ru: 'У меня бронь на фамилию Иванов.', ctx: 'заселение в отель',
      en: ['I have a reservation under Ivanov.', 'I have a reservation under the name Ivanov.', 'I have a booking under Ivanov.', 'I have a booking under the name Ivanov.', 'I have a reservation in the name of Ivanov.', "There's a reservation under Ivanov."],
      note: 'Бронь на фамилию — reservation *under* Ivanov или under the name Ivanov.',
      traps: [
        { after: ['reservation ', 'booking '], keys: 'o', say: 'На фамилию — *under* Ivanov. Не on.' }
      ] },
    { id: 'tr-breakfast-included', ru: 'Завтрак включён в стоимость?', ctx: 'заселение в отель',
      en: ['Is breakfast included?', 'Is breakfast included in the price?', 'Does it include breakfast?', 'Does the price include breakfast?', 'Is breakfast included in the rate?', 'Does that include breakfast?'],
      note: 'Включён в стоимость — *included in* the price. Чаще спрашивают коротко: Is breakfast included?',
      traps: [
        { after: ['included ', 'included in'], keys: 't', say: 'Включён в стоимость — included *in* the price. Не to и не into.' }
      ] },
    { id: 'tr-no-hot-water', ru: 'В номере нет горячей воды.', ctx: 'проблема в номере',
      en: ["There's no hot water in my room.", "There's no hot water in the room.", "There isn't any hot water in my room.", "There's no hot water in our room.", "There's no hot water."],
      note: "«Где-то нет чего-то» — *There's no* ... in my room. Место ставят в конец.",
      traps: [
        { after: '', start: true, keys: 'i', say: "Начните с *There's no*, а место поставьте в конец: in my room." },
        { after: "there's no", start: true, keys: 't', say: "Перед существительным — *no*: there's no hot water. Или there isn't any." }
      ] },
    { id: 'tr-call-taxi', ru: 'Вы не могли бы вызвать мне такси?', ctx: 'на ресепшене',
      en: ['Could you call me a taxi?', 'Could you call a taxi for me?', 'Can you call me a taxi?', 'Could you call me a cab?', 'Could you get me a taxi?', 'Could you call me a taxi, please?'],
      note: 'Вызвать кому-то такси — *call me a taxi*. Кому — сразу после call.' },
    { id: 'tr-take-me-address', ru: 'Отвезите меня по этому адресу, пожалуйста.', ctx: 'в такси',
      en: ['Could you take me to this address, please?', 'Can you take me to this address, please?', 'Could you take me to this address?', 'Take me to this address, please.', 'Can you take me to this address?', 'I need to go to this address, please.'],
      note: 'Отвезти куда-то — *take me to*. По адресу — тоже to: to this address.',
      traps: [
        { after: 'take me ', keys: 'ob', say: 'По этому адресу — *to* this address. Не on и не by.' }
      ] },
    { id: 'tr-next-stop', ru: 'Я выхожу на следующей остановке.', ctx: 'в автобусе, в метро',
      en: ["I'm getting off at the next stop.", 'I get off at the next stop.', "I'll get off at the next stop.", "I'm getting off at the next one.", 'I need to get off at the next stop.'],
      note: 'Из автобуса и поезда — *get off*, из машины — get out. На остановке — *at* the stop.',
      traps: [
        { after: ['getting o', 'get o'], keys: 'u', say: 'Из автобуса и метро — *get off*. Get out — из машины.' },
        { after: 'off ', keys: 'oi', say: 'На остановке — *at* the next stop. Не on и не in.' }
      ] },
    { id: 'tr-one-way-ticket', ru: 'Один билет до Вены в одну сторону, пожалуйста.', ctx: 'в кассе вокзала',
      en: ['A one-way ticket to Vienna, please.', 'One one-way ticket to Vienna, please.', 'A single ticket to Vienna, please.', 'One-way ticket to Vienna, please.', "I'd like a one-way ticket to Vienna, please.", 'Can I have a one-way ticket to Vienna, please?'],
      note: 'В одну сторону — *one-way*, туда и обратно — round-trip. Билет до — ticket *to*.',
      traps: [
        { after: ['ticket ', 'ticket t'], keys: 'ui', say: 'Билет до города — ticket *to* Vienna. Не till и не until.' }
      ] },
    { id: 'tr-change-trains', ru: 'Мне нужно делать пересадку?', ctx: 'покупаем билет на поезд',
      en: ['Do I need to change trains?', 'Do I have to change trains?', 'Do I need to transfer?', 'Do I have to transfer?', 'Do I need to change?', 'Will I have to change trains?'],
      note: 'Пересесть — *change trains*: поездов два, поэтому множественное число. Или одним словом: transfer.',
      traps: [
        { after: 'change train', keys: '?', say: 'Поездов два, поэтому множественное число: *change trains*.' }
      ] },
    { id: 'tr-beach-far', ru: 'Пляж далеко от отеля?', ctx: 'вопрос на ресепшене',
      en: ['Is the beach far from the hotel?', 'How far is the beach from the hotel?', 'Is the beach far from our hotel?', 'Is the beach a long way from the hotel?', 'Is the beach far away from the hotel?'],
      note: 'Далеко от — *far from*. Пляж и отель конкретные, поэтому оба с the.',
      traps: [
        { after: ['far from ', 'beach from ', 'away from ', 'way from '], keys: 'h', say: 'Нужен артикль: *the hotel*.' }
      ] },
    { id: 'tr-show-on-map', ru: 'Можете показать на карте?', ctx: 'вопрос прохожему',
      en: ['Could you show me on the map?', 'Can you show me on the map?', 'Could you show me on the map, please?', 'Can you show me on the map, please?', 'Could you show it to me on the map?', 'Could you show me where it is on the map?'],
      note: 'Кому — сразу после show и без to: *show me*. На карте — on the map.',
      traps: [
        { after: 'show ', keys: 't', say: 'Кому — сразу после show, без to: *show me*.' }
      ] },
    { id: 'tr-rent-car', ru: 'Я хотел бы арендовать машину на три дня.', ctx: 'прокат автомобилей',
      en: ["I'd like to rent a car for three days.", 'I would like to rent a car for three days.', "I'd like to rent a car for 3 days.", 'I want to rent a car for three days.', "I'd like to hire a car for three days.", 'I need to rent a car for three days.'],
      note: 'На три дня — *for* three days. Арендовать машину — rent a car (в Британии hire).',
      traps: [
        { after: ['rent a car ', 'hire a car '], keys: 'o', say: 'На три дня — *for* three days. Не on.' }
      ] },
    { id: 'tr-automatic-car', ru: 'У вас есть машины с автоматической коробкой?', ctx: 'прокат автомобилей',
      en: ['Do you have any automatic cars?', 'Do you have automatic cars?', 'Do you have any automatics?', 'Do you have an automatic?', 'Do you have any cars with automatic transmission?', 'Do you have cars with an automatic transmission?'],
      note: 'Машина с автоматом — *an automatic*, с механикой — a manual или a stick shift.',
      traps: [
        { after: ['do you have ', 'do you have any '], start: true, keys: 'm', say: 'Автомобиль — *car*. Machine — это станок или механизм.' }
      ] },
    { id: 'tr-price-include-insurance', ru: 'Страховка входит в стоимость?', ctx: 'прокат автомобилей',
      en: ['Does the price include insurance?', 'Is insurance included in the price?', 'Is insurance included?', 'Does it include insurance?', 'Does that include insurance?', 'Is the insurance included?'],
      note: 'После does глагол без -s: *Does the price include*. Insurance не считают, a перед ним не ставят.',
      traps: [
        { after: ['does the price include', 'does it include', 'does that include'], start: true, keys: 's', say: 'После does — без -s: *Does the price include*.' }
      ] },
    { id: 'tr-student-discount', ru: 'У вас есть скидки для студентов?', ctx: 'у кассы музея',
      en: ['Do you have a student discount?', 'Do you have student discounts?', 'Is there a student discount?', 'Do you offer a student discount?', 'Do you have a discount for students?', 'Do you have discounts for students?'],
      note: 'Скидка — *discount*, sale — распродажа. Student discount — два слова подряд, без предлога.' },
    { id: 'tr-tours-in-english', ru: 'Есть экскурсии на английском?', ctx: 'в музее, в турбюро',
      en: ['Are there any tours in English?', 'Do you have any tours in English?', 'Are there tours in English?', 'Do you have tours in English?', 'Are there any guided tours in English?', 'Is there a tour in English?'],
      note: 'Экскурсия с гидом — *tour*. На английском — *in* English.',
      traps: [
        { after: ['there any ', 'are there ', 'have any ', 'do you have '], keys: 'e', say: 'Экскурсия с гидом — *tour*. Excursion — это выезд, поездка за город.' },
        { after: ['tours ', 'tour '], keys: 'o', say: 'На английском — *in* English. Не on.' }
      ] },
    { id: 'tr-tour-how-long', ru: 'Сколько длится экскурсия?', ctx: 'покупаем экскурсию',
      en: ['How long does the tour last?', 'How long is the tour?', 'How long does the tour take?', 'How long will the tour last?', 'How long will the tour take?'],
      note: 'Длиться — *last* или take. После does глагол без -s: does the tour last.' },
    { id: 'tr-left-phone-taxi', ru: 'Я забыл телефон в такси.', ctx: 'потеряли вещь',
      en: ['I left my phone in the taxi.', 'I left my phone in a taxi.', 'I left my phone in the cab.', "I've left my phone in the taxi.", 'I left my phone in a cab.', "I've left my phone in a taxi."],
      note: 'Забыл вещь где-то — *left*: I left my phone in the taxi. Forgot — когда место не названо.',
      traps: [
        { after: ['i ', "i've ", 'i have '], start: true, keys: 'f', say: 'С местом — *left*: I left my phone in the taxi. Forgot — когда место не названо.' }
      ] },

    /* ───── 3. Сложнее: вежливые конструкции, порядок слов, пассив и связки ───── */

    { id: 'tr-switch-seats', ru: 'Вы не против поменяться местами?', ctx: 'в самолёте, соседу',
      en: ['Would you mind switching seats?', 'Would you mind switching seats with me?', 'Would you mind swapping seats?', 'Would you mind changing seats?', 'Do you mind switching seats?', 'Could we switch seats?'],
      note: 'Мест два, поэтому *seats*. После mind — форма на -ing: switching.',
      traps: [
        { after: 'you mind ', keys: 't', say: 'После mind — форма на -ing: *Would you mind switching*. Без to.' },
        { after: ['switching seat', 'swapping seat', 'changing seat', 'switch seat'], keys: '? ', say: 'Мест два, поэтому множественное число: *switch seats*.' }
      ] },
    { id: 'tr-ac-not-working', ru: 'В моём номере не работает кондиционер.', ctx: 'проблема в номере',
      en: ["The air conditioning in my room isn't working.", "The air conditioner in my room isn't working.", "The AC in my room isn't working.", "The air conditioning in my room doesn't work.", "The air conditioning isn't working in my room.", "The AC in my room doesn't work."],
      note: 'Кондиционер — *air conditioning* или AC. Conditioner — это бальзам для волос.',
      traps: [
        { after: 'the ', start: true, keys: 'c', say: 'Conditioner — бальзам для волос. Кондиционер — *air conditioning* или AC.' }
      ] },
    { id: 'tr-leave-luggage', ru: 'Можно оставить у вас багаж до вечера?', ctx: 'выезд из отеля',
      en: ['Can I leave my luggage here until this evening?', 'Could I leave my luggage here until this evening?', 'Can I leave my bags here until this evening?', 'Could I leave my bags here until this evening?', 'Can I leave my luggage here until tonight?', 'Can I leave my luggage here till this evening?'],
      note: '*Luggage* не считают: без -s и без a. До вечера — *until* this evening.',
      traps: [
        { after: 'my luggage', keys: 's', say: 'Luggage не считают: без -s. Или скажите my bags.' }
      ] },
    { id: 'tr-late-checkout', ru: 'Можно ли выехать на час позже?', ctx: 'просьба на ресепшене',
      en: ['Would it be possible to check out an hour later?', 'Is it possible to check out an hour later?', 'Could I check out an hour later?', 'Can I check out an hour later?', 'Would it be possible to check out one hour later?', 'Could I check out one hour later?'],
      note: '*Would it be possible to...?* — очень вежливая просьба. На час позже — an hour later, без предлога.',
      traps: [
        { after: 'possible ', keys: 'c', say: 'После possible — глагол с to: *possible to check out*.' },
        { after: 'check out on', keys: ' ', say: 'На час позже — *an hour later*, без предлога.' }
      ] },
    { id: 'tr-mistake-bill', ru: 'Кажется, в моём счёте ошибка.', ctx: 'выезд из отеля',
      en: ["I think there's a mistake on my bill.", "I think there's a mistake in my bill.", "I think there's an error on my bill.", "I think there's a mistake on the bill.", "There's a mistake on my bill.", "I think there's a mistake in the bill."],
      note: 'Счёт в отеле — *bill*. Check — счёт в ресторане, account — в банке. I think смягчает претензию.',
      traps: [
        { after: ['on my ', 'in my ', 'on the ', 'in the '], keys: 'ac', say: 'Счёт в отеле — *bill*. Account — счёт в банке, check — в ресторане.' }
      ] },
    { id: 'tr-which-platform', ru: 'С какой платформы отправляется поезд?', ctx: 'на вокзале',
      en: ['Which platform does the train leave from?', 'What platform does the train leave from?', 'Which platform does the train depart from?', 'Which platform is the train leaving from?', 'Which track does the train leave from?', 'What platform does the train depart from?'],
      note: 'Предлог уходит в конец: *Which platform ... from?* В США платформу часто называют track.',
      traps: [
        { after: '', start: true, keys: 'f', say: 'Не From which. Начните с *Which platform*, а from поставьте в конец.' }
      ] },
    { id: 'tr-return-car-city', ru: 'Можно вернуть машину в другом городе?', ctx: 'прокат автомобилей',
      en: ['Can I return the car in a different city?', 'Can I return the car in another city?', 'Could I return the car in a different city?', 'Can I drop the car off in a different city?', 'Can I drop off the car in another city?', 'Can I drop the car off in another city?'],
      note: 'Return уже значит «вернуть», back не нужен. Другой город — *another* city или a different city.',
      traps: [
        { after: ['can i return ', 'could i return '], start: true, keys: 'b', say: 'Return уже значит «вернуть»: back лишний.' },
        { after: ['car in ', 'off in '], keys: 'o', say: 'С единственным числом — *another* city. Other — только с множественным.' }
      ] },
    { id: 'tr-full-tank', ru: 'Машину нужно вернуть с полным баком?', ctx: 'прокат автомобилей',
      en: ['Do I need to return the car with a full tank?', 'Do I have to return the car with a full tank?', 'Should I return the car with a full tank?', 'Do I need to return it with a full tank?', 'Do I need to bring the car back with a full tank?', 'Do I have to return it with a full tank?'],
      note: 'Полный бак — *a full tank*. *Do I need to...?* — «мне нужно...?»' },
    { id: 'tr-scratch', ru: 'Эта царапина уже была.', ctx: 'осмотр машины в прокате',
      en: ['This scratch was already there.', 'That scratch was already there.', 'This scratch was already here.', 'The scratch was already there.', 'This scratch was there before.', 'This scratch was here before.'],
      note: 'Already ставят после was: *was already there*. Scratch — царапина, dent — вмятина.',
      traps: [
        { after: ['this scratch ', 'that scratch ', 'the scratch '], start: true, keys: 'a', say: 'Already ставят после was: *was already there*.' }
      ] },
    { id: 'tr-report-lost-luggage', ru: 'Где можно заявить о пропаже багажа?', ctx: 'в аэропорту',
      en: ['Where can I report lost luggage?', 'Where can I report my lost luggage?', 'Where do I report lost luggage?', 'Where can I report a lost bag?', 'Where can I report missing luggage?', 'Where do I report a lost bag?'],
      note: 'Report — без предлога: *report lost luggage*, report a theft. About не нужен.',
      traps: [
        { after: 'report a', keys: 'b', say: 'Report — без about: *report lost luggage*.' }
      ] },
    { id: 'tr-put-on-next-flight', ru: 'Можете посадить меня на следующий рейс?', ctx: 'опоздали на рейс',
      en: ['Can you put me on the next flight?', 'Could you put me on the next flight?', 'Can you rebook me on the next flight?', 'Could you rebook me on the next flight?', 'Can you book me on the next flight?', 'Can I get on the next flight?'],
      note: 'На рейс — *on* the flight: put me on, book me on. Next здесь с the.',
      traps: [
        { after: ['put me ', 'book me '], keys: 'it', say: 'На рейс — *on* the next flight. Не in и не to.' }
      ] },
    { id: 'tr-missed-connection', ru: 'Я не успел на пересадку из-за задержки.', ctx: 'на стойке авиакомпании',
      en: ['I missed my connection because of the delay.', 'I missed my connection because of a delay.', 'I missed my connecting flight because of the delay.', 'I missed my connection due to the delay.', 'I missed my connecting flight because of a delay.', 'I missed my connection because of a delayed flight.'],
      note: 'Перед существительным — *because of*: because of the delay. Просто because — перед целой фразой.',
      traps: [
        { after: 'because ', keys: 'ta', say: 'Перед существительным — *because of* the delay.' }
      ] },
    { id: 'tr-supposed-to-leave', ru: 'Самолёт должен был вылететь час назад.', ctx: 'рейс задерживают',
      en: ['The plane was supposed to leave an hour ago.', 'The flight was supposed to leave an hour ago.', 'The plane was supposed to take off an hour ago.', 'The plane was supposed to depart an hour ago.', 'The flight was supposed to depart an hour ago.', 'The plane should have left an hour ago.'],
      note: 'Должен был по плану — *was supposed to*. Час назад — an hour *ago*.',
      traps: [
        { after: ['the plane ', 'the flight '], start: true, keys: 'mh', say: 'По плану — *was supposed to*. У must нет прошедшего, а had to — «пришлось».' },
        { after: 'an hour ', keys: 'b', say: 'Час назад — an hour *ago*. Before — «до чего-то».' }
      ] }
  ]
});
