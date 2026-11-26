/* Колода «IT»: код-ревью, стендапы, рабочий чат, баги. Формат и правила — в README.md, проверка: node tools/check-phrases.mjs */
window.DECKS.push({
  id: 'it', title: 'IT', sub: 'код-ревью, стендапы, чат, баги',
  phrases: [
    /* ── Короткие и простые ── */
    { id: 'it-look-into', ru: 'Я разберусь с этим сегодня.', ctx: 'рабочий чат',
      en: ["I'll look into it today.", "I'll look into this today.", "I'll look into that today.", "I'm going to look into it today."],
      note: '*Look into* — разобраться, изучить проблему. Look at — просто посмотреть.',
      traps: [
        { after: 'look ', keys: 'a', say: 'Look at — взглянуть. «Разобраться» — look *into*.' }
      ] },
    { id: 'it-working-on', ru: 'Я сейчас над этим работаю.', ctx: 'рабочий чат',
      en: ["I'm working on it right now.", "I'm working on it now.", "I'm working on this right now.", "I'm working on this now.", "I'm currently working on it.", "I'm working on that right now."],
      note: "*Work on* — работать над чем-то. Процесс прямо сейчас — *I'm working*, а не I work." },
    { id: 'it-heads-up', ru: 'Спасибо, что предупредил.', ctx: 'рабочий чат',
      en: ['Thanks for the heads-up.', 'Thanks for the heads up.', 'Thank you for the heads-up.', 'Thank you for the heads up.'],
      note: '*Heads-up* — предупреждение заранее. Give me a heads-up — «предупреди меня».' },
    { id: 'it-ping-me', ru: 'Пингани меня, если что-то понадобится.', ctx: 'рабочий чат',
      en: ['Ping me if you need anything.', 'Ping me if you need something.', 'Just ping me if you need anything.', 'Message me if you need anything.', 'Let me know if you need anything.'],
      note: '*Ping me* — напиши мне в чат. После if — настоящее: if you *need*, а не will need.' },
    { id: 'it-no-blockers', ru: 'С моей стороны блокеров нет.', ctx: 'стендап',
      en: ['No blockers on my side.', 'No blockers on my end.', 'No blockers from my side.', 'No blockers from my end.', 'I have no blockers.', "I don't have any blockers."],
      note: '*On my side / on my end* — «с моей стороны». Так удобно закрывать свой статус на стендапе.' },
    { id: 'it-blocked-by', ru: 'Меня блокирует команда бэкенда.', ctx: 'стендап',
      en: ["I'm blocked by the backend team.", "I'm blocked on the backend team.", 'The backend team is blocking me.'],
      note: "*Be blocked by* — ждать кого-то и не мочь двигаться дальше. Это пассив, нужен am: *I'm blocked*.",
      traps: [
        { after: 'i ', start: true, keys: 'b', say: "Без am выйдет «я заблокировал». Пассив: *I'm blocked* by." }
      ] },
    { id: 'it-lgtm', ru: 'По-моему, выглядит хорошо.', ctx: 'код-ревью',
      en: ['Looks good to me.', 'It looks good to me.', 'This looks good to me.', 'That looks good to me.'],
      note: '*Looks good to me* — стандартное одобрение в ревью, сокращённо LGTM. Предлог *to*, не for.',
      traps: [
        { after: 'good ', keys: 'f', say: '«По-моему» здесь — *to me*: looks good *to* me.' }
      ] },
    { id: 'it-left-comments', ru: 'Я оставил пару комментариев.', ctx: 'код-ревью',
      en: ['I left a couple of comments.', 'I left a few comments.', "I've left a couple of comments.", "I've left a few comments.", 'I left a couple comments.', 'I left some comments.'],
      note: '*Leave a comment* — оставить комментарий, прошедшее *left*. Пара — *a couple of*, с артиклем.' },
    { id: 'it-just-opened-pr', ru: 'Я только что открыл пул-реквест.', ctx: 'пул-реквест',
      en: ['I just opened a PR.', "I've just opened a PR.", 'I just opened a pull request.', "I've just opened a pull request.", 'I just created a PR.', 'I just put up a PR.'],
      note: '*Open a PR* — открыть пул-реквест. Just ставится перед глаголом: I *just opened*.' },
    { id: 'it-review-my-pr', ru: 'Можешь посмотреть мой пул-реквест?', ctx: 'пул-реквест',
      en: ['Can you review my PR?', 'Could you review my PR?', 'Can you take a look at my PR?', 'Could you take a look at my PR?', 'Can you look at my PR?', 'Can you review my pull request?'],
      note: '*Review* — без предлога: review my PR. А вот look — только с *at*: look at my PR.',
      traps: [
        { after: 'look ', keys: 'm', say: 'Look требует предлог: look *at* my PR.' }
      ] },
    { id: 'it-ready-for-review', ru: 'Пул-реквест готов к ревью.', ctx: 'пул-реквест',
      en: ['The PR is ready for review.', 'The pull request is ready for review.', 'My PR is ready for review.', 'This PR is ready for review.'],
      note: '*Ready for review* — готов к ревью. Ready for + существительное, ready to + глагол: ready to merge.' },
    { id: 'it-works-on-my-machine', ru: 'У меня локально всё работает.', ctx: 'отладка',
      en: ['It works fine on my machine.', 'It works on my machine.', 'It works fine locally.', 'It works locally.', 'It works fine for me locally.', 'Everything works on my machine.'],
      note: '*It works on my machine* — классика. «У меня» здесь — on my machine или for me, не at me.' },
    { id: 'it-cant-reproduce', ru: 'Не могу воспроизвести баг локально.', ctx: 'отладка',
      en: ["I can't reproduce the bug locally.", "I can't reproduce this bug locally.", "I can't reproduce it locally.", "I'm not able to reproduce the bug locally.", "I can't repro the bug locally."],
      note: "*Reproduce a bug* — воспроизвести баг, в чате часто repro. После can't глагол идёт без to.",
      traps: [
        { after: ["can't ", 'cannot '], keys: 't', say: "После can't — глагол без to: can't *reproduce*." }
      ] },
    { id: 'it-prod-down', ru: 'Прод лежит.', ctx: 'инцидент',
      en: ['Production is down.', 'Prod is down.'],
      note: 'Сервис «лежит» — *is down*, «поднялся» — is back up. Production здесь без артикля.',
      traps: [
        { after: ['production ', 'prod ', 'is '], keys: 'l', say: 'Не lies: сервис «лежит» — *is down*.' }
      ] },
    { id: 'it-back-up', ru: 'Сервис снова работает.', ctx: 'инцидент',
      en: ['The service is back up.', 'The service is back online.', 'The service is up again.', 'The service is working again.', 'The service is back up and running.', 'The service is up and running again.'],
      note: '*Back up* — снова работает, *down* — лежит. Again ставят в конец: is working again.' },
    { id: 'it-rolling-back', ru: 'Мы откатываем последний релиз.', ctx: 'инцидент',
      en: ["We're rolling back the last release.", "We're rolling back the latest release.", "We're rolling the last release back.", "We're reverting the last release."],
      note: '*Roll back* — откатить релиз, существительное — a rollback. Про коммит чаще говорят revert.' },
    { id: 'it-when-shipping', ru: 'Когда мы это выкатываем?', ctx: 'релиз',
      en: ['When are we shipping this?', 'When are we releasing this?', 'When are we deploying this?', 'When do we ship this?', 'When are we going to ship this?', 'When will we ship this?'],
      note: '*Ship* — выкатить, зарелизить. В вопросе вспомогательный глагол идёт перед we: when *are we*.',
      traps: [
        { after: 'when w', start: true, keys: 'e', say: 'В вопросе сначала глагол: when *are we* shipping.' }
      ] },
    { id: 'it-code-freeze', ru: 'Код-фриз начинается в понедельник.', ctx: 'релиз',
      en: ['Code freeze starts on Monday.', 'The code freeze starts on Monday.', 'Code freeze starts Monday.', 'The code freeze starts Monday.', 'Code freeze begins on Monday.', 'The code freeze begins on Monday.'],
      note: 'С днями недели — *on*: on Monday, on Friday. In — с месяцами, at — со временем.',
      traps: [
        { after: ['starts ', 'begins '], keys: 'ia', say: 'С днём недели — *on* Monday.' }
      ] },
    { id: 'it-how-long', ru: 'Сколько времени это займёт?', ctx: 'планирование',
      en: ['How long will it take?', 'How long will this take?', 'How long will that take?', 'How long is it going to take?', 'How much time will it take?', 'How long is this going to take?'],
      note: '*How long will it take?* — вопрос про срок. Порядок вопросительный: will *it*, а не it will.',
      traps: [
        { after: 'how long i', keys: 't', say: 'В вопросе глагол перед it: how long *will it* take.' }
      ] },
    { id: 'it-can-you-hear', ru: 'Меня слышно?', ctx: 'созвон',
      en: ['Can you hear me?', 'Can you hear me okay?', 'Can everyone hear me?', 'Can you all hear me?'],
      note: 'Про связь — *Can you hear me?* А вот Do you hear me? звучит как «ты меня вообще слушаешь?».' },
    { id: 'it-on-mute', ru: 'Ты на мьюте.', ctx: 'созвон',
      en: ["You're on mute.", "You're muted.", "I think you're on mute.", "I think you're muted."],
      note: '*On mute* — с выключенным микрофоном. Предлог *on*, как в on hold и on call.' },
    { id: 'it-share-screen', ru: 'Давай я покажу экран.', ctx: 'созвон',
      en: ['Let me share my screen.', 'Let me just share my screen.', "I'll share my screen.", 'Let me show you my screen.'],
      note: '*Share my screen* — показать экран. После let me глагол идёт без to: *let me share*.',
      traps: [
        { after: 'let me ', keys: 't', say: 'После let me — глагол без to: let me *share*.' }
      ] },
    { id: 'it-five-minutes-left', ru: 'У нас осталось пять минут.', ctx: 'созвон',
      en: ['We have five minutes left.', "We've got five minutes left.", 'We have 5 minutes left.', "We've got 5 minutes left.", 'We only have five minutes left.', 'There are five minutes left.'],
      note: 'Осталось — слово *left* в самом конце: five minutes left. Перед числом оно не ставится.',
      traps: [
        { after: ['have ', 'got '], keys: 'l', say: 'Left — в конец: we have five minutes *left*.' }
      ] },
    { id: 'it-stuck', ru: 'Я застрял на этой задаче.', ctx: 'просьба о помощи',
      en: ["I'm stuck on this task.", 'I got stuck on this task.', "I'm stuck on this one."],
      note: "*Be stuck on* — застрять на чём-то. Это состояние, поэтому нужен am: *I'm stuck*.",
      traps: [
        { after: 'i ', start: true, keys: 's', say: "Нужен am: *I'm stuck* on this task." }
      ] },

    /* ── Средние ── */
    { id: 'it-let-you-know', ru: 'Я дам знать, когда будет готово.', ctx: 'рабочий чат',
      en: ["I'll let you know when it's ready.", "I'll let you know once it's ready.", "I'll let you know when it's done.", "I'll let you know once it's done.", "I'll let you know as soon as it's ready."],
      note: "*Let you know* — дать знать. После when и once — настоящее: when it's ready.",
      traps: [
        { after: ['when it ', 'once it ', 'as soon as it '], keys: 'w', say: "После when и once будущее не ставят: when *it's* ready." }
      ] },
    { id: 'it-get-back', ru: 'Вернусь к тебе с ответом завтра.', ctx: 'рабочий чат',
      en: ["I'll get back to you tomorrow.", "I'll get back to you on this tomorrow.", "I'll get back to you on that tomorrow.", "I'll get back to you about this tomorrow."],
      note: '*Get back to* someone — ответить позже, когда выяснишь. Return to you так не используют.',
      traps: [
        { after: ["i'll ", 'i will '], start: true, keys: 'r', say: 'Не return: ответить позже — *get back to* you.' }
      ] },
    { id: 'it-send-link', ru: 'Можешь скинуть мне ссылку на тикет?', ctx: 'рабочий чат',
      en: ['Can you send me the link to the ticket?', 'Could you send me the link to the ticket?', 'Can you send me a link to the ticket?', 'Could you send me a link to the ticket?', 'Can you send me the ticket link?', 'Can you share the link to the ticket?'],
      note: 'Ссылка на что-то — a link *to*. Русское «на» тянет к on, но так не говорят.',
      traps: [
        { after: 'link ', keys: 'o', say: 'Ссылка «на» — link *to* the ticket.' }
      ] },
    { id: 'it-take-a-look', ru: 'Глянешь, когда будет минутка?', ctx: 'рабочий чат',
      en: ['Can you take a look when you have a minute?', 'Could you take a look when you have a minute?', 'Can you take a look when you get a minute?', 'Could you take a look when you get a minute?', 'Can you have a look when you have a minute?', 'Can you take a look when you get a chance?'],
      note: '*Take a look* — глянуть. *When you have a minute* — вежливо: «не срочно, когда сможешь».' },
    { id: 'it-finished-yesterday', ru: 'Вчера я закончил задачу по логину.', ctx: 'стендап',
      en: ['Yesterday I finished the login task.', 'I finished the login task yesterday.', 'Yesterday I completed the login task.', 'I completed the login task yesterday.'],
      note: 'Со словом yesterday — простое прошедшее: I *finished*. Present perfect (I have finished) тут нельзя.',
      traps: [
        { after: ['yesterday i ', 'i '], start: true, keys: 'h', say: 'С yesterday — без have: I *finished*.' }
      ] },
    { id: 'it-almost-done', ru: 'Я почти закончил с рефакторингом.', ctx: 'стендап',
      en: ["I'm almost done with the refactoring.", "I'm almost done with the refactor.", "I'm nearly done with the refactoring.", "I'm almost finished with the refactoring.", "I've almost finished the refactoring.", "I'm almost done refactoring."],
      note: "*Be done with* — закончить с чем-то. В разговоре I'm done звучит естественнее, чем I have finished." },
    { id: 'it-pick-up', ru: 'Сегодня возьму следующий тикет.', ctx: 'стендап',
      en: ["Today I'll pick up the next ticket.", "I'll pick up the next ticket today.", "Today I'm going to pick up the next ticket.", "Today I'll take the next ticket.", "I'll take the next ticket today."],
      note: '*Pick up* a ticket — взять задачу в работу. Следующий по очереди — *the next*, с артиклем.' },
    { id: 'it-need-help-with', ru: 'Мне нужна помощь с настройкой CI.', ctx: 'стендап',
      en: ['I need some help with the CI setup.', 'I need help with the CI setup.', 'I need some help setting up CI.', 'I need help setting up CI.', 'I need some help with setting up CI.'],
      note: 'Help — неисчисляемое: *some help*, а не a help. Помощь с чем-то — help *with*.',
      traps: [
        { after: 'need ', keys: 'a', say: 'Help не считают: *some help* или просто help, без a.' }
      ] },
    { id: 'it-waiting-for', ru: 'Всё ещё жду ответа от клиента.', ctx: 'стендап',
      en: ["I'm still waiting for a reply from the client.", "I'm still waiting on a reply from the client.", "I'm still waiting for a response from the client.", "I'm still waiting for an answer from the client.", "I'm still waiting to hear back from the client."],
      note: '*Wait for* — ждать чего-то, предлог обязателен. В американском рабочем английском говорят и waiting on.',
      traps: [
        { after: 'waiting ', keys: 'a', say: 'Ждать чего-то — wait *for*: waiting *for* a reply.' }
      ] },
    { id: 'it-done-by-eod', ru: 'Должен закончить к концу дня.', ctx: 'стендап',
      en: ['I should be done by the end of the day.', 'I should be done by end of day.', 'I should finish by the end of the day.', 'I should be finished by the end of the day.', 'It should be done by the end of the day.', 'I should be done by the end of today.'],
      note: 'Срок «к» — *by*: by the end of the day, by Friday. Until значит «всё время до».',
      traps: [
        { after: ['done ', 'finish ', 'finished '], keys: 'tu', say: 'Срок «к» — *by* the end of the day. Не to и не until.' }
      ] },
    { id: 'it-typo', ru: 'Тут опечатка в названии переменной.', ctx: 'код-ревью',
      en: ["There's a typo in the variable name.", "There's a typo in the name of the variable.", "There's a typo in this variable name.", "There's a typo in the variable's name."],
      note: "Что-то где-то есть — *there's*: there's a typo, there's a bug. Опечатка — *typo*." },
    { id: 'it-not-sure-about', ru: 'Я не уверен насчёт этого подхода.', ctx: 'код-ревью',
      en: ["I'm not sure about this approach.", "I'm not sure about that approach.", "I'm not sure about the approach.", "I'm not so sure about this approach."],
      note: "*I'm not sure about* — мягко выразить сомнение в ревью. Уверен в чём-то — sure *about*, не in.",
      traps: [
        { after: 'sure ', keys: 'i', say: 'Уверен «в» — sure *about*, не in.' }
      ] },
    { id: 'it-add-test', ru: 'Можешь добавить тест на этот случай?', ctx: 'код-ревью',
      en: ['Could you add a test for this case?', 'Can you add a test for this case?', 'Could you add a test for that case?', 'Can you add a test for that case?', 'Could you add a test for this?', 'Could you add a test case for this?'],
      note: 'Тест на что-то — a test *for*. Русское «на» подсказывает on, но так не говорят.',
      traps: [
        { after: 'test ', keys: 'o', say: 'Тест «на» случай — a test *for* this case.' }
      ] },
    { id: 'it-edge-case', ru: 'А что будет, если список пустой?', ctx: 'код-ревью',
      en: ['What happens if the list is empty?', 'What happens when the list is empty?', 'What if the list is empty?', 'What will happen if the list is empty?'],
      note: '*What happens if* — вопрос про крайний случай. После if — настоящее: if the list *is* empty.',
      traps: [
        { after: 'the list ', keys: 'w', say: 'После if и when будущее не ставят: if the list *is* empty.' }
      ] },
    { id: 'it-why-not', ru: 'Почему бы не взять тут готовый хелпер?', ctx: 'код-ревью',
      en: ['Why not use the existing helper here?', 'Why not use the existing helper?', 'Why not just use the existing helper here?', 'Why not reuse the existing helper here?', 'Why not use the existing helper instead?'],
      note: '*Why not* + глагол без to — мягкое предложение в ревью: why not use, why not move.',
      traps: [
        { after: 'why not ', keys: 't', say: 'После why not — глагол без to: why not *use*.' }
      ] },
    { id: 'it-split-into', ru: 'Давай разобьём это на два пул-реквеста.', ctx: 'пул-реквест',
      en: ["Let's split this into two PRs.", "Let's split it into two PRs.", "Let's split this into two pull requests.", "Let's break this into two PRs.", "Let's split this up into two PRs.", "Let's break this up into two PRs."],
      note: 'Разбить на части — split *into*. «На» здесь не on: split into two PRs.',
      traps: [
        { after: ['split this ', 'split it ', 'break this '], keys: 'o', say: 'Разбить «на» — split *into* two PRs.' }
      ] },
    { id: 'it-addressed-comments', ru: 'Я поправил все замечания.', ctx: 'пул-реквест',
      en: ["I've addressed all the comments.", 'I addressed all the comments.', "I've addressed all comments.", "I've addressed all of the comments.", "I've fixed all the comments.", "I've addressed all the feedback."],
      note: '*Address a comment* — отработать замечание из ревью. Пишется с двумя d: a*dd*ressed.',
      traps: [
        { after: ' ad', keys: 'r', say: 'Две d: a*dd*ressed. В русском «адрес» одна, в английском две.' }
      ] },
    { id: 'it-ci-failing', ru: 'На моём пул-реквесте падает CI.', ctx: 'пул-реквест',
      en: ['CI is failing on my PR.', 'The CI is failing on my PR.', 'CI is failing on my pull request.', 'CI is failing for my PR.', 'The build is failing on my PR.'],
      note: 'Тесты и сборка «падают» — *fail*, не fall. Прямо сейчас — is failing.',
      traps: [
        { after: 'ci ', keys: 'f', say: 'Нужен is, и глагол fail, а не fall: CI *is failing*.' }
      ] },
    { id: 'it-ran-into', ru: 'Я наткнулся на странную ошибку.', ctx: 'отладка',
      en: ['I ran into a weird error.', 'I ran into a strange error.', "I've run into a weird error.", "I've run into a strange error.", 'I hit a weird error.', 'I came across a weird error.'],
      note: '*Run into* — наткнуться на проблему: ran into an error, ran into an issue. Прошедшее — *ran*.' },
    { id: 'it-only-in-prod', ru: 'Это происходит только в проде.', ctx: 'отладка',
      en: ['It only happens in production.', 'It happens only in production.', 'This only happens in production.', 'This happens only in production.', 'It only happens in prod.', 'It only happens on prod.'],
      note: 'Happen — обычный глагол, is перед ним не нужен: *it happens*. Only обычно стоит перед глаголом.',
      traps: [
        { after: 'it', start: true, keys: "'", say: 'Без is: happen — глагол. *It only happens*.' },
        { after: ['it ', 'this '], start: true, keys: 'i', say: 'Без is: happen — глагол. *It only happens*.' }
      ] },
    { id: 'it-changed-since', ru: 'Что изменилось с прошлого релиза?', ctx: 'отладка',
      en: ['What has changed since the last release?', 'What changed since the last release?', 'What has changed since the previous release?', 'What changed since the previous release?'],
      note: 'С какого-то момента — *since*: since the last release, since Monday. From тут не подходит.',
      traps: [
        { after: 'changed ', keys: 'f', say: '«С» какого-то момента — *since* the last release.' }
      ] },
    { id: 'it-caused-by', ru: 'Баг вызван изменением в конфиге.', ctx: 'отладка',
      en: ['The bug is caused by a config change.', 'The bug was caused by a config change.', 'The bug is caused by a change in the config.', 'The bug was caused by a change in the config.', "It's caused by a config change.", 'It was caused by a config change.'],
      note: '*Be caused by* — быть вызванным чем-то. Called — это «назван» или вызов функции.',
      traps: [
        { after: ['is ca', 'was ca', "it's ca"], keys: 'l', say: 'Вызван = *caused* by. Called — «назван».' }
      ] },
    { id: 'it-keep-an-eye', ru: 'Мы следим за ситуацией.', ctx: 'инцидент',
      en: ["We're keeping an eye on it.", "We're keeping an eye on the situation.", "We're keeping an eye on this.", "We're monitoring it.", "We're monitoring the situation."],
      note: '*Keep an eye on* — присматривать за чем-то. Формальнее — monitor, и он без предлога: monitor it.' },
    { id: 'it-users-affected', ru: 'Сколько пользователей это затронуло?', ctx: 'инцидент',
      en: ['How many users are affected?', 'How many users were affected?', 'How many users does it affect?', 'How many users does this affect?', 'How many users are impacted?', 'How many users did it affect?'],
      note: 'Пользователей можно посчитать — *how many*. Затронут — *affected*, через a. Effect — существительное.',
      traps: [
        { after: 'how m', keys: 'u', say: 'Users считаются поштучно: how *many* users.' },
        { after: ['are ', 'were '], keys: 'e', say: 'Затронут — *affected*, через a. Effect — существительное «эффект».' }
      ] },
    { id: 'it-for-now', ru: 'Давай пока отключим эту фичу.', ctx: 'инцидент',
      en: ["Let's turn off this feature for now.", "Let's turn this feature off for now.", "Let's disable this feature for now.", "Let's turn off the feature for now.", "Let's switch off this feature for now.", "Let's turn the feature off for now."],
      note: '*For now* — пока что, временно. *Turn off* — отключить, формальнее disable.' },
    { id: 'it-scheduled-for', ru: 'Релиз запланирован на четверг.', ctx: 'релиз',
      en: ['The release is scheduled for Thursday.', 'The release is planned for Thursday.', 'The release is set for Thursday.', 'The release is scheduled for this Thursday.'],
      note: '*Scheduled for* — назначен на день или время: scheduled for Thursday, for next week.' },
    { id: 'it-deploy-to-staging', ru: 'Выкачу это на стейджинг сегодня вечером.', ctx: 'релиз',
      en: ["I'll deploy it to staging tonight.", "I'll deploy this to staging tonight.", "I'll push it to staging tonight.", "I'll roll it out to staging tonight.", "I'm going to deploy it to staging tonight.", "I'll deploy it to staging this evening."],
      note: 'Куда выкатить — deploy *to* staging. Сегодня вечером — *tonight*, а не today evening.',
      traps: [
        { after: ['deploy it ', 'deploy this ', 'push it '], keys: 'o', say: 'Выкатить «на» — deploy *to* staging.' },
        { after: 'staging to', keys: 'd', say: 'Не today evening: *tonight* или this evening.' }
      ] },
    { id: 'it-feature-flag', ru: 'Фича спрятана за фича-флагом.', ctx: 'релиз',
      en: ['The feature is behind a feature flag.', 'The feature is behind a flag.', 'The feature is hidden behind a feature flag.', 'The feature is hidden behind a flag.', "It's behind a feature flag."],
      note: '*Behind a feature flag* — фича в коде есть, но выключена флагом. Артикль a обязателен.' },
    { id: 'it-rolling-out', ru: 'Мы выкатываем фичу постепенно.', ctx: 'релиз',
      en: ["We're rolling out the feature gradually.", "We're rolling the feature out gradually.", "We're rolling out this feature gradually.", "We're gradually rolling out the feature.", "We're releasing the feature gradually.", "We're rolling it out gradually."],
      note: '*Roll out* — выкатывать на пользователей, часто по частям. Не путай с *roll back* — откатить.' },
    { id: 'it-two-more-days', ru: 'Мне нужно ещё два дня, чтобы закончить.', ctx: 'планирование',
      en: ['I need two more days to finish.', 'I need another two days to finish.', 'I need two more days to finish it.', 'I need two more days to finish this.', 'I need 2 more days to finish.', 'I need another two days to finish it.'],
      note: 'Ещё два дня — *two more days* или another two days. More стоит после числа.',
      traps: [
        { after: 'need ', keys: 'm', say: 'Сначала число, потом more: *two more* days.' }
      ] },
    { id: 'it-make-deadline', ru: 'Мы не успеем к дедлайну.', ctx: 'планирование',
      en: ["We won't make the deadline.", "We're not going to make the deadline.", "We won't meet the deadline.", "We're not going to meet the deadline.", "We won't hit the deadline.", "We won't make it by the deadline."],
      note: 'Успеть к сроку — *make* или *meet the deadline*. Не успеть — miss the deadline.' },
    { id: 'it-next-sprint', ru: 'Давай перенесём это на следующий спринт.', ctx: 'планирование',
      en: ["Let's move this to the next sprint.", "Let's move it to the next sprint.", "Let's push this to the next sprint.", "Let's push it to the next sprint.", "Let's move this to next sprint.", "Let's postpone this until the next sprint."],
      note: 'Перенести на потом — *move to* или push to. «На» здесь — to, а не on.',
      traps: [
        { after: ['move this ', 'move it ', 'push this ', 'push it '], keys: 'o', say: 'Перенести «на» — move it *to* the next sprint.' }
      ] },
    { id: 'it-top-priority', ru: 'Это наш главный приоритет на этой неделе.', ctx: 'планирование',
      en: ['This is our top priority this week.', "It's our top priority this week.", 'This is our main priority this week.', 'This is our number one priority this week.', 'This is our top priority for this week.', 'This is our highest priority this week.'],
      note: 'С this, next и last предлог не нужен: *this week*, next sprint, last Friday.',
      traps: [
        { after: 'priority ', keys: 'oai', say: 'Перед this предлог не нужен: просто *this week*.' }
      ] },
    { id: 'it-discuss-after', ru: 'Давай обсудим это после созвона.', ctx: 'созвон',
      en: ["Let's discuss this after the call.", "Let's discuss it after the call.", "Let's talk about this after the call.", "Let's talk about it after the call.", "Let's discuss that after the call."],
      note: 'Discuss — без предлога: *discuss this*. About нужен только с talk: talk about this.',
      traps: [
        { after: 'discuss ', keys: 'a', say: 'Discuss без about: *discuss this*.' }
      ] },
    { id: 'it-come-back-later', ru: 'Давай вернёмся к этому позже.', ctx: 'созвон',
      en: ["Let's come back to this later.", "Let's come back to it later.", "Let's get back to this later.", "Let's come back to that later.", "Let's revisit this later.", "Let's get back to it later."],
      note: '*Come back to* — вернуться к теме позже. Так вежливо снимают вопрос с повестки созвона.' },
    { id: 'it-agree-on', ru: 'Давай договоримся о следующих шагах.', ctx: 'созвон',
      en: ["Let's agree on the next steps.", "Let's agree on next steps.", "Let's align on the next steps.", "Let's align on next steps."],
      note: 'Договориться о чём-то — *agree on*: agree on a date. *Next steps* — что делаем дальше.' },
    { id: 'it-best-way', ru: 'Как лучше всего это протестировать?', ctx: 'вопрос коллеге',
      en: ["What's the best way to test this?", "What's the best way to test it?", 'What would be the best way to test this?', "What's the best way to test that?", "What's the best way of testing this?"],
      note: "*What's the best way to* — «как лучше всего». После way сразу to + глагол, без how.",
      traps: [
        { after: 'way ', keys: 'h', say: 'Без how: the best way *to test*.' }
      ] },
    { id: 'it-explain-how', ru: 'Можешь объяснить, как это работает?', ctx: 'вопрос коллеге',
      en: ['Can you explain how this works?', 'Could you explain how this works?', 'Can you explain how it works?', 'Could you explain how it works?', 'Can you explain to me how this works?', 'Can you walk me through how this works?'],
      note: 'Explain me — ошибка: *explain to me* или просто explain. Дальше порядок прямой: how this *works*.',
      traps: [
        { after: 'explain ', keys: 'm', say: 'Не explain me: *explain to me* или просто explain.' },
        { after: 'how ', keys: 'd', say: 'Это не отдельный вопрос, порядок прямой: how this *works*.' }
      ] },
    { id: 'it-who-owns', ru: 'Не знаешь, кто отвечает за этот сервис?', ctx: 'вопрос коллеге',
      en: ['Do you know who owns this service?', 'Do you know who is responsible for this service?', "Do you know who's responsible for this service?", 'Do you know who maintains this service?', 'Do you happen to know who owns this service?', 'Do you know who is in charge of this service?'],
      note: 'Отвечать за сервис — *own* it или be responsible for it. Answer for — калька, так не говорят.',
      traps: [
        { after: 'who ', keys: 'a', say: 'Не answers for. Отвечает за сервис — *owns* it или is responsible for it.' }
      ] },

    /* ── Длиннее и сложнее ── */
    { id: 'it-separate-function', ru: 'Можешь вынести это в отдельную функцию?', ctx: 'код-ревью',
      en: ['Can you move this into a separate function?', 'Could you move this into a separate function?', 'Can you extract this into a separate function?', 'Could you extract this into a separate function?', 'Can you move this to a separate function?', 'Can you pull this out into a separate function?'],
      note: '*Move / extract this into* — вынести в. Пишется sep*a*rate, и перед ним артикль: a separate function.' },
    { id: 'it-squash-commits', ru: 'Сквошни коммиты перед мержем, пожалуйста.', ctx: 'пул-реквест',
      en: ['Please squash the commits before merging.', 'Please squash your commits before merging.', 'Squash the commits before merging, please.', 'Please squash the commits before you merge.', 'Squash your commits before merging, please.', 'Please squash the commits before the merge.'],
      note: 'После before глагол идёт с -ing: before *merging*. Или полное предложение: before you merge.',
      traps: [
        { after: 'before merg', keys: 'e', say: 'После before — форма на -ing: before *merging*.' }
      ] },
    { id: 'it-approve-once', ru: 'Одобрю, как только пройдут тесты.', ctx: 'пул-реквест',
      en: ["I'll approve it once the tests pass.", "I'll approve once the tests pass.", "I'll approve it when the tests pass.", "I'll approve it as soon as the tests pass.", "I'll approve it once tests pass.", "I'll approve this once the tests pass."],
      note: '*Once* — «как только». После once — настоящее: once the tests *pass*, а не will pass.' },
    { id: 'it-figure-out-why', ru: 'Пытаюсь понять, почему падает тест.', ctx: 'отладка',
      en: ["I'm trying to figure out why the test is failing.", "I'm trying to figure out why the test fails.", "I'm trying to understand why the test is failing.", "I'm trying to understand why the test fails.", "I'm trying to find out why the test is failing.", "I'm trying to work out why the test is failing."],
      note: '*Figure out* — разобраться, понять причину. После why порядок прямой: why the test *is failing*.',
      traps: [
        { after: 'why ', keys: 'di', say: 'Это не вопрос, порядок прямой: why *the test is* failing.' }
      ] },
    { id: 'it-rule-out', ru: 'Давай исключим проблему с кэшем.', ctx: 'отладка',
      en: ["Let's rule out a caching issue.", "Let's rule out a cache issue.", "Let's rule out caching issues.", "Let's rule out a problem with the cache.", "Let's rule out the cache."],
      note: '*Rule out* — исключить версию при отладке. Exclude сюда не подходит: это «не включать в список».' },
    { id: 'it-error-rate', ru: 'После деплоя выросло число ошибок.', ctx: 'инцидент',
      en: ['The error rate went up after the deploy.', 'The error rate went up after the deployment.', 'The error rate increased after the deploy.', 'The error rate spiked after the deploy.', 'The error rate has gone up since the deploy.', 'The number of errors went up after the deploy.'],
      note: 'Показатель вырос — *went up* или increased. Grow up — только «повзрослеть».',
      traps: [
        { after: ['rate ', 'errors '], keys: 'g', say: 'Grew up — про детей. Показатель *went up* или increased.' }
      ] },
    { id: 'it-urgent-login', ru: 'Это срочно: пользователи не могут войти.', ctx: 'инцидент',
      en: ["This is urgent, users can't log in.", "It's urgent, users can't log in.", "This is urgent, users can't sign in.", "This is urgent, customers can't log in.", 'This is urgent, users are unable to log in.'],
      note: 'Войти в систему — *log in*, два слова. Login — существительное, enter — «войти в комнату».',
      traps: [
        { after: ["can't ", 'cannot '], keys: 'e', say: 'Не enter: войти в аккаунт — *log in* или sign in.' },
        { after: ' log', keys: 'i', say: 'Глагол — два слова: *log in*. Login — существительное.' }
      ] },
    { id: 'it-before-sprint-end', ru: 'Нужно зарелизить до конца спринта.', ctx: 'релиз',
      en: ['We need to release before the end of the sprint.', 'We need to ship before the end of the sprint.', 'We need to release by the end of the sprint.', 'We have to release before the end of the sprint.', 'We need to release it before the end of the sprint.', 'We need to ship by the end of the sprint.'],
      note: 'Успеть до срока — *before* или *by*. Until значит «всё время до» и с release не сочетается.' },
    { id: 'it-changelog', ru: 'Не забудь обновить чейнджлог перед релизом.', ctx: 'релиз',
      en: ["Don't forget to update the changelog before the release.", "Don't forget to update the changelog before releasing.", 'Remember to update the changelog before the release.', "Please don't forget to update the changelog before the release.", "Don't forget to update the changelog before we release."],
      note: "*Don't forget to* + глагол — напомнить о деле. Forget doing — это уже «забыть, что делал»." },
    { id: 'it-longer-than', ru: 'Это занимает больше времени, чем я ожидал.', ctx: 'планирование',
      en: ["It's taking longer than I expected.", 'This is taking longer than I expected.', "It's taking longer than expected.", "It's taking more time than I expected.", 'It takes longer than I expected.', 'This is taking longer than expected.'],
      note: '*Take longer than* — занять больше времени, чем. Long — longer, без more; «чем» — th*a*n.',
      traps: [
        { after: 'more ', keys: 'l', say: 'Не more long: *longer*. Или more time.' },
        { after: ['longer th', 'time th'], keys: 'e', say: 'Сравнение — th*a*n. Then — «потом».' }
      ] },
    { id: 'it-depends-on-how-long', ru: 'Зависит от того, сколько займёт ревью.', ctx: 'планирование',
      en: ['It depends on how long the review takes.', 'It depends on how long the review will take.', 'That depends on how long the review takes.', 'It depends on how much time the review takes.', 'It depends on how long the review is going to take.'],
      note: '*Depends on* — всегда on. После how long порядок прямой: how long the review *takes*.',
      traps: [
        { after: 'depends ', keys: 'f', say: '«Зависит от» — depends *on*, не from.' },
        { after: ['how long ', 'how much time '], keys: 'wd', say: 'Это не вопрос, порядок прямой: how long *the review takes*.' }
      ] },
    { id: 'it-get-to-it', ru: 'Займусь этим, как только закончу текущую задачу.', ctx: 'планирование',
      en: ["I'll get to it once I finish my current task.", "I'll get to it as soon as I finish my current task.", "I'll get to it once I'm done with my current task.", "I'll get to it as soon as I finish the current task.", "I'll get to this as soon as I finish my current task.", "I'll do it as soon as I finish my current task."],
      note: '*Get to it* — добраться до задачи, заняться ей. После once и as soon as — настоящее: once I *finish*.' },
    { id: 'it-sorry-late', ru: 'Простите, опоздал: прошлый созвон затянулся.', ctx: 'созвон',
      en: ["Sorry I'm late, my last call ran over.", "Sorry, I'm late, my last call ran over.", "Sorry I'm late, my previous call ran over.", "Sorry I'm late, my last meeting ran over.", 'Sorry for being late, my last call ran over.', "Sorry I'm late, my last call ran long."],
      note: "*Run over* — затянуться дольше плана. Извиниться: sorry *I'm late* или sorry for being late.",
      traps: [
        { after: 'sorry for ', keys: 'l', say: "Не sorry for late: *sorry I'm late* или sorry for being late." }
      ] },
    { id: 'it-where-docs', ru: 'Не подскажешь, где лежит документация?', ctx: 'вопрос коллеге',
      en: ['Do you know where the docs are?', 'Do you know where the documentation is?', 'Could you tell me where the docs are?', 'Can you tell me where the docs are?', 'Do you know where I can find the docs?', 'Could you tell me where the documentation is?'],
      note: 'В вопросе внутри вопроса порядок прямой: where the docs *are*, а не where are the docs.',
      traps: [
        { after: 'where ', keys: 'a', say: 'Порядок прямой: where *the docs are*.' },
        { after: 'where i', keys: 's', say: 'Порядок прямой: where *the documentation is*.' }
      ] },
    { id: 'it-didnt-understand', ru: 'Я не совсем понял требования.', ctx: 'вопрос коллеге',
      en: ["I didn't quite understand the requirements.", "I didn't fully understand the requirements.", "I don't quite understand the requirements.", "I didn't quite get the requirements.", "I didn't really understand the requirements.", "I didn't completely understand the requirements."],
      note: "После didn't глагол в начальной форме: didn't *understand*. Not quite — «не совсем».",
      traps: [
        { after: 'underst', keys: 'o', say: "После didn't — начальная форма: didn't *understand*." },
        { after: 'i ', start: true, keys: 'n', say: "Отрицание в прошедшем — через *didn't*: I didn't quite understand." }
      ] },
    { id: 'it-as-far-as-i-know', ru: 'Насколько я знаю, это ещё не выкатили.', ctx: 'рабочий чат',
      en: ["As far as I know, it hasn't been released yet.", "As far as I know, it hasn't been deployed yet.", "As far as I know, it hasn't shipped yet.", "As far as I know, it's not released yet.", "As far as I know, this hasn't been released yet.", "As far as I know, it hasn't been rolled out yet."],
      note: "*As far as I know* — «насколько я знаю». Дальше пассив: it hasn't *been released*.",
      traps: [
        { after: ["hasn't ", 'has not '], keys: 'rd', say: "Это пассив, нужен been: hasn't *been released*." }
      ] },
    { id: 'it-sorry-to-bother', ru: 'Извини, что отвлекаю, но у меня срочный вопрос.', ctx: 'просьба о помощи',
      en: ['Sorry to bother you, but I have an urgent question.', "Sorry to bother you, but I've got an urgent question.", 'Sorry for bothering you, but I have an urgent question.', 'Sorry to disturb you, but I have an urgent question.', "I'm sorry to bother you, but I have an urgent question."],
      note: '*Sorry to bother you* — вежливо отвлечь коллегу. Перед гласным звуком — *an*: an urgent question.',
      traps: [
        { after: ['have a', 'got a'], keys: ' ', say: 'Перед гласным звуком — *an*: an urgent question.' }
      ] }
  ]
});
