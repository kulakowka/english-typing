/* Колода «Фразовые глаголы»: самые частые, в живых фразах. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'phrasal', title: 'Фразовые глаголы', sub: 'самые частые, в живых фразах',
  phrases: [
    /* ───── 1. Простые: самые частые глаголы, короткие фразы ───── */

    { id: 'pv-wake-up', ru: 'Я проснулся в шесть утра.', ctx: 'частица: up',
      en: ['I woke up at six in the morning.', 'I woke up at 6 in the morning.', "I woke up at six o'clock in the morning."],
      note: '*wake up* — проснуться. Разбудить кого-то — тоже wake up, местоимение в середине: *wake me up*.' },
    { id: 'pv-get-up', ru: 'Мне завтра рано вставать.', ctx: 'частица: up',
      en: ['I have to get up early tomorrow.', 'I need to get up early tomorrow.', "I've got to get up early tomorrow."],
      note: '*get up* — встать с постели. Wake up — только проснуться, а stand up — встать на ноги со стула.',
      traps: [
        { after: ['have to ', 'need to ', 'got to '], keys: 'w', say: 'Wake up — проснуться. Встать с постели — *get up*.' },
        { after: ['have to ', 'need to ', 'got to '], keys: 's', say: 'Stand up — встать на ноги. С постели — *get up*.' }
      ] },
    { id: 'pv-sit-down', ru: 'Давай присядем на минутку.', ctx: 'частица: down',
      en: ["Let's sit down for a minute.", "Let's sit down for a moment.", "Let's sit down for a second.", "Let's sit down for a bit."],
      note: '*sit down* — сесть, присесть: это движение. Просто sit — сидеть. На минутку — *for a minute*.' },
    { id: 'pv-come-in', ru: 'Заходи, дверь открыта.', ctx: 'частица: in',
      en: ['Come in, the door is open.', "Come in, the door's open.", 'Come on in, the door is open.', "Come in, it's open."],
      note: '*come in* — войти, «заходи». Так же отвечают на стук в дверь.',
      traps: [
        { after: '', start: true, keys: 'e', say: 'Enter — про клавишу и таблички. Гостю говорят *Come in*.' },
        { after: '', start: true, keys: 'g', say: 'Вы внутри, гость идёт к вам: *come in*, а не go in.' }
      ] },
    { id: 'pv-come-back', ru: 'Когда ты вернёшься?', ctx: 'частица: back',
      en: ['When will you come back?', 'When are you coming back?', 'When do you come back?', 'When are you going to come back?', 'What time will you come back?'],
      note: '*come back* — вернуться туда, где сейчас говорящий. Return значит то же, но звучит официально.',
      traps: [
        { after: ['will you ', 'are you ', 'do you '], keys: 'r', say: 'Return звучит официально. В разговоре — *come back*.' }
      ] },
    { id: 'pv-go-out', ru: 'Давай сходим куда-нибудь сегодня вечером.', ctx: 'частица: out',
      en: ["Let's go out tonight.", "Let's go out this evening.", "Let's go out somewhere tonight."],
      note: '*go out* — выйти развлечься: в кафе, кино, бар. «Куда-нибудь» уже сидит в out. Сегодня вечером — tonight.' },
    { id: 'pv-turn-on', ru: 'Включи свет, пожалуйста.', ctx: 'частица: on',
      en: ['Turn on the light, please.', 'Turn the light on, please.', 'Please turn on the light.', 'Please turn the light on.', 'Turn on the lights, please.', 'Could you turn on the light, please?'],
      note: '*turn on* — включить. Можно и *turn the light on*, а местоимение ставят только в середину: turn it on.' },
    { id: 'pv-put-on', ru: 'Надень куртку, на улице холодно.', ctx: 'частица: on',
      en: ["Put on your jacket, it's cold outside.", "Put your jacket on, it's cold outside.", "Put on a jacket, it's cold outside.", "Put a jacket on, it's cold outside.", "Put on your coat, it's cold outside.", "Put your coat on, it's cold outside."],
      note: '*put on* — надеть: это действие. Wear — носить, быть в чём-то. Можно и *put your jacket on*.',
      traps: [
        { after: '', start: true, keys: 'wd', say: 'Wear — носить, dress — одеваться целиком. Надеть вещь — *put on*.' },
        { after: 'put on ', start: true, keys: 'jc', say: 'Нужно your или артикль: put on *your* jacket.' }
      ] },
    { id: 'pv-take-off', ru: 'Сними обувь, пожалуйста.', ctx: 'частица: off',
      en: ['Take off your shoes, please.', 'Take your shoes off, please.', 'Please take off your shoes.', 'Please take your shoes off.'],
      note: '*take off* — снять одежду или обувь. Противоположное — put on. Про самолёт take off — «взлететь».',
      traps: [
        { after: ['take off ', 'take '], keys: 's', say: 'По-английски уточняют чьё: take off *your* shoes.' }
      ] },
    { id: 'pv-pick-up', ru: 'Он не берёт трубку.', ctx: 'частица: up',
      en: ["He's not picking up.", "He isn't picking up.", "He's not picking up the phone.", "He isn't picking up the phone.", "He's not picking up his phone.", "He isn't picking up his phone."],
      note: '*pick up* — взять трубку, ответить на звонок. Ещё поднять вещь и заехать за кем-то: pick it up, pick you up.',
      traps: [
        { after: ["he's not ", "he isn't ", 'he is not '], start: true, keys: 't', say: 'Не take the phone. Взять трубку — *pick up*.' }
      ] },
    { id: 'pv-look-for', ru: 'Я ищу свои ключи.', ctx: 'частица: for',
      en: ["I'm looking for my keys.", "I'm looking for the keys."],
      note: '*look for* — искать. Не путайте: look at — смотреть на, look after — присматривать.',
      traps: [
        { after: 'looking ', keys: 'mt', say: 'Без for выйдет «смотрю ключи». Искать — *look for*.' }
      ] },
    { id: 'pv-find-out', ru: 'Как ты об этом узнал?', ctx: 'частица: out',
      en: ['How did you find out about it?', 'How did you find out about this?', 'How did you find out about that?', 'How did you find out?', 'How did you find that out?'],
      note: '*find out* — узнать новость, выяснить. О чём — *about*. Know — уже знать, поэтому «узнал» — не knew.',
      traps: [
        { after: 'how did you ', start: true, keys: 'kr', say: 'Know — уже знать, recognize — узнать в лицо. Узнать новость — *find out*.' }
      ] },
    { id: 'pv-give-up', ru: 'Не сдавайся, у тебя получится!', ctx: 'частица: up',
      en: ["Don't give up, you can do it!", "Don't give up, you'll make it!", "Don't give up, you've got this!", "Don't give up, you'll get there!"],
      note: '*give up* — сдаться, бросить попытки. Бросить привычку — тоже give up, дальше форма на -ing: give up smoking.' },
    { id: 'pv-hurry-up', ru: 'Поторопись, мы опаздываем!', ctx: 'частица: up',
      en: ["Hurry up, we're late!", "Hurry up, we're running late!", "Hurry up, we're going to be late!", "Hurry up, we'll be late!"],
      note: '*hurry up* — «давай быстрее», так торопят другого. Опаздываем — *we are late*: late — прилагательное, нужен be.' },
    { id: 'pv-calm-down', ru: 'Успокойся, ничего страшного.', ctx: 'частица: down',
      en: ["Calm down, it's not a big deal.", "Calm down, it's no big deal.", "Calm down, it's okay.", "Calm down, it's nothing serious.", "Calm down, it's fine."],
      note: '*calm down* — успокоиться. Успокоить кого-то — тоже calm down, местоимение в середине: calm him down.' },
    { id: 'pv-grow-up', ru: 'Я вырос в маленьком городе.', ctx: 'частица: up',
      en: ['I grew up in a small town.', 'I grew up in a little town.', 'I grew up in a small city.'],
      note: '*grow up* — вырасти, повзрослеть: только о людях. Просто grow — расти в размере: о растениях, ценах.',
      traps: [
        { after: 'i grew ', start: true, keys: 'i', say: 'О людях — *grew up*. Просто grew — стал больше, как растение.' },
        { after: 'up in ', keys: 'sl', say: 'Нужен артикль: *a small town*.' }
      ] },
    { id: 'pv-go-on', ru: 'Что здесь происходит?', ctx: 'частица: on',
      en: ["What's going on here?", "What's going on?", "What's going on in here?", "What's going on over here?"],
      note: '*go on* — происходить. *What is going on?* — «что происходит?». Ещё go on — «продолжай».',
      traps: [
        { after: 'what ', start: true, keys: 'h', say: 'What happens — «что бывает обычно». Прямо сейчас — *What is going on*.' }
      ] },
    { id: 'pv-come-over', ru: 'Приходи к нам в субботу.', ctx: 'частица: over',
      en: ['Come over on Saturday.', 'Come over this Saturday.', 'Come over to our place on Saturday.', 'Come over Saturday.'],
      note: '*come over* — прийти в гости. «К нам» отдельно переводить не обязательно: оно уже в over.',
      traps: [
        { after: 'come ', start: true, keys: 't', say: 'Come to us — калька. В гости зовут *come over*.' }
      ] },
    { id: 'pv-write-down', ru: 'Подожди, я это запишу.', ctx: 'частица: down',
      en: ["Wait, I'll write it down.", 'Wait, let me write it down.', "Hold on, I'll write it down.", 'Hold on, let me write it down.', "Wait, I'll write that down.", 'Wait, let me write that down.'],
      note: '*write down* — записать, чтобы не забыть. Местоимение — в середину: *write it down*.',
      traps: [
        { after: 'write ', keys: 'd', say: 'Местоимение — в середину: *write it down*.' },
        { after: ["i'll ", 'i will ', 'let me '], keys: 'r', say: 'Record — записать звук или видео. На бумагу — *write down*.' }
      ] },
    { id: 'pv-throw-away', ru: 'Не выбрасывай это, оно мне ещё нужно.', ctx: 'частица: away',
      en: ["Don't throw it away, I still need it.", "Don't throw this away, I still need it.", "Don't throw that away, I still need it.", "Don't throw it away, I might need it.", "Don't throw it away, I need it."],
      note: '*throw away* — выбросить. Местоимение — в середину: *throw it away*. Throw out значит то же самое.',
      traps: [
        { after: 'throw ', keys: 'a', say: 'Местоимение — в середину: *throw it away*.' }
      ] },

    /* ───── 2. Средние: быт, планы, привычки ───── */

    { id: 'pv-give-back', ru: 'Верни мне телефон!', ctx: 'частица: back',
      en: ['Give me back my phone!', 'Give me my phone back!', 'Give my phone back!', 'Give back my phone!'],
      note: '*give back* — вернуть вещь хозяину. Оба порядка верны: give me back my phone и give me my phone back.',
      traps: [
        { after: '', start: true, keys: 'r', say: 'Return me my phone — так не говорят. Вернуть вещь — *give back*.' }
      ] },
    { id: 'pv-look-after', ru: 'Кто присмотрит за детьми?', ctx: 'частица: after',
      en: ['Who will look after the kids?', 'Who will look after the children?', "Who's going to look after the kids?", 'Who is going to look after the kids?', "Who's going to look after the children?", 'Who is going to look after the children?'],
      note: '*look after* — присматривать, заботиться. В США чаще говорят take care of. Не путайте с look for — искать.' },
    { id: 'pv-run-out-of', ru: 'У нас закончилось молоко.', ctx: 'частицы: out of',
      en: ["We've run out of milk.", 'We ran out of milk.', "We've just run out of milk.", 'We just ran out of milk.'],
      note: '*run out of* — «у нас закончилось». Подлежащее — тот, у кого закончилось: We ran out of milk.',
      traps: [
        { after: '', start: true, keys: 'mo', say: 'Не Milk ended. Начните с тех, у кого закончилось: *We ran out of* milk.' },
        { after: ['run out ', 'ran out '], keys: 'm', say: 'Нужно of: run out *of* milk.' }
      ] },
    { id: 'pv-hang-out', ru: 'Вчера я гулял с друзьями.', ctx: 'частица: out',
      en: ['I hung out with my friends yesterday.', 'Yesterday I hung out with my friends.', 'I hung out with friends yesterday.', 'Yesterday I hung out with friends.', 'I hung out with some friends yesterday.'],
      note: '*hang out* — проводить время вместе, «гулять» с друзьями. Walk — только идти пешком. Прошедшее — hung.',
      traps: [
        { after: ['i ', 'yesterday i '], start: true, keys: 'w', say: 'Walked — «шёл пешком». Проводить время с друзьями — *hung out*.' },
        { after: ['i h', 'yesterday i h'], start: true, keys: 'a', say: 'Hang — неправильный глагол: *hung out*.' }
      ] },
    { id: 'pv-work-out', ru: 'Я тренируюсь три раза в неделю.', ctx: 'частица: out',
      en: ['I work out three times a week.', 'I work out 3 times a week.', 'I work out three times per week.'],
      note: '*work out* — тренироваться, заниматься в зале. Train — скорее про спортсменов. В неделю — *a week*.',
      traps: [
        { after: ['three times ', '3 times '], keys: 'i', say: 'В неделю — *a week*: three times a week. Без in.' }
      ] },
    { id: 'pv-show-up', ru: 'Он так и не пришёл.', ctx: 'частица: up',
      en: ['He never showed up.', "He didn't show up."],
      note: '*show up* — прийти, появиться там, где ждали. *Never showed up* — «так и не пришёл».' },
    { id: 'pv-look-up', ru: 'Я посмотрю это слово в словаре.', ctx: 'частица: up',
      en: ["I'll look up this word in the dictionary.", "I'll look this word up in the dictionary.", "I'll look up the word in the dictionary.", "I'll look the word up in the dictionary.", "I'll look it up in the dictionary.", "I'll look up this word in a dictionary."],
      note: '*look up* — найти в словаре или в интернете. Местоимение — только в середину: *look it up*.',
      traps: [
        { after: ["i'll ", 'i will '], start: true, keys: 'ws', say: 'Не watch и не see. Найти в словаре — *look up*.' },
        { after: 'in ', keys: 'd', say: 'Нужен артикль: in *the dictionary*.' }
      ] },
    { id: 'pv-fill-out', ru: 'Заполните эту анкету, пожалуйста.', ctx: 'частица: out',
      en: ['Please fill out this form.', 'Fill out this form, please.', 'Please fill this form out.', 'Fill this form out, please.', 'Could you fill out this form, please?', 'Please fill out the form.'],
      note: '*fill out* — заполнить анкету или бланк. В Британии чаще fill in. Сама анкета — *form*.',
      traps: [
        { after: ['fill out this ', 'fill this ', 'fill out the '], keys: 'b', say: 'Анкета, бланк — *form*. Blank значит «пустой».' }
      ] },
    { id: 'pv-slow-down', ru: 'Сбавь скорость, здесь камеры.', ctx: 'частица: down',
      en: ['Slow down, there are cameras here.', 'Slow down, there are speed cameras here.', 'Slow down, there are cameras around here.'],
      note: '*slow down* — сбавить скорость. Так же просят говорить медленнее. Обратное — speed up.' },
    { id: 'pv-break-down', ru: 'У меня сломалась машина.', ctx: 'частица: down',
      en: ['My car broke down.', 'My car has broken down.', 'My car just broke down.'],
      note: '*break down* — сломаться: о машине и технике. Просто broke — «разбил» или «я на мели».',
      traps: [
        { after: 'my car ', start: true, keys: 'w', say: 'Не was broken: машина ломается сама — *broke down*.' }
      ] },
    { id: 'pv-sign-up', ru: 'Я записался на курсы английского.', ctx: 'частица: up',
      en: ['I signed up for an English course.', "I've signed up for an English course.", 'I signed up for English classes.', "I've signed up for English classes.", 'I signed up for an English class.', 'I signed up for English lessons.'],
      note: '*sign up for* — записаться на курс, в секцию, на рассылку. После sign up — *for*.',
      traps: [
        { after: 'signed up ', keys: 'o', say: 'Записаться на — sign up *for*. Не on.' }
      ] },
    { id: 'pv-stay-up', ru: 'Я вчера засиделся допоздна.', ctx: 'частица: up',
      en: ['I stayed up late last night.', 'I stayed up late yesterday.', 'I stayed up too late last night.', 'I stayed up really late last night.', 'Last night I stayed up late.'],
      note: '*stay up* — не ложиться спать. *Stay up late* — засидеться допоздна. О вчерашнем вечере — last night.' },
    { id: 'pv-eat-out', ru: 'Мы слишком часто едим не дома.', ctx: 'частица: out',
      en: ['We eat out too often.', 'We eat out too much.', 'We eat out way too often.'],
      note: '*eat out* — есть в кафе или ресторане, не дома. Противоположное — eat in.' },
    { id: 'pv-drop-off', ru: 'Я подброшу тебя до вокзала.', ctx: 'частица: off',
      en: ["I'll drop you off at the station.", "I'll drop you off at the train station.", 'I can drop you off at the station.', 'I can drop you off at the train station.'],
      note: '*drop off* — подвезти и высадить. Местоимение — в середину: *drop you off*. Обратное — pick you up.',
      traps: [
        { after: 'drop ', keys: 'o', say: 'Местоимение — в середину: *drop you off*.' },
        { after: 'off ', keys: 't', say: 'Высадить где — *at* the station. Не to.' }
      ] },
    { id: 'pv-turn-down', ru: 'Сделай музыку потише, пожалуйста.', ctx: 'частица: down',
      en: ['Turn down the music, please.', 'Turn the music down, please.', 'Please turn down the music.', 'Please turn the music down.', 'Could you turn down the music, please?', 'Could you turn the music down, please?'],
      note: '*turn down* — сделать тише. Громче — turn up. Ещё turn down — отказаться: turn down an offer.',
      traps: [
        { after: ['', 'please ', 'could you '], start: true, keys: 'm', say: 'Make quieter — калька. Сделать тише — *turn down*.' }
      ] },
    { id: 'pv-set-up', ru: 'Мне нужно настроить новый телефон.', ctx: 'частица: up',
      en: ['I need to set up my new phone.', 'I have to set up my new phone.', 'I need to set my new phone up.', 'I need to set up the new phone.', "I've got to set up my new phone."],
      note: '*set up* — настроить, подготовить к работе. Формы совпадают: set, set, set. Tune — про гитару и радио.' },
    { id: 'pv-go-ahead', ru: 'Давайте, начинайте без меня.', ctx: 'частица: ahead',
      en: ['Go ahead and start without me.', 'Go ahead, start without me.'],
      note: '*go ahead* — «давай, действуй»: разрешение начать или продолжить. Часто с and: go ahead and start.',
      traps: [
        { after: '', start: true, keys: 'l', say: "Let's — «давайте вместе». Разрешить другим начать — *Go ahead*." }
      ] },
    { id: 'pv-figure-out', ru: 'Не могу разобраться, как это работает.', ctx: 'частица: out',
      en: ["I can't figure out how it works.", "I can't figure out how this works.", "I can't figure out how this thing works.", "I can't figure out how that works."],
      note: '*figure out* — разобраться, понять своим умом. После него порядок слов прямой: *how it works*.',
      traps: [
        { after: 'figure out how ', keys: 'd', say: 'Внутри фразы порядок прямой: *how it works*, без does.' }
      ] },
    { id: 'pv-deal-with', ru: 'Я сам с этим разберусь.', ctx: 'частица: with',
      en: ["I'll deal with it myself.", "I'll deal with this myself.", "I'll deal with that myself.", 'I can deal with it myself.', "I'll deal with it on my own."],
      note: '*deal with* — разобраться с проблемой, заняться ей. Всегда с with: deal with it, deal with clients.' },
    { id: 'pv-break-up', ru: 'Они расстались в прошлом году.', ctx: 'частица: up',
      en: ['They broke up last year.', 'Last year they broke up.'],
      note: '*break up* — расстаться (о паре). С кем — через with: break up with him. *Last year* — без in и the.' },

    /* ───── 3. Сложнее: три слова, неочевидный смысл, место местоимения ───── */

    { id: 'pv-get-along-with', ru: 'Я хорошо лажу с коллегами.', ctx: 'частицы: along with',
      en: ['I get along well with my coworkers.', 'I get along with my coworkers.', 'I get along well with my colleagues.', 'I get along with my colleagues.', 'I get along great with my coworkers.', 'I get along really well with my coworkers.'],
      note: '*get along with* — ладить с кем-то. В Британии говорят get on with. По-английски уточняют: *my* coworkers.',
      traps: [
        { after: 'i ', start: true, keys: 'h', say: 'Have good relations — канцелярит. В жизни — *get along with*.' }
      ] },
    { id: 'pv-put-off', ru: 'Не откладывай это на потом.', ctx: 'частица: off',
      en: ["Don't put it off until later.", "Don't put it off.", "Don't put this off until later.", "Don't put it off till later.", "Don't put that off until later."],
      note: '*put off* — отложить на потом. Местоимение — в середину: *put it off*. Postpone — то же, но официально.',
      traps: [
        { after: 'put ', keys: 'o', say: 'Местоимение — в середину: *put it off*.' },
        { after: ["don't p", 'do not p'], start: true, keys: 'o', say: 'Postpone — официально. В разговоре — *put it off*.' }
      ] },
    { id: 'pv-call-off', ru: 'Встречу отменили в последний момент.', ctx: 'частица: off',
      en: ['They called off the meeting at the last minute.', 'They called the meeting off at the last minute.', 'The meeting was called off at the last minute.', 'They called off the meeting at the last moment.', 'The meeting was called off at the last moment.', 'The meeting got called off at the last minute.'],
      note: '*call off* — отменить запланированное: встречу, матч, свадьбу. В последний момент — *at the last minute*.',
      traps: [
        { after: ['off the meeting ', 'the meeting off ', 'was called off ', 'got called off '], keys: 'i', say: 'В последний момент — *at* the last minute. Не in.' }
      ] },
    { id: 'pv-end-up', ru: 'В итоге мы остались дома.', ctx: 'частица: up',
      en: ['We ended up staying home.', 'We ended up staying at home.', 'We ended up staying in.'],
      note: '*end up* + -ing — «в итоге получилось так». *We ended up staying home* — в итоге остались дома.',
      traps: [
        { after: 'ended up ', keys: 't', say: 'После end up — форма на -ing: *ended up staying*.' },
        { after: 'ended up stay', keys: ' e', say: 'После end up — форма на -ing: *ended up staying*.' }
      ] },
    { id: 'pv-get-rid-of', ru: 'Пора избавиться от старого дивана.', ctx: 'частица: of',
      en: ["It's time to get rid of the old couch.", "It's time to get rid of the old sofa.", "It's time to get rid of that old couch.", "It's time to get rid of our old couch.", "It's time to get rid of this old couch.", "It's time to get rid of that old sofa."],
      note: '*get rid of* — избавиться от чего-то. Русское «от» здесь — *of*, а не from.',
      traps: [
        { after: 'get rid ', keys: 'f', say: 'Избавиться от — get rid *of*. Не from.' }
      ] },
    { id: 'pv-come-up-with', ru: 'Мы придумали новый план.', ctx: 'частицы: up with',
      en: ['We came up with a new plan.', "We've come up with a new plan."],
      note: '*come up with* — придумать идею, план, решение. Invent — изобрести то, чего раньше не было: телефон, колесо.',
      traps: [
        { after: ['we ', "we've ", 'we have '], start: true, keys: 'i', say: 'Invent — изобрести прибор. План или идею — *come up with*.' },
        { after: 'up with ', keys: 'n', say: 'Нужен артикль: *a new plan*.' }
      ] },
    { id: 'pv-run-into', ru: 'Вчера я случайно встретил старого друга.', ctx: 'частица: into',
      en: ['I ran into an old friend yesterday.', 'Yesterday I ran into an old friend.', 'I ran into an old friend of mine yesterday.', 'I ran into my old friend yesterday.'],
      note: '*run into* — случайно встретить знакомого. Слово accidentally не нужно: случайность уже внутри.',
      traps: [
        { after: ['i ', 'yesterday i '], start: true, keys: 'ma', say: 'Случайно встретить — одно выражение: *ran into*. Met — встретиться по плану.' },
        { after: 'ran into ', keys: 'o', say: 'Нужен артикль: *an old friend*.' }
      ] },
    { id: 'pv-catch-up', ru: 'Не ждите меня, я вас догоню.', ctx: 'частица: up',
      en: ["Don't wait for me, I'll catch up.", "Don't wait for me, I'll catch up with you.", "Don't wait, I'll catch up.", "Don't wait, I'll catch up with you.", "Don't wait for me, I'll catch up later.", "Don't wait for me, I'll catch up with you later."],
      note: '*catch up* — догнать, нагнать. Кого — через with: catch up *with* you. Ждать кого-то — wait *for*.',
      traps: [
        { after: ["don't wait ", 'do not wait '], start: true, keys: 'm', say: 'Ждать кого-то — wait *for* me.' },
        { after: ["i'll catch ", 'i will catch '], keys: 'y', say: 'Catch you — «поймаю вас». Догоню — *catch up* with you.' }
      ] },
    { id: 'pv-keep-up-with', ru: 'Я за тобой не успеваю.', ctx: 'частицы: up with',
      en: ["I can't keep up with you.", "I can't keep up.", "I can't keep up with you guys."],
      note: '*keep up with* — успевать, не отставать. А catch up — догнать того, кто уже ушёл вперёд.' },
    { id: 'pv-get-over', ru: 'Он до сих пор не может это пережить.', ctx: 'частица: over',
      en: ["He still can't get over it.", "He still can't get over this.", "He still can't get over that.", "He still hasn't gotten over it."],
      note: '*get over* — пережить, оправиться: после обиды, расставания, болезни. Местоимение — в конце: *get over it*.',
      traps: [
        { after: ["can't get ", 'cannot get '], keys: 'it', say: 'Здесь местоимение идёт в конце: *get over it*.' },
        { after: ["still can't ", 'still cannot '], keys: 's', say: 'Survive — выжить в катастрофе. Обиду или расставание — *get over*.' }
      ] },
    { id: 'pv-turn-out', ru: 'Оказалось, что он был прав.', ctx: 'частица: out',
      en: ['It turned out that he was right.', 'It turned out he was right.', 'Turns out he was right.', 'It turns out he was right.', 'It turns out that he was right.', 'He turned out to be right.'],
      note: '*turn out* — оказаться. Начинают с it: *It turned out* that... Или так: He turned out to be right.',
      traps: [
        { after: 'turn', start: true, keys: 'e', say: 'Нужно подлежащее: *It turned out*.' }
      ] },
    { id: 'pv-point-out', ru: 'Спасибо, что указал мне на это.', ctx: 'частица: out',
      en: ['Thanks for pointing that out.', 'Thank you for pointing that out.', 'Thanks for pointing it out.', 'Thank you for pointing it out.', 'Thanks for pointing this out.', 'Thank you for pointing this out.'],
      note: '*point out* — указать на что-то, обратить чьё-то внимание. Местоимение — в середину: *point it out*.',
      traps: [
        { after: ['thanks for pointing ', 'thank you for pointing '], start: true, keys: 'o', say: 'Не pointing on и не pointing out it. Местоимение — в середину: *pointing that out*.' }
      ] },
    { id: 'pv-bring-up', ru: 'Не поднимай эту тему за ужином.', ctx: 'частица: up',
      en: ["Don't bring that up at dinner.", "Don't bring it up at dinner.", "Don't bring this up at dinner.", "Don't bring up that topic at dinner.", "Don't bring up this topic at dinner.", "Don't bring that up over dinner."],
      note: '*bring up* — поднять тему, заговорить о чём-то. Местоимение — в середину: *bring it up*.' },
    { id: 'pv-come-across', ru: 'Я наткнулся на интересную статью.', ctx: 'частица: across',
      en: ['I came across an interesting article.', "I've come across an interesting article.", 'I just came across an interesting article.'],
      note: '*come across* — случайно наткнуться: на статью, слово, вещь. Про случайную встречу с человеком — run into.',
      traps: [
        { after: ['came across ', 'come across '], keys: 'i', say: 'Нужен артикль: *an interesting article*.' }
      ] },
    { id: 'pv-count-on', ru: 'Можешь на меня рассчитывать.', ctx: 'частица: on',
      en: ['You can count on me.', 'You can always count on me.'],
      note: '*count on* — рассчитывать, полагаться на кого-то. Предлог всегда *on*: count on me.',
      traps: [
        { after: ['you can ', 'you can always '], start: true, keys: 'h', say: 'Hope on me — калька. Положиться на человека — *count on* me.' }
      ] },
    { id: 'pv-let-down', ru: 'Я тебя не подведу.', ctx: 'частица: down',
      en: ["I won't let you down.", "I'm not going to let you down.", "I promise I won't let you down.", "I'll never let you down."],
      note: '*let down* — подвести, разочаровать. Местоимение — в середину: *let you down*.',
      traps: [
        { after: 'let ', keys: 'd', say: 'Местоимение — в середину: *let you down*.' }
      ] },
    { id: 'pv-make-up', ru: 'Я это не выдумал, это правда.', ctx: 'частица: up',
      en: ["I didn't make it up, it's true.", "I didn't make this up, it's true.", "I didn't make that up, it's true.", "I'm not making it up, it's true.", "I'm not making this up, it's true."],
      note: '*make up* — выдумать, сочинить. Местоимение — в середину: *make it up*. Ещё make up — помириться.',
      traps: [
        { after: ["i didn't make ", 'i did not make '], start: true, keys: 'u', say: 'Местоимение — в середину: *make it up*.' },
        { after: ["i didn't ", 'i did not '], start: true, keys: 'i', say: 'Invent — изобрести прибор. Выдумать историю — *make up*.' }
      ] },
    { id: 'pv-cut-down-on', ru: 'Мне нужно есть меньше сладкого.', ctx: 'частицы: down on',
      en: ['I need to cut down on sugar.', 'I need to cut down on sweets.', 'I have to cut down on sugar.', 'I have to cut down on sweets.', 'I should cut down on sugar.', 'I should cut down on sweets.'],
      note: '*cut down on* — сократить, есть или тратить меньше. После on сразу идёт что: cut down on sugar.',
      traps: [
        { after: 'cut down ', keys: 's', say: 'Нужно on: cut down *on* sugar.' }
      ] },
    { id: 'pv-put-up-with', ru: 'Я не собираюсь это терпеть.', ctx: 'частицы: up with',
      en: ["I'm not going to put up with this.", "I'm not going to put up with it.", "I'm not going to put up with that.", "I won't put up with this.", "I won't put up with it.", "I won't put up with that."],
      note: '*put up with* — терпеть, мириться с неприятным. Три слова не разрываются, местоимение — в конце.',
      traps: [
        { after: 'put ', keys: 'it', say: 'Здесь местоимение идёт в конце: put up with *it*.' }
      ] },
    { id: 'pv-get-away-with', ru: 'Ему это с рук не сойдёт.', ctx: 'частицы: away with',
      en: ["He won't get away with it.", "He won't get away with this.", "He won't get away with that.", "He's not going to get away with it.", "He isn't going to get away with it.", "He's not going to get away with this."],
      note: '*get away with* — сойти с рук, остаться безнаказанным. Подлежащее — человек: *He* got away with it.',
      traps: [
        { after: '', start: true, keys: 'it', say: 'Подлежащее — человек, а не «это»: *He* will not get away with it.' }
      ] }
  ]
});
