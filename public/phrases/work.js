/* Колода «Работа и офис»: встречи, дедлайны, коллеги. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'work', title: 'Работа и офис', sub: 'встречи, дедлайны, коллеги',
  phrases: [
    /* ───── 1. Простые: короткие фразы на каждый день ───── */

    { id: 'wk-first-day', ru: 'Сегодня мой первый день.', ctx: 'первый день в офисе',
      en: ['Today is my first day.', "It's my first day today.", "It's my first day.", 'This is my first day.', "Today's my first day."],
      note: 'По-русски «есть» пропускают, по-английски глагол обязателен: *Today is* my first day.',
      traps: [
        { after: 'today ', start: true, keys: 'm', say: 'Пропал глагол: *Today is* my first day.' }
      ] },
    { id: 'wk-joined-team', ru: 'Я только что присоединился к вашей команде.', ctx: 'знакомство с командой',
      en: ['I just joined your team.', "I've just joined your team.", 'I recently joined your team.'],
      note: '*Join* — без предлога: join the team, join the call. Русское «к» тянет вставить to, но оно лишнее.',
      traps: [
        { after: 'joined ', keys: 't', say: 'Join — без to: *joined your team*.' }
      ] },
    { id: 'wk-have-a-minute', ru: 'У тебя есть минутка?', ctx: 'подходим к коллеге',
      en: ['Do you have a minute?', 'Do you have a second?', 'Do you have a sec?', 'Do you have a moment?', 'Have you got a minute?', 'Got a minute?'],
      note: 'Так начинают короткий разговор с коллегой. Артикль обязателен: *a minute*, a second.' },
    { id: 'wk-how-can-i-help', ru: 'Чем я могу вам помочь?', ctx: 'клиент обратился к вам',
      en: ['How can I help you?', 'How may I help you?', 'How can I help?', 'How can I help you today?', 'What can I do for you?'],
      note: 'По-английски спрашивают «как помочь», а не «чем»: *How can I help?* И can стоит перед I.',
      traps: [
        { after: 'how ', start: true, keys: 'i', say: 'В вопросе порядок меняется: *How can I*, а не How I can.' },
        { after: 'what can i ', start: true, keys: 'h', say: 'What can I help — калька. *How can I help* или What can I do for you.' }
      ] },
    { id: 'wk-any-plans-weekend', ru: 'Есть планы на выходные?', ctx: 'в пятницу у кофемашины',
      en: ['Any plans for the weekend?', 'Do you have any plans for the weekend?', 'Got any plans for the weekend?', 'Any plans for this weekend?', 'Do you have plans for the weekend?'],
      note: 'Планы «на» выходные — *plans for* the weekend. Any plans...? — обычный вопрос в пятницу.',
      traps: [
        { after: 'plans ', keys: 'o', say: 'Планы на выходные — plans *for* the weekend. Не on.' }
      ] },
    { id: 'wk-grab-coffee', ru: 'Пойдём выпьем кофе?', ctx: 'зовём коллегу на перерыв',
      en: ['Do you want to grab a coffee?', 'Want to grab a coffee?', 'Do you want to grab coffee?', 'Want to grab coffee?', 'Do you want to get a coffee?', 'Would you like to grab a coffee?'],
      note: '*Grab a coffee* — сходить за кофе, быстро выпить. Так же: grab lunch, grab a bite.' },
    { id: 'wk-free-at-three', ru: 'Ты свободен в три?', ctx: 'ищем время для встречи',
      en: ['Are you free at three?', 'Are you free at 3?', 'Are you available at three?', 'Are you available at 3?', "Are you free at three o'clock?", 'Do you have time at three?'],
      note: 'Время на часах — с *at*: at three, at noon. А in — это «через»: in three hours.',
      traps: [
        { after: ['free ', 'available '], keys: 'i', say: 'Время на часах — с *at*: at three.' }
      ] },
    { id: 'wk-when-deadline', ru: 'Когда дедлайн?', ctx: 'получили задачу',
      en: ['When is the deadline?', "When's the deadline?", "What's the deadline?", 'When is it due?', 'When is this due?'],
      note: 'Дедлайн один и конкретный, поэтому *the deadline*. Тот же вопрос короче: When is it due?',
      traps: [
        { after: ['when is ', "when's ", "what's ", 'what is '], start: true, keys: 'd', say: 'Нужен артикль: *the deadline*.' }
      ] },
    { id: 'wk-swamped', ru: 'У меня сегодня завал.', ctx: 'загрузка',
      en: ["I'm swamped today.", "I'm slammed today.", "I'm really busy today.", "I'm super busy today.", "I'm swamped with work today.", "I'm buried in work today."],
      note: "*I'm swamped* — «я завален работой», буквально «меня затопило». Обычное офисное слово, не грубое." },
    { id: 'wk-do-me-a-favor', ru: 'Можешь сделать мне одолжение?', ctx: 'просьба к коллеге',
      en: ['Can you do me a favor?', 'Could you do me a favor?', 'Would you do me a favor?', 'Can I ask you a favor?', 'Could I ask you a favor?', 'Can I ask you for a favor?'],
      note: 'Одолжение «делают» через do: *do me a favor*. С make это ошибка.',
      traps: [
        { after: ['can you ', 'could you ', 'would you '], start: true, keys: 'm', say: 'Не make. Одолжение — *do me a favor*.' }
      ] },
    { id: 'wk-thanks-feedback', ru: 'Спасибо за обратную связь.', ctx: 'получили замечания',
      en: ['Thanks for the feedback.', 'Thank you for the feedback.', 'Thanks for your feedback.', 'Thank you for your feedback.'],
      note: 'Feedback не считают: без -s на конце. Одно замечание — a comment или a piece of feedback.',
      traps: [
        { after: 'feedback', keys: 's', say: 'Feedback не считают: без -s.' }
      ] },
    { id: 'wk-keep-up', ru: 'Продолжай в том же духе!', ctx: 'похвала',
      en: ['Keep up the good work!', 'Keep up the great work!', 'Keep it up!'],
      note: '*Keep up the good work* — готовая похвала: «так держать». Коротко — Keep it up!' },
    { id: 'wk-thanks-listening', ru: 'Спасибо за внимание.', ctx: 'конец презентации',
      en: ['Thank you for listening.', 'Thanks for listening.', 'Thank you for your attention.', 'Thanks for your attention.', 'Thank you all for listening.'],
      note: 'В конце выступления обычно говорят *Thank you for listening*. С attention нужен your.',
      traps: [
        { after: ['thank you for ', 'thanks for '], start: true, keys: 'a', say: 'Не for attention. *Thank you for listening* или for your attention.' }
      ] },
    { id: 'wk-see-my-screen', ru: 'Всем видно мой экран?', ctx: 'презентация на созвоне',
      en: ['Can everyone see my screen?', 'Can everybody see my screen?', 'Can you all see my screen?', 'Can you see my screen?', 'Can everyone see my screen okay?'],
      note: 'С see и hear обычно ставят can: *Can everyone see...?* Everyone — это «все».' },
    { id: 'wk-day-off', ru: 'Завтра я беру отгул.', ctx: 'предупреждаем команду',
      en: ["I'm taking tomorrow off.", "I'm taking the day off tomorrow.", "I'm taking a day off tomorrow.", "I'm off tomorrow.", "I'll be off tomorrow."],
      note: '*Take a day off* — взять отгул. Off стоит после дня: take tomorrow off, take Friday off.' },
    { id: 'wk-on-vacation', ru: 'На следующей неделе я в отпуске.', ctx: 'планы на отпуск',
      en: ["I'm on vacation next week.", "I'll be on vacation next week.", "Next week I'm on vacation.", "I'm on holiday next week.", "I'm off next week.", "I'm away next week."],
      note: 'В отпуске — *on vacation*, предлог on. В Британии говорят on holiday. Next week — без предлога.',
      traps: [
        { after: ["i'm ", 'i am ', "i'll be ", 'i will be '], keys: 'i', say: 'В отпуске — *on* vacation. Не in.' },
        { after: ['vacation ', 'holiday '], keys: 'o', say: 'С next предлог не нужен: просто *next week*.' }
      ] },
    { id: 'wk-leave-early', ru: 'Можно мне сегодня уйти пораньше?', ctx: 'отпрашиваемся',
      en: ['Can I leave early today?', 'Could I leave early today?', 'May I leave early today?', 'Can I leave a bit early today?', 'Is it okay if I leave early today?', 'Can I head out early today?'],
      note: 'Уйти с работы — *leave*: leave early, leave at five. Go away — это «уйди отсюда».' },
    { id: 'wk-work-for-you', ru: 'Вам так подходит?', ctx: 'согласуем с клиентом',
      en: ['Does that work for you?', 'Does this work for you?', 'Does it work for you?', 'Would that work for you?', 'Is that okay with you?', 'Is that okay for you?'],
      note: '*Work for you* — «подходить, устраивать». Так согласуют время, цену, план.',
      traps: [
        { after: ['does that work', 'does this work', 'does it work'], start: true, keys: 's', say: 'После does — без -s: *Does that work*.' }
      ] },
    { id: 'wk-show-around', ru: 'Давай я тебе тут всё покажу.', ctx: 'встречаем новичка',
      en: ['Let me show you around.', "I'll show you around.", 'Let me show you around the office.', 'Let me give you a tour.', "I'll give you a tour."],
      note: '*Show you around* — провести по офису и всё показать. Around здесь и есть «тут всё».' },
    { id: 'wk-day-going', ru: 'Как проходит день?', ctx: 'small talk с коллегой',
      en: ["How's your day going?", 'How is your day going?', "How's your day?", 'How is your day?', "How's your day going so far?", "How's your day so far?"],
      note: "*How's your day going?* — дежурный вопрос у кофемашины. Отвечают коротко: Pretty good, thanks." },

    /* ───── 2. Средние: предлоги, артикли, офисные связки ───── */

    { id: 'wk-in-charge-of', ru: 'Я отвечаю за поддержку клиентов.', ctx: 'рассказываем о своей роли',
      en: ["I'm in charge of customer support.", "I'm responsible for customer support.", 'I handle customer support.', 'I run customer support.', 'I lead customer support.'],
      note: 'Отвечать за — *be in charge of* или be responsible for. Предлоги разные: charge *of*, responsible *for*.',
      traps: [
        { after: 'in charge ', keys: 'f', say: 'In charge *of*. For — после responsible.' },
        { after: 'responsible ', keys: 'o', say: 'Responsible *for*. Of — после in charge.' }
      ] },
    { id: 'wk-department-do', ru: 'Чем занимается ваш отдел?', ctx: 'знакомство с коллегами',
      en: ['What does your department do?', 'What does your team do?', 'What does your department work on?', 'What is your department responsible for?'],
      note: 'Вопрос строится через does, а смысловой do остаётся в конце: What *does* your department *do*?',
      traps: [
        { after: 'what ', start: true, keys: 'y', say: 'В вопросе нужен does: *What does your department do?*' }
      ] },
    { id: 'wk-set-up-meeting', ru: 'Давай назначим встречу на завтра.', ctx: 'планируем встречу',
      en: ["Let's set up a meeting for tomorrow.", "Let's schedule a meeting for tomorrow.", "Let's set up a meeting tomorrow.", "Let's schedule a meeting tomorrow.", "Let's arrange a meeting for tomorrow.", "Let's book a meeting for tomorrow."],
      note: 'Назначить встречу — *set up a meeting* или schedule a meeting. На какой день — for: for tomorrow.',
      traps: [
        { after: "let's a", start: true, keys: 'p', say: 'Appoint — назначить человека на должность. Встречу — *set up* или schedule.' },
        { after: 'meeting ', keys: 'o', say: 'Назначить на завтра — *for* tomorrow. Не on.' }
      ] },
    { id: 'wk-touch-base', ru: 'Давай сверимся на следующей неделе.', ctx: 'короткий контакт по статусу',
      en: ["Let's touch base next week.", "Let's catch up next week.", "Let's check in next week.", "Let's sync up next week.", "Let's sync next week.", "Let's touch base again next week."],
      note: '*Touch base* — коротко созвониться или списаться, чтобы сверить статус. Next week — без предлога.' },
    { id: 'wk-conflict', ru: 'У меня накладка в это время.', ctx: 'приглашение на встречу',
      en: ['I have a conflict at that time.', "I've got a conflict at that time.", 'I have a conflict then.', 'I have a scheduling conflict at that time.', 'I have another meeting at that time.'],
      note: '*Have a conflict* — на это время уже что-то стоит. Никакой ссоры: это про календарь.' },
    { id: 'wk-behind-schedule', ru: 'Я немного отстаю от графика.', ctx: 'статус по задаче',
      en: ["I'm a little behind schedule.", "I'm a bit behind schedule.", "I'm running a little behind schedule.", "I'm running a bit behind schedule.", "I'm slightly behind schedule.", "I'm a little behind."],
      note: '*Behind schedule* — с отставанием, ahead of schedule — с опережением, on schedule — по плану. Без артикля.' },
    { id: 'wk-on-my-plate', ru: 'На мне сейчас и так слишком много всего.', ctx: 'просят взять ещё задачу',
      en: ['I have too much on my plate right now.', "I've got too much on my plate right now.", 'I have a lot on my plate right now.', "I've got a lot on my plate right now.", 'I have too much on my plate at the moment.', 'I have too much on my plate.'],
      note: '*On my plate* — «на мне, в моей загрузке». Too much on my plate — вежливый способ сказать «я перегружен».' },
    { id: 'wk-forward-email', ru: 'Можешь переслать мне это письмо?', ctx: 'рабочая почта',
      en: ['Can you forward me that email?', 'Could you forward me that email?', 'Can you forward that email to me?', 'Could you forward that email to me?', 'Can you forward me the email?', 'Can you forward me this email?'],
      note: '*Forward* — переслать полученное письмо дальше. Resend — отправить своё ещё раз.',
      traps: [
        { after: ['can you ', 'could you '], start: true, keys: 'r', say: 'Resend — отправить ещё раз. Переслать чужое письмо — *forward*.' },
        { after: ['me that ', 'me the ', 'me this ', 'forward that '], keys: 'l', say: 'Письмо в почте — *email*. Letter — бумажное.' }
      ] },
    { id: 'wk-cc-me', ru: 'Поставь меня в копию письма, пожалуйста.', ctx: 'переписка с клиентом',
      en: ['Please copy me on that email.', 'Please cc me on that email.', 'Copy me on that email, please.', 'Cc me on that email, please.', 'Please copy me on the email.', 'Please cc me on the email.'],
      note: 'Поставить в копию — *copy me on* или cc me on. Предлог on, хотя по-русски «в».',
      traps: [
        { after: ['copy me ', 'cc me '], keys: 'i', say: 'В копию письма — copy me *on* the email. Не in.' }
      ] },
    { id: 'wk-in-the-loop', ru: 'Держи меня в курсе, пожалуйста.', ctx: 'коллега ведёт задачу',
      en: ['Please keep me in the loop.', 'Keep me in the loop, please.', 'Please keep me posted.', 'Keep me posted, please.', 'Please keep me updated.', 'Keep me updated, please.'],
      note: '*Keep me in the loop* — держи в курсе, не выключай из переписки. Короче: keep me posted.' },
    { id: 'wk-appreciate-help', ru: 'Я очень ценю твою помощь.', ctx: 'благодарим коллегу',
      en: ['I really appreciate your help.', 'I appreciate your help.', 'I really appreciate the help.', 'I appreciate the help.', 'I really appreciate your help with this.'],
      note: '*I appreciate* сильнее, чем thanks: «я правда это ценю». Appreciate — глагол, am перед ним не нужен.',
      traps: [
        { after: ['i', 'i a'], start: true, keys: "'m", say: 'Appreciate — глагол: *I appreciate*, без am.' }
      ] },
    { id: 'wk-some-feedback', ru: 'Можно дать тебе обратную связь?', ctx: 'перед замечанием',
      en: ['Can I give you some feedback?', 'Could I give you some feedback?', 'May I give you some feedback?', 'Can I give you feedback?', 'Can I share some feedback?', 'Can I offer some feedback?'],
      note: 'Перед замечанием вежливо спросить разрешения. Feedback неисчисляемое: *some feedback*.',
      traps: [
        { after: 'give you ', keys: 'a', say: 'Feedback не считают: *some feedback*, без a.' }
      ] },
    { id: 'wk-dont-quite-agree', ru: 'Я не совсем согласен.', ctx: 'мягкое несогласие',
      en: ["I don't quite agree.", "I don't really agree.", "I don't entirely agree.", "I don't fully agree.", "I don't completely agree.", "I don't quite agree with that."],
      note: "*I don't quite agree* мягче, чем I disagree. Quite в отрицании значит «не совсем».",
      traps: [
        { after: ['i', 'i '], start: true, keys: "'a", say: "Agree — глагол: *I don't agree*. Не I'm not agree." }
      ] },
    { id: 'wk-afraid-wont-work', ru: 'Боюсь, это не сработает.', ctx: 'возражаем на предложение',
      en: ["I'm afraid that won't work.", "I'm afraid this won't work.", "I'm afraid it won't work.", "I'm afraid that's not going to work.", "I don't think that will work.", "I don't think this will work."],
      note: "*I'm afraid* — вежливое «боюсь, что»: смягчает отказ. Work здесь — «сработать, подойти».",
      traps: [
        { after: 'i a', start: true, keys: 'f', say: "Afraid — прилагательное, нужен am: *I'm afraid*." }
      ] },
    { id: 'wk-sick-day', ru: 'Мне нужно взять больничный.', ctx: 'пишем руководителю',
      en: ['I need to take a sick day.', 'I have to take a sick day.', 'I need to take a sick day today.', 'I need to call in sick.', 'I have to call in sick.'],
      note: '*Take a sick day* — взять больничный на день. Call in sick — сообщить, что заболел и не придёшь.' },
    { id: 'wk-back-in-office', ru: 'Я вернусь в офис в понедельник.', ctx: 'сообщение об отсутствии',
      en: ["I'll be back in the office on Monday.", "I'll be back at the office on Monday.", "I'm back in the office on Monday.", "I'll be back in the office Monday.", "I'll be back at work on Monday.", "I'll return to the office on Monday."],
      note: 'Вернусь — *be back*, дальше место: in the office. День недели — с on: on Monday.',
      traps: [
        { after: 'back ', keys: 't', say: 'Be back *in* the office. To — с глаголами движения: come back to.' }
      ] },
    { id: 'wk-send-proposal', ru: 'Я пришлю вам коммерческое предложение сегодня.', ctx: 'разговор с клиентом',
      en: ["I'll send you the proposal today.", "I'll send you a proposal today.", "I'll send you our proposal today.", "I'll email you the proposal today.", "I'll send the proposal over today.", "I'll send you the quote today."],
      note: 'Коммерческое предложение — *proposal*, если с ценами — quote. Offer — скорее акция или оффер о работе.',
      traps: [
        { after: ['send you ', 'email you '], keys: 'c', say: 'Commercial offer — калька. По-английски это *proposal* или quote.' },
        { after: ['send you ', 'email you '], keys: 'p', say: 'Нужен артикль: *the proposal*.' }
      ] },
    { id: 'wk-next-slide', ru: 'Перейдём к следующему слайду.', ctx: 'презентация',
      en: ["Let's move on to the next slide.", "Let's go to the next slide.", "Let's move to the next slide.", "Let's go on to the next slide.", "Let's look at the next slide.", 'Moving on to the next slide.'],
      note: '*Move on to* — перейти к следующему пункту. Слайд по порядку — the next slide, с артиклем.' },
    { id: 'wk-could-use-coffee', ru: 'Мне бы сейчас не помешал кофе.', ctx: 'у кофемашины',
      en: ['I could really use a coffee.', 'I could use a coffee.', 'I could really use some coffee.', 'I could use some coffee.', 'I could really use a coffee right now.', 'I could use a coffee right now.'],
      note: '*I could use* — «мне бы не помешало»: I could use a break, I could use some help.' },
    { id: 'wk-already-friday', ru: 'Не верится, что уже пятница.', ctx: 'small talk в пятницу',
      en: ["I can't believe it's already Friday.", "I can't believe it's Friday already.", "I can't believe that it's already Friday.", "It's hard to believe it's already Friday."],
      note: "*I can't believe* + обычное предложение: I can't believe it's Friday. Слово that можно опустить." },

    /* ───── 3. Сложнее: идиомы, -ing после связок, длинные фразы ───── */

    { id: 'wk-who-to-ask', ru: 'К кому мне обращаться с вопросами?', ctx: 'новичок спрашивает',
      en: ['Who should I ask if I have questions?', 'Who should I ask if I have any questions?', 'Who do I ask if I have questions?', 'Who can I ask if I have questions?', 'Who should I talk to if I have questions?', 'Who should I go to with questions?'],
      note: 'Ask — без предлога: ask him, ask a colleague. После if — настоящее время: *if I have* questions.' },
    { id: 'wk-same-page', ru: 'Мы одинаково это понимаем?', ctx: 'сверяем договорённости',
      en: ['Are we on the same page?', 'Are we all on the same page?', 'Are we on the same page here?', 'Are we on the same page about this?', 'Are we on the same page on this?'],
      note: '*Be on the same page* — одинаково понимать ситуацию. Same почти всегда идёт с the.',
      traps: [
        { after: ['we on ', 'all on '], keys: 'os', say: 'On *the same* page: same всегда с the, и не one page.' }
      ] },
    { id: 'wk-out-of-time', ru: 'У нас заканчивается время, давайте дальше.', ctx: 'ведём встречу',
      en: ["We're running out of time, let's move on.", "We're running out of time, so let's move on.", "We're almost out of time, let's move on.", "We're short on time, let's move on.", "We're running low on time, let's move on.", "We're running out of time, let's keep going."],
      note: '*Run out of time* — время заканчивается. *Move on* — перейти к следующему вопросу.' },
    { id: 'wk-push-deadline', ru: 'Можем сдвинуть дедлайн на неделю?', ctx: 'не успеваем в срок',
      en: ['Can we push the deadline back a week?', 'Could we push the deadline back a week?', 'Can we push the deadline back by a week?', 'Can we push back the deadline by a week?', 'Can we move the deadline back a week?', 'Can we extend the deadline by a week?'],
      note: '*Push back* — сдвинуть на попозже. На сколько — by a week или просто a week.',
      traps: [
        { after: ['deadline back ', 'the deadline '], keys: 'o', say: 'На неделю — *by* a week или просто a week. Не on.' }
      ] },
    { id: 'wk-end-of-week', ru: 'Успеешь закончить к концу недели?', ctx: 'уточняем срок',
      en: ['Can you finish it by the end of the week?', 'Can you finish this by the end of the week?', 'Can you get it done by the end of the week?', 'Can you have it done by the end of the week?', 'Will you finish it by the end of the week?', 'Can you finish it by the end of this week?'],
      note: 'Срок «к» — *by*: by the end of the week, by Friday. Оба артикля на месте: the end, the week.',
      traps: [
        { after: ['by ', 'end of '], keys: 'ew', say: 'Артикль нужен дважды: by *the end* of *the week*.' }
      ] },
    { id: 'wk-run-by-you', ru: 'Можно обсудить с тобой одну идею?', ctx: 'хотим услышать мнение',
      en: ['Can I run an idea by you?', 'Could I run an idea by you?', 'Can I run something by you?', 'Could I run something by you?', 'Can I run an idea past you?', 'Can I bounce an idea off you?'],
      note: '*Run it by* someone — показать идею и спросить мнение до того, как делать. Порядок: run + что + by + кого.' },
    { id: 'wk-great-job-on', ru: 'Ты отлично справился с презентацией.', ctx: 'похвала коллеге',
      en: ['You did a great job on the presentation.', 'You did a great job with the presentation.', 'You did a really good job on the presentation.', 'You did great on the presentation.', 'You nailed the presentation.', 'Great job on the presentation.'],
      note: '*Do a great job on* — отлично справиться с чем-то. Глагол do, предлог on или with.',
      traps: [
        { after: 'you ', start: true, keys: 'm', say: 'Не made. Работу «делают» через do: *did a great job*.' }
      ] },
    { id: 'wk-exactly-what', ru: 'Это именно то, что нам было нужно.', ctx: 'хвалим результат',
      en: ['This is exactly what we needed.', "That's exactly what we needed.", "It's exactly what we needed.", 'This is just what we needed.', "That's just what we needed.", 'This is exactly what we were looking for.'],
      note: '«То, что» по-английски — одно слово *what*: exactly what we needed. That what не говорят.',
      traps: [
        { after: ['exactly ', 'just '], keys: 't', say: '«То, что» — одно слово *what*: exactly what we needed.' }
      ] },
    { id: 'wk-what-if', ru: 'А что, если попробовать другой подход?', ctx: 'встречное предложение',
      en: ['What if we try a different approach?', 'What if we tried a different approach?', 'What if we try another approach?', 'What if we tried another approach?', 'What if we take a different approach?', 'What if we try something different?'],
      note: '*What if we...?* — мягко предложить другой вариант. После него настоящее или прошедшее, но не will.',
      traps: [
        { after: 'what if we ', start: true, keys: 'w', say: 'После what if будущее не ставят: what if we *try*.' },
        { after: ['try ', 'tried ', 'take '], keys: 'd', say: 'Нужен артикль: *a different approach*.' }
      ] },
    { id: 'wk-suggest-starting', ru: 'Я бы предложил начать с малого.', ctx: 'предлагаем свой вариант',
      en: ["I'd suggest starting small.", 'I would suggest starting small.', 'I suggest starting small.', "I'd suggest we start small.", 'I suggest we start small.', "I'd recommend starting small."],
      note: 'После *suggest* — форма на -ing или целое предложение: suggest starting, suggest we start. To не ставят.',
      traps: [
        { after: ['suggest ', 'recommend '], keys: 't', say: 'После suggest — форма на -ing: *suggest starting*. Без to.' }
      ] },
    { id: 'wk-how-about', ru: 'Может, лучше перенесём запуск?', ctx: 'встречное предложение',
      en: ['How about postponing the launch instead?', 'How about postponing the launch?', 'How about we postpone the launch instead?', 'What about postponing the launch instead?', 'How about delaying the launch instead?', 'How about pushing back the launch instead?'],
      note: '*How about* + -ing — предложить другой вариант. Instead в конце — «вместо этого».',
      traps: [
        { after: ['how about ', 'what about '], start: true, keys: 't', say: 'После how about — форма на -ing: *postponing*. Без to.' },
        { after: ['how about postpon', 'what about postpon'], start: true, keys: 'e', say: 'После how about — форма на -ing: *postponing*.' }
      ] },
    { id: 'wk-see-your-point', ru: 'Я понимаю твою мысль, но смотрю на это иначе.', ctx: 'вежливое несогласие',
      en: ['I see your point, but I see it differently.', 'I get your point, but I see it differently.', 'I take your point, but I see it differently.', 'I understand your point, but I see it differently.', 'I see what you mean, but I see it differently.', 'I see your point, but I look at it differently.'],
      note: '*I see your point* — «понимаю твою мысль». Сначала признаём довод, потом возражаем через but.' },
    { id: 'wk-cover-for-me', ru: 'Кто подменит меня, пока меня не будет?', ctx: 'перед отпуском',
      en: ["Who will cover for me while I'm away?", "Who is going to cover for me while I'm away?", "Who's going to cover for me while I'm away?", "Who can cover for me while I'm away?", "Who will cover for me while I'm out?", "Who will cover for me while I'm gone?"],
      note: '*Cover for* someone — подменить коллегу. После while — настоящее время: while I am away.',
      traps: [
        { after: 'cover ', keys: 'm', say: 'Подменить — cover *for* me. Cover me — «прикрой меня».' },
        { after: 'while i ', keys: 'w', say: "После while будущее не ставят: while *I'm* away." }
      ] },
    { id: 'wk-taking-the-time', ru: 'Спасибо, что нашли время встретиться.', ctx: 'начало встречи с клиентом',
      en: ['Thanks for taking the time to meet.', 'Thank you for taking the time to meet.', 'Thanks for taking the time to meet with us.', 'Thank you for taking the time to meet with us.', 'Thanks for making time to meet.', 'Thanks for finding the time to meet.'],
      note: '*Take the time to* — найти время на что-то. После thanks for — форма на -ing: taking.' },
    { id: 'wk-check-get-back', ru: 'Я уточню и вернусь к вам с ответом.', ctx: 'не знаем ответа на вопрос',
      en: ['Let me check and get back to you.', "I'll check and get back to you.", 'Let me find out and get back to you.', "I'll find out and get back to you.", 'Let me double-check and get back to you.', "Let me check and I'll get back to you."],
      note: 'Не знаете ответа — *Let me check and get back to you*. Честно и профессионально.' },
    { id: 'wk-follow-up', ru: 'Мы свяжемся с вами на следующей неделе.', ctx: 'конец разговора с клиентом',
      en: ["We'll follow up with you next week.", "We'll follow up next week.", "We'll be in touch next week.", "We'll get in touch with you next week.", "We'll contact you next week.", "We'll reach out to you next week."],
      note: '*Follow up with* — вернуться к человеку после разговора. Be in touch — «будем на связи».',
      traps: [
        { after: 'contact ', keys: 'w', say: 'Contact — без предлога: *contact you*. With нужен после follow up и get in touch.' }
      ] },
    { id: 'wk-talk-about', ru: 'Сегодня я расскажу о наших результатах.', ctx: 'начало презентации',
      en: ["Today I'm going to talk about our results.", "Today I'll talk about our results.", "Today I'd like to talk about our results.", 'Today I want to talk about our results.', "Today I'm going to tell you about our results.", "Today I'll tell you about our results."],
      note: 'Рассказать о — *talk about*. С tell обязательно кому: tell you about. Tell about не говорят.',
      traps: [
        { after: 'tell ', keys: 'a', say: 'После tell нужно кому: *tell you about*. Или talk about.' }
      ] },
    { id: 'wk-as-you-can-see', ru: 'Как видите, продажи выросли на десять процентов.', ctx: 'показываем график',
      en: ['As you can see, sales grew by ten percent.', 'As you can see, sales grew by 10 percent.', 'As you can see, sales went up by ten percent.', 'As you can see, sales increased by ten percent.', 'As you can see, sales rose by ten percent.', 'As you can see, sales are up ten percent.'],
      note: '*As you can see* — «как видите». На сколько выросло — by: grew by ten percent.',
      traps: [
        { after: '', start: true, keys: 'h', say: '«Как видите» — *As you can see*. How — только для вопросов.' },
        { after: ['grew ', 'went up ', 'increased ', 'rose '], keys: 'o', say: 'На десять процентов — *by* ten percent. Не on.' }
      ] },
    { id: 'wk-questions-at-end', ru: 'Я отвечу на вопросы в конце.', ctx: 'презентация',
      en: ["I'll take questions at the end.", "I'll answer questions at the end.", "I'll take your questions at the end.", "I'll answer your questions at the end.", "I'll take any questions at the end.", "We'll take questions at the end."],
      note: '*At the end* — в конце чего-то. In the end — «в итоге». *Take questions* — отвечать на вопросы зала.',
      traps: [
        { after: 'questions ', keys: 'i', say: 'В конце выступления — *at the end*. In the end — «в итоге».' },
        { after: 'answer ', keys: 'ot', say: 'Answer — без предлога: *answer questions*.' }
      ] },
    { id: 'wk-new-place', ru: 'Ты уже был в новом кафе через дорогу?', ctx: 'small talk про обед',
      en: ['Have you tried the new place across the street?', 'Have you been to the new place across the street?', 'Have you tried the new cafe across the street?', 'Have you been to the new cafe across the street?', 'Have you tried that new place across the street?', 'Have you checked out the new place across the street?'],
      note: 'Про опыт «уже был, пробовал» — Present Perfect: *Have you tried*. Через дорогу — across the street.',
      traps: [
        { after: '', start: true, keys: 'w', say: 'Не Were you. Про опыт — *Have you tried* или Have you been to.' },
        { after: 'been ', keys: 'i', say: 'Побывать где-то — been *to*. Не in.' }
      ] }
  ]
});
