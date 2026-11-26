/* Колода «Деловая переписка»: письма, запросы, вежливые формулы. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'email', title: 'Деловая переписка', sub: 'письма, запросы, вежливые формулы',
  phrases: [
    /* ───── 1. Простые: готовые формулы и короткие шаблоны ───── */

    { id: 'em-hope-well', ru: 'Надеюсь, у вас всё хорошо.', ctx: 'первая строка письма',
      en: ["I hope you're doing well.", 'I hope you are well.', 'I hope all is well.', "Hope you're doing well.", 'I hope this email finds you well.'],
      note: "*I hope you're doing well* — обычная первая строка письма. После hope — настоящее время, без will." },
    { id: 'em-thanks-quick-reply', ru: 'Спасибо за быстрый ответ.', ctx: 'начало ответного письма',
      en: ['Thank you for your quick reply.', 'Thanks for your quick reply.', 'Thank you for the quick reply.', 'Thanks for the quick reply.', 'Thank you for your prompt reply.', 'Thank you for your quick response.'],
      note: 'Ответ на письмо — *reply* или response. Перед quick нужно your или the.',
      traps: [
        { after: ['thank you for ', 'thanks for '], start: true, keys: 'qp', say: 'Нужно your или the: *your quick reply*.' }
      ] },
    { id: 'em-writing-to-ask', ru: 'Пишу, чтобы узнать о новых ценах.', ctx: 'повод написать',
      en: ["I'm writing to ask about the new prices.", "I'm writing to ask about your new prices.", "I'm writing to inquire about the new prices.", "I'm writing to ask about the new pricing.", "I'm writing to find out about the new prices."],
      note: "*I'm writing to* + глагол — стандартный способ назвать цель письма. Именно Continuous, не I write.",
      traps: [
        { after: 'i ', start: true, keys: 'w', say: "Пишу прямо сейчас — Continuous: *I'm writing to*. Не I write." }
      ] },
    { id: 'em-send-price-list', ru: 'Не могли бы вы прислать мне прайс-лист?', ctx: 'просьба',
      en: ['Could you send me the price list?', 'Could you please send me the price list?', 'Could you send me your price list?', 'Can you send me the price list?', 'Could you send me the price list, please?', 'Could you please send me your price list?'],
      note: '*Could you send me...?* — вежливая просьба. Кому — сразу после глагола, без to: *send me*.' },
    { id: 'em-status-order', ru: 'Какой статус у нашего заказа?', ctx: 'запрос информации',
      en: ["What's the status of our order?", "What's the current status of our order?", "What's the status on our order?", 'Could you give me an update on our order?', 'Do you have an update on our order?', 'Is there an update on our order?'],
      note: 'Статус чего-то — *the status of*: с артиклем и предлогом of. Так спрашивают про заказ, счёт, заявку.' },
    { id: 'em-attached-report', ru: 'Я приложил отчёт к письму.', ctx: 'вложение',
      en: ["I've attached the report.", 'I attached the report.', "I've attached the report to this email.", 'I attached the report to this email.', "I'm attaching the report.", 'The report is attached.'],
      note: "Приложить к письму — *attach*. Обычно хватает короткого *I've attached* и названия файла." },
    { id: 'em-here-link', ru: 'Вот ссылка на документ.', ctx: 'ссылка в письме',
      en: ['Here is the link to the document.', "Here's the link to the document.", 'Here is a link to the document.', "Here's a link to the document.", 'This is the link to the document.'],
      note: 'Ссылка на что-то — *link to*. Русское «на» тянет написать on, но так не говорят.',
      traps: [
        { after: 'link ', keys: 'o', say: 'Ссылка на = link *to*. Не on.' }
      ] },
    { id: 'em-any-updates', ru: 'Есть ли новости по этому вопросу?', ctx: 'напоминание',
      en: ['Are there any updates on this?', 'Are there any updates on this issue?', 'Are there any updates on this matter?', 'Do you have any updates on this?', 'Any updates on this?', 'Is there any news on this?'],
      note: '*Any updates on this?* — самый частый вопрос-напоминание. Update — новость о том, как движется дело.' },
    { id: 'em-following-up-email', ru: 'Пишу по поводу моего предыдущего письма.', ctx: 'напоминание',
      en: ['Just following up on my previous email.', "I'm following up on my previous email.", "I'm just following up on my previous email.", 'Just following up on my last email.', "I'm following up on my last email.", 'I wanted to follow up on my previous email.'],
      note: '*follow up on* — вернуться к теме, напомнить о себе. Just в начале смягчает тон.' },
    { id: 'em-sorry-confusion', ru: 'Прошу прощения за путаницу.', ctx: 'извинение',
      en: ['I apologize for the confusion.', 'Sorry for the confusion.', 'Apologies for the confusion.', 'My apologies for the confusion.', 'Sorry about the confusion.', 'I apologize for any confusion.'],
      note: 'Apologize — глагол: *I apologize for*. Короче и проще — Sorry for the confusion.',
      traps: [
        { after: ['i', 'i a'], start: true, keys: "'m", say: 'Apologize — глагол: *I apologize*, без am. Или начните с *Sorry for*.' }
      ] },
    { id: 'em-wrong-file', ru: 'Извините, я отправил не тот файл.', ctx: 'исправляем ошибку',
      en: ['Sorry, I sent the wrong file.', 'Sorry, I sent you the wrong file.', 'Sorry, I attached the wrong file.', "I'm sorry, I sent the wrong file.", 'Apologies, I sent the wrong file.', "Sorry, I've sent the wrong file."],
      note: '«Не тот» — *the wrong*: the wrong file, the wrong link. Всегда с the.',
      traps: [
        { after: ['i sent ', 'sent you ', 'i attached ', "i've sent ", 'i have sent '], keys: 'wna', say: '«Не тот» = *the wrong* file. С артиклем the и без not.' }
      ] },
    { id: 'em-received-email', ru: 'Я получил ваше письмо, спасибо.', ctx: 'подтверждение получения',
      en: ['I received your email, thank you.', "I've received your email, thank you.", 'I got your email, thank you.', 'I received your email, thanks.', "I've received your email, thanks.", 'I got your email, thanks.'],
      note: 'Электронное письмо — *email*, а letter — бумажное. Received и got тут равнозначны, got проще.',
      traps: [
        { after: ['received your ', 'got your '], keys: 'l', say: 'Электронное письмо — *email*. Letter — бумажное, в конверте.' }
      ] },
    { id: 'em-works-for-me', ru: 'Этот вариант мне подходит.', ctx: 'согласие с предложением',
      en: ['That works for me.', 'This works for me.', 'It works for me.', 'That option works for me.', 'This option works for me.', 'Works for me.'],
      note: '*That works for me* — «мне подходит»: про время, план, условия. Fit — это про размер одежды.' },
    { id: 'em-have-to-decline', ru: 'Боюсь, мне придётся отказаться.', ctx: 'вежливый отказ',
      en: ["I'm afraid I have to decline.", "I'm afraid I'll have to decline.", "I'm afraid I must decline.", "I'm afraid I have to say no.", "I'm afraid I'll have to pass.", "I'm afraid I have to pass."],
      note: "*I'm afraid* смягчает плохую новость. Вежливо отказаться — *decline*; refuse звучит резко.",
      traps: [
        { after: ['have to ', 'i must '], keys: 'r', say: 'Refuse звучит резко. Вежливо отказаться — *decline*.' }
      ] },
    { id: 'em-are-you-free', ru: 'Вы свободны завтра в три?', ctx: 'предлагаем время',
      en: ['Are you free tomorrow at three?', 'Are you available tomorrow at three?', 'Are you free tomorrow at 3?', 'Are you available tomorrow at 3?', 'Are you free at three tomorrow?', 'Are you free at 3 tomorrow?'],
      note: 'Free — прилагательное, вопрос с *are*. Время на часах — *at* three, а tomorrow без предлога.',
      traps: [
        { after: '', start: true, keys: 'd', say: 'Free — прилагательное: *Are you free*, не Do you.' },
        { after: ['free tomorrow ', 'available tomorrow '], keys: 'io', say: 'Время на часах — *at* three.' }
      ] },
    { id: 'em-what-time-works', ru: 'В какое время вам удобно?', ctx: 'назначаем встречу',
      en: ['What time works for you?', 'What time works best for you?', 'What time is good for you?', 'What time is convenient for you?', 'What time suits you?', 'What time would work for you?'],
      note: '*What time works for you?* — обычный вопрос про время. Удобный — convenient, а не comfortable.',
      traps: [
        { after: 'what time is co', start: true, keys: 'm', say: 'Comfortable — про кресло. Удобное время — *convenient*. А проще: What time works for you?' }
      ] },
    { id: 'em-great-weekend', ru: 'Хороших выходных!', ctx: 'конец письма в пятницу',
      en: ['Have a great weekend!', 'Have a nice weekend!', 'Have a good weekend!', 'Have a wonderful weekend!', 'Enjoy your weekend!', 'Enjoy the weekend!'],
      note: 'Пожелания строят с *Have a*: Have a great weekend, Have a nice day. Weekend — в единственном числе.',
      traps: [
        { after: '', start: true, keys: 'g', say: 'По-английски желают через Have: *Have a great weekend*.' },
        { after: 'have ', start: true, keys: 'gnw', say: 'Нужен артикль: *Have a great weekend*.' }
      ] },
    { id: 'em-any-questions', ru: 'Дайте знать, если у вас есть вопросы.', ctx: 'конец письма',
      en: ['Let me know if you have any questions.', 'Please let me know if you have any questions.', 'Let me know if you have questions.', 'Just let me know if you have any questions.', 'Let me know if there are any questions.', 'Feel free to reach out if you have any questions.'],
      note: '*Let me know if you have any questions* — стандартная концовка. После if — настоящее время.' },
    { id: 'em-keep-posted', ru: 'Буду держать вас в курсе.', ctx: 'конец письма',
      en: ["I'll keep you posted.", "I'll keep you updated.", "I'll keep you in the loop.", "I'll keep you informed.", "I'll keep you up to date."],
      note: '*keep you posted* — «держать в курсе». Варианты: keep you updated, keep you in the loop.' },
    { id: 'em-thanks-in-advance', ru: 'Заранее спасибо за помощь.', ctx: 'конец письма с просьбой',
      en: ['Thanks in advance for your help.', 'Thank you in advance for your help.', 'Thanks in advance for the help.', 'Thank you in advance for the help.', 'Thanks in advance for your assistance.', 'Thank you in advance for your assistance.'],
      note: '*in advance* — «заранее». Порядок слов: Thanks in advance for your help.' },

    /* ───── 2. Средние: предлоги, артикли, ложные друзья ───── */

    { id: 'em-thanks-getting-back', ru: 'Спасибо, что ответили.', ctx: 'начало ответного письма',
      en: ['Thank you for getting back to me.', 'Thanks for getting back to me.', 'Thank you for your reply.', 'Thanks for your reply.', 'Thank you for replying.', 'Thanks for replying.'],
      note: '*get back to* — ответить, вернуться с ответом. После for — форма на -ing: for getting back.' },
    { id: 'em-introduce-myself', ru: 'Позвольте представиться.', ctx: 'первое письмо незнакомому',
      en: ['Let me introduce myself.', 'Allow me to introduce myself.', "I'd like to introduce myself.", 'I would like to introduce myself.', 'Let me briefly introduce myself.', 'I wanted to introduce myself.'],
      note: 'Представиться — *introduce myself*. После let me глагол идёт без to.',
      traps: [
        { after: 'introduce m', keys: 'e', say: 'Представиться самому — introduce *myself*, не me.' }
      ] },
    { id: 'em-met-at-conference', ru: 'Мы познакомились на конференции в прошлом месяце.', ctx: 'напоминаем, кто мы',
      en: ['We met at the conference last month.', 'We met at a conference last month.', 'We met last month at the conference.', 'We met last month at a conference.'],
      note: 'Познакомились — просто *met*. На конференции, на встрече, на выставке — *at*: at the conference.',
      traps: [
        { after: 'we met ', start: true, keys: 'oi', say: 'На конференции — *at* the conference. Не on и не in.' },
        { after: 'we ', start: true, keys: 'g', say: 'Got acquainted звучит книжно. Познакомились — просто *We met*.' }
      ] },
    { id: 'em-more-information', ru: 'Я хотел бы получить больше информации о продукте.', ctx: 'запрос информации',
      en: ["I'd like more information about the product.", 'I would like more information about the product.', "I'd like to get more information about the product.", 'I would like to get more information about the product.', "I'd like some more information about the product.", "I'd like more details about the product."],
      note: 'Information не считают: всегда в единственном числе, без -s и без an. Больше — *more information*.',
      traps: [
        { after: 'more information', keys: 's', say: 'Information не считают: *more information*, без -s.' }
      ] },
    { id: 'em-clarify-timeline', ru: 'Не могли бы вы уточнить сроки?', ctx: 'про график проекта',
      en: ['Could you clarify the timeline?', 'Could you please clarify the timeline?', 'Can you clarify the timeline?', 'Could you clarify the timing?', 'Could you clarify the deadlines?', 'Could you clarify the schedule?'],
      note: 'Уточнить — *clarify*. Сроки проекта — timeline или deadlines; terms — это условия.',
      traps: [
        { after: 'clarify the t', keys: 'e', say: 'Terms — это условия договора. Сроки — *timeline* или deadlines.' }
      ] },
    { id: 'em-invoice-attached', ru: 'Счёт во вложении.', ctx: 'вложение',
      en: ['Please find the invoice attached.', 'Please find attached the invoice.', 'Please find the attached invoice.', 'Please see the attached invoice.', 'The invoice is attached.', "I've attached the invoice."],
      note: '*Please find ... attached* — классическая формула для вложений. Счёт на оплату — invoice.',
      traps: [
        { after: 'the a', keys: 'c', say: 'Account — счёт в банке. Счёт на оплату — *invoice*.' },
        { after: ['please find ', 'please see '], start: true, keys: 'i', say: 'Нужен артикль: *the invoice*.' }
      ] },
    { id: 'em-cant-open', ru: 'У меня не открывается вложение.', ctx: 'проблема с файлом',
      en: ["I can't open the attachment.", "I'm unable to open the attachment.", "The attachment won't open.", "I can't open the attached file.", "The attachment doesn't open.", "I couldn't open the attachment."],
      note: "Вложение — *attachment*, с артиклем the. Чаще говорят от себя: I can't open the attachment." },
    { id: 'em-see-attached', ru: 'Подробности — в приложенном файле.', ctx: 'вложение',
      en: ['Please see the attached file for details.', 'See the attached file for details.', 'Please see the attachment for details.', 'The details are in the attached file.', 'Please find the details in the attached file.', 'You can find the details in the attached file.'],
      note: '*Please see the attached file* — «смотрите приложенный файл». Attached стоит перед существительным.' },
    { id: 'em-reminder-deadline', ru: 'Напоминаю, что дедлайн — в пятницу.', ctx: 'мягкое напоминание',
      en: ['Just a reminder that the deadline is Friday.', 'Just a reminder that the deadline is on Friday.', 'Just a quick reminder that the deadline is Friday.', 'Just a quick reminder that the deadline is on Friday.', 'A quick reminder that the deadline is Friday.', 'A quick reminder that the deadline is on Friday.'],
      note: '*Just a reminder that...* — мягкое напоминание без упрёка. I remind you звучит как приказ.',
      traps: [
        { after: '', start: true, keys: 'i', say: 'С I remind you письмо звучит резко. Мягче: *Just a reminder that*.' },
        { after: 'the deadline is ', keys: 'ia', say: 'С днями недели — *on* Friday или вовсе без предлога.' }
      ] },
    { id: 'em-still-waiting', ru: 'Мы всё ещё ждём вашего ответа.', ctx: 'повторное напоминание',
      en: ["We're still waiting for your reply.", "We're still waiting for your response.", "We're still waiting to hear from you.", "We're still waiting to hear back from you.", "We're still waiting for your answer.", 'We are still awaiting your reply.'],
      note: 'Ждать чего-то — *wait for*: waiting for your reply. Без for нельзя.',
      traps: [
        { after: 'still waiting ', keys: 'y', say: 'Ждать чего-то — wait *for*: waiting for your reply.' }
      ] },
    { id: 'em-when-expect', ru: 'Когда нам ждать ответа?', ctx: 'запрос сроков',
      en: ['When can we expect a reply?', 'When can we expect a response?', 'When can we expect an answer?', 'When can we expect your reply?', 'When should we expect a reply?', 'When can we expect to hear from you?'],
      note: 'Ждать в смысле «рассчитывать» — *expect*, а не wait. В вопросе can идёт перед we.',
      traps: [
        { after: 'when ', start: true, keys: 'w', say: 'В вопросе порядок меняется: *When can we*, не When we can.' },
        { after: ['can we ', 'should we '], keys: 'w', say: 'Wait — просто ждать. Рассчитывать на ответ — *expect*.' }
      ] },
    { id: 'em-sorry-delay', ru: 'Извините за задержку с ответом.', ctx: 'извинение',
      en: ['Sorry for the delay in getting back to you.', 'Apologies for the delay in getting back to you.', 'I apologize for the delay in getting back to you.', 'Sorry for the delayed response.', 'Apologies for the delayed response.', 'Sorry for the delay in replying.'],
      note: 'Задержка с ответом — *the delay in* + -ing: the delay in getting back to you.' },
    { id: 'em-out-of-office', ru: 'Меня не было в офисе на прошлой неделе.', ctx: 'объясняем задержку',
      en: ['I was out of the office last week.', 'I was out of office last week.', 'I was away last week.', 'I was not in the office last week.', 'I was out last week.', 'I was away from the office last week.'],
      note: '*out of the office* — «не на работе». Last week — без предлога и без the.',
      traps: [
        { after: ['office ', 'away '], keys: 'oit', say: 'Без предлога и артикля: *last week*.' }
      ] },
    { id: 'em-inconvenience', ru: 'Приносим извинения за неудобства.', ctx: 'извинение перед клиентом',
      en: ['We apologize for the inconvenience.', 'We apologize for any inconvenience.', 'Sorry for the inconvenience.', 'Apologies for the inconvenience.', 'We are sorry for the inconvenience.', 'We apologize for the inconvenience caused.'],
      note: '*We apologize for the inconvenience* — готовая формула. Inconvenience здесь в единственном числе.' },
    { id: 'em-confirm-meeting', ru: 'Хочу подтвердить нашу встречу в четверг.', ctx: 'подтверждение',
      en: ["I'd like to confirm our meeting on Thursday.", 'I would like to confirm our meeting on Thursday.', "I'm writing to confirm our meeting on Thursday.", 'I want to confirm our meeting on Thursday.', 'Just confirming our meeting on Thursday.', "I'd like to confirm our meeting this Thursday."],
      note: "*I'd like to confirm* — вежливое «хочу подтвердить». День недели — с on: on Thursday." },
    { id: 'em-agree-terms', ru: 'Мы согласны с вашими условиями.', ctx: 'согласование договора',
      en: ['We agree to your terms.', 'We agree with your terms.', 'We accept your terms.', 'We agree to the terms.', 'We accept the terms.', 'We agree to your conditions.'],
      note: 'Agree — глагол: *We agree*, без are. Принять условия — agree *to* the terms.' },
    { id: 'em-no-budget', ru: 'Сейчас у нас нет на это бюджета.', ctx: 'вежливый отказ',
      en: ["We don't have the budget for this right now.", "We don't have a budget for this right now.", "We don't have the budget for this at the moment.", "We don't have the budget for that right now.", "We don't have the budget for it right now.", 'We have no budget for this right now.'],
      note: 'Бюджет на что-то — *budget for*. «Сейчас» в деловом письме — right now или at the moment.',
      traps: [
        { after: 'budget ', keys: 'o', say: 'Бюджет на что-то — budget *for* this. Не on.' }
      ] },
    { id: 'em-cant-attend', ru: 'К сожалению, я не смогу присутствовать на встрече.', ctx: 'отказ от встречи',
      en: ["Unfortunately, I won't be able to attend the meeting.", "Unfortunately, I can't attend the meeting.", "Unfortunately, I won't be able to make the meeting.", "Unfortunately, I won't be able to join the meeting.", "Unfortunately, I can't make the meeting.", "Unfortunately, I can't join the meeting."],
      note: 'Attend — без предлога: *attend the meeting*. Visit не подходит: это про гости и города.',
      traps: [
        { after: 'attend ', keys: 'o', say: 'Attend — без предлога: *attend the meeting*.' },
        { after: ['able to ', "i can't ", 'i cannot '], keys: 'v', say: 'Visit — про гости и города. На встрече присутствуют: *attend the meeting*.' }
      ] },
    { id: 'em-schedule-call', ru: 'Давайте назначим звонок на следующую неделю.', ctx: 'назначаем звонок',
      en: ["Let's schedule a call for next week.", "Let's set up a call for next week.", "Let's schedule a call next week.", "Let's arrange a call for next week.", "Let's set up a call next week.", "Let's book a call for next week."],
      note: 'Назначить звонок на — *schedule a call for*. Appoint — это назначить человека на должность.',
      traps: [
        { after: 'a call ', keys: 'o', say: 'Назначить на — schedule a call *for* next week. Не on.' },
        { after: "let's a", start: true, keys: 'p', say: 'Appoint — назначить человека на должность. Звонок — *schedule* или set up.' }
      ] },
    { id: 'em-calendar-invite', ru: 'Я пришлю приглашение в календарь.', ctx: 'после договорённости',
      en: ["I'll send you a calendar invite.", "I'll send a calendar invite.", "I'll send you a calendar invitation.", "I'll send you an invite.", "I'll send a calendar invitation.", "I'll send over a calendar invite."],
      note: "*calendar invite* — приглашение на встречу в календаре. Обещание — с will: I'll send." },
    { id: 'em-feel-free-contact', ru: 'Обращайтесь ко мне в любое время.', ctx: 'конец письма',
      en: ['Feel free to contact me anytime.', 'Feel free to contact me at any time.', 'Feel free to contact me any time.', 'Feel free to reach out anytime.', 'Feel free to reach out at any time.', 'Feel free to email me anytime.'],
      note: '*Feel free to* — «не стесняйтесь». Contact — без предлога: contact me.',
      traps: [
        { after: 'contact ', keys: 'wt', say: 'Contact — без предлога: *contact me*.' }
      ] },

    /* ───── 3. Сложнее: порядок слов, времена, длинные вежливые шаблоны ───── */

    { id: 'em-reaching-out-position', ru: 'Пишу вам по поводу вакансии дизайнера.', ctx: 'отклик на вакансию',
      en: ["I'm reaching out about the designer position.", "I'm writing about the designer position.", "I'm reaching out regarding the designer position.", "I'm writing regarding the designer position.", "I'm reaching out about the designer role.", "I'm writing about the designer role."],
      note: "*I'm reaching out about* — современное «пишу по поводу». Вакансия в США — position или role." },
    { id: 'em-who-contact', ru: 'Не подскажете, к кому мне обратиться?', ctx: 'ищем нужного человека',
      en: ['Could you tell me who I should contact?', 'Could you tell me who to contact?', 'Can you tell me who I should contact?', 'Do you know who I should contact?', 'Could you tell me who I should talk to?', 'Could you let me know who I should contact?'],
      note: 'Вопрос внутри вопроса — с прямым порядком слов: *who I should contact*, не who should I.',
      traps: [
        { after: ['tell me who ', 'know who '], keys: 's', say: 'Внутри вопроса порядок прямой: *who I should contact*.' }
      ] },
    { id: 'em-wondering-if', ru: 'Хотел спросить, не могли бы вы мне помочь.', ctx: 'осторожная просьба',
      en: ['I was wondering if you could help me.', 'I was wondering if you could help.', 'I was wondering whether you could help me.', 'I wonder if you could help me.', 'I was wondering if you can help me.', 'I wanted to ask if you could help me.'],
      note: '*I was wondering if you could* — очень вежливая просьба. После if порядок прямой: you could.',
      traps: [
        { after: ['wondering if ', 'wondering whether ', 'wonder if ', 'ask if '], keys: 'c', say: 'После if порядок прямой: *if you could help*.' }
      ] },
    { id: 'em-appreciate-if', ru: 'Буду признателен, если вы пришлёте подробности.', ctx: 'вежливая просьба',
      en: ["I'd appreciate it if you could send me the details.", 'I would appreciate it if you could send me the details.', "I'd appreciate it if you could send the details.", 'I would appreciate it if you could send the details.', "I'd be grateful if you could send me the details.", 'I would be grateful if you could send me the details.'],
      note: "*I'd appreciate it if you could* — вежливая просьба. Не теряйте it и не ставьте will после if.",
      traps: [
        { after: 'appreciate i', keys: 'f', say: 'Не теряйте it: *appreciate it if* you could.' },
        { after: 'if you ', keys: 'w', say: 'После if — could, не will: *if you could send*.' }
      ] },
    { id: 'em-forgot-attach', ru: 'Кажется, вы забыли приложить файл.', ctx: 'письмо без вложения',
      en: ['I think you forgot to attach the file.', 'It looks like you forgot to attach the file.', 'It seems you forgot to attach the file.', 'I think you forgot the attachment.', 'It looks like the attachment is missing.', 'I think the attachment is missing.'],
      note: 'Забыть сделать — *forget to* + глагол: forgot to attach. «Кажется» — I think или It looks like.',
      traps: [
        { after: 'forgot ', keys: 'a', say: 'После forget — to: *forgot to attach*.' }
      ] },
    { id: 'em-link-doesnt-work', ru: 'Дайте знать, если ссылка не работает.', ctx: 'ссылка в письме',
      en: ["Let me know if the link doesn't work.", "Let me know if the link isn't working.", "Please let me know if the link doesn't work.", "Please let me know if the link isn't working.", 'Let me know if the link is broken.', "Tell me if the link doesn't work."],
      note: "После if — настоящее время, даже если речь о будущем: *if the link doesn't work*.",
      traps: [
        { after: 'if the link ', keys: 'w', say: "После if будущее не ставят: *if the link doesn't work*." }
      ] },
    { id: 'em-had-a-chance', ru: 'У вас была возможность посмотреть моё предложение?', ctx: 'напоминание о документе',
      en: ['Have you had a chance to look at my proposal?', 'Did you have a chance to look at my proposal?', 'Have you had a chance to review my proposal?', 'Did you get a chance to look at my proposal?', 'Did you have a chance to review my proposal?', 'Have you had time to look at my proposal?'],
      note: '*Have you had a chance to...?* — вежливое напоминание. Возможность здесь — chance, не possibility.',
      traps: [
        { after: ['had a ', 'have a ', 'get a '], keys: 'p', say: 'Возможность что-то сделать — *a chance*. Possibility — вероятность.' }
      ] },
    { id: 'em-resending', ru: 'Отправляю ещё раз — на случай, если вы пропустили письмо.', ctx: 'повторное письмо',
      en: ["I'm resending this in case you missed it.", "I'm sending this again in case you missed it.", "I'm resending this email in case you missed it.", 'Resending this in case you missed it.', "I'm resending it in case you missed it.", "I'm sending it again in case you missed it."],
      note: '*in case* — «на случай, если». Слово if после него не нужно: in case you missed it.',
      traps: [
        { after: 'in case ', keys: 'i', say: 'После in case — без if: *in case you missed it*.' }
      ] },
    { id: 'em-should-have-replied', ru: 'Мне следовало ответить раньше.', ctx: 'извинение',
      en: ['I should have replied sooner.', 'I should have replied earlier.', 'I should have responded sooner.', 'I should have answered sooner.', 'I should have gotten back to you sooner.', 'I should have written back sooner.'],
      note: 'Сожаление о прошлом — *should have* + третья форма: should have replied.',
      traps: [
        { after: 'i should ', start: true, keys: 'ra', say: 'Про прошлое — *should have replied*. Should reply — «следует ответить» сейчас.' },
        { after: 'should have repl', keys: 'y', say: 'После should have — третья форма: *replied*.' }
      ] },
    { id: 'em-as-discussed', ru: 'Как и договаривались, высылаю договор.', ctx: 'после звонка',
      en: ["As discussed, I'm sending you the contract.", "As discussed, I'm sending the contract.", "As we discussed, I'm sending you the contract.", "As agreed, I'm sending you the contract.", 'As discussed, here is the contract.', "As discussed, I'm sending you the agreement."],
      note: "*As discussed* — «как и договаривались». Дальше Continuous: I'm sending, раз действие сейчас.",
      traps: [
        { after: '', start: true, keys: 'h', say: '«Как» здесь — *as*: As discussed. How — это «каким образом».' },
        { after: ', i ', keys: 's', say: "Действие прямо сейчас — Continuous: *I'm sending*. Не I send." }
      ] },
    { id: 'em-please-confirm', ru: 'Подтвердите, пожалуйста, что вы получили платёж.', ctx: 'просим подтверждение',
      en: ['Please confirm that you received the payment.', 'Please confirm that you have received the payment.', 'Please confirm you received the payment.', 'Could you confirm that you received the payment?', 'Could you please confirm that you received the payment?', 'Please confirm receipt of the payment.'],
      note: '*Please confirm that* — просьба подтвердить. Союз «что» — that, а платёж конкретный: the payment.',
      traps: [
        { after: 'confirm ', keys: 'w', say: '«Что» как союз — *that*, не what: confirm that you received.' }
      ] },
    { id: 'em-budget-approved', ru: 'Бюджет согласован.', ctx: 'сообщаем о решении',
      en: ['The budget has been approved.', 'The budget is approved.', 'The budget was approved.', 'The budget got approved.'],
      note: 'Согласован — *approved*. Пассив has been approved: бюджет не одобряет сам, его одобрили.',
      traps: [
        { after: 'the budget ', start: true, keys: 'a', say: 'Бюджет не одобряет сам, его одобряют: *has been approved*.' },
        { after: ['has been ', 'budget is ', 'budget was '], keys: 'c', say: 'Coordinate — согласовывать действия. Бюджет одобряют: *approved*.' }
      ] },
    { id: 'em-love-to-help', ru: 'Я бы с радостью помог, но у меня нет времени.', ctx: 'вежливый отказ',
      en: ["I'd love to help, but I don't have the time.", "I'd love to help, but I don't have time.", "I would love to help, but I don't have the time.", "I would love to help, but I don't have time.", "I'd be happy to help, but I don't have the time.", "I'd like to help, but I don't have the time."],
      note: "*I'd love to, but...* — мягкий отказ: сначала готовность, потом причина." },
    { id: 'em-pass-this-time', ru: 'Спасибо за предложение, но в этот раз мы откажемся.', ctx: 'вежливый отказ',
      en: ["Thank you for the offer, but we'll pass this time.", "Thanks for the offer, but we'll pass this time.", "Thank you for the offer, but we'll have to pass this time.", "Thanks for the offer, but we'll have to pass this time.", 'Thank you for the offer, but we have to decline this time.', "Thank you for the offer, but we'll have to decline this time."],
      note: "*We'll pass* — мягкое «мы откажемся». This time — без предлога, и дверь остаётся открытой." },
    { id: 'em-not-right-person', ru: 'Боюсь, с этим вопросом не ко мне.', ctx: 'перенаправляем запрос',
      en: ["I'm afraid I'm not the right person to ask.", "I'm afraid I'm not the right person for this.", "I'm afraid I'm not the best person to ask.", "I'm afraid I'm not the right person to help with this.", "I'm afraid I'm not the right person to ask about this."],
      note: '*the right person to ask* — «тот, кого стоит спрашивать». С right всегда the.',
      traps: [
        { after: ["i'm not ", 'i am not '], keys: 'ra', say: 'С right — определённый артикль: *the right person*.' }
      ] },
    { id: 'em-reschedule', ru: 'Можем перенести встречу на среду?', ctx: 'перенос встречи',
      en: ['Could we reschedule the meeting for Wednesday?', 'Can we reschedule the meeting for Wednesday?', 'Could we move the meeting to Wednesday?', 'Can we move the meeting to Wednesday?', 'Could we reschedule the meeting to Wednesday?', 'Could we push the meeting to Wednesday?'],
      note: 'Перенести встречу на — *reschedule for* или *move to*. С on выйдет «встречу, которая в среду».',
      traps: [
        { after: 'the meeting ', keys: 'o', say: 'Перенести на — reschedule *for* или move *to* Wednesday. Не on.' },
        { after: ['could we ', 'can we '], start: true, keys: 't', say: 'Transfer — про деньги и файлы. Встречу переносят: *reschedule* или move.' }
      ] },
    { id: 'em-any-day-except', ru: 'Мне подойдёт любой день, кроме понедельника.', ctx: 'согласуем дату',
      en: ['Any day except Monday works for me.', 'Any day except Monday is fine.', 'Any day but Monday works for me.', 'Any day works for me except Monday.', 'Any day other than Monday works for me.', 'Any day except for Monday works for me.'],
      note: '«Кроме» как исключение — *except*. Besides значит «вдобавок», смысл выйдет обратный.',
      traps: [
        { after: 'any day b', start: true, keys: 'e', say: 'Besides — «вдобавок к». Исключение — *except*: any day except Monday.' }
      ] },
    { id: 'em-push-back-hour', ru: 'Можем сдвинуть звонок на час позже?', ctx: 'перенос звонка',
      en: ['Could we push the call back an hour?', 'Can we push the call back an hour?', 'Could we push the call back by an hour?', 'Can we push the call back by an hour?', 'Could we start the call an hour later?', 'Could we move the call an hour later?'],
      note: '*push back* — сдвинуть на позже. «На час» — просто *an hour* или by an hour, без on.',
      traps: [
        { after: ['call back ', 'the call '], keys: 'o', say: '«На час» — без on: push it back *an hour* или by an hour.' }
      ] },
    { id: 'em-look-forward-working', ru: 'С нетерпением жду нашей совместной работы.', ctx: 'конец письма',
      en: ['I look forward to working with you.', "I'm looking forward to working with you.", 'Looking forward to working with you.', 'I look forward to working together.', "I'm looking forward to working together.", 'Looking forward to working together.'],
      note: 'После *look forward to* — форма на -ing: to working. Здесь to — предлог, а не частица.',
      traps: [
        { after: 'forward to work', keys: ' ', say: 'После look forward to — форма на -ing: *to working with you*.' },
        { after: ['i ', "i'm ", 'i am '], start: true, keys: 'w', say: "I'm waiting звучит как упрёк. В конце письма — *I look forward to*." }
      ] }
  ]
});
