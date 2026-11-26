/* Колода «Small talk»: знакомство, погода, выходные, хобби. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'smalltalk', title: 'Small talk', sub: 'знакомство, погода, выходные, хобби',
  phrases: [
    /* ───── 1. Простые: короткие реплики и базовые шаблоны ───── */

    { id: 'st-how-about-you', ru: 'А ты?', ctx: 'возвращаем вопрос',
      en: ['How about you?', 'What about you?', 'And you?', 'And what about you?', 'And how about you?'],
      note: '*How about you?* возвращает вопрос собеседнику. Так разговор не превращается в допрос.' },
    { id: 'st-long-time', ru: 'Сто лет не виделись!', ctx: 'встретил старого знакомого',
      en: ['Long time no see!', "It's been a while!", "It's been ages!", "It's been so long!", "I haven't seen you in ages!"],
      note: 'Шутливое приветствие после долгой разлуки. Грамматики тут нет, фраза запоминается целиком: *long time no see*.' },
    { id: 'st-how-was-weekend', ru: 'Как прошли выходные?', ctx: 'в понедельник',
      en: ['How was your weekend?', 'How was the weekend?', 'How did your weekend go?', 'How did you spend your weekend?'],
      note: '«Как прошло» — *How was...?* How was your weekend, your trip, your day. Глагол pass здесь не нужен.' },
    { id: 'st-sounds-great', ru: 'Звучит здорово!', ctx: 'реакция на план',
      en: ['That sounds great!', 'Sounds great!', 'That sounds awesome!', 'That sounds amazing!', 'It sounds great!', 'That sounds wonderful!'],
      note: '*That sounds* + прилагательное: sounds great, sounds interesting. That часто опускают: Sounds great!' },
    { id: 'st-no-way', ru: 'Да ладно!', ctx: 'удивление',
      en: ['No way!', 'Really?', 'Seriously?', 'Are you serious?', "You're kidding!", 'Are you kidding?'],
      note: '*No way!* — «да ладно, не может быть». Этими же словами отказывают: «ни за что».' },
    { id: 'st-this-is-brother', ru: 'Познакомься, это мой брат.', ctx: 'представляем человека',
      en: ['This is my brother.', 'Meet my brother.'],
      note: 'Знакомя людей, говорят *This is...*, даже про человека. В ответ: Nice to meet you.',
      traps: [
        { after: '', start: true, keys: 'ih', say: 'Представляя человека, говорят *This is*. Не It is и не He is.' }
      ] },
    { id: 'st-cold-outside', ru: 'На улице холодно.', ctx: 'погода',
      en: ["It's cold outside.", "It's cold out.", "It's cold out there.", "It's chilly outside."],
      note: "Погода начинается с *It's*: it's cold, it's sunny. «На улице» — outside, не on the street.",
      traps: [
        { after: ['cold o', 'chilly o'], keys: 'n', say: 'На улице — *outside*. On the street — это буквально «на проезжей части».' }
      ] },
    { id: 'st-love-this-song', ru: 'Обожаю эту песню!', ctx: 'про музыку',
      en: ['I love this song!', 'I love that song!', 'I really love this song!', 'I really like this song!'],
      note: '*I love* — обычное «обожаю» про песни, еду, места. Пафоса, как в русском «люблю», тут нет.' },
    { id: 'st-happy-for-you', ru: 'Я так рад за тебя!', ctx: 'реакция на хорошую новость',
      en: ["I'm so happy for you!", "I'm happy for you!", "I'm really happy for you!", "I'm very happy for you!", 'Good for you!'],
      note: 'Рад за кого-то — *happy for* you. Отдельное Good for you! бывает и искренним, и с иронией.' },
    { id: 'st-into-photography', ru: 'Я увлекаюсь фотографией.', ctx: 'хобби',
      en: ["I'm into photography.", "I'm really into photography.", "I'm interested in photography.", 'I like photography.', 'I love photography.', 'Photography is my hobby.'],
      note: "*Be into* — увлекаться: I'm into music, into running. Живее, чем I'm interested in." },
    { id: 'st-getting-cold', ru: 'Что-то холодает.', ctx: 'погода',
      en: ["It's getting cold.", "It's getting colder.", "It's getting chilly.", "It's getting cold out.", "It's getting cold outside."],
      note: "*Get* + прилагательное — «становиться»: it's getting cold, getting dark, getting late." },
    { id: 'st-beautiful-day', ru: 'Какой прекрасный день!', ctx: 'погода',
      en: ['What a beautiful day!', 'What a lovely day!', 'What a nice day!', 'What a great day!', 'What a gorgeous day!', 'Such a beautiful day!'],
      note: 'Восклицание «какой...!» — *What a* + существительное: What a day! What a view!',
      traps: [
        { after: ['what ', 'such '], start: true, keys: 'b', say: 'Перед исчисляемым нужен артикль: What *a* beautiful day!' }
      ] },
    { id: 'st-really-like-job', ru: 'Мне очень нравится моя работа.', ctx: 'про работу',
      en: ['I really like my job.', 'I really enjoy my job.', 'I really love my job.', 'I like my job a lot.', 'I like my job very much.', 'I love my job.'],
      note: 'Very не ставят перед глаголом. «Очень нравится» — *really like* или like ... a lot.',
      traps: [
        { after: 'i ', start: true, keys: 'v', say: 'Не I very like. Перед глаголом — *really*: I really like my job.' }
      ] },
    { id: 'st-work-as', ru: 'Я работаю дизайнером.', ctx: 'про работу',
      en: ['I work as a designer.', "I'm a designer.", "I'm working as a designer."],
      note: 'Кем работаешь — *work as a* + профессия. Артикль обязателен: a designer, an engineer.',
      traps: [
        { after: ['as ', "i'm ", 'i am '], keys: 'd', say: 'Профессия — с артиклем: *a* designer.' }
      ] },
    { id: 'st-have-we-met', ru: 'Мы раньше не встречались?', ctx: 'лицо кажется знакомым',
      en: ['Have we met before?', "Haven't we met before?", 'Have we met?', 'Have we met somewhere before?'],
      note: 'Опыт «когда-либо до этого момента» — Present Perfect: *Have we met* before? Не Did we meet.' },
    { id: 'st-name-again', ru: 'Напомни, как тебя зовут?', ctx: 'забыл имя',
      en: ['What was your name again?', "What's your name again?", 'Sorry, what was your name again?', "Sorry, what's your name again?"],
      note: '*Again* в конце вопроса — «напомни». Was вместо is звучит мягче: вы как будто уже знали имя.',
      traps: [
        { after: ['', 'sorry, '], start: true, keys: 'h', say: 'Не How. Про имя спрашивают *What*: What was your name?' }
      ] },
    { id: 'st-used-to-play', ru: 'Раньше я играл в теннис.', ctx: 'хобби в прошлом',
      en: ['I used to play tennis.', 'I used to play tennis before.'],
      note: '*Used to* + глагол — «раньше делал, а теперь нет»: I used to play, I used to live there.',
      traps: [
        { after: 'play ', keys: 'i', say: 'Play + игра без предлога: play *tennis*, не play in tennis.' }
      ] },
    { id: 'st-tell-me-more', ru: 'Расскажи поподробнее!', ctx: 'интересно, что дальше',
      en: ['Tell me more!', 'Tell me more about it!', 'Tell me more about that!', 'Tell me more about this!'],
      note: '*Tell* требует «кому»: tell me, tell him. Say — без адресата: say something.',
      traps: [
        { after: '', start: true, keys: 's', say: 'Рассказать кому-то — *tell me*. Say me не говорят.' }
      ] },
    { id: 'st-moved-here', ru: 'Я переехал сюда в прошлом году.', ctx: 'откуда ты',
      en: ['I moved here last year.', 'I relocated here last year.'],
      note: 'Два места без предлога: moved *here* и *last year*. В русском оба раза просится «в».',
      traps: [
        { after: ['moved ', 'relocated '], keys: 't', say: 'Перед here предлог не нужен: moved *here*, не to here.' },
        { after: 'here ', keys: 'i', say: 'С last, next и this предлог не ставят: *last year*, без in.' }
      ] },
    { id: 'st-what-brings-you', ru: 'Что привело тебя сюда?', ctx: 'знакомство в новом городе',
      en: ['What brings you here?', 'What brought you here?', 'So, what brings you here?'],
      note: '*What brings you here?* — мягкий способ спросить «зачем ты здесь». Why are you here звучит как допрос.' },
    { id: 'st-keep-in-touch', ru: 'Давай не теряться!', ctx: 'прощаемся надолго',
      en: ["Let's keep in touch!", "Let's stay in touch!", 'Keep in touch!', 'Stay in touch!', "Let's keep in contact!"],
      note: '*Keep in touch* — оставаться на связи. Потерять связь — lose touch.' },

    /* ───── 2. Средние: предлоги, артикли, устойчивые связки ───── */

    { id: 'st-originally-from', ru: 'Я родом из маленького городка.', ctx: 'откуда ты',
      en: ["I'm originally from a small town.", "I'm from a small town.", 'I come from a small town.', "I'm from a small town originally."],
      note: '*Originally from* — «родом из». Удобно, когда живёшь уже в другом месте.',
      traps: [
        { after: 'from ', keys: 's', say: 'Нужен артикль: from *a* small town.' }
      ] },
    { id: 'st-heard-a-lot', ru: 'Я много о тебе слышал.', ctx: 'знакомство через друзей',
      en: ["I've heard a lot about you.", "I've heard so much about you.", 'I heard a lot about you.', "I've heard lots about you."],
      note: 'Much в утвердительных фразах звучит неестественно. Говорят *a lot* или so much.',
      traps: [
        { after: 'heard ', keys: 'm', say: 'В утверждении не much, а *a lot*: heard a lot about you.' }
      ] },
    { id: 'st-how-did-you-meet', ru: 'Как вы познакомились?', ctx: 'спрашиваем пару или друзей',
      en: ['How did you two meet?', 'How did you meet?', 'How did you guys meet?', 'How do you know each other?', 'How did you meet each other?'],
      note: 'Познакомиться — просто *meet*. *You two* — «вы двое», когда обращаешься к паре.',
      traps: [
        { after: 'how ', start: true, keys: 'y', say: 'В вопросе нужен вспомогательный глагол: How *did* you meet?' }
      ] },
    { id: 'st-what-did-you-do', ru: 'Что делал на выходных?', ctx: 'после выходных',
      en: ['What did you do over the weekend?', 'What did you do on the weekend?', 'What did you do this weekend?', 'What did you do last weekend?', 'What did you do at the weekend?'],
      note: '*Over the weekend* — «за выходные, на выходных». С weekend работают over и on, но не in.',
      traps: [
        { after: 'did you do ', keys: 'i', say: 'На выходных — *over* the weekend или on the weekend. Не in.' }
      ] },
    { id: 'st-nothing-much', ru: 'Да ничего особенного, просто сидел дома.', ctx: 'ответ про выходные',
      en: ['Nothing much, I just stayed home.', 'Nothing special, I just stayed home.', 'Nothing much, I just stayed at home.', 'Nothing special, I just stayed at home.', 'Not much, I just stayed home.', 'Nothing much, just stayed home.'],
      note: '*Nothing much* — дежурный ответ на «что делал?». «Сидеть дома» — stay home, не sit at home.' },
    { id: 'st-plans-tonight', ru: 'Есть планы на сегодняшний вечер?', ctx: 'зовём куда-нибудь',
      en: ['Do you have any plans for tonight?', 'Any plans for tonight?', 'Do you have plans for tonight?', 'Do you have any plans tonight?', 'Got any plans for tonight?', 'Do you have any plans for this evening?'],
      note: '*Tonight* — и «сегодня вечером», и «сегодня ночью». Планы на вечер — plans *for* tonight.',
      traps: [
        { after: ['for to', 'plans to'], keys: 'd', say: 'Сегодня вечером — *tonight* или this evening. Today evening не говорят.' }
      ] },
    { id: 'st-visiting-parents', ru: 'На выходных я еду к родителям.', ctx: 'планы',
      en: ["I'm visiting my parents this weekend.", "I'm going to visit my parents this weekend.", "I'm going to see my parents this weekend.", "I'm seeing my parents this weekend.", "I'm visiting my parents on the weekend.", "This weekend I'm visiting my parents."],
      note: "Про договорённые планы — Present Continuous: *I'm visiting* my parents. С this weekend предлог не нужен." },
    { id: 'st-play-sports', ru: 'Ты занимаешься каким-нибудь спортом?', ctx: 'хобби и спорт',
      en: ['Do you play any sports?', 'Do you do any sports?', 'Do you play sports?', 'Do you do sports?', 'Are you into sports?'],
      note: 'Спортом «занимаются» через *play* или do: play sports, do yoga. Go in for sports — из старых учебников.' },
    { id: 'st-running-twice', ru: 'Я бегаю два раза в неделю.', ctx: 'спорт',
      en: ['I go running twice a week.', 'I run twice a week.', 'I go jogging twice a week.', 'I go for a run twice a week.', 'I go running two times a week.', 'I run two times a week.'],
      note: '*Go* + -ing про спорт и досуг: go running, go swimming. Частота — twice *a* week, без in.',
      traps: [
        { after: ['twice ', 'times '], keys: 'i', say: 'Два раза в неделю — twice *a* week, без in.' }
      ] },
    { id: 'st-good-at', ru: 'Я не очень хорошо готовлю.', ctx: 'хобби',
      en: ["I'm not very good at cooking.", "I'm not good at cooking.", "I'm not that good at cooking.", "I'm not a very good cook.", "I'm not a good cook.", "I'm not great at cooking."],
      note: '*Good at* + существительное или -ing: good at cooking, good at math. Плохо умею — bad at.',
      traps: [
        { after: ['good ', 'great '], keys: 'i', say: 'Уметь что-то — good *at*: good at cooking. Не good in.' }
      ] },
    { id: 'st-learning-guitar', ru: 'Я учусь играть на гитаре.', ctx: 'хобби',
      en: ["I'm learning to play the guitar.", "I'm learning to play guitar.", "I'm learning how to play the guitar.", "I'm learning how to play guitar.", "I'm learning guitar.", "I'm learning the guitar."],
      note: 'Play + инструмент без предлога: play the guitar, play the piano. Учиться навыку — *learn to*.',
      traps: [
        { after: ["i'm ", 'i am '], start: true, keys: 's', say: 'Осваивать навык — *learn*. Study — изучать предмет: study history.' },
        { after: 'play ', keys: 'o', say: 'Играть на инструменте — play *the* guitar. Предлог on не нужен.' }
      ] },
    { id: 'st-kind-of-music', ru: 'Какую музыку ты слушаешь?', ctx: 'про музыку',
      en: ['What kind of music do you listen to?', 'What music do you listen to?', 'What type of music do you listen to?', 'What sort of music do you listen to?', 'What kind of music do you like?', 'What music do you like?'],
      note: '*What kind of* — «какой, что за»: what kind of music, of movies, of food. У listen не теряем to.',
      traps: [
        { after: 'do you listen', keys: '?', say: 'Listen всегда с *to*, даже в конце вопроса: ...do you listen to?' }
      ] },
    { id: 'st-book-about', ru: 'О чём эта книга?', ctx: 'про книги',
      en: ["What's the book about?", "What's this book about?", "What's that book about?", "What's it about?"],
      note: "Предлог уходит в конец вопроса: *What's it about?* Так же: What are you looking at?",
      traps: [
        { after: '', start: true, keys: 'a', say: 'Не About what. Начните с *What*, а about уйдёт в конец.' }
      ] },
    { id: 'st-recommend-book', ru: 'Можешь посоветовать хорошую книгу?', ctx: 'про книги',
      en: ['Can you recommend a good book?', 'Could you recommend a good book?', 'Can you suggest a good book?', 'Could you suggest a good book?', 'Do you have any book recommendations?'],
      note: 'После *recommend* сразу идёт вещь: recommend a book, a movie, a place. Без me.',
      traps: [
        { after: ['can you ', 'could you '], start: true, keys: 'a', say: 'Посоветовать книгу или фильм — *recommend*. Advise — давать серьёзный совет.' },
        { after: ['recommend ', 'suggest '], keys: 'm', say: 'Не recommend me. Сразу что: *recommend a good book*.' }
      ] },
    { id: 'st-weather-like', ru: 'Какая у вас там погода?', ctx: 'созвон с другим городом',
      en: ["What's the weather like there?", "How's the weather there?", "What's the weather like over there?", "How's the weather over there?", 'How is the weather there?', 'How is the weather over there?'],
      note: "*What's ... like?* — «какой он?»: What's the weather like? What's your city like?",
      traps: [
        { after: ["how's the weather ", 'how is the weather '], start: true, keys: 'l', say: "С How слово like не нужно. Либо *What's ... like*, либо How's the weather." }
      ] },
    { id: 'st-looks-like-rain', ru: 'Похоже, будет дождь.', ctx: 'погода',
      en: ["It looks like it's going to rain.", "Looks like it's going to rain.", 'It looks like rain.', "It looks like it'll rain.", "I think it's going to rain."],
      note: '*It looks like* — «похоже, что». Дождь и снег в английском ещё и глаголы: it rains, it snows.',
      traps: [
        { after: ['going to ', "it'll ", 'it will '], keys: 'b', say: "Rain здесь глагол: it's going to *rain*. Не will be rain." }
      ] },
    { id: 'st-count-me-in', ru: 'Звучит весело, я в деле!', ctx: 'зовут на вечеринку',
      en: ['Sounds like fun, count me in!', 'That sounds like fun, count me in!', 'Sounds fun, count me in!', 'That sounds fun, count me in!', "Sounds like fun, I'm in!", "That sounds like fun, I'm in!"],
      note: '*Sounds like* + существительное: sounds like fun, like a plan. *Count me in* — «я с вами».',
      traps: [
        { after: 'fun', keys: 'n', say: 'Весело — *fun*. Funny — это «смешно».' }
      ] },
    { id: 'st-nice-of-you', ru: 'Это так мило с твоей стороны!', ctx: 'благодарим',
      en: ["That's so nice of you!", "That's so kind of you!", "That's very nice of you!", "That's very kind of you!", "It's so nice of you!", "That's really nice of you!"],
      note: '*Nice of you*, kind of you — «с твоей стороны». Предлог всегда of.',
      traps: [
        { after: ['nice ', 'kind '], keys: 'f', say: 'Мило с твоей стороны — nice *of* you. Не from your side.' }
      ] },
    { id: 'st-cant-wait', ru: 'Жду не дождусь выходных.', ctx: 'планы',
      en: ["I can't wait for the weekend.", "I can't wait for this weekend.", "I can't wait until the weekend.", "I can't wait till the weekend.", "I'm looking forward to the weekend.", "I'm so looking forward to the weekend."],
      note: "*Can't wait for* + существительное, *can't wait to* + глагол: I can't wait to see you." },
    { id: 'st-get-going', ru: 'Ладно, мне пора идти.', ctx: 'заканчиваем разговор',
      en: ['Anyway, I should get going.', 'Anyway, I have to go.', "Anyway, I've got to go.", 'Anyway, I need to go.', 'Well, I should get going.', 'Anyway, I should go.'],
      note: '*Anyway* подводит черту под разговором. *I should get going* мягче, чем I have to go.' },
    { id: 'st-nice-talking', ru: 'Было приятно пообщаться.', ctx: 'прощаемся',
      en: ['It was nice talking to you.', 'It was nice talking with you.', 'It was nice to talk to you.', 'It was great talking to you.', 'Nice talking to you.', 'It was nice chatting with you.'],
      note: 'Прощаясь, говорят *nice talking to you*. А nice to meet you — только при знакомстве.',
      traps: [
        { after: 'nice c', keys: 'o', say: 'Пообщаться — *talk* или chat. Communicate — про обмен информацией.' },
        { after: 'nice to ', keys: 'c', say: 'Пообщаться — *talk* или chat. Communicate — про обмен информацией.' }
      ] },

    /* ───── 3. Сложнее: времена, -ing после связок, порядок слов ───── */

    { id: 'st-been-to-japan', ru: 'Ты когда-нибудь был в Японии?', ctx: 'про путешествия',
      en: ['Have you ever been to Japan?', 'Have you been to Japan?', 'Have you ever visited Japan?', 'Have you been to Japan before?', 'Have you ever been to Japan before?'],
      note: '*Have you ever been to...?* — готовый вопрос про опыт. Ответ: Yes, I have или No, never.',
      traps: [
        { after: 'been ', keys: 'i', say: 'Побывать где-то — have been *to*: been to Japan. Не in.' }
      ] },
    { id: 'st-lived-here-for', ru: 'Я живу здесь уже три года.', ctx: 'откуда ты',
      en: ["I've lived here for three years.", "I've been living here for three years.", "I've lived here for 3 years.", "I've been living here for 3 years.", "I've been here for three years.", "I've been here for 3 years."],
      note: '«Живу уже три года» — Present Perfect + *for*. Слово «уже» отдельно не переводят.',
      traps: [
        { after: 'i ', start: true, keys: 'l', say: "Началось раньше и длится до сих пор: *I've lived* here. Не I live." },
        { after: 'here ', keys: 's', say: 'Срок — с *for*: for three years. Since — с точкой отсчёта: since 2020.' }
      ] },
    { id: 'st-how-long-doing', ru: 'Как давно ты этим занимаешься?', ctx: 'про хобби или работу',
      en: ['How long have you been doing that?', 'How long have you been doing this?', 'How long have you been doing it?'],
      note: '*How long have you been* + -ing — «как давно ты...». Ответ: for two years, since 2020.',
      traps: [
        { after: 'how long ', start: true, keys: 'da', say: 'Началось раньше и длится сейчас: How long *have you been* doing that?' }
      ] },
    { id: 'st-meet-in-person', ru: 'Здорово наконец-то увидеться вживую.', ctx: 'раньше общались онлайн',
      en: ["It's great to finally meet you in person.", 'Great to finally meet you in person.', "It's nice to finally meet you in person.", "It's so nice to finally meet you in person.", 'Nice to finally meet you in person.', "It's good to finally meet you in person."],
      note: 'Вживую — *in person*. Personally — это «лично я»: Personally, I like it.' },
    { id: 'st-supposed-to-snow', ru: 'На выходных обещают снег.', ctx: 'погода',
      en: ["It's supposed to snow this weekend.", "It's supposed to snow on the weekend.", "It's supposed to snow over the weekend.", "They say it's going to snow this weekend.", "It's going to snow this weekend.", "They say it'll snow this weekend."],
      note: "*Be supposed to* — «должно, по прогнозу или плану»: it's supposed to rain. Promise про погоду не говорят." },
    { id: 'st-used-to-heat', ru: 'Никак не привыкну к этой жаре.', ctx: 'погода',
      en: ["I can't get used to this heat.", "I can't get used to the heat.", "I still can't get used to this heat.", "I just can't get used to this heat.", "I can't get used to the heat here."],
      note: '*Get used to* — привыкнуть, дальше существительное или -ing. Не путайте с used to play — «раньше играл».' },
    { id: 'st-hang-out', ru: 'Давай как-нибудь потусим вместе.', ctx: 'новому знакомому',
      en: ['We should hang out sometime.', "Let's hang out sometime.", 'We should hang out sometime soon.', 'We should get together sometime.', "Let's get together sometime.", 'We should hang out some time.'],
      note: '*Hang out* — проводить время вместе, без особого плана. Sometime — «как-нибудь», без s.',
      traps: [
        { after: 'sometime', keys: 's', say: '*Sometime* — «как-нибудь». Sometimes — «иногда», это другое слово.' }
      ] },
    { id: 'st-feel-like', ru: 'Мне сегодня не хочется никуда идти.', ctx: 'зовут гулять вечером',
      en: ["I don't feel like going out tonight.", "I don't feel like going out today.", "I don't feel like going anywhere tonight.", "I don't feel like going anywhere today.", "I'm not in the mood to go out tonight.", "I don't really feel like going out tonight."],
      note: "*Feel like* + -ing — «хочется»: I feel like going out. Коротко: I don't feel like it.",
      traps: [
        { after: 'feel like ', keys: 't', say: 'После *feel like* — форма на -ing: feel like going, не to go.' }
      ] },
    { id: 'st-helps-relax', ru: 'Это помогает мне расслабиться после работы.', ctx: 'про хобби',
      en: ['It helps me relax after work.', 'It helps me to relax after work.', 'It helps me unwind after work.', 'That helps me relax after work.', 'It helps me to unwind after work.', 'This helps me relax after work.'],
      note: 'После *help me* — глагол без -ing: helps me relax. Unwind — «выдохнуть, отойти от дел».',
      traps: [
        { after: ['relax ', 'unwind '], keys: 'm', say: 'Relax уже значит «расслабиться»: helps me *relax*, без myself.' }
      ] },
    { id: 'st-movies-lately', ru: 'Видел в последнее время хорошие фильмы?', ctx: 'про кино',
      en: ['Have you seen any good movies lately?', 'Have you watched any good movies lately?', 'Have you seen any good movies recently?', 'Have you watched any good movies recently?', 'Seen any good movies lately?', 'Have you seen any good films lately?'],
      note: 'С *lately* и recently — Present Perfect: Have you seen...? Это период, который тянется до сих пор.',
      traps: [
        { after: ['movies la', 'films la'], keys: 's', say: 'В последнее время — *lately* или recently. Last time — «в прошлый раз».' }
      ] },
    { id: 'st-great-show', ru: 'Я сейчас смотрю один классный сериал.', ctx: 'про сериалы',
      en: ["I'm watching a great show right now.", "I'm watching a great series right now.", "I'm watching a great TV show right now.", "I'm watching a really good show right now.", "I'm watching a great show at the moment.", "I'm watching a cool show right now."],
      note: 'Сериал — *show* или series. «Один классный» — просто артикль: a great show.',
      traps: [
        { after: 'seri', keys: 'a', say: 'Сериал — *show* или series. Serial по-английски — «серийный».' }
      ] },
    { id: 'st-not-big-fan', ru: 'Я не большой любитель ужастиков.', ctx: 'про кино',
      en: ["I'm not a big fan of horror movies.", "I'm not a fan of horror movies.", "I'm not a big fan of horror films.", "I'm not really into horror movies.", "I'm not a huge fan of horror movies.", "I don't really like horror movies."],
      note: "*Not a big fan of* — мягкое «не люблю». Вежливее, чем I don't like.",
      traps: [
        { after: 'not ', keys: 'b', say: 'Нужен артикль: not *a* big fan.' },
        { after: 'horror', keys: 's', say: 'Ужастики — *horror movies*. Horrors — «ужасы» в прямом смысле.' }
      ] },
    { id: 'st-worth-watching', ru: 'Этот фильм стоит посмотреть.', ctx: 'советуем фильм',
      en: ['This movie is worth watching.', 'That movie is worth watching.', 'The movie is worth watching.', 'This movie is worth seeing.', 'This film is worth watching.', "It's worth watching."],
      note: '*Worth* + -ing — «стоит сделать»: worth watching, worth reading. Или worth a try.',
      traps: [
        { after: 'worth ', keys: 't', say: 'После *worth* — форма на -ing: worth watching, не worth to watch.' }
      ] },
    { id: 'st-looks-good-on-you', ru: 'Тебе идёт эта стрижка.', ctx: 'комплимент',
      en: ['That haircut looks good on you.', 'This haircut looks good on you.', 'That haircut suits you.', 'This haircut suits you.', 'That haircut looks great on you.', 'That haircut really suits you.'],
      note: '*Looks good on you* — «тебе идёт» про одежду, причёску, цвет. Короче: It suits you, без to.' },
    { id: 'st-know-what-you-mean', ru: 'Понимаю, о чём ты.', ctx: 'поддакиваем',
      en: ['I know what you mean.', 'I see what you mean.', 'I get what you mean.', 'I know exactly what you mean.', 'I understand what you mean.', "I know what you're talking about."],
      note: '*I know what you mean* показывает, что вы на одной волне. Вопрос отдельно: What do you mean?',
      traps: [
        { after: 'what ', keys: 'd', say: 'Внутри фразы порядок прямой: what *you mean*, без do.' }
      ] },
    { id: 'st-up-to-lately', ru: 'Чем занимался в последнее время?', ctx: 'давно не виделись',
      en: ['What have you been up to lately?', 'What have you been up to?', 'What have you been doing lately?', 'What have you been up to recently?', 'What have you been up to these days?', 'What have you been doing recently?'],
      note: '*Be up to* — «заниматься, поделывать». What are you up to? — «чем занят?»' },
    { id: 'st-how-come', ru: 'А чего ты так рано ушёл?', ctx: 'удивляемся, разговорно',
      en: ['How come you left so early?', 'Why did you leave so early?', 'How come you left early?', 'Why did you leave early?'],
      note: '*How come* — разговорное «почему, как так?». После него нет ни did, ни перестановки слов.',
      traps: [
        { after: 'how come ', start: true, keys: 'd', say: 'После *how come* порядок как в утверждении: how come you left, без did.' }
      ] },
    { id: 'st-reminds-me', ru: 'Это напомнило мне одну историю.', ctx: 'переходим к своей истории',
      en: ['That reminds me of a story.', 'This reminds me of a story.', 'It reminds me of a story.','That reminded me of a story.', 'This reminded me of a story.'],
      note: '*That reminds me* — удобный переход к своей теме. Remind of — напоминать о чём-то.',
      traps: [
        { after: ['that rem', 'this rem', 'it rem'], start: true, keys: 'e', say: 'Напомнить кому-то — *remind*. Remember — помнить самому.' },
        { after: ['reminds me ', 'reminded me '], keys: 'a', say: 'Напоминает о чём-то — remind *of*: reminds me of a story.' }
      ] }
  ]
});
