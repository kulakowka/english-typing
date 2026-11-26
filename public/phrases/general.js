/* Колода «Общие»: быт, поездки, общение. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'general', title: 'Общие', sub: 'быт, поездки, общение',
  phrases: [
    /* ───── 1. Простые: короткие фразы и базовые шаблоны ───── */

    { id: 'g-nice-to-meet', ru: 'Приятно познакомиться.', ctx: 'знакомство',
      en: ['Nice to meet you.', "It's nice to meet you.", 'Pleased to meet you.', 'Good to meet you.', 'Glad to meet you.'],
      note: 'При знакомстве — *meet*. Когда видитесь снова, говорят уже Nice to see you.' },
    { id: 'g-where-from', ru: 'Откуда ты?', ctx: 'знакомство',
      en: ['Where are you from?', 'Where do you come from?'],
      note: 'Предлог уходит в конец: *Where ... from?* С from вопрос не начинают.',
      traps: [
        { after: '', start: true, keys: 'f', say: 'Не From where. Начните с *Where*, а from поставьте в конец.' }
      ] },
    { id: 'g-hows-it-going', ru: 'Как дела?', ctx: 'приветствие, неформально',
      en: ["How's it going?", 'How is it going?', 'How are you?', 'How are you doing?', 'How are things?'],
      note: "*How's it going?* — обычное дружеское приветствие. Отвечают коротко: Good, thanks." },
    { id: 'g-what-do-you-do', ru: 'Чем ты занимаешься?', ctx: 'знакомство, про работу',
      en: ['What do you do?', 'What do you do for a living?', 'What do you do for work?'],
      note: 'Про профессию спрашивают *What do you do?* Это Present Simple: дело постоянное.',
      traps: [
        { after: 'what ', start: true, keys: 'a', say: 'What are you doing — «что делаешь сейчас». Про работу: *What do you do?*' }
      ] },
    { id: 'g-could-you-help', ru: 'Не могли бы вы мне помочь?', ctx: 'вежливая просьба',
      en: ['Could you help me, please?', 'Could you help me?', 'Can you help me, please?', 'Can you help me?', 'Could you please help me?', 'Can you please help me?'],
      note: '*Could you...?* мягче, чем Can you. После help сразу кого: *help me*, без to.' },
    { id: 'g-thanks-for-helping', ru: 'Спасибо, что помог.', ctx: 'благодарность',
      en: ['Thanks for helping me.', 'Thank you for helping me.', 'Thanks for your help.', 'Thank you for your help.', 'Thanks for the help.'],
      note: '*Thanks for* + форма на -ing: thanks for helping, for coming, for waiting.',
      traps: [
        { after: ['thanks ', 'thank you '], start: true, keys: 't', say: 'Не thanks that. *Thanks for* + существительное или -ing.' }
      ] },
    { id: 'g-meet-on-friday', ru: 'Давай встретимся в пятницу.', ctx: 'договариваемся о встрече',
      en: ["Let's meet on Friday.", "Let's meet up on Friday.", "Let's get together on Friday.", "Let's meet Friday."],
      note: 'Дни недели — с *on*: on Friday. Время — с at: at seven.',
      traps: [
        { after: ['meet ', 'meet up ', 'together '], keys: 'ia', say: 'С днями недели — *on*: on Friday. Не in и не at.' }
      ] },
    { id: 'g-running-late', ru: 'Я опаздываю на десять минут.', ctx: 'сообщение перед встречей',
      en: ["I'm running ten minutes late.", "I'm ten minutes late.", "I'll be ten minutes late.", "I'm running 10 minutes late.", "I'm 10 minutes late.", "I'll be 10 minutes late."],
      note: 'Сначала сколько, потом late: *ten minutes late*. Running late — «опаздываю прямо сейчас».',
      traps: [
        { after: ["i'm ", 'i am '], start: true, keys: 'l', say: 'Порядок другой: сначала сколько, потом late. *Ten minutes late*.' }
      ] },
    { id: 'g-there-in-fifteen', ru: 'Буду на месте через пятнадцать минут.', ctx: 'сообщение перед встречей',
      en: ["I'll be there in fifteen minutes.", "I'll be there in 15 minutes.", "I'll get there in fifteen minutes.", "I'll get there in 15 minutes.", "I'll arrive in fifteen minutes.", "I'll arrive in 15 minutes."],
      note: '«Через» о времени — *in*: in fifteen minutes, in an hour. After так не используют.',
      traps: [
        { after: ['be there ', 'get there ', 'arrive '], keys: 'a', say: 'Через пятнадцать минут = *in* fifteen minutes. Не after.' }
      ] },
    { id: 'g-check-in', ru: 'Я бы хотел заселиться.', ctx: 'в отеле',
      en: ["I'd like to check in.", 'I would like to check in.', "I'd like to check in, please.", 'I would like to check in, please.', 'I want to check in.'],
      note: "*I'd like to* вежливее, чем I want. *Check in* — заселиться, check out — выехать." },
    { id: 'g-booked-room', ru: 'Я забронировал номер на двоих.', ctx: 'в отеле',
      en: ['I booked a room for two.', "I've booked a room for two.", 'I reserved a room for two.', "I've reserved a room for two.", 'I have a reservation for two.', 'I booked a room for two people.'],
      note: 'Номер в отеле — *a room*, не number. На двоих — *for two*.',
      traps: [
        { after: ['booked ', 'reserved '], keys: 'rn', say: 'Нужен артикль: *a room*.' },
        { after: ['booked a ', 'reserved a '], keys: 'n', say: 'Номер в отеле — *room*. Number — это цифры.' }
      ] },
    { id: 'g-get-to-airport', ru: 'Как добраться до аэропорта?', ctx: 'вопрос прохожему',
      en: ['How do I get to the airport?', 'How can I get to the airport?', 'How do you get to the airport?', "What's the best way to get to the airport?"],
      note: 'Добраться до — *get to*. Вопрос строят с do: *How do I get...?*',
      traps: [
        { after: 'how ', start: true, keys: 't', say: 'How to get — не вопрос, а заголовок. Нужно *How do I get*.' },
        { after: 'get to ', keys: 'a', say: 'Нужен артикль: *the airport*.' }
      ] },
    { id: 'g-pick-up-luggage', ru: 'Где я могу забрать багаж?', ctx: 'в аэропорту',
      en: ['Where can I pick up my luggage?', 'Where can I get my luggage?', 'Where can I collect my luggage?', 'Where can I pick up my baggage?', 'Where do I pick up my luggage?', 'Where can I pick up my bags?'],
      note: 'В вопросе can стоит перед I: *Where can I*. Luggage — всегда в единственном числе.',
      traps: [
        { after: 'where ', start: true, keys: 'i', say: 'В вопросе порядок меняется: *Where can I*, а не Where I can.' }
      ] },
    { id: 'g-table-for-two', ru: 'Столик на двоих, пожалуйста.', ctx: 'в ресторане',
      en: ['A table for two, please.', 'Table for two, please.', 'Can we have a table for two, please?', 'Could we have a table for two, please?', "We'd like a table for two, please."],
      note: 'На двоих — *for two*. Тот же шаблон: a room for two, a table for four.',
      traps: [
        { after: 'table ', keys: 'o', say: 'На двоих — *for* two. Не on.' }
      ] },
    { id: 'g-have-a-coffee', ru: 'Мне кофе, пожалуйста.', ctx: 'заказ в кафе',
      en: ["I'll have a coffee, please.", "I'd like a coffee, please.", 'I would like a coffee, please.', 'Can I have a coffee, please?', 'Can I get a coffee, please?', 'A coffee, please.'],
      note: "Заказ в кафе: *I'll have...* или *Can I have...?* I want и Give me звучат грубо.",
      traps: [
        { after: '', start: true, keys: 'g', say: "Give me звучит как приказ. В кафе говорят *I'll have* или *Can I have*." }
      ] },
    { id: 'g-check-please', ru: 'Можно счёт, пожалуйста?', ctx: 'в ресторане',
      en: ['Can I have the check, please?', 'Could I have the check, please?', 'Can we have the check, please?', 'Could we have the check, please?', 'Can I get the check, please?', 'Can I have the bill, please?'],
      note: 'В США счёт в кафе — *the check*, в Британии — the bill. Артикль the обязателен.',
      traps: [
        { after: ['have ', 'get '], keys: 'cb', say: 'Нужен артикль: *the check*.' }
      ] },
    { id: 'g-how-much', ru: 'Сколько это стоит?', ctx: 'в магазине',
      en: ['How much is it?', 'How much is this?', 'How much is that?', 'How much does it cost?', 'How much does this cost?', 'How much does that cost?'],
      note: 'Цена: *How much is it?* Если с cost, нужен does: How much does it cost?',
      traps: [
        { after: 'how much ', start: true, keys: 'c', say: 'Не How much cost. *How much is it?* или *How much does it cost?*' },
        { after: 'how much i', start: true, keys: 't', say: 'Не How much it costs. В вопросе глагол идёт раньше: *How much is it?*' }
      ] },
    { id: 'g-pay-by-card', ru: 'Можно оплатить картой?', ctx: 'на кассе',
      en: ['Can I pay by card?', 'Could I pay by card?', 'Can I pay with a card?', 'Do you take cards?', 'Do you accept cards?'],
      note: 'Чем платят: *by card*, но *in cash*. Do you take cards? — тоже обычный вопрос.' },
    { id: 'g-not-feeling-well', ru: 'Я плохо себя чувствую.', ctx: 'самочувствие',
      en: ["I don't feel well.", "I'm not feeling well.", 'I feel sick.', "I don't feel good.", "I'm not feeling good.", "I'm not feeling great."],
      note: 'Feel — без «себя»: *I feel well*, I feel tired. Слово myself здесь лишнее.',
      traps: [
        { after: ['feel ', 'feeling '], keys: 'm', say: "Без myself: просто *I don't feel well*." }
      ] },
    { id: 'g-headache', ru: 'У меня болит голова.', ctx: 'самочувствие',
      en: ['I have a headache.', "I've got a headache.", 'My head hurts.'],
      note: 'Боль и болезни — с артиклем a: *have a headache*, a cold, a fever.',
      traps: [
        { after: ['i have ', 'got '], keys: 'h', say: 'Нужен артикль: *a headache*.' }
      ] },
    { id: 'g-agree', ru: 'Я с тобой согласен.', ctx: 'согласие',
      en: ['I agree with you.', 'I agree.'],
      note: 'Agree — глагол, поэтому без am: *I agree*. Согласен с кем-то — agree *with*.',
      traps: [
        { after: 'i', start: true, keys: "'", say: 'Agree — глагол: *I agree*, без am.' },
        { after: 'i a', start: true, keys: 'm', say: 'Agree — глагол: *I agree*, без am.' }
      ] },
    { id: 'g-good-idea', ru: 'По-моему, это хорошая идея.', ctx: 'мнение',
      en: ["I think it's a good idea.", "I think that's a good idea.", 'I think this is a good idea.', "In my opinion, it's a good idea.", "In my opinion, that's a good idea."],
      note: 'Мнение проще всего начать с *I think*. Если с opinion, то только *in my opinion*.',
      traps: [
        { after: '', start: true, keys: 'o', say: 'Не on my opinion. *I think* или *in my opinion*.' },
        { after: ["it's ", "that's ", 'this is ', 'it is ', 'that is '], keys: 'g', say: 'Нужен артикль: *a good idea*.' }
      ] },
    { id: 'g-on-my-way', ru: 'Я уже еду.', ctx: 'сообщение перед встречей',
      en: ["I'm on my way.", "I'm already on my way.", 'On my way.', "I'm coming."],
      note: "*I'm on my way* — «я уже еду, иду». В сообщениях пишут и коротко: On my way." },
    { id: 'g-send-address', ru: 'Можешь прислать мне адрес?', ctx: 'сообщение другу',
      en: ['Can you send me the address?', 'Could you send me the address?', 'Can you text me the address?', 'Could you text me the address?', 'Can you send me the address, please?', 'Will you send me the address?'],
      note: 'Кому — сразу после глагола и без to: *send me*. Адрес конкретный: *the address*.',
      traps: [
        { after: ['send me ', 'text me '], keys: 'a', say: 'Нужен артикль: *the address*.' },
        { after: ['you send ', 'you text '], keys: 't', say: 'Без to: *send me* the address.' }
      ] },
    { id: 'g-did-you-get', ru: 'Ты получил моё сообщение?', ctx: 'переписка',
      en: ['Did you get my message?', 'Did you receive my message?', 'Did you get my text?', 'Did you see my message?', 'Have you received my message?'],
      note: 'После *did* глагол в первой форме: Did you get. Прошедшее время уже сидит в did.',
      traps: [
        { after: 'did you g', start: true, keys: 'o', say: 'После did — первая форма: *Did you get*, не got.' }
      ] },
    { id: 'g-can-you-hear', ru: 'Ты меня слышишь?', ctx: 'начало звонка',
      en: ['Can you hear me?', 'Can you hear me okay?', 'Can you hear me all right?'],
      note: 'С hear обычно ставят can: *Can you hear me?* Hear — слышать, listen — слушать.' },
    { id: 'g-hold-on', ru: 'Подожди секунду, пожалуйста.', ctx: 'разговор по телефону',
      en: ['Hold on a second, please.', 'Just a second, please.', 'One second, please.', 'Hang on a second, please.', 'Wait a second, please.', 'Give me a second, please.'],
      note: '*Hold on* — «подожди, не клади трубку». Артикль обязателен: *a second*.',
      traps: [
        { after: ['hold on ', 'hang on ', 'wait '], keys: 's', say: 'Нужен артикль: *a second*.' }
      ] },
    { id: 'g-speak-to-manager', ru: 'Могу я поговорить с менеджером?', ctx: 'звонок в компанию',
      en: ['Can I speak to the manager?', 'Could I speak to the manager?', 'May I speak to the manager?', 'Can I speak with the manager?', 'Can I talk to the manager?', 'Can I speak to a manager?'],
      note: 'Поговорить с кем-то — *speak to* или speak with. Перед manager нужен артикль.' },
    { id: 'g-dont-worry', ru: 'Не переживай, всё будет хорошо.', ctx: 'поддержка',
      en: ["Don't worry, everything will be fine.", "Don't worry, everything will be okay.", "Don't worry, everything will be all right.", "Don't worry, it will be fine.", "Don't worry, it'll be fine.", "Don't worry, everything is going to be fine."],
      note: '«Всё» как подлежащее — *everything*, и глагол после него в единственном числе.',
      traps: [
        { after: 'worry, ', keys: 'a', say: 'Не all will be. «Всё» здесь — *everything*.' }
      ] },
    { id: 'g-bored', ru: 'Мне скучно.', ctx: 'эмоции',
      en: ["I'm bored.", 'I feel bored.'],
      note: '*bored* — мне скучно, *boring* — скучный сам по себе. Так же: interested и interesting.',
      traps: [
        { after: ["i'm bor", 'i am bor'], start: true, keys: 'i', say: "I'm boring = «я скучный человек». Мне скучно — *I'm bored*." }
      ] },
    { id: 'g-sorry-to-hear', ru: 'Мне жаль это слышать.', ctx: 'сочувствие',
      en: ["I'm sorry to hear that.", 'Sorry to hear that.', "I'm so sorry to hear that.", "I'm sorry to hear this."],
      note: '*Sorry to hear that* — ответ на плохую новость. Sorry здесь значит «мне жаль», а не «извини».' },

    /* ───── 2. Средние: предлоги, артикли, устойчивые связки ───── */

    { id: 'g-first-time-here', ru: 'Я здесь впервые.', ctx: 'small talk в поездке',
      en: ["It's my first time here.", 'This is my first time here.', "I'm here for the first time."],
      note: "Шаблон *It's my first time* + here, in London, at this place. I'm first time — калька.",
      traps: [
        { after: ["i'm ", 'i am '], start: true, keys: 'f', say: "Не I'm first time. Скажите *It's my first time here*." }
      ] },
    { id: 'g-how-do-you-like', ru: 'Как тебе город?', ctx: 'small talk с приезжим',
      en: ['How do you like the city?', 'What do you think of the city?', 'What do you think about the city?', 'How do you like it here?', 'How are you liking the city?'],
      note: '*How do you like...?* — «как тебе?». С think вопрос начинают с what: What do you think of...?',
      traps: [
        { after: 'how do you ', start: true, keys: 't', say: 'How do you think — калька. *How do you like* или *What do you think of*.' }
      ] },
    { id: 'g-free-time', ru: 'Чем ты занимаешься в свободное время?', ctx: 'small talk',
      en: ['What do you do in your free time?', 'What do you do in your spare time?', 'What do you like to do in your free time?', 'What do you do for fun?'],
      note: '*in your free time* — с предлогом in и словом your. Без your звучит не по-английски.',
      traps: [
        { after: 'do in ', keys: 'f', say: 'Нужно your: *in your free time*.' },
        { after: ['what do you do ', 'like to do '], keys: 'a', say: 'В свободное время — *in* your free time. Не at.' }
      ] },
    { id: 'g-let-me-know', ru: 'Дай знать, если что-то понадобится.', ctx: 'предложение помощи',
      en: ['Let me know if you need anything.', 'Just let me know if you need anything.', 'Let me know if you need something.', 'Tell me if you need anything.'],
      note: '*Let me know* — «дай знать». После if — настоящее время: *if you need*.',
      traps: [
        { after: 'let me ', keys: 't', say: 'После let — глагол без to: *let me know*.' },
        { after: 'if you ', keys: 'w', say: 'После if будущее не ставят: *if you need*.' }
      ] },
    { id: 'g-borrow-charger', ru: 'Можно одолжить у тебя зарядку?', ctx: 'просьба к знакомому',
      en: ['Can I borrow your charger?', 'Could I borrow your charger?', 'May I borrow your charger?', 'Can I use your charger?', 'Could I use your charger?'],
      note: '*borrow* — взять на время, *lend* — дать. Can I borrow...? = Can you lend me...?',
      traps: [
        { after: ['can i ', 'could i ', 'may i '], start: true, keys: 'l', say: 'Lend — давать. Брать на время — *borrow*.' }
      ] },
    { id: 'g-sorry-to-bother', ru: 'Извините, что беспокою.', ctx: 'перед просьбой',
      en: ['Sorry to bother you.', "I'm sorry to bother you.", 'Sorry to disturb you.', "I'm sorry to disturb you.", 'Sorry for bothering you.'],
      note: '*Sorry to bother you* — готовая формула перед просьбой или вопросом.' },
    { id: 'g-what-time-finish', ru: 'Во сколько ты заканчиваешь работу?', ctx: 'планы на вечер',
      en: ['What time do you finish work?', 'What time do you get off work?', 'When do you finish work?', 'When do you get off work?', 'What time do you finish working?'],
      note: '*finish work* и *get off work* — без артикля. В вопросе не забудьте do.',
      traps: [
        { after: ['what time ', 'when '], start: true, keys: 'y', say: 'В вопросе нужен do: *What time do you finish*.' }
      ] },
    { id: 'g-plans-weekend', ru: 'Какие у тебя планы на выходные?', ctx: 'small talk о планах',
      en: ['What are your plans for the weekend?', 'What are your plans for this weekend?', 'Do you have any plans for the weekend?', 'What are you doing this weekend?', 'What are you up to this weekend?', 'Any plans for the weekend?'],
      note: 'Планы на — *plans for*: plans for the weekend, for tonight, for the summer.' },
    { id: 'g-cant-make-it', ru: 'Извини, у меня не получится прийти.', ctx: 'отмена встречи',
      en: ["Sorry, I can't make it.", "Sorry, I won't be able to make it.", "I'm sorry, I can't make it.", "Sorry, I can't come.", "Sorry, I won't be able to come."],
      note: "*make it* — успеть, суметь прийти. *I can't make it* — обычный вежливый отказ." },
    { id: 'g-move-to-next-week', ru: 'Можем перенести на следующую неделю?', ctx: 'перенос встречи',
      en: ['Can we move it to next week?', 'Could we move it to next week?', 'Can we reschedule for next week?', 'Could we reschedule for next week?', 'Can we push it to next week?', 'Can we postpone it until next week?'],
      note: 'Перенести встречу — *move it to* или *reschedule for*. *Next week* — без the.',
      traps: [
        { after: ['it to ', 'reschedule for ', 'it until '], keys: 't', say: 'Без артикля: *next week*.' },
        { after: ['move it ', 'push it '], keys: 'o', say: 'Перенести на — move it *to*. Не on.' }
      ] },
    { id: 'g-bus-city-center', ru: 'Этот автобус идёт до центра?', ctx: 'на остановке',
      en: ['Does this bus go to the city center?', 'Does this bus go downtown?', 'Does this bus go to the center?', 'Is this bus going to the city center?', 'Is this bus going downtown?'],
      note: 'Про маршрут — Present Simple: *Does this bus go...?* В США центр города — downtown.',
      traps: [
        { after: ['go to ', 'going to '], keys: 'c', say: 'Нужен артикль: *the city center*.' },
        { after: 'does this bus go', start: true, keys: 'e', say: 'После does — без -es: *Does this bus go*.' }
      ] },
    { id: 'g-how-long-take', ru: 'Сколько ехать до аэропорта?', ctx: 'в такси',
      en: ['How long does it take to get to the airport?', 'How long will it take to get to the airport?', 'How long is the ride to the airport?', 'How long is the drive to the airport?'],
      note: '*How long does it take to...?* — главный вопрос про время в пути. Ответ: It takes 20 minutes.' },
    { id: 'g-pick-you-up', ru: 'Я встречу тебя в аэропорту.', ctx: 'сообщение гостю',
      en: ["I'll pick you up at the airport.", "I'll meet you at the airport.", "I'll pick you up from the airport."],
      note: '*pick you up* — встретить и забрать на машине. Местоимение стоит в середине.',
      traps: [
        { after: 'pick ', keys: 'u', say: 'Местоимение — в середину: *pick you up*.' }
      ] },
    { id: 'g-just-looking', ru: 'Спасибо, я просто смотрю.', ctx: 'в магазине, продавцу',
      en: ["I'm just looking, thanks.", "Thanks, I'm just looking.", "I'm just looking, thank you.", "Thank you, I'm just looking.", 'Just looking, thanks.', "I'm just browsing, thanks."],
      note: "*I'm just looking* — вежливый ответ на Can I help you? Watch — это про кино и матчи.",
      traps: [
        { after: ["i'm just ", 'i am just '], keys: 'w', say: 'Watch — про кино и матчи. В магазине — *just looking*.' },
        { after: 'i ', start: true, keys: 'j', say: "Прямо сейчас — Continuous: *I'm just looking*." }
      ] },
    { id: 'g-try-on', ru: 'Можно это примерить?', ctx: 'в магазине одежды',
      en: ['Can I try this on?', 'Can I try it on?', 'Could I try this on?', 'Could I try it on?', 'May I try this on?', 'Can I try these on?'],
      note: '*try on* — примерить. Короткое слово (this, it) встаёт в середину: *try it on*.' },
    { id: 'g-smaller-size', ru: 'У вас есть это размером поменьше?', ctx: 'в магазине одежды',
      en: ['Do you have this in a smaller size?', 'Do you have it in a smaller size?', 'Do you have this one in a smaller size?', 'Do you have a smaller size?'],
      note: '*in a smaller size* — с предлогом in и артиклем. Small короткое, поэтому smaller.',
      traps: [
        { after: ['this in ', 'it in ', 'one in '], keys: 's', say: 'Нужен артикль: in *a smaller size*.' },
        { after: ['in a ', 'have a '], keys: 'm', say: 'Small — короткое слово: *smaller*, не more small.' }
      ] },
    { id: 'g-caught-cold', ru: 'Кажется, я простудился.', ctx: 'самочувствие',
      en: ['I think I caught a cold.', "I think I've caught a cold.", 'I think I have a cold.', "I think I'm coming down with a cold.", 'I think I got a cold.', "I think I'm getting a cold."],
      note: '*catch a cold* — простудиться. «Кажется» проще всего передать через *I think*.',
      traps: [
        { after: ['caught ', 'i got '], keys: 'c', say: 'Нужен артикль: *a cold*.' }
      ] },
    { id: 'g-allergic-to-nuts', ru: 'У меня аллергия на орехи.', ctx: 'предупреждаем официанта',
      en: ["I'm allergic to nuts.", 'I have a nut allergy.', 'I have an allergy to nuts.'],
      note: "Аллергия на — *allergic to*. По-английски чаще говорят прилагательным: I'm allergic.",
      traps: [
        { after: ['allergic ', 'allergy '], keys: 'o', say: 'Аллергия на = allergic *to*. Не on.' },
        { after: 'i have a', start: true, keys: 'l', say: "Нужен артикль: *an allergy*. А проще — *I'm allergic to*." }
      ] },
    { id: 'g-didnt-sleep-well', ru: 'Я плохо спал сегодня ночью.', ctx: 'утром, о самочувствии',
      en: ["I didn't sleep well last night.", 'I slept badly last night.', 'I slept poorly last night.'],
      note: 'О прошедшей ночи — *last night*, даже если по-русски «сегодня ночью».',
      traps: [
        { after: ['well ', 'badly ', 'poorly '], keys: 't', say: 'О прошедшей ночи — *last night*. Не this night и не today night.' }
      ] },
    { id: 'g-feel-much-better', ru: 'Мне уже гораздо лучше.', ctx: 'после болезни',
      en: ['I feel much better now.', "I'm feeling much better now.", 'I feel a lot better now.', "I'm feeling a lot better now.", 'I feel much better already.', 'I feel much better.'],
      note: 'Усилить сравнение — *much* или *a lot*: much better. Very и more тут не работают.',
      traps: [
        { after: ['much ', 'a lot '], keys: 'm', say: 'Better уже сравнительная степень: *much better*, без more.' },
        { after: ['i feel ', 'feeling '], keys: 'v', say: 'Не very better. Усиливают словом *much*: much better.' }
      ] },
    { id: 'g-depends-weather', ru: 'Это зависит от погоды.', ctx: 'разговор',
      en: ['It depends on the weather.', 'That depends on the weather.'],
      note: 'Depend on — всегда *on*. Русское «от» тянет написать from, но так не говорят.',
      traps: [
        { after: 'depends ', keys: 'f', say: '«Зависит от» = depends *on*. Не from и не of.' },
        { after: 'it', start: true, keys: "'", say: 'Без is: depend — глагол. *It depends*.' }
      ] },
    { id: 'g-not-sure-about', ru: 'Я в этом не уверен.', ctx: 'сомнение',
      en: ["I'm not sure about that.", "I'm not so sure about that.", "I'm not sure about this.", "I'm not sure about it."],
      note: 'Уверен в чём-то — *sure about*. Заодно это мягкий способ не согласиться.',
      traps: [
        { after: 'sure ', keys: 'i', say: 'Уверен в чём-то = sure *about*. Не in.' }
      ] },
    { id: 'g-makes-sense', ru: 'В этом есть смысл.', ctx: 'согласие',
      en: ['That makes sense.', 'It makes sense.', 'This makes sense.', 'Makes sense.'],
      note: 'По-английски смысл «делают»: *make sense*. Без артикля и не have sense.',
      traps: [
        { after: ['that ', 'it ', 'this '], start: true, keys: 'h', say: 'Не has sense. По-английски смысл «делают»: *makes sense*.' },
        { after: 'makes ', keys: 'a', say: 'Без артикля: *makes sense*.' }
      ] },
    { id: 'g-up-to-you', ru: 'Решать тебе.', ctx: 'выбор за собеседником',
      en: ["It's up to you.", "That's up to you.", "It's your call.", "It's your decision.", 'You decide.'],
      note: "*It's up to you* — «решать тебе, как скажешь». Запоминайте целиком." },
    { id: 'g-not-either', ru: 'Мне тоже не нравится.', ctx: 'согласие с отрицанием',
      en: ["I don't like it either.", 'Me neither.', 'Neither do I.', "I don't either."],
      note: 'В отрицании «тоже» — *either* в конце. Too и also — только в утверждениях.',
      traps: [
        { after: 'like it ', keys: 't', say: 'В отрицании «тоже» — *either*, не too.' },
        { after: 'i ', start: true, keys: 'a', say: "Also в отрицании не ставят. Скажите *I don't like it either*." }
      ] },
    { id: 'g-text-me-home', ru: 'Напиши мне, когда доберёшься до дома.', ctx: 'сообщение другу',
      en: ['Text me when you get home.', 'Message me when you get home.', "Text me when you're home.", 'Let me know when you get home.', 'Text me once you get home.'],
      note: 'После when будущее не ставят: *when you get home*. Home — без предлога to.',
      traps: [
        { after: 'when you ', keys: 'w', say: 'После when будущее не ставят: *when you get home*.' },
        { after: 'you get ', keys: 't', say: 'Home — без предлога: *get home*.' }
      ] },
    { id: 'g-late-reply', ru: 'Извини, что долго не отвечал.', ctx: 'переписка',
      en: ['Sorry for the late reply.', 'Sorry for the slow reply.', 'Sorry for the late response.', 'Sorry about the late reply.', 'Sorry for replying so late.', 'Sorry for the delay.'],
      note: '*Sorry for the late reply* — обычное начало запоздалого ответа. Reply — и глагол, и существительное.',
      traps: [
        { after: ['sorry for ', 'sorry about '], start: true, keys: 'l', say: 'Нужен артикль: *the late reply*.' },
        { after: 'sorry ', start: true, keys: 't', say: 'Не sorry that. *Sorry for* + существительное или -ing.' }
      ] },
    { id: 'g-get-back-later', ru: 'Я отвечу тебе позже.', ctx: 'переписка',
      en: ["I'll get back to you later.", "I'll reply later.", "I'll answer you later.", "I'll text you back later.", "I'll write back later.", "I'll reply to you later."],
      note: '*get back to you* — «вернусь с ответом». Answer — без to, а reply — с to: reply to you.',
      traps: [
        { after: 'answer ', keys: 't', say: 'Answer — без to: answer you. А ещё лучше — *get back to you*.' }
      ] },
    { id: 'g-sent-photos', ru: 'Я отправил тебе фотографии вчера.', ctx: 'переписка',
      en: ['I sent you the photos yesterday.', 'I sent you the pictures yesterday.', 'I sent the photos to you yesterday.', 'I sent you the pics yesterday.'],
      note: 'Со словом yesterday — Past Simple: *I sent*. Present Perfect с точным временем не дружит.',
      traps: [
        { after: ['i', 'i '], start: true, keys: "h'", say: 'С yesterday — простое прошедшее: *I sent*. Не I have sent.' },
        { after: 'i sen', start: true, keys: 'd', say: 'Send — неправильный глагол: *sent*.' }
      ] },
    { id: 'g-sounds-good', ru: 'Отлично, тогда до встречи!', ctx: 'подтверждаем встречу',
      en: ['Sounds good, see you then!', 'Sounds great, see you then!', 'Great, see you then!', 'Perfect, see you then!', 'Awesome, see you then!', 'Okay, see you then!'],
      note: '*Sounds good* — «отлично, договорились». *See you then* — до встречи в условленное время.' },
    { id: 'g-call-you-back', ru: 'Можно я перезвоню тебе позже?', ctx: 'разговор по телефону',
      en: ['Can I call you back later?', 'Could I call you back later?', 'May I call you back later?', 'Can I call you later?', 'Could I call you later?'],
      note: 'Call — без предлога: *call you*. Перезвонить — *call you back*, местоимение в середине.',
      traps: [
        { after: 'i call ', keys: 't', say: 'Call — без to: *call you*.' },
        { after: 'i call ', keys: 'b', say: 'Местоимение — в середину: *call you back*.' }
      ] },
    { id: 'g-on-mute', ru: 'У тебя выключен микрофон.', ctx: 'видеозвонок',
      en: ["You're on mute.", "You're muted.", 'Your mic is off.', 'Your microphone is off.', 'Your mic is muted.', 'Your microphone is muted.'],
      note: "*You're on mute* — самая частая фраза на созвонах. Mic — разговорное от microphone." },
    { id: 'g-wrong-number', ru: 'Вы ошиблись номером.', ctx: 'разговор по телефону',
      en: ['You have the wrong number.', "You've got the wrong number.", 'You dialed the wrong number.', "You've dialed the wrong number.", 'I think you have the wrong number.'],
      note: 'С wrong почти всегда the: *the wrong number*, the wrong address, the wrong door.',
      traps: [
        { after: ['you have ', 'got ', 'dialed '], keys: 'wa', say: 'С wrong — определённый артикль: *the wrong number*.' }
      ] },
    { id: 'g-have-a-call', ru: 'Давай созвонимся завтра утром.', ctx: 'договариваемся о звонке',
      en: ["Let's have a call tomorrow morning.", "Let's talk tomorrow morning.", "Let's get on a call tomorrow morning.", "Let's jump on a call tomorrow morning.", "Let's hop on a call tomorrow morning."],
      note: '*have a call* — созвониться. *Tomorrow morning* — без предлога и артикля.' },
    { id: 'g-proud-of-you', ru: 'Я тобой горжусь.', ctx: 'поддержка',
      en: ["I'm proud of you.", "I'm so proud of you.", "I'm really proud of you."],
      note: 'Горжусь кем-то — *proud of*. Proud — прилагательное, поэтому с am.',
      traps: [
        { after: 'proud ', keys: 'bw', say: 'Горжусь кем-то = proud *of*.' },
        { after: 'i ', start: true, keys: 'p', say: "Proud — прилагательное, нужен глагол: *I'm proud*." }
      ] },
    { id: 'g-take-your-time', ru: 'Не торопись.', ctx: 'поддержка, я подожду',
      en: ['Take your time.', 'No rush.', "There's no rush.", 'No hurry.', "There's no hurry.", "Don't rush."],
      note: "*Take your time* — «не торопись, я подожду». Звучит мягче, чем Don't hurry." },
    { id: 'g-congrats-new-job', ru: 'Поздравляю с новой работой!', ctx: 'поздравление',
      en: ['Congratulations on your new job!', 'Congrats on your new job!', 'Congratulations on the new job!', 'Congrats on the new job!'],
      note: 'Поздравляю с — *congratulations on*. С праздниками иначе: Happy birthday, Happy New Year.',
      traps: [
        { after: ['congratulations ', 'congrats '], start: true, keys: 'w', say: 'Поздравляю с = congratulations *on*. Не with.' },
        { after: 'new ', keys: 'w', say: 'Работа как место — *job*. Work — это занятие, его не считают.' }
      ] },

    /* ───── 3. Сложнее: времена, -ing после связок, порядок слов ───── */

    { id: 'g-how-long-lived', ru: 'Как давно ты здесь живёшь?', ctx: 'small talk',
      en: ['How long have you lived here?', 'How long have you been living here?', 'How long have you been here?'],
      note: 'Началось раньше и длится до сих пор — Present Perfect: *How long have you lived*.',
      traps: [
        { after: 'how long ', start: true, keys: 'da', say: 'Началось раньше и длится сейчас: *How long have you lived*. Не do you live.' }
      ] },
    { id: 'g-mind-if-open', ru: 'Вы не против, если я открою окно?', ctx: 'вежливая просьба',
      en: ['Do you mind if I open the window?', 'Would you mind if I opened the window?', 'Would you mind if I open the window?', 'Is it okay if I open the window?', 'Is it all right if I open the window?'],
      note: '*Do you mind if I...?* — «вы не против, если я...?» Согласие звучит как No, not at all.',
      traps: [
        { after: 'if i ', keys: 'w', say: 'После if будущее не ставят: *if I open*.' },
        { after: ['open ', 'opened '], keys: 'w', say: 'Нужен артикль: *the window*.' }
      ] },
    { id: 'g-mind-closing-door', ru: 'Вы не могли бы закрыть дверь?', ctx: 'очень вежливая просьба',
      en: ['Would you mind closing the door?', 'Could you close the door, please?', 'Could you please close the door?', 'Could you close the door?', 'Can you close the door, please?', 'Would you close the door, please?'],
      note: 'После *Would you mind* — форма на -ing: closing, opening, waiting. Без to.',
      traps: [
        { after: 'would you mind ', start: true, keys: 't', say: 'После mind — форма на -ing: *Would you mind closing*. Без to.' },
        { after: 'would you mind clos', start: true, keys: 'e', say: 'После mind — форма на -ing: *closing*.' }
      ] },
    { id: 'g-tell-me-where', ru: 'Не подскажете, где вокзал?', ctx: 'вопрос прохожему',
      en: ['Could you tell me where the station is?', 'Can you tell me where the station is?', 'Do you know where the station is?', 'Could you tell me where the train station is?', 'Can you tell me where the train station is?', 'Do you know where the train station is?'],
      note: 'Вопрос внутри вопроса идёт с прямым порядком слов: *where the station is*.',
      traps: [
        { after: ['tell me where ', 'know where '], keys: 'i', say: 'Внутри вопроса порядок прямой: *where the station is*.' },
        { after: ['could you ', 'can you '], start: true, keys: 's', say: 'Сказать кому-то — *tell me*. Say me не говорят.' }
      ] },
    { id: 'g-looking-forward', ru: 'С нетерпением жду встречи с тобой.', ctx: 'перед встречей',
      en: ["I'm looking forward to seeing you.", 'I look forward to seeing you.', 'Looking forward to seeing you.', "I'm looking forward to meeting you.", "I can't wait to see you."],
      note: 'После *look forward to* — форма на -ing: to seeing. Здесь to — предлог, а не частица.',
      traps: [
        { after: ['forward to see', 'forward to meet'], keys: ' ', say: 'После look forward to — форма на -ing: *to seeing you*.' },
        { after: ["i'm ", 'i am '], start: true, keys: 'w', say: 'Не waiting. Радостное ожидание — *looking forward to*.' }
      ] },
    { id: 'g-flight-delayed', ru: 'Мой рейс задержали на два часа.', ctx: 'в аэропорту',
      en: ['My flight was delayed by two hours.', 'My flight is delayed by two hours.', 'My flight has been delayed by two hours.', 'My flight was delayed for two hours.', 'My flight got delayed by two hours.', 'My flight was delayed two hours.'],
      note: 'Пассив: *was delayed* — рейс задержали. На сколько — *by* two hours.',
      traps: [
        { after: 'delayed ', keys: 'o', say: 'На два часа — *by* two hours. Не on.' },
        { after: 'my flight ', start: true, keys: 'd', say: 'Рейс не задерживает сам, его задерживают: *was delayed*.' }
      ] },
    { id: 'g-doctor-appointment', ru: 'Мне нужно записаться к врачу.', ctx: 'здоровье',
      en: ["I need to make a doctor's appointment.", 'I need to make an appointment with a doctor.', 'I need to make an appointment with the doctor.', "I need to book a doctor's appointment.", 'I need to book an appointment with a doctor.', 'I need to see a doctor.'],
      note: 'Записаться к врачу — *make an appointment*. Appointment — визит по записи, не meeting.',
      traps: [
        { after: 'an appointment ', keys: 't', say: 'К врачу — appointment *with* a doctor. Не to.' }
      ] },
    { id: 'g-not-used-to', ru: 'Я не привык так рано вставать.', ctx: 'режим дня',
      en: ["I'm not used to getting up so early.", "I'm not used to getting up this early.", "I'm not used to waking up so early.", "I'm not used to waking up this early.", "I'm not used to getting up that early."],
      note: 'Привык к чему-то — *be used to* + -ing: used to getting up. А used to do — «раньше делал».',
      traps: [
        { after: 'used to get', keys: ' ', say: 'После be used to — форма на -ing: *used to getting up*.' },
        { after: 'used to wak', keys: 'e', say: 'После be used to — форма на -ing: *used to waking up*.' }
      ] },
    { id: 'g-would-rather', ru: 'Я бы лучше остался дома.', ctx: 'предпочтение',
      en: ["I'd rather stay home.", "I'd rather stay at home.", 'I would rather stay home.', 'I would rather stay at home.', "I'd prefer to stay home.", "I'd prefer to stay at home."],
      note: "*I'd rather* + глагол без to: I'd rather stay. А после prefer to нужен: I'd prefer to stay.",
      traps: [
        { after: 'rather ', keys: 't', say: "После would rather — глагол без to: *I'd rather stay*." }
      ] },
    { id: 'g-breaking-up', ru: 'Ты пропадаешь.', ctx: 'плохая связь',
      en: ["You're breaking up.", "You're cutting out.", 'You keep breaking up.', 'You keep cutting out.'],
      note: "*You're breaking up* — «связь рвётся, тебя плохо слышно». Вне звонка break up — «расстаться»." },
    { id: 'g-know-how-you-feel', ru: 'Я понимаю, что ты чувствуешь.', ctx: 'сочувствие',
      en: ['I know how you feel.', 'I understand how you feel.', "I know what you're feeling.", "I understand what you're feeling.", 'I know the feeling.'],
      note: 'Внутри фразы порядок прямой: *how you feel*, без do. И без yourself.',
      traps: [
        { after: ['know how ', 'understand how '], keys: 'd', say: 'Внутри фразы порядок прямой: *how you feel*, без do.' }
      ] },
    { id: 'g-must-be-hard', ru: 'Тебе, должно быть, тяжело.', ctx: 'сочувствие',
      en: ['That must be hard for you.', 'It must be hard for you.', 'This must be hard for you.', 'That must be tough for you.', 'It must be tough for you.', 'That must be difficult for you.'],
      note: '*must be* — «должно быть, наверное»: уверенная догадка. После must — глагол без to.',
      traps: [
        { after: 'must ', keys: 't', say: 'После must — глагол без to: *must be*.' }
      ] }
  ]
});
