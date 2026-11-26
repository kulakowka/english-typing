/* Колода «Здоровье»: врач, аптека, самочувствие. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'health', title: 'Здоровье', sub: 'врач, аптека, самочувствие',
  phrases: [
    /* ───── 1. Простые: короткие фразы и базовые шаблоны ───── */

    { id: 'hl-how-feeling', ru: 'Как ты себя чувствуешь?', ctx: 'спрашиваем у больного',
      en: ['How are you feeling?', 'How do you feel?', 'How are you feeling today?', 'How are you feeling now?'],
      note: 'Feel — без «себя»: *How are you feeling?* Слово yourself здесь лишнее.',
      traps: [
        { after: 'how are you feeling ', start: true, keys: 'y', say: 'Без yourself: просто *How are you feeling?*' }
      ] },
    { id: 'hl-sore-throat', ru: 'У меня болит горло.', ctx: 'симптомы',
      en: ['I have a sore throat.', "I've got a sore throat.", 'My throat hurts.', 'My throat is sore.'],
      note: 'Болит горло — *a sore throat*, с артиклем: как a headache и a cold.' },
    { id: 'hl-fever', ru: 'У меня температура.', ctx: 'симптомы',
      en: ['I have a fever.', "I've got a fever.", "I'm running a fever.", 'I have a temperature.', "I've got a temperature."],
      note: 'Жар — *a fever*. Говорят и have a temperature, но всегда с артиклем.',
      traps: [
        { after: ['i have ', 'got '], keys: 'tf', say: 'Нужен артикль: *a fever*.' }
      ] },
    { id: 'hl-dizzy', ru: 'У меня кружится голова.', ctx: 'симптомы',
      en: ['I feel dizzy.', "I'm dizzy.", "I'm feeling dizzy.", 'My head is spinning.', 'I feel lightheaded.'],
      note: 'По-английски кружится не голова, а «я»: *I feel dizzy*. Dizzy — прилагательное.' },
    { id: 'hl-toothache', ru: 'У меня болит зуб.', ctx: 'у стоматолога',
      en: ['I have a toothache.', "I've got a toothache.", 'My tooth hurts.', 'My tooth aches.'],
      note: 'Один зуб — *tooth*, несколько — teeth. Зубная боль — *a toothache*, одним словом.',
      traps: [
        { after: 'my t', start: true, keys: 'e', say: 'Один зуб — *tooth*. Teeth — это много зубов.' }
      ] },
    { id: 'hl-is-it-serious', ru: 'Это серьёзно?', ctx: 'вопрос врачу',
      en: ['Is it serious?', 'Is this serious?', 'Is that serious?', 'Is it anything serious?', 'Is it something serious?'],
      note: 'После is — прилагательное: *serious*. Seriously? — это удивление: «да ладно?»' },
    { id: 'hl-make-appointment', ru: 'Я хотел бы записаться на приём.', ctx: 'звонок в клинику',
      en: ["I'd like to make an appointment.", 'I would like to make an appointment.', "I'd like to book an appointment.", "I'd like to schedule an appointment.", 'I want to make an appointment.', 'I need to make an appointment.'],
      note: 'Записаться к врачу — *make an appointment*. Дословные write и record здесь не работают.',
      traps: [
        { after: ["i'd like to ", 'i would like to ', 'i want to ', 'i need to '], start: true, keys: 'wr', say: 'Не write и не record. Записаться к врачу — *make an appointment*.' }
      ] },
    { id: 'hl-health-insurance', ru: 'У меня есть медицинская страховка.', ctx: 'на ресепшене клиники',
      en: ['I have health insurance.', "I've got health insurance.", 'I have medical insurance.', "I've got medical insurance.", 'I have insurance.'],
      note: 'Insurance не считают, поэтому без артикля. В США говорят *health insurance*.',
      traps: [
        { after: ['i have ', 'got '], keys: 'a', say: 'Insurance не считают: без артикля. *I have health insurance*.' }
      ] },
    { id: 'hl-call-ambulance', ru: 'Вызовите скорую!', ctx: 'экстренный случай',
      en: ['Call an ambulance!', 'Please call an ambulance!', 'Call an ambulance, please!', 'Somebody call an ambulance!', 'Someone call an ambulance!'],
      note: 'Вызвать скорую — *call an ambulance*. Перед гласной артикль an.' },
    { id: 'hl-nearest-hospital', ru: 'Где ближайшая больница?', ctx: 'экстренный случай',
      en: ['Where is the nearest hospital?', "Where's the nearest hospital?", 'Where is the closest hospital?', "Where's the closest hospital?"],
      note: 'С превосходной степенью нужен the: *the nearest*, the closest, the best.',
      traps: [
        { after: ['where is ', "where's "], start: true, keys: 'nc', say: 'С превосходной степенью — *the*: the nearest hospital.' },
        { after: 'where ', start: true, keys: 't', say: 'Не хватает глагола: *Where is* the nearest hospital?' }
      ] },
    { id: 'hl-cut-finger', ru: 'Я порезал палец.', ctx: 'травма',
      en: ['I cut my finger.', "I've cut my finger."],
      note: 'Cut не меняется: cut, cut, cut. С частями тела говорят *my*: my finger.',
      traps: [
        { after: ['i cut', "i've cut", 'i have cut'], start: true, keys: 't', say: 'Cut не меняется: прошедшее тоже *cut*, не cutted.' }
      ] },
    { id: 'hl-twisted-ankle', ru: 'Я подвернул ногу.', ctx: 'травма, болит лодыжка',
      en: ['I twisted my ankle.', 'I sprained my ankle.', "I've twisted my ankle.", "I've sprained my ankle.", 'I rolled my ankle.'],
      note: 'Подворачивают не leg, а *ankle*, лодыжку. Twist — подвернуть, sprain — растянуть.',
      traps: [
        { after: ['twisted my ', 'sprained my ', 'rolled my '], keys: 'lf', say: 'Подворачивают *ankle*, лодыжку. Leg — вся нога, foot — ступня.' }
      ] },
    { id: 'hl-passed-out', ru: 'Он потерял сознание.', ctx: 'экстренный случай',
      en: ['He passed out.', 'He fainted.', 'He lost consciousness.', 'He blacked out.'],
      note: 'Потерять сознание — *pass out* или faint. Lose consciousness звучит как в протоколе.' },
    { id: 'hl-pills-not-helping', ru: 'Таблетки не помогают.', ctx: 'о лекарстве',
      en: ["The pills aren't helping.", "The pills don't help.", "The pills aren't working.", "The pills don't work.", "These pills aren't helping.", "These pills don't work."],
      note: 'Про лекарство говорят *help* или *work*: it works — «оно действует».' },
    { id: 'hl-exercise-more', ru: 'Мне нужно больше заниматься спортом.', ctx: 'привычки',
      en: ['I need to exercise more.', 'I need to work out more.', 'I should exercise more.', 'I should work out more.', 'I need to get more exercise.', 'I need to be more active.'],
      note: 'Заниматься спортом для себя — *exercise* или *work out*. Do sports — скорее про секции и игры.' },
    { id: 'hl-gym-twice', ru: 'Я хожу в спортзал два раза в неделю.', ctx: 'привычки',
      en: ['I go to the gym twice a week.', 'I go to the gym two times a week.', 'I go to the gym 2 times a week.', 'I go to the gym twice per week.', 'I work out twice a week.', 'I hit the gym twice a week.'],
      note: 'Два раза — *twice*. В неделю — *a week*: артикль вместо предлога. Так же: once a day.',
      traps: [
        { after: ['twice ', 'times '], keys: 'i', say: '«В неделю» — *a week*, без in: twice a week.' },
        { after: 'go to ', keys: 'g', say: 'Нужен артикль: *the gym*.' }
      ] },
    { id: 'hl-get-well-soon', ru: 'Выздоравливай скорее!', ctx: 'пожелание больному',
      en: ['Get well soon!', 'Get better soon!', 'Feel better soon!', 'Hope you feel better soon!', 'I hope you feel better soon!'],
      note: '*Get well soon* — готовое пожелание больному. Get здесь значит «становиться».' },
    { id: 'hl-take-care', ru: 'Береги себя.', ctx: 'прощаемся с больным',
      en: ['Take care of yourself.', 'Take care.', 'Look after yourself.', 'Take good care of yourself.'],
      note: '*Take care of yourself* — «береги себя». Заботиться о ком-то — take care *of*.',
      traps: [
        { after: 'take care ', start: true, keys: 'ya', say: 'Нужен предлог of: take care *of* yourself. Не about.' }
      ] },
    { id: 'hl-get-you-anything', ru: 'Тебе что-нибудь принести?', ctx: 'навещаем больного',
      en: ['Can I get you anything?', 'Can I bring you anything?', 'Can I get you something?', 'Can I bring you something?', 'Do you need anything?', 'Should I bring you anything?'],
      note: '*Can I get you anything?* — «тебе что-нибудь принести?» Кому — сразу после глагола, без to.' },
    { id: 'hl-where-sign', ru: 'Где мне расписаться?', ctx: 'документы в клинике',
      en: ['Where do I sign?', 'Where should I sign?', 'Where do I need to sign?', 'Where do I have to sign?', 'Where do you need me to sign?'],
      note: 'Расписаться — *sign*, подпись — signature. Вопрос строят с do: Where do I sign?',
      traps: [
        { after: 'where ', start: true, keys: 'it', say: 'Вопрос строят с do: *Where do I sign?* Не Where I sign и не Where to sign.' }
      ] },

    /* ───── 2. Средние: предлоги, артикли, устойчивые связки ───── */

    { id: 'hl-anything-for-cough', ru: 'У вас есть что-нибудь от кашля?', ctx: 'в аптеке',
      en: ['Do you have anything for a cough?', 'Do you have something for a cough?', 'What do you have for a cough?', 'Can I get something for a cough?', 'Do you have any cough medicine?'],
      note: 'Лекарство «от» чего-то — *for*: something for a cough, for a headache.',
      traps: [
        { after: ['anything f', 'something f', 'have f'], keys: 'r', say: '«От кашля» — *for* a cough. Не from.' },
        { after: ['anything for ', 'something for ', 'have for '], keys: 'c', say: 'Нужен артикль: *a cough*.' }
      ] },
    { id: 'hl-sick-to-stomach', ru: 'Меня тошнит.', ctx: 'симптомы',
      en: ['I feel sick to my stomach.', 'I feel nauseous.', "I'm nauseous.", "I'm feeling nauseous.", 'I feel queasy.', 'I feel nauseated.'],
      note: 'В США feel sick — просто «мне плохо». Тошнит — *sick to my stomach* или nauseous.' },
    { id: 'hl-keep-coughing', ru: 'Я всё время кашляю.', ctx: 'симптомы',
      en: ['I keep coughing.', "I can't stop coughing.", "I'm coughing all the time.", 'I cough all the time.', "I'm constantly coughing."],
      note: '*keep* + -ing — «всё время, снова и снова»: I keep coughing, I keep waking up.',
      traps: [
        { after: ['i keep ', "can't stop ", 'cannot stop '], keys: 't', say: 'После keep и stop — форма на -ing: *keep coughing*. Без to.' },
        { after: ['keep cough', 'stop cough'], keys: ' .', say: 'После keep — форма на -ing: *keep coughing*.' }
      ] },
    { id: 'hl-hurts-to-swallow', ru: 'Мне больно глотать.', ctx: 'симптомы',
      en: ['It hurts to swallow.', 'It hurts when I swallow.', 'Swallowing hurts.', "It's painful to swallow."],
      note: '*It hurts to* + глагол — «больно что-то делать»: it hurts to swallow, to walk, to breathe.',
      traps: [
        { after: ["it's ", 'it is '], start: true, keys: 'h', say: 'Hurt — глагол: *it hurts*, без is.' },
        { after: 'it hurt', start: true, keys: ' ', say: 'It — третье лицо: *it hurts*, с -s.' }
      ] },
    { id: 'hl-rash', ru: 'У меня сыпь на руках.', ctx: 'симптомы',
      en: ['I have a rash on my arms.', "I've got a rash on my arms.", 'I have a rash on my hands.', "I've got a rash on my hands."],
      note: 'Сыпь — *a rash*, с артиклем. Arms — руки целиком, hands — только кисти.' },
    { id: 'hl-appointment-at-ten', ru: 'Я записан на десять.', ctx: 'на ресепшене клиники',
      en: ['I have an appointment at ten.', 'I have an appointment at 10.', "I have an appointment at ten o'clock.", "I have an appointment at 10 o'clock.", 'My appointment is at ten.', 'My appointment is at 10.'],
      note: '«Я записан» — *I have an appointment*. Время — с at: at ten.',
      traps: [
        { after: 'appointment ', keys: 'o', say: 'Время — с *at*: at ten. Не on.' }
      ] },
    { id: 'hl-anything-tomorrow', ru: 'У вас есть что-нибудь на завтра?', ctx: 'запись к врачу',
      en: ['Do you have anything available tomorrow?', 'Do you have anything for tomorrow?', 'Do you have anything tomorrow?', 'Do you have any openings tomorrow?', 'Is there anything available tomorrow?', 'Do you have any appointments tomorrow?'],
      note: '*anything available* — «что-нибудь свободное». Tomorrow — без предлога on.' },
    { id: 'hl-reschedule', ru: 'Мне нужно перенести запись.', ctx: 'звонок в клинику',
      en: ['I need to reschedule my appointment.', 'I have to reschedule my appointment.', 'I need to move my appointment.', 'I need to change my appointment.', 'I want to reschedule my appointment.', 'I need to reschedule.'],
      note: 'Перенести запись — *reschedule* my appointment. Запись к врачу — appointment, не record.' },
    { id: 'hl-walk-ins', ru: 'Вы принимаете без записи?', ctx: 'в клинике',
      en: ['Do you take walk-ins?', 'Do you accept walk-ins?', 'Can I come in without an appointment?', 'Can I see a doctor without an appointment?', 'Do you see patients without an appointment?'],
      note: '*walk-in* — пациент без записи. Do you take walk-ins? — «принимаете без записи?»' },
    { id: 'hl-blood-test', ru: 'Мне нужно сдать анализ крови?', ctx: 'на приёме у врача',
      en: ['Do I need a blood test?', 'Do I need to get a blood test?', 'Do I need to have a blood test?', 'Should I get a blood test?', 'Do I need to take a blood test?', 'Do I need blood work?'],
      note: 'Анализ у врача — *test*: a blood test. Сдать его — get или have, не pass.',
      traps: [
        { after: 'blood ', keys: 'a', say: 'Анализ у врача — *test*. Analysis — это разбор данных.' },
        { after: ['need to ', 'should i '], keys: 'p', say: 'Pass a test — «успешно пройти». Сдать анализ — *get* a blood test.' }
      ] },
    { id: 'hl-how-often-take', ru: 'Как часто мне это принимать?', ctx: 'о лекарстве',
      en: ['How often should I take it?', 'How often do I take it?', 'How often should I take this?', 'How often do I need to take it?', 'How often should I take them?', 'How often do I take this?'],
      note: 'Лекарства по-английски *take*: take a pill, take it twice a day. Не drink и не accept.',
      traps: [
        { after: ['should i ', 'do i ', 'need to '], keys: 'da', say: 'Лекарства *take*: How often should I take it? Не drink и не accept.' },
        { after: 'how often ', start: true, keys: 'i', say: 'В вопросе should идёт перед I: *How often should I*.' }
      ] },
    { id: 'hl-not-allergic', ru: 'У меня нет аллергии на лекарства.', ctx: 'на приёме у врача',
      en: ["I'm not allergic to any medications.", "I'm not allergic to any medication.", "I'm not allergic to any medicine.", "I'm not allergic to any drugs.", "I don't have any drug allergies.", 'I have no drug allergies.'],
      note: 'Аллергия на — *allergic to*. В отрицании перед существительным ставят any.' },
    { id: 'hl-recommend-for-cold', ru: 'Что вы посоветуете от простуды?', ctx: 'в аптеке',
      en: ['What do you recommend for a cold?', 'What would you recommend for a cold?', 'What can you recommend for a cold?', 'What do you suggest for a cold?', "What's good for a cold?", 'What should I take for a cold?'],
      note: 'После recommend не ставят me: *What do you recommend?* «От простуды» — for a cold.',
      traps: [
        { after: ['recommend ', 'suggest '], keys: 'm', say: 'Recommend — без me: *What do you recommend for* a cold?' },
        { after: ['recommend f', 'suggest f', 'good f', 'take f'], keys: 'r', say: '«От простуды» — *for* a cold. Не from.' }
      ] },
    { id: 'hl-without-prescription', ru: 'Это можно купить без рецепта?', ctx: 'в аптеке',
      en: ['Can I get this without a prescription?', 'Can I buy this without a prescription?', 'Can I get it without a prescription?', 'Can I buy it without a prescription?', 'Is this available without a prescription?', 'Is this available over the counter?'],
      note: 'Рецепт от врача — *prescription*. Recipe — кулинарный. Over the counter — «без рецепта».',
      traps: [
        { after: ['without a ', 'without '], keys: 'r', say: 'Recipe — рецепт блюда. От врача — *prescription*.' },
        { after: 'without ', keys: 'p', say: 'Нужен артикль: without *a prescription*.' }
      ] },
    { id: 'hl-pick-up-prescription', ru: 'Я пришёл забрать лекарство по рецепту.', ctx: 'в аптеке',
      en: ["I'm here to pick up my prescription.", "I'm here to pick up a prescription.", "I'm here for my prescription.", 'I need to pick up my prescription.', "I'm picking up a prescription.", 'I came to pick up my prescription.'],
      note: '*prescription* — и рецепт, и само лекарство по нему. Забрать готовое — *pick up*.' },
    { id: 'hl-before-after-meals', ru: 'Принимать до еды или после?', ctx: 'о лекарстве',
      en: ['Should I take it before or after meals?', 'Do I take it before or after meals?', 'Should I take it before or after eating?', 'Do I take it before or after eating?', 'Should I take it before or after food?', 'Should I take it before or after a meal?'],
      note: '*before or after meals* — «до или после еды». Meal — приём пищи, food — еда вообще.' },
    { id: 'hl-chipped-tooth', ru: 'У меня откололся кусочек зуба.', ctx: 'у стоматолога',
      en: ['I chipped a tooth.', 'I chipped my tooth.', "I've chipped a tooth.", "I've chipped my tooth.", 'A piece of my tooth broke off.', 'Part of my tooth broke off.'],
      note: '*chip a tooth* — отколоть кусочек зуба. По-английски это сделал «я»: I chipped a tooth.' },
    { id: 'hl-filling-fell-out', ru: 'У меня выпала пломба.', ctx: 'у стоматолога',
      en: ['My filling fell out.', 'A filling fell out.', 'I lost a filling.', "I've lost a filling.", 'My filling came out.', 'One of my fillings fell out.'],
      note: 'Пломба — *filling*. Выпасть — *fall out*, в прошедшем fell out.',
      traps: [
        { after: ['filling f', 'fillings f'], keys: 'a', say: 'Прошедшее от fall — *fell*: my filling fell out.' },
        { after: ['my ', 'a ', 'i lost a ', "i've lost a ", 'i have lost a '], start: true, keys: 'p', say: 'Слова plomb в английском нет. Пломба — *filling*.' }
      ] },
    { id: 'hl-broke-arm', ru: 'Кажется, я сломал руку.', ctx: 'травма, болит выше кисти',
      en: ['I think I broke my arm.', "I think I've broken my arm.", 'I think my arm is broken.', 'I think I have a broken arm.'],
      note: 'Рука целиком — *arm*, hand — только кисть. Формы глагола: break, broke, broken.',
      traps: [
        { after: ['broke my ', 'broken my ', 'i think my '], keys: 'h', say: 'Рука целиком — *arm*. Hand — только кисть.' },
        { after: 'i think i br', start: true, keys: 'e', say: 'Break — неправильный глагол: *broke*, не breaked.' }
      ] },
    { id: 'hl-insurance-cover', ru: 'Страховка это покрывает?', ctx: 'в клинике',
      en: ['Does my insurance cover this?', 'Does my insurance cover it?', 'Is this covered by my insurance?', 'Does insurance cover this?', 'Is this covered by insurance?', 'Will my insurance cover this?'],
      note: 'Страховка покрывает — *cover*. После does глагол без -s: does it cover.' },
    { id: 'hl-enough-sleep', ru: 'Я не высыпаюсь.', ctx: 'сон',
      en: ["I'm not getting enough sleep.", "I don't get enough sleep.", "I'm not sleeping enough.", "I don't sleep enough.", "I haven't been getting enough sleep."],
      note: 'Глагола «высыпаться» в английском нет: говорят *get enough sleep*.' },
    { id: 'hl-go-to-bed', ru: 'Я стараюсь ложиться спать до полуночи.', ctx: 'режим дня',
      en: ['I try to go to bed before midnight.', "I'm trying to go to bed before midnight.", 'I try to get to bed before midnight.', 'I try to be in bed before midnight.', 'I try to go to sleep before midnight.', 'I try to go to bed by midnight.'],
      note: 'Ложиться спать — *go to bed*, без артикля. Midnight тоже без артикля.',
      traps: [
        { after: ['go to ', 'get to ', 'before ', 'by '], keys: 't', say: 'Без артикля: *go to bed*, *before midnight*.' },
        { after: ['bed ', 'sleep '], keys: 'u', say: 'Until — «вплоть до». «Не позже» — *before* или by midnight.' }
      ] },

    /* ───── 3. Сложнее: времена, -ing после связок, порядок слов ───── */

    { id: 'hl-had-it-for', ru: 'Это у меня уже три дня.', ctx: 'ответ врачу: давно болит?',
      en: ["I've had it for three days.", "I've had it for 3 days.", "I've had this for three days.", "I've had this for 3 days.", "I've had it for three days now.", "I've had it for 3 days now."],
      note: "Началось и длится до сих пор — Present Perfect: *I've had it for* three days.",
      traps: [
        { after: 'i have ', start: true, keys: 'it', say: "Длится до сих пор — Present Perfect: *I've had it*. Не I have it." },
        { after: ['had it ', 'had this '], keys: 's', say: 'С отрезком времени — *for*: for three days. Since — с момента: since Monday.' }
      ] },
    { id: 'hl-results-ready', ru: 'Когда будут готовы результаты?', ctx: 'после анализов',
      en: ['When will the results be ready?', 'When will my results be ready?', 'When will I get the results?', 'When will I get my results?', 'When will the test results be ready?', 'When do I get the results?'],
      note: 'В вопросе порядок такой: will, потом кто, потом глагол. *When will the results be ready?*',
      traps: [
        { after: 'when will ', start: true, keys: 'b', say: 'Сначала кто, потом be: *When will the results be ready?*' },
        { after: ['when will ', 'i get '], keys: 'r', say: 'Нужен артикль: *the results*.' }
      ] },
    { id: 'hl-if-gets-worse', ru: 'Что мне делать, если станет хуже?', ctx: 'вопрос врачу',
      en: ['What should I do if it gets worse?', 'What do I do if it gets worse?', 'What should I do if I get worse?', 'What should I do if this gets worse?', 'What should I do if I feel worse?', 'What if it gets worse?'],
      note: 'После if будущее не ставят: *if it gets worse*. Get worse — «становиться хуже».',
      traps: [
        { after: ['if it ', 'if i ', 'if this '], keys: 'w', say: 'После if будущее не ставят: *if it gets worse*.' }
      ] },
    { id: 'hl-side-effects', ru: 'У него есть побочные эффекты?', ctx: 'вопрос о лекарстве',
      en: ['Does it have any side effects?', 'Does this have any side effects?', 'Are there any side effects?', 'Does it have side effects?', 'Does this medicine have any side effects?', 'Does it cause any side effects?'],
      note: 'Побочные эффекты — *side effects*. После does глагол в первой форме: does it have.',
      traps: [
        { after: ['does it ha', 'does this ha'], start: true, keys: 's', say: 'После does — первая форма: *Does it have*, не has.' }
      ] },
    { id: 'hl-hurts-when-bend', ru: 'Больно, когда я сгибаю колено.', ctx: 'травма',
      en: ['It hurts when I bend my knee.', 'My knee hurts when I bend it.', 'It hurts to bend my knee.', 'It hurts whenever I bend my knee.'],
      note: '*It hurts when I* + действие: when I bend, when I walk. С частями тела — my.',
      traps: [
        { after: 'bend ', keys: 'kt', say: 'С частями тела — *my*: bend my knee.' }
      ] },
    { id: 'hl-sensitive-to-cold', ru: 'Зуб реагирует на холодное.', ctx: 'у стоматолога',
      en: ['My tooth is sensitive to cold.', 'This tooth is sensitive to cold.', 'My tooth is sensitive to cold things.', 'My tooth reacts to cold.', 'My tooth hurts when I eat something cold.'],
      note: 'Чувствительный — *sensitive to*. Sensible — ложный друг: «разумный».',
      traps: [
        { after: 'sensi', keys: 'b', say: 'Sensible — «разумный». Чувствительный — *sensitive*.' },
        { after: ['sensitive ', 'reacts '], keys: 'o', say: 'К чему-то — *to*: sensitive to cold. Не on.' }
      ] },
    { id: 'hl-teeth-cleaned', ru: 'Я хочу сделать чистку зубов.', ctx: 'у стоматолога',
      en: ["I'd like to get my teeth cleaned.", 'I would like to get my teeth cleaned.', "I'd like to have my teeth cleaned.", 'I would like to have my teeth cleaned.', 'I want to get my teeth cleaned.', 'I need to get my teeth cleaned.'],
      note: 'Делаю не сам, а мне делают — *get* + что + третья форма: get my teeth cleaned.',
      traps: [
        { after: ["i'd like to ", 'i would like to ', 'i want to ', 'i need to '], start: true, keys: 'cmd', say: 'Чистку делает врач, не вы: *get my teeth cleaned*. Не make и не clean.' },
        { after: ['get my teeth clean', 'have my teeth clean'], keys: '.', say: 'Нужна третья форма: get my teeth *cleaned*.' }
      ] },
    { id: 'hl-pull-tooth', ru: 'Зуб придётся удалять?', ctx: 'у стоматолога',
      en: ['Do you have to pull the tooth?', 'Do you need to pull the tooth?', 'Will you have to pull the tooth?', 'Do you have to take the tooth out?', 'Do you have to remove the tooth?', 'Does the tooth have to come out?'],
      note: 'Удалить зуб — *pull* a tooth. Delete — только про файлы и сообщения.',
      traps: [
        { after: ['have to ', 'need to '], keys: 'd', say: 'Delete — про файлы. Зуб удаляют словом *pull*.' }
      ] },
    { id: 'hl-russian-speaking-doctor', ru: 'У вас есть врач, который говорит по-русски?', ctx: 'звонок в клинику',
      en: ['Do you have a doctor who speaks Russian?', 'Is there a doctor who speaks Russian?', 'Do you have a doctor that speaks Russian?', 'Is there a doctor that speaks Russian?', 'Do you have a Russian-speaking doctor?', 'Is there a Russian-speaking doctor?'],
      note: 'Говорить на языке — без предлога: *speaks Russian*. Doctor — один, поэтому speaks.',
      traps: [
        { after: ['who speak', 'that speak'], keys: ' ', say: 'Doctor — он или она: *speaks*, с -s.' },
        { after: 'speaks ', keys: 'oi', say: 'Язык — без предлога: *speaks Russian*. Не on Russian.' }
      ] },
    { id: 'hl-earliest', ru: 'Когда самое раннее я могу прийти?', ctx: 'запись к врачу',
      en: ["What's the earliest I can come in?", "What's the earliest appointment you have?", "What's the earliest you can see me?", 'When is the earliest I can come in?', "What's the earliest available appointment?", "What's the earliest I can get in?"],
      note: "*What's the earliest...?* — «когда самое раннее?» Come in — прийти на приём." },
    { id: 'hl-doctors-note', ru: 'Мне нужна справка от врача для работы.', ctx: 'документы',
      en: ["I need a doctor's note for work.", 'I need a sick note for work.', 'I need a note from my doctor for work.', 'I need a note from the doctor for work.', "I need a doctor's note for my job.", "I need a doctor's note for my employer."],
      note: "Справка от врача — *a doctor's note*. Для работы — for work, без артикля.",
      traps: [
        { after: 'for ', keys: 't', say: 'Работа вообще — без артикля: *for work*.' },
        { after: 'i need a ', start: true, keys: 'r', say: "Reference — это рекомендация. Справка от врача — *a doctor's note*." }
      ] },
    { id: 'hl-referral', ru: 'Мне нужно направление к специалисту?', ctx: 'страховка и документы',
      en: ['Do I need a referral to see a specialist?', 'Do I need a referral for a specialist?', 'Do I need a referral to a specialist?', 'Do I need a referral?'],
      note: 'Направление от врача — *referral*. Direction — это сторона, куда идти.',
      traps: [
        { after: 'do i need a ', start: true, keys: 'd', say: 'Direction — это «куда идти». Направление от врача — *referral*.' }
      ] },
    { id: 'hl-out-of-pocket', ru: 'Сколько мне придётся заплатить из своего кармана?', ctx: 'страховка',
      en: ['How much will I have to pay out of pocket?', 'How much do I have to pay out of pocket?', 'How much will I pay out of pocket?', 'How much do I pay out of pocket?', 'How much will I need to pay out of pocket?', 'How much is it out of pocket?'],
      note: '*out of pocket* — «из своего кармана»: то, что не покроет страховка.',
      traps: [
        { after: 'pay ', keys: 'f', say: '«Из своего кармана» — *out of pocket*. Не from my pocket.' }
      ] },
    { id: 'hl-trouble-falling-asleep', ru: 'Мне трудно засыпать.', ctx: 'сон',
      en: ['I have trouble falling asleep.', 'I have trouble getting to sleep.', 'I have a hard time falling asleep.', 'I have difficulty falling asleep.', "It's hard for me to fall asleep.", 'I struggle to fall asleep.'],
      note: 'После *have trouble* — форма на -ing: trouble falling asleep, trouble sleeping. Без to.',
      traps: [
        { after: ['trouble ', 'hard time ', 'difficulty '], keys: 't', say: 'После have trouble — форма на -ing: *trouble falling asleep*. Без to.' },
        { after: ['falling ', 'fall '], keys: 's', say: 'Засыпать — fall *asleep*: одним словом, с a- в начале.' }
      ] },
    { id: 'hl-quit-smoking', ru: 'Я бросил курить два года назад.', ctx: 'привычки',
      en: ['I quit smoking two years ago.', 'I quit smoking 2 years ago.', 'I stopped smoking two years ago.', 'I stopped smoking 2 years ago.', 'I gave up smoking two years ago.', 'I gave up smoking 2 years ago.'],
      note: 'Бросить привычку — *quit* + -ing: quit smoking. С ago — Past Simple.',
      traps: [
        { after: ['i quit ', 'i stopped ', 'i gave up '], start: true, keys: 't', say: 'Stop to smoke — «остановился, чтобы покурить». Бросил — *quit smoking*.' },
        { after: ['i', 'i '], start: true, keys: "h'", say: 'С ago — простое прошедшее: *I quit*. Не I have quit.' }
      ] },
    { id: 'hl-havent-worked-out', ru: 'Я давно не занимался спортом.', ctx: 'привычки',
      en: ["I haven't worked out in a while.", "I haven't exercised in a while.", "I haven't worked out for a while.", "I haven't exercised for a while.", "I haven't worked out in a long time.", "I haven't worked out in ages."],
      note: "Давно не делал и до сих пор не делаю — Present Perfect: *I haven't worked out in a while*.",
      traps: [
        { after: 'i ', start: true, keys: 'd', say: "До сих пор не занимаюсь — Present Perfect: *I haven't*. Не I didn't." },
        { after: ['worked out ', 'exercised '], keys: 'l', say: '«Давно» здесь — *in a while* или for a long time. Не long ago.' }
      ] },
    { id: 'hl-seen-a-doctor', ru: 'Ты был у врача?', ctx: 'разговор с больным',
      en: ['Have you seen a doctor?', 'Have you been to the doctor?', 'Have you been to a doctor?', 'Did you see a doctor?', 'Did you go to the doctor?', 'Have you seen a doctor yet?'],
      note: 'Сходить к врачу — *see a doctor*. «Был у врача» — have been *to* the doctor.',
      traps: [
        { after: 'have you been ', start: true, keys: 'ai', say: '«Был у врача» — been *to* the doctor. Не at и не in.' }
      ] },
    { id: 'hl-back-to-work-until', ru: 'Не выходи на работу, пока не поправишься.', ctx: 'совет больному коллеге',
      en: ["Don't come back to work until you feel better.", "Don't come back to work until you're better.", "Don't come to work until you feel better.", "Don't come to work until you're better.", "Don't go back to work until you feel better.", "Don't go back to work until you're better."],
      note: '«Пока не» — *until* без отрицания и без will: until you feel better.',
      traps: [
        { after: 'until you ', keys: 'dw', say: '«Пока не» — просто *until*, без not и без will: until you feel better.' },
        { after: ['come back to ', 'come to ', 'go back to '], keys: 't', say: 'Работа как занятие — без артикля: *to work*.' }
      ] }
  ]
});
