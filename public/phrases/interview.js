/* Колода «Собеседование»: о себе, опыт, вопросы работодателю. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'interview', title: 'Собеседование', sub: 'о себе, опыт, вопросы работодателю',
  phrases: [
    /* ───── 1. Простые: короткие фразы и базовые шаблоны ───── */

    { id: 'iv-work-as', ru: 'Я работаю менеджером проектов.', ctx: 'о себе',
      en: ['I work as a project manager.', "I'm a project manager.", "I'm working as a project manager."],
      note: 'Кем работаю — *work as* и артикль: as *a* project manager. Like тут значило бы «подобно».',
      traps: [
        { after: ['work as ', 'working as ', "i'm ", 'i am '], keys: 'p', say: 'Профессия в единственном числе — с артиклем: *a* project manager.' },
        { after: ['i work ', "i'm working ", 'i am working '], start: true, keys: 'l', say: 'Like — «подобно». Работать кем-то — work *as*.' }
      ] },
    { id: 'iv-small-company', ru: 'Сейчас я работаю в небольшой компании.', ctx: 'о себе',
      en: ['I currently work at a small company.', 'I currently work for a small company.', "I'm currently working at a small company.", "I'm currently working for a small company.", 'Right now I work at a small company.', 'I work at a small company now.'],
      note: '*Currently* — деловое «сейчас». Работать в компании — work *at* или *for* a company.' },
    { id: 'iv-tell-about-myself', ru: 'Давайте я немного расскажу о себе.', ctx: 'начало рассказа о себе',
      en: ['Let me tell you a little about myself.', 'Let me tell you a bit about myself.', 'Let me tell you a little bit about myself.', "I'll tell you a little about myself.", 'Let me tell you about myself.'],
      note: 'После *let me* глагол без to. У tell всегда есть «кому»: tell *you* about myself.',
      traps: [
        { after: 'let me t', start: true, keys: 'o', say: 'После let me глагол идёт без to: let me *tell*.' },
        { after: 'tell ', keys: 'a', say: 'Tell требует «кому»: tell *you* about myself.' }
      ] },
    { id: 'iv-years-experience', ru: 'У меня пять лет опыта в маркетинге.', ctx: 'опыт',
      en: ['I have five years of experience in marketing.', 'I have 5 years of experience in marketing.', "I've got five years of experience in marketing.", "I have five years' experience in marketing.", 'I have five years of marketing experience.', 'I have 5 years of marketing experience.'],
      note: 'Каркас: *I have ... years of experience in* и область. Experience тут без артикля и без -s.',
      traps: [
        { after: ['five years ', '5 years '], keys: 'e', say: 'Нужен of: five years *of* experience.' }
      ] },
    { id: 'iv-from-scratch', ru: 'Я создал этот проект с нуля.', ctx: 'достижения',
      en: ['I built this project from scratch.', 'I built the project from scratch.', 'I created this project from scratch.', 'I started this project from scratch.', 'I launched this project from scratch.', 'I built this project from the ground up.'],
      note: '«С нуля» — *from scratch*. From zero по-английски не говорят.',
      traps: [
        { after: 'project from ', keys: 'z', say: '«С нуля» = from *scratch*, не from zero.' }
      ] },
    { id: 'iv-fast-learner', ru: 'Я быстро учусь.', ctx: 'сильные стороны',
      en: ["I'm a fast learner.", "I'm a quick learner.", 'I learn fast.', 'I learn quickly.', 'I pick things up quickly.', 'I learn new things quickly.'],
      note: '*A fast learner* — готовый оборот для собеседования. Осваивать новое — learn; study — учиться в вузе.',
      traps: [
        { after: ["i'm ", 'i am '], start: true, keys: 'fq', say: "Нужен артикль: I'm *a* fast learner." },
        { after: 'i ', start: true, keys: 's', say: 'Study — учиться в вузе. Быстро осваивать новое — *learn*.' }
      ] },
    { id: 'iv-good-at', ru: 'Я хорошо умею решать проблемы.', ctx: 'сильные стороны',
      en: ["I'm good at solving problems.", "I'm good at problem-solving.", "I'm good at problem solving.", "I'm great at solving problems.", "I'm really good at solving problems.", "I'm very good at solving problems."],
      note: '*Good at* и форма на -ing: good at solving, good at planning. Предлог только at.',
      traps: [
        { after: ['good ', 'great '], keys: 'i', say: 'Хорош в чём-то — good *at*, не in.' },
        { after: 'at solv', keys: 'e', say: 'После at — форма на -ing: good at *solving*.' }
      ] },
    { id: 'iv-under-pressure', ru: 'Я хорошо работаю под давлением.', ctx: 'сильные стороны',
      en: ['I work well under pressure.', 'I perform well under pressure.', 'I can work well under pressure.', 'I work well under stress.', 'I do well under pressure.', 'I handle pressure well.'],
      note: '*Under pressure* — когда горят сроки и высоки ставки. Работаю хорошо — work *well*, не good.',
      traps: [
        { after: ['work ', 'perform ', 'i do '], keys: 'g', say: 'Good — прилагательное. Как работаю — *well*: work well.' }
      ] },
    { id: 'iv-interested-in', ru: 'Меня очень интересует эта должность.', ctx: 'почему эта роль',
      en: ["I'm very interested in this position.", "I'm really interested in this position.", "I'm very interested in this role.", "I'm really interested in this role.", "I'm very interested in the position.", "I'm very interested in this job."],
      note: 'Мне интересно — *interested in*. Interesting — про сам предмет: the job is interesting.',
      traps: [
        { after: 'interest', keys: 'i', say: "Interesting — «интересный». О себе: I'm *interested* in." },
        { after: 'interested ', keys: 'ba', say: 'Предлог один: interested *in*.' }
      ] },
    { id: 'iv-learned-a-lot', ru: 'Этот опыт многому меня научил.', ctx: 'трудная ситуация',
      en: ['I learned a lot from that experience.', 'I learned a lot from this experience.', "I've learned a lot from that experience.", 'That experience taught me a lot.', 'This experience taught me a lot.', 'I learned so much from that experience.'],
      note: 'Удобная концовка истории про ошибку. Научился сам — *learned*, опыт научил — taught me.' },
    { id: 'iv-few-questions', ru: 'У меня есть к вам несколько вопросов.', ctx: 'вопросы интервьюеру',
      en: ['I have a few questions for you.', 'I have a couple of questions for you.', 'I have some questions for you.', "I've got a few questions for you.", 'I do have a few questions for you.', 'I have a few questions.'],
      note: '*A few* — несколько. Без a выйдет «почти нет вопросов». К вам — *for* you.',
      traps: [
        { after: ['i have ', 'got ', 'do have '], keys: 'f', say: '*A few* — несколько. Few без a значит «почти нет».' },
        { after: 'questions ', keys: 't', say: 'Вопросы к вам — questions *for* you, не to.' }
      ] },
    { id: 'iv-typical-day', ru: 'Как выглядит обычный рабочий день?', ctx: 'вопросы интервьюеру',
      en: ['What does a typical day look like?', 'What does a typical workday look like?', 'What does a typical day look like here?', 'What does a normal day look like?', "What's a typical day like?", 'What does a typical day in this role look like?'],
      note: 'С look like вопрос начинают с *What*: What does it look like? How — только без like.',
      traps: [
        { after: '', start: true, keys: 'h', say: 'С look like — *What*, не How: What does a typical day look like?' }
      ] },
    { id: 'iv-how-many-people', ru: 'Сколько человек в команде?', ctx: 'вопросы интервьюеру',
      en: ['How many people are on the team?', 'How many people are in the team?', 'How many people are there on the team?', 'How many people are there in the team?', 'How big is the team?', 'How large is the team?'],
      note: 'People можно посчитать: *how many*. В американском английском чаще *on* the team.',
      traps: [
        { after: 'how m', start: true, keys: 'u', say: 'Людей можно посчитать: how *many* people.' }
      ] },
    { id: 'iv-work-remotely', ru: 'Можно ли работать удалённо?', ctx: 'условия',
      en: ['Is it possible to work remotely?', 'Can I work remotely?', 'Could I work remotely?', 'Is remote work possible?', 'Is remote work an option?', 'Is it possible to work from home?'],
      note: 'Удалённо — *remotely* или from home. Удалёнка — remote work.' },
    { id: 'iv-start-in-two-weeks', ru: 'Я могу приступить через две недели.', ctx: 'когда можете начать',
      en: ['I can start in two weeks.', 'I can start in 2 weeks.', 'I could start in two weeks.', "I'm available to start in two weeks.", "I'm able to start in two weeks.", 'I can start working in two weeks.'],
      note: '«Через» о сроке — *in*: in two weeks, in a month.',
      traps: [
        { after: ['start ', 'working '], keys: 'at', say: 'Через две недели = *in* two weeks. Не after и не through.' }
      ] },
    { id: 'iv-salary-negotiable', ru: 'Зарплата обсуждается?', ctx: 'зарплата',
      en: ['Is the salary negotiable?', 'Is salary negotiable?', 'Is the pay negotiable?', 'Is the salary open to negotiation?', 'Is the salary up for negotiation?'],
      note: '*Negotiable* — «можно обсуждать». Negotiate — договариваться об условиях.' },
    { id: 'iv-repeat-question', ru: 'Не могли бы вы повторить вопрос?', ctx: 'переспросить',
      en: ['Could you repeat the question, please?', 'Could you repeat the question?', 'Could you please repeat the question?', 'Can you repeat the question, please?', 'Could you repeat that, please?', 'Could you say that again, please?'],
      note: 'Переспросить на собеседовании нормально. *Could you repeat* звучит мягче, чем Repeat, please.' },
    { id: 'iv-good-question', ru: 'Хороший вопрос, дайте подумать.', ctx: 'пауза подумать',
      en: ["That's a good question, let me think.", 'Good question, let me think.', "That's a great question, let me think.", "That's a good question, let me think about it.", 'Good question, let me think about it.', "That's a good question, give me a second."],
      note: 'Способ выиграть пару секунд. *Let me think* — после let me глагол без to.' },
    { id: 'iv-thank-time', ru: 'Спасибо, что уделили мне время.', ctx: 'завершение',
      en: ['Thank you for your time.', 'Thanks for your time.', 'Thank you so much for your time.', 'Thank you for your time today.', 'Thank you for taking the time to talk to me.', 'Thank you for taking the time to meet with me.'],
      note: 'Обычная концовка собеседования: *Thank you for your time*. «Уделили» дословно не переводят.' },
    { id: 'iv-next-steps', ru: 'Какие будут следующие шаги?', ctx: 'завершение',
      en: ['What are the next steps?', 'What are the next steps in the process?', "What's the next step?", 'What are the next steps in the hiring process?', 'What would the next steps be?', 'What happens next?'],
      note: 'Так узнают, что будет после собеседования. Обычно во множественном числе: *the next steps*.' },

    /* ───── 2. Средние: предлоги, артикли, устойчивые связки ───── */

    { id: 'iv-background-in', ru: 'У меня бэкграунд в финансах.', ctx: 'о себе: опыт и образование',
      en: ['I have a background in finance.', "I've got a background in finance.", 'My background is in finance.', 'I come from a finance background.', 'I have a finance background.'],
      note: '*Background in* — опыт и образование одним словом. С артиклем: *a* background in finance.' },
    { id: 'iv-graduated-from', ru: 'Я окончил университет пять лет назад.', ctx: 'образование',
      en: ['I graduated from college five years ago.', 'I graduated from university five years ago.', 'I graduated from college 5 years ago.', 'I graduated from university 5 years ago.', 'I graduated five years ago.', 'I finished university five years ago.'],
      note: '*Graduate from* — окончить вуз. В США вуз обычно называют college. С ago — Past Simple.',
      traps: [
        { after: 'i ', start: true, keys: 'h', say: 'С ago — Past Simple: I *graduated*, не have graduated.' },
        { after: 'graduated ', keys: 'cut', say: 'В нейтральной речи нужен предлог: graduated *from* college.' }
      ] },
    { id: 'iv-looking-for-role', ru: 'Я ищу работу с большей ответственностью.', ctx: 'почему ищете работу',
      en: ["I'm looking for a role with more responsibility.", "I'm looking for a job with more responsibility.", "I'm looking for a position with more responsibility.", "I'm looking for a role with more responsibilities.", "I'm looking for more responsibility."],
      note: "Ищу сейчас — *I'm looking for*. Responsibility в общем смысле — без артикля." },
    { id: 'iv-responsible-for', ru: 'Я отвечал за обучение новых сотрудников.', ctx: 'опыт',
      en: ['I was responsible for training new employees.', 'I was in charge of training new employees.', 'I was responsible for training new hires.', 'I was responsible for training new staff.', 'I was in charge of training new hires.', 'I was in charge of training new staff.'],
      note: '*Responsible for* и форма на -ing — главный оборот про обязанности. Синоним: in charge of.',
      traps: [
        { after: ['responsible for train', 'charge of train'], keys: ' ', say: 'После предлога — форма на -ing: responsible for *training*.' }
      ] },
    { id: 'iv-increased-sales', ru: 'В прошлом году я увеличил продажи на двадцать процентов.', ctx: 'достижения',
      en: ['I increased sales by twenty percent last year.', 'I increased sales by 20 percent last year.', 'Last year I increased sales by twenty percent.', 'Last year I increased sales by 20 percent.', 'I grew sales by twenty percent last year.', 'I boosted sales by twenty percent last year.'],
      note: 'На сколько выросло — *by*: by twenty percent. Percent после числа без -s.',
      traps: [
        { after: 'sales ', keys: 'of', say: '«На столько-то» — *by*: increased sales by twenty percent.' },
        { after: 'percent', keys: 's', say: 'После числа без -s: twenty *percent*.' }
      ] },
    { id: 'iv-on-time', ru: 'Мы закончили проект вовремя и в рамках бюджета.', ctx: 'достижения',
      en: ['We finished the project on time and within budget.', 'We finished the project on time and on budget.', 'We delivered the project on time and within budget.', 'We delivered the project on time and on budget.', 'We completed the project on time and within budget.'],
      note: '*On time* — в срок, по графику. In time — «успеть до чего-то». В рамках бюджета — within budget.',
      traps: [
        { after: 'project ', keys: 'i', say: 'В срок, по плану — *on* time. In time — «успеть к чему-то».' }
      ] },
    { id: 'iv-part-of-team', ru: 'Мне нравится работать в команде.', ctx: 'сильные стороны',
      en: ['I enjoy working as part of a team.', 'I enjoy working in a team.', 'I enjoy working on a team.', 'I like working in a team.', 'I like working on a team.', 'I like to work in a team.'],
      note: 'После enjoy — только -ing: enjoy *working*. *As part of a team* — частый оборот в резюме.',
      traps: [
        { after: 'enjoy ', keys: 't', say: 'После enjoy — форма на -ing: enjoy *working*, не to work.' }
      ] },
    { id: 'iv-biggest-strength', ru: 'Моя самая сильная сторона — внимание к деталям.', ctx: 'сильные стороны',
      en: ['My biggest strength is attention to detail.', 'My greatest strength is attention to detail.', 'My main strength is attention to detail.', 'My biggest strength is my attention to detail.', 'My greatest strength is my attention to detail.', 'My key strength is attention to detail.'],
      note: 'Сильная сторона — *strength*, слабая — weakness. *Attention to detail* — устойчивое сочетание.',
      traps: [
        { after: ['my biggest str', 'my greatest str', 'my main str', 'my key str'], start: true, keys: 'o', say: 'Не strong side. Сильная сторона — *strength*.' }
      ] },
    { id: 'iv-good-fit', ru: 'Думаю, я хорошо подхожу на эту роль.', ctx: 'почему именно вы',
      en: ["I think I'm a good fit for this role.", "I think I'm a good fit for this position.", "I think I'm a good fit for the role.", "I believe I'm a good fit for this role.", "I think I'd be a good fit for this role.", 'I think I would be a good fit for this role.'],
      note: '*A good fit for* — «подхожу». Fit тут существительное, поэтому с артиклем.' },
    { id: 'iv-grow-in-field', ru: 'Я хочу развиваться в этой области.', ctx: 'почему эта роль',
      en: ['I want to grow in this field.', 'I want to develop in this field.', "I'd like to grow in this field.", 'I would like to grow in this field.', 'I want to grow in this area.', 'I want to build a career in this field.'],
      note: 'Профессиональная область — *field* или area. Развиваться — grow, без myself.',
      traps: [
        { after: 'in this ', keys: 's', say: 'Sphere так не используют. Область работы — *field* или area.' }
      ] },
    { id: 'iv-share-values', ru: 'Мне близки ценности вашей компании.', ctx: 'почему эта компания',
      en: ["I share your company's values.", "I share the company's values.", 'I share the values of your company.', 'I share your values.', "I really share your company's values.", "Your company's values match mine."],
      note: 'Не values are close to me. По-английски ценности разделяют: *share* values.' },
    { id: 'iv-made-mistake', ru: 'Я допустил ошибку и сразу сообщил о ней.', ctx: 'трудная ситуация',
      en: ['I made a mistake and reported it right away.', 'I made a mistake and reported it immediately.', 'I made a mistake and reported it straight away.', 'I made a mistake and I reported it right away.', 'I made a mistake and reported it at once.'],
      note: 'Ошибку *make*, а не do. Report — без предлога: report *it*, report the problem.',
      traps: [
        { after: 'i ', start: true, keys: 'd', say: 'Ошибку не do, а make: I *made* a mistake.' },
        { after: 'reported ', keys: 'a', say: 'Report — без about: reported *it*.' }
      ] },
    { id: 'iv-listen-first', ru: 'Я стараюсь сначала выслушать другого человека.', ctx: 'конфликты',
      en: ['I try to listen to the other person first.', 'I always try to listen to the other person first.', 'I try to hear the other person out first.', 'First, I try to listen to the other person.', 'I try to listen to the other side first.'],
      note: 'Слушать кого-то — *listen to*. В споре вдвоём собеседник — *the other* person.',
      traps: [
        { after: 'listen t', keys: 'h', say: 'Слушать кого-то — listen *to*: listen to the other person.' },
        { after: 'listen to ', keys: 'a', say: 'Собеседник в споре — *the other* person. Another — «ещё один».' }
      ] },
    { id: 'iv-tell-me-more', ru: 'Не могли бы вы рассказать подробнее о команде?', ctx: 'вопросы интервьюеру',
      en: ['Could you tell me more about the team?', 'Can you tell me more about the team?', 'Could you tell me a bit more about the team?', 'Could you tell me a little more about the team?', 'Could you please tell me more about the team?', 'Could you tell me more about the team, please?'],
      note: 'Каркас для любого вопроса: *Could you tell me more about* и тема. Подробнее — просто more.' },
    { id: 'iv-growth-opportunities', ru: 'Какие есть возможности для роста?', ctx: 'вопросы интервьюеру',
      en: ['What are the opportunities for growth?', 'What opportunities are there for growth?', 'What growth opportunities are there?', 'What are the growth opportunities?', 'What opportunities for growth are there?', 'Are there opportunities for growth?'],
      note: 'Шанс вырасти — *opportunity*. Possibility — лишь вероятность, что что-то случится.',
      traps: [
        { after: ['what are the ', 'what '], start: true, keys: 'p', say: 'Шанс чего-то добиться — *opportunity*. Possibility — вероятность.' }
      ] },
    { id: 'iv-salary-range', ru: 'Какая зарплатная вилка у этой позиции?', ctx: 'зарплата',
      en: ["What's the salary range for this position?", "What's the salary range for this role?", "What's the pay range for this position?", "What's the salary range for the position?", "What's the salary range?", 'What salary range do you have in mind?'],
      note: 'Вилка зарплат — *salary range*: от и до. Про должность — for this position.',
      traps: [
        { after: 'salary ', keys: 'f', say: 'Вилка зарплат — salary *range*. Fork — только столовая.' }
      ] },
    { id: 'iv-benefits', ru: 'Какой соцпакет вы предлагаете?', ctx: 'условия',
      en: ['What benefits do you offer?', 'What kind of benefits do you offer?', 'What benefits do you provide?', 'What benefits are included?', 'What are the benefits?', 'What benefits does the company offer?'],
      note: 'Соцпакет — *benefits*: страховка, отпуск, бонусы. Предлагать условия — offer.',
      traps: [
        { after: 'what ', start: true, keys: 's', say: 'Social package не говорят. Соцпакет — *benefits*.' },
        { after: 'do you ', keys: 's', say: 'Suggest — предлагать идею. Условия и льготы — *offer*.' }
      ] },
    { id: 'iv-take-a-moment', ru: 'Можно мне минуту подумать?', ctx: 'пауза подумать',
      en: ['Can I take a moment to think?', 'Could I take a moment to think?', 'May I take a moment to think?', 'Can I have a moment to think?', 'Can I take a minute to think?', 'Can I take a moment to think about it?'],
      note: '*Take a moment* — взять паузу. Зачем — через to: a moment *to think*.' },
    { id: 'iv-didnt-catch', ru: 'Простите, я не расслышал последнюю часть.', ctx: 'переспросить',
      en: ["Sorry, I didn't catch the last part.", 'Sorry, I missed the last part.', "I'm sorry, I didn't catch the last part.", "Sorry, I didn't hear the last part.", "Sorry, I didn't catch that last part.", "Sorry, I didn't quite catch the last part."],
      note: "*I didn't catch* — «не расслышал». После didn't глагол в начальной форме: catch, не caught.",
      traps: [
        { after: ["didn't ca", 'did not ca', 'quite ca'], keys: 'u', say: "После didn't — начальная форма: didn't *catch*." }
      ] },
    { id: 'iv-references', ru: 'Я могу прислать рекомендации, если нужно.', ctx: 'завершение',
      en: ['I can send you references if needed.', 'I can send references if needed.', 'I can provide references if needed.', 'I can send you references if necessary.', 'I can send you my references if needed.', 'I can provide references if necessary.'],
      note: 'Рекомендации от прошлых работодателей — *references*. Recommendations — это советы.',
      traps: [
        { after: ['send you re', 'send re', 'provide re', 'my re'], keys: 'c', say: 'Рекомендации с прошлой работы — *references*, не recommendations.' }
      ] },
    { id: 'iv-hear-from-you', ru: 'Когда мне ждать от вас ответа?', ctx: 'завершение',
      en: ['When can I expect to hear from you?', 'When can I expect to hear back from you?', 'When can I expect to hear back?', 'When should I expect to hear from you?', 'When will I hear from you?', 'When will I hear back from you?'],
      note: '*Hear from you* — получить от вас ответ. Hear back — то же самое, «услышать в ответ».' },

    /* ───── 3. Сложнее: времена, -ing после связок, порядок слов ───── */

    { id: 'iv-been-working-there', ru: 'Я работаю там уже три года.', ctx: 'о себе',
      en: ["I've been working there for three years.", "I've worked there for three years.", "I've been working there for 3 years.", "I've worked there for 3 years.", "I've been there for three years.", "I've been working there for three years now."],
      note: "Началось в прошлом и длится до сих пор — *I've been working*. Срок — через *for*.",
      traps: [
        { after: ['i ', "i'"], start: true, keys: 'wam', say: "«Работаю уже три года» — не I work, а *I've been working*." },
        { after: 'there ', keys: 'a', say: '«Уже три года» — *for* three years. Already тут не нужно.' }
      ] },
    { id: 'iv-current-role', ru: 'На нынешней должности я руковожу командой из пяти человек.', ctx: 'о себе',
      en: ['In my current role, I manage a team of five.', 'In my current role, I lead a team of five.', 'In my current position, I manage a team of five.', 'In my current role, I manage a team of five people.', 'In my current role, I manage a team of 5.', 'In my current job, I manage a team of five.'],
      note: '*In my current role* — «на нынешней должности». Команда из пяти — a team *of* five.' },
    { id: 'iv-biggest-achievement', ru: 'Моё главное достижение — запуск нового продукта.', ctx: 'достижения',
      en: ['My biggest achievement was launching a new product.', 'My greatest achievement was launching a new product.', 'My main achievement was launching a new product.', 'My biggest accomplishment was launching a new product.', 'My biggest achievement was the launch of a new product.', 'My biggest achievement is launching a new product.'],
      note: 'Достижение — *achievement* или accomplishment. Действие после was называют через -ing: launching.' },
    { id: 'iv-promoted', ru: 'Через год меня повысили до руководителя команды.', ctx: 'опыт',
      en: ['After a year, I was promoted to team lead.', 'After a year, I was promoted to team leader.', 'After a year, I got promoted to team lead.', 'A year later, I was promoted to team lead.', 'After one year, I was promoted to team lead.'],
      note: 'Меня повысили — пассив: *I was promoted to*. Должность после to — без артикля.',
      traps: [
        { after: ['year, i ', 'later, i '], keys: 'p', say: 'Нужен пассив: I *was promoted*. I promoted — «я повысил кого-то».' },
        { after: '', start: true, keys: 'ti', say: 'О прошлом — *after* a year или a year later. In a year — про будущее.' }
      ] },
    { id: 'iv-find-it-hard', ru: 'Мне иногда трудно говорить нет.', ctx: 'слабые стороны',
      en: ['I sometimes find it hard to say no.', 'I sometimes find it difficult to say no.', 'Sometimes I find it hard to say no.', "Sometimes it's hard for me to say no.", 'I sometimes struggle to say no.', "It's sometimes hard for me to say no."],
      note: '*Find it hard to* — «мне трудно». Без it нельзя: find *it* hard to say no.',
      traps: [
        { after: 'find ', keys: 'hd', say: 'Нужно it: find *it* hard to say no.' }
      ] },
    { id: 'iv-used-to-struggle', ru: 'Раньше мне было трудно делегировать задачи.', ctx: 'слабые стороны',
      en: ['I used to struggle with delegating tasks.', 'I used to struggle with delegating.', 'I used to struggle to delegate tasks.', 'I used to have trouble delegating tasks.', 'I used to find it hard to delegate tasks.', 'I used to struggle with delegation.'],
      note: '*Used to* — «раньше было так, теперь иначе». Хороший ход для рассказа о слабости.',
      traps: [
        { after: 'i use', start: true, keys: ' ', say: 'В прошедшем, с -d: I *used* to struggle.' }
      ] },
    { id: 'iv-heard-a-lot', ru: 'Я много слышал о вашей компании.', ctx: 'почему эта компания',
      en: ["I've heard a lot about your company.", "I've heard a lot about the company.", "I've heard so much about your company.", "I've heard a lot of good things about your company.", 'I heard a lot about your company.', "I've heard many good things about your company."],
      note: '*Hear about* — слышать о чём-то. Present Perfect: слышал раньше, а важно это сейчас.' },
    { id: 'iv-always-wanted', ru: 'Я давно хотел работать в международной команде.', ctx: 'почему эта компания',
      en: ["I've always wanted to work in an international team.", "I've always wanted to work on an international team.", "I've always wanted to work with an international team.", 'I always wanted to work in an international team.', "I've always wanted to be part of an international team.", "I've wanted to work in an international team for a long time."],
      note: "«Давно хотел» и хочу до сих пор — *I've always wanted to*. Перед гласным звуком — an." },
    { id: 'iv-disagreed', ru: 'Мы не сошлись во мнениях, но нашли компромисс.', ctx: 'конфликты',
      en: ['We disagreed, but we found a compromise.', 'We disagreed, but found a compromise.', 'We disagreed, but we reached a compromise.', 'We disagreed, but we came to a compromise.', "We didn't agree, but we found a compromise.", 'We disagreed, but we managed to find a compromise.'],
      note: '*Disagree* — обычный глагол: we disagreed, без were. Компромисс находят: find или reach.',
      traps: [
        { after: 'we ', start: true, keys: 'w', say: 'Disagree — глагол, were не нужен: we *disagreed*.' }
      ] },
    { id: 'iv-deal-with', ru: 'Мне приходилось работать с трудными клиентами.', ctx: 'трудные ситуации',
      en: ["I've had to deal with difficult clients.", "I've had to deal with difficult customers.", 'I had to deal with difficult clients.', 'I had to deal with difficult customers.', "I've had to work with difficult clients.", "I've dealt with difficult clients."],
      note: "*Deal with* — иметь дело, справляться. «Приходилось» — *I've had to*." },
    { id: 'iv-took-responsibility', ru: 'Я взял ответственность на себя и всё исправил.', ctx: 'трудная ситуация',
      en: ['I took responsibility and fixed the problem.', 'I took responsibility and fixed it.', 'I took responsibility and fixed everything.', 'I took responsibility and solved the problem.', 'I took responsibility for it and fixed it.', 'I took full responsibility and fixed the problem.'],
      note: '*Take responsibility* — взять ответственность. «На себя» отдельно не переводят.',
      traps: [
        { after: 'responsibility ', keys: 'o', say: '«На себя» не переводится: просто *took responsibility*.' }
      ] },
    { id: 'iv-report-to', ru: 'Кому я буду подчиняться?', ctx: 'вопросы интервьюеру',
      en: ['Who will I report to?', 'Who would I report to?', 'Who will I be reporting to?', 'Who would I be reporting to?', 'Who do I report to?'],
      note: '*Report to* — подчиняться кому-то. Предлог to уходит в самый конец вопроса.',
      traps: [
        { after: 'who ', start: true, keys: 'i', say: 'В вопросе сначала will: Who *will I* report to?' },
        { after: 'report', keys: '?', say: 'В конце нужен предлог: report *to*?' }
      ] },
    { id: 'iv-expect-from-me', ru: 'Чего вы ждёте от меня в первые три месяца?', ctx: 'вопросы интервьюеру',
      en: ['What do you expect from me in the first three months?', 'What would you expect from me in the first three months?', 'What do you expect of me in the first three months?', 'What do you expect from me in the first 3 months?', 'What do you expect from me during the first three months?', 'What do you expect from me in my first three months?'],
      note: 'Ждать результата — *expect*. Wait — ждать, пока что-то случится: wait for a bus.',
      traps: [
        { after: ['do you ', 'would you '], keys: 'w', say: 'Ждать чего-то от человека — *expect*, не wait.' }
      ] },
    { id: 'iv-expecting-salary', ru: 'Я рассчитываю примерно на шестьдесят тысяч в год.', ctx: 'зарплата',
      en: ["I'm expecting around sixty thousand a year.", "I'm expecting about sixty thousand a year.", "I'm looking for around sixty thousand a year.", "I'm looking for about sixty thousand a year.", "I'm expecting around sixty thousand per year.", "I'm expecting around 60 thousand a year."],
      note: 'После числа thousand без -s. «В год» — *a year* или per year, без in.',
      traps: [
        { after: 'thousand', keys: 's', say: 'После числа без -s: sixty *thousand*.' },
        { after: 'thousand ', keys: 'i', say: '«В год» = *a* year или per year, не in a year.' }
      ] },
    { id: 'iv-open-to-relocating', ru: 'Я готов к переезду.', ctx: 'условия',
      en: ["I'm open to relocating.", "I'm open to relocation.", "I'm willing to relocate.", "I'm ready to relocate.", "I'm happy to relocate.", "I'm open to moving."],
      note: 'В *open to* слово to — предлог, после него -ing: open to relocating. Но willing to relocate.',
      traps: [
        { after: 'open to relocat', keys: 'e', say: 'После open to — форма на -ing: open to *relocating*.' }
      ] },
    { id: 'iv-not-sure-understood', ru: 'Не уверен, что правильно понял вопрос.', ctx: 'переспросить',
      en: ["I'm not sure I understood the question correctly.", "I'm not sure I understood the question.", "I'm not sure I understand the question.", "I'm not sure I got the question right.", "I'm not sure I understood the question right.", "I'm not sure that I understood the question correctly."],
      note: 'Наречие ставят после дополнения: understood the question *correctly*.',
      traps: [
        { after: 'understood ', keys: 'cr', say: 'Наречие — в конец: understood the question *correctly*.' }
      ] },
    { id: 'iv-do-you-mean', ru: 'Вы имеете в виду мой последний проект?', ctx: 'уточнить вопрос',
      en: ['Do you mean my last project?', 'Do you mean my most recent project?', 'Do you mean my latest project?', 'Did you mean my last project?', 'You mean my last project?', 'Do you mean the last project I worked on?'],
      note: '«Иметь в виду» — *mean*. Это обычный глагол, вопрос через do: Do you mean...?',
      traps: [
        { after: '', start: true, keys: 'a', say: 'Не Are you mean. Mean — глагол, вопрос через do: *Do you mean*...?' },
        { after: 'do you ', start: true, keys: 'h', say: '«Иметь в виду» = *mean*. Have in mind — «задумать».' }
      ] },
    { id: 'iv-look-forward', ru: 'С нетерпением жду вашего ответа.', ctx: 'завершение',
      en: ['I look forward to hearing from you.', "I'm looking forward to hearing from you.", 'I look forward to hearing back from you.', 'Looking forward to hearing from you.', 'I look forward to your reply.', 'I look forward to your response.'],
      note: 'В *look forward to* слово to — предлог: после него -ing или существительное.',
      traps: [
        { after: 'forward to hear', keys: ' ', say: 'После look forward to — форма на -ing: to *hearing* from you.' },
        { after: 'i ', start: true, keys: 'w', say: 'Wait тут не годится. «С нетерпением жду» — *look forward to*.' }
      ] },
    { id: 'iv-make-decision', ru: 'Когда вы планируете принять решение?', ctx: 'завершение',
      en: ['When do you plan to make a decision?', 'When are you planning to make a decision?', 'When do you expect to make a decision?', 'When will you make a decision?', 'When do you plan to decide?', 'When are you going to make a decision?'],
      note: 'Решение *make*: make a decision. Accept — согласиться с чужим решением.',
      traps: [
        { after: ['plan to ', 'planning to ', 'expect to ', 'will you ', 'going to '], keys: 'a', say: 'Не accept. «Принять решение» = *make* a decision.' }
      ] }
  ]
});
