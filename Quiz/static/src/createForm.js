const createForm = (link) => {
    form = document.createElement('div');
        form.className = 'correspondence__item';
        form.innerHTML = `
                <div class="chat-message " id="formScript" style="background-color: rgb(255, 255, 255);">
                <div class="main-form" style="width: 100%;">
                <form id="signup-form" action="/./contact/" method="POST" autocomplete="off">
                
                <div class="fields fields-2"><div class="fields-column"><div id="formScript-first_name" class="field-block" data-name="first_name" data-require="true">
                <label><sup class="require" style="display: inline;">✱</sup>Имя, Отчество:</label>
                <input name="first_name" class="name input" type="text" placeholder="Петр Николаевич" class="empty-value" required> 
                </div><div id="formScript-email" class="field-block" data-name="email" data-require="true">
                <label><sup class="require" style="display: inline;">✱</sup>Электронная почта:</label>
                <input name="email" class="email input" type="text" placeholder="ivanov@mail.ru" title="на этот адрес будет выслан регистрационный номер и дальнейшие инструкции" class="empty-value" required>  
                </div></div><div class="fields-column"><div id="formScript-country" class="field-block" data-name="country" data-require="true">
                <label><sup class="require" style="display: inline;">✱</sup>Страна:</label>
                <select name="country" class="input" class="empty-value" required><option value="">страна не выбрана</option><option class="pinned" data-phone_prefix="7" data-id="45" value="Россия">Россия</option><option class="pinned" data-phone_prefix="380" data-id="58" value="Украина">Украина</option><option class="pinned" data-phone_prefix="77" data-id="22" 
                value="Казахстан">Казахстан</option><option class="pinned" data-phone_prefix="375" data-id="4" value="Беларусь">Беларусь</option><option class="pinned" data-phone_prefix="373" data-id="34" value="Молдова">Молдова</option><option class="pinned" data-phone_prefix="996" data-id="24" value="Кыргызстан">Кыргызстан</option><option class="pinned" data-phone_prefix="null" data-id="86" value="Таджикистан">Таджикистан</option><option class="pinned" data-phone_prefix="null" data-id="109" value="Узбекистан">Узбекистан</option><option class="pinned" data-phone_prefix="371" data-id="28" value="Латвия">Латвия</option><option class="pinned" data-phone_prefix="372" data-id="68" value="Эстония">Эстония</option><option class="pinned" data-phone_prefix="49" data-id="12" value="Германия">Германия</option><option data-phone_prefix="null" data-id="884" value="اليمن">اليمن</option><option data-phone_prefix="null" data-id="731" value="Абхазия">Абхазия</option><option data-phone_prefix="null" data-id="732" value="Австралия">Австралия</option><option data-phone_prefix="null" data-id="733" value="Австрия">Австрия</option><option data-phone_prefix="994" data-id="1" value="Азербайджан">Азербайджан</option><option data-phone_prefix="null" data-id="734" value="Албания">Албания</option><option data-phone_prefix="213" data-id="2" value="Алжир">Алжир</option><option data-phone_prefix="null" data-id="736" value="Ангилья">Ангилья</option><option data-phone_prefix="null" data-id="735" value="Ангола">Ангола</option><option data-phone_prefix="null" data-id="737" value="Андорра">Андорра</option><option data-phone_prefix="null" data-id="738" value="Антигуа и Барбуда">Антигуа и Барбуда</option><option data-phone_prefix="null" data-id="740" value="Аргентина">Аргентина</option><option data-phone_prefix="374" data-id="3" value="Армения">Армения</option><option data-phone_prefix="null" data-id="741" value="Аруба">Аруба</option><option data-phone_prefix="null" data-id="742" value="Афганистан">Афганистан</option><option data-phone_prefix="null" data-id="743" value="Багамы">Багамы</option><option data-phone_prefix="null" data-id="744" value="Бангладеш">Бангладеш</option><option data-phone_prefix="null" data-id="745" value="Барбадос">Барбадос</option><option data-phone_prefix="null" data-id="746" value="Бахрейн">Бахрейн</option><option data-phone_prefix="501" data-id="5" value="Белиз">Белиз</option><option data-phone_prefix="null" data-id="747" value="Бельгия">Бельгия</option><option data-phone_prefix="null" data-id="748" value="Бенин">Бенин</option><option data-phone_prefix="null" data-id="749" value="Бермуды">Бермуды</option><option data-phone_prefix="359" data-id="6" value="Болгария">Болгария</option><option data-phone_prefix="null" data-id="750" value="Боливия">Боливия</option><option data-phone_prefix="387" data-id="7" value="Босния и Герцеговина">Босния и Герцеговина</option><option data-phone_prefix="null" data-id="751" value="Ботсвана">Ботсвана</option><option data-phone_prefix="null" data-id="752" value="Бразилия">Бразилия</option><option data-phone_prefix="null" data-id="754" value="Бруней">Бруней</option><option data-phone_prefix="null" data-id="755" value="Буркина-Фасо">Буркина-Фасо</option><option data-phone_prefix="null" data-id="756" value="Бурунди">Бурунди</option><option data-phone_prefix="null" data-id="757" value="Бутан">Бутан</option><option data-phone_prefix="null" data-id="759" value="Вануату">Вануату</option><option data-phone_prefix="44" data-id="8" value="Великобритания">Великобритания</option><option data-phone_prefix="36" data-id="9" value="Венгрия">Венгрия</option><option data-phone_prefix="null" data-id="760" value="Венесуэла">Венесуэла</option><option data-phone_prefix="null" data-id="753" value="Виргинские острова, Великобритания">Виргинские острова, Великобритания</option><option data-phone_prefix="null" data-id="761" value="Восточный Тимор">Восточный Тимор</option><option data-phone_prefix="84" data-id="10" value="Вьетнам">Вьетнам</option><option data-phone_prefix="null" data-id="762" value="Габон">Габон</option><option data-phone_prefix="null" data-id="763" value="Гаити">Гаити</option><option data-phone_prefix="null" data-id="764" value="Гайана">Гайана</option><option data-phone_prefix="null" data-id="765" value="Гамбия">Гамбия</option><option data-phone_prefix="null" data-id="766" value="Гана">Гана</option><option data-phone_prefix="null" data-id="767" value="Гваделупа">Гваделупа</option><option data-phone_prefix="502" data-id="11" value="Гватемала">Гватемала</option><option data-phone_prefix="null" data-id="768" value="Гвинея">Гвинея</option><option data-phone_prefix="null" data-id="769" value="Гвинея-Бисау">Гвинея-Бисау</option><option data-phone_prefix="null" data-id="770" value="Гернси">Гернси</option><option data-phone_prefix="null" data-id="771" value="Гибралтар">Гибралтар</option><option data-phone_prefix="504" data-id="13" value="Гондурас">Гондурас</option><option data-phone_prefix="null" data-id="772" value="Гонконг">Гонконг</option><option data-phone_prefix="null" data-id="773" value="Гренада">Гренада</option><option data-phone_prefix="null" data-id="774" value="Гренландия">Гренландия</option><option data-phone_prefix="30" data-id="14" value="Греция">Греция</option><option data-phone_prefix="995" data-id="15" value="Грузия">Грузия</option><option data-phone_prefix="45" data-id="16" value="Дания">Дания</option><option data-phone_prefix="null" data-id="775" value="Джерси">Джерси</option><option data-phone_prefix="null" data-id="776" value="Джибути">Джибути</option><option data-phone_prefix="null" data-id="777" value="Доминиканская республика">Доминиканская республика</option><option data-phone_prefix="20" data-id="17" value="Египет">Египет</option><option data-phone_prefix="null" data-id="778" value="Замбия">Замбия</option><option data-phone_prefix="null" data-id="779" value="Западная Сахара">Западная Сахара</option><option data-phone_prefix="null" data-id="780" value="Зимбабве">Зимбабве</option><option data-phone_prefix="null" data-id="781" value="Израиль">Израиль</option><option data-phone_prefix="91" data-id="18" value="Индия">Индия</option><option data-phone_prefix="62" data-id="19" value="Индонезия">Индонезия</option><option data-phone_prefix="null" data-id="782" value="Иордания">Иордания</option><option data-phone_prefix="null" data-id="783" value="Ирак">Ирак</option><option data-phone_prefix="null" data-id="784" value="Иран">Иран</option><option data-phone_prefix="353" data-id="20" value="Ирландия">Ирландия</option><option data-phone_prefix="null" data-id="785" value="Исландия">Исландия</option><option data-phone_prefix="34" data-id="21" value="Испания">Испания</option><option data-phone_prefix="null" data-id="786" value="Италия">Италия</option><option data-phone_prefix="null" data-id="787" value="Йемен">Йемен</option><option data-phone_prefix="null" data-id="788" value="Кабо-Верде">Кабо-Верде</option><option data-phone_prefix="null" data-id="789" value="Камбоджа">Камбоджа</option><option data-phone_prefix="null" data-id="790" value="Камерун">Камерун</option><option data-phone_prefix="null" data-id="791" value="Канада">Канада</option><option data-phone_prefix="null" data-id="792" value="Катар">Катар</option><option data-phone_prefix="254" data-id="23" value="Кения">Кения</option><option data-phone_prefix="null" data-id="793" value="Кипр">Кипр</option><option data-phone_prefix="null" data-id="794" value="Кирибати">Кирибати</option><option data-phone_prefix="86" data-id="25" value="Китай">Китай</option><option data-phone_prefix="57" data-id="26" value="Колумбия">Колумбия</option><option data-phone_prefix="null" data-id="795" value="Коморы">Коморы</option><option data-phone_prefix="null" data-id="796" value="Конго">Конго</option><option data-phone_prefix="null" data-id="797" value="Конго, демократическая республика">Конго, демократическая республика</option><option data-phone_prefix="506" data-id="27" value="Коста-Рика">Коста-Рика</option><option data-phone_prefix="null" data-id="798" value="Кот-д'Ивуар">Кот-д'Ивуар</option><option data-phone_prefix="null" data-id="799" value="Куба">Куба</option><option data-phone_prefix="null" data-id="800" value="Кувейт">Кувейт</option><option data-phone_prefix="null" data-id="802" value="Лаос">Лаос</option><option data-phone_prefix="null" data-id="803" value="Лесото">Лесото</option><option data-phone_prefix="null" data-id="804" value="Либерия">Либерия</option><option data-phone_prefix="null" data-id="99" value="Ливан">Ливан</option><option data-phone_prefix="null" data-id="806" value="Ливия">Ливия</option><option data-phone_prefix="370" data-id="29" value="Литва">Литва</option><option data-phone_prefix="null" data-id="807" value="Лихтенштейн">Лихтенштейн</option><option data-phone_prefix="352" data-id="30" value="Люксембург">Люксембург</option><option data-phone_prefix="null" data-id="808" value="Маврикий">Маврикий</option><option data-phone_prefix="null" data-id="809" value="Мавритания">Мавритания</option><option data-phone_prefix="null" data-id="810" value="Мадагаскар">Мадагаскар</option><option data-phone_prefix="null" data-id="811" value="Малави">Малави</option><option data-phone_prefix="null" data-id="812" value="Малайзия">Малайзия</option><option data-phone_prefix="null" data-id="813" value="Мали">Мали</option><option data-phone_prefix="null" data-id="814" value="Мальдивы">Мальдивы</option><option data-phone_prefix="null" data-id="815" value="Мальта">Мальта</option><option data-phone_prefix="212" data-id="32" value="Марокко">Марокко</option><option data-phone_prefix="null" data-id="816" value="Мартиника">Мартиника</option><option data-phone_prefix="52" data-id="33" value="Мексика">Мексика</option><option data-phone_prefix="null" data-id="817" value="Мозамбик">Мозамбик</option><option data-phone_prefix="null" data-id="818" value="Монако">Монако</option><option data-phone_prefix="976" data-id="35" value="Монголия">Монголия</option><option data-phone_prefix="null" data-id="819" value="Мьянма">Мьянма</option><option data-phone_prefix="null" data-id="821" value="Намибия">Намибия</option><option data-phone_prefix="null" data-id="822" value="Науру">Науру</option><option data-phone_prefix="null" data-id="823" value="Непал">Непал</option><option data-phone_prefix="null" data-id="824" value="Нигер">Нигер</option><option data-phone_prefix="234" data-id="36" value="Нигерия">Нигерия</option><option data-phone_prefix="null" data-id="739" value="Нидерландские Антильские острова">Нидерландские Антильские острова</option><option data-phone_prefix="31" data-id="37" value="Нидерланды">Нидерланды</option><option data-phone_prefix="505" data-id="38" value="Никарагуа">Никарагуа</option><option data-phone_prefix="null" data-id="825" value="Новая Зеландия">Новая Зеландия</option><option data-phone_prefix="null" data-id="826" value="Новая Каледония">Новая Каледония</option><option data-phone_prefix="47" data-id="39" value="Норвегия">Норвегия</option><option data-phone_prefix="null" data-id="828" value="Объединенные Арабские Эмираты">Объединенные Арабские Эмираты</option><option data-phone_prefix="null" data-id="829" value="Оман">Оман</option><option data-phone_prefix="null" data-id="801" value="Острова Кука">Острова Кука</option><option data-phone_prefix="null" data-id="863" value="Острова Теркс и Кайкос">Острова Теркс и Кайкос</option><option data-phone_prefix="null" data-id="820" value="Остров Мэн">Остров Мэн</option><option data-phone_prefix="null" data-id="827" value="Остров Норфолк">Остров Норфолк</option><option data-phone_prefix="92" data-id="40" value="Пакистан">Пакистан</option><option data-phone_prefix="507" data-id="41" value="Панама">Панама</option><option data-phone_prefix="null" data-id="830" value="Папуа-Новая Гвинея">Папуа-Новая Гвинея</option><option data-phone_prefix="null" data-id="831" value="Парагвай">Парагвай</option><option data-phone_prefix="51" data-id="42" value="Перу">Перу</option><option data-phone_prefix="null" data-id="832" value="Питкерн">Питкерн</option><option data-phone_prefix="48" data-id="43" value="Польша">Польша</option><option data-phone_prefix="351" data-id="44" value="Португалия">Португалия</option><option data-phone_prefix="null" data-id="833" value="Пуэрто-Рико">Пуэрто-Рико</option><option data-phone_prefix="null" data-id="834" value="Реюньон">Реюньон</option><option data-phone_prefix="null" data-id="835" value="Руанда">Руанда</option><option data-phone_prefix="40" data-id="46" value="Румыния">Румыния</option><option data-phone_prefix="503" data-id="47" value="Сальвадор">Сальвадор</option><option data-phone_prefix="null" data-id="837" value="Самоа">Самоа</option><option data-phone_prefix="null" data-id="838" value="Сан-Марино">Сан-Марино</option><option data-phone_prefix="null" data-id="839" value="Сан-Томе и Принсипи">Сан-Томе и Принсипи</option><option data-phone_prefix="966" data-id="48" value="Саудовская Аравия">Саудовская Аравия</option><option data-phone_prefix="null" data-id="840" value="Свазиленд">Свазиленд</option><option data-phone_prefix="null" data-id="842" value="Святая Елена">Святая Елена</option><option data-phone_prefix="null" data-id="843" value="Северная Корея">Северная Корея</option><option data-phone_prefix="389" data-id="31" value="Северная Македония">Северная Македония</option><option data-phone_prefix="null" data-id="844" value="Сейшелы">Сейшелы</option><option data-phone_prefix="null" data-id="846" value="Сенегал">Сенегал</option><option data-phone_prefix="null" data-id="848" value="Сент-Винсент и Гренадины">Сент-Винсент и Гренадины</option><option data-phone_prefix="null" data-id="847" value="Сент-Китс и Невис">Сент-Китс и Невис</option><option data-phone_prefix="null" data-id="841" value="Сент-Люсия">Сент-Люсия</option><option data-phone_prefix="null" data-id="845" value="Сент-Пьер и Микелон">Сент-Пьер и Микелон</option><option data-phone_prefix="381" data-id="49" value="Сербия">Сербия</option><option data-phone_prefix="null" data-id="849" value="Сингапур">Сингапур</option><option data-phone_prefix="null" data-id="850" value="Сирия">Сирия</option><option data-phone_prefix="421" data-id="50" value="Словакия">Словакия</option><option data-phone_prefix="386" data-id="51" value="Словения">Словения</option><option data-phone_prefix="null" data-id="851" value="Соломоновы Острова">Соломоновы Острова</option><option data-phone_prefix="null" data-id="852" value="Сомали">Сомали</option><option data-phone_prefix="249" data-id="52" value="Судан">Судан</option><option data-phone_prefix="null" data-id="853" value="Суринам">Суринам</option><option data-phone_prefix="null" data-id="136" value="США">США</option><option data-phone_prefix="null" data-id="854" value="Сьерра-Леоне">Сьерра-Леоне</option><option data-phone_prefix="66" data-id="53" value="Таиланд">Таиланд</option><option data-phone_prefix="null" data-id="856" value="Тайвань">Тайвань</option><option data-phone_prefix="255" data-id="54" value="Танзания">Танзания</option><option data-phone_prefix="null" data-id="857" value="Того">Того</option><option data-phone_prefix="null" data-id="858" value="Токелау">Токелау</option><option data-phone_prefix="null" data-id="859" value="Тонга">Тонга</option><option data-phone_prefix="null" data-id="860" value="Тринидад и Тобаго">Тринидад и Тобаго</option><option data-phone_prefix="null" data-id="861" value="Тувалу">Тувалу</option><option data-phone_prefix="216" data-id="55" value="Тунис">Тунис</option><option data-phone_prefix="null" data-id="862" value="Туркменистан">Туркменистан</option><option data-phone_prefix="90" data-id="56" value="Турция">Турция</option><option data-phone_prefix="256" data-id="57" value="Уганда">Уганда</option><option data-phone_prefix="null" data-id="758" value="Уоллис и Футуна">Уоллис и Футуна</option><option data-phone_prefix="null" data-id="865" value="Уругвай">Уругвай</option><option data-phone_prefix="null" data-id="866" value="Фарерские острова">Фарерские острова</option><option data-phone_prefix="null" data-id="867" value="Фиджи">Фиджи</option><option data-phone_prefix="null" data-id="868" value="Филиппины">Филиппины</option><option data-phone_prefix="358" data-id="59" value="Финляндия">Финляндия</option><option data-phone_prefix="null" data-id="869" value="Франция">Франция</option><option data-phone_prefix="null" data-id="870" value="Французская Гвиана">Французская Гвиана</option><option data-phone_prefix="null" data-id="871" value="Французская Полинезия">Французская Полинезия</option><option data-phone_prefix="385" data-id="60" value="Хорватия">Хорватия</option><option data-phone_prefix="null" data-id="872" value="Чад">Чад</option><option data-phone_prefix="382" data-id="61" value="Черногория">Черногория</option><option data-phone_prefix="420" data-id="62" value="Чехия">Чехия</option><option data-phone_prefix="56" data-id="63" value="Чили">Чили</option><option data-phone_prefix="41" data-id="64" value="Швейцария">Швейцария</option><option data-phone_prefix="46" data-id="65" value="Швеция">Швеция</option><option data-phone_prefix="94" data-id="66" value="Шри-Ланка">Шри-Ланка</option><option data-phone_prefix="593" data-id="67" value="Эквадор">Эквадор</option><option data-phone_prefix="null" data-id="873" value="Экваториальная Гвинея">Экваториальная Гвинея</option><option data-phone_prefix="null" data-id="874" value="Эритрея">Эритрея</option><option data-phone_prefix="null" data-id="875" value="Эфиопия">Эфиопия</option><option data-phone_prefix="null" data-id="877" value="Южная Корея">Южная Корея</option><option data-phone_prefix="null" data-id="878" value="Южная Осетия">Южная Осетия</option><option data-phone_prefix="null" data-id="876" value="Южно-Африканская Республика">Южно-Африканская Республика</option><option data-phone_prefix="null" data-id="879" value="Ямайка">Ямайка</option><option data-phone_prefix="null" data-id="880" value="Япония">Япония</option></select>
            </div><div id="formScript-phone" class="field-block" data-name="phone" data-require="true">
                <label><sup class="require" style="display: inline;">✱</sup>Номер телефона:</label>  
                <div class="input-phone" style="height: 34px;">
                    <div class="phone-flag" style="background-image: url(/./static/media/flag.gif)">
                        <select class = "empty-value"name="phone_prefix"><option value="">другой</option><option class="pinned" data-id-country="45" value="7">Россия (+7)</option><option class="pinned" data-id-country="58" value="380">Украина (+380)</option><option class="pinned" data-id-country="22" value="77">Казахстан (+77)</option><option class="pinned" data-id-country="4" value="375">Беларусь (+375)</option><option class="pinned" data-id-country="34" value="373">Молдова (+373)</option><option class="pinned" data-id-country="24" value="996">Кыргызстан (+996)</option><option class="pinned" data-id-country="28" value="371">Латвия (+371)</option><option class="pinned" data-id-country="68" value="372">Эстония (+372)</option><option class="pinned" data-id-country="12" value="49">Германия (+49)</option><option data-id-country="1" value="994">Азербайджан (+994)</option><option data-id-country="2" value="213">Алжир (+213)</option><option data-id-country="3" value="374">Армения (+374)</option><option data-id-country="5" value="501">Белиз (+501)</option><option data-id-country="6" value="359">Болгария (+359)</option><option data-id-country="7" value="387">Босния и Герцеговина (+387)</option><option data-id-country="8" value="44">Великобритания (+44)</option><option data-id-country="9" value="36">Венгрия (+36)</option><option data-id-country="10" value="84">Вьетнам (+84)</option><option data-id-country="11" value="502">Гватемала (+502)</option><option data-id-country="13" value="504">Гондурас (+504)</option><option data-id-country="14" value="30">Греция (+30)</option><option data-id-country="15" value="995">Грузия (+995)</option><option data-id-country="16" value="45">Дания (+45)</option><option data-id-country="17" value="20">Египет (+20)</option><option data-id-country="18" value="91">Индия (+91)</option><option data-id-country="19" value="62">Индонезия (+62)</option><option data-id-country="20" value="353">Ирландия (+353)</option><option data-id-country="21" value="34">Испания (+34)</option><option data-id-country="23" value="254">Кения (+254)</option><option data-id-country="25" value="86">Китай (+86)</option><option data-id-country="26" value="57">Колумбия (+57)</option><option data-id-country="27" value="506">Коста-Рика (+506)</option><option data-id-country="29" value="370">Литва (+370)</option><option data-id-country="30" value="352">Люксембург (+352)</option><option data-id-country="32" value="212">Марокко (+212)</option><option data-id-country="33" value="52">Мексика (+52)</option><option data-id-country="35" value="976">Монголия (+976)</option><option data-id-country="36" value="234">Нигерия (+234)</option><option data-id-country="37" value="31">Нидерланды (+31)</option><option data-id-country="38" value="505">Никарагуа (+505)</option><option data-id-country="39" value="47">Норвегия (+47)</option><option data-id-country="40" value="92">Пакистан (+92)</option><option data-id-country="41" value="507">Панама (+507)</option><option data-id-country="42" value="51">Перу (+51)</option><option data-id-country="43" value="48">Польша (+48)</option><option data-id-country="44" value="351">Португалия (+351)</option><option data-id-country="46" value="40">Румыния (+40)</option><option data-id-country="47" value="503">Сальвадор (+503)</option><option data-id-country="48" value="966">Саудовская Аравия (+966)</option><option data-id-country="31" value="389">Северная Македония (+389)</option><option data-id-country="49" value="381">Сербия (+381)</option><option data-id-country="50" value="421">Словакия (+421)</option><option data-id-country="51" value="386">Словения (+386)</option><option data-id-country="52" value="249">Судан (+249)</option><option data-id-country="53" value="66">Таиланд (+66)</option><option data-id-country="54" value="255">Танзания (+255)</option><option data-id-country="55" value="216">Тунис (+216)</option><option data-id-country="56" value="90">Турция (+90)</option><option data-id-country="57" value="256">Уганда (+256)</option><option data-id-country="59" value="358">Финляндия (+358)</option><option data-id-country="60" value="385">Хорватия (+385)</option><option data-id-country="61" value="382">Черногория (+382)</option><option data-id-country="62" value="420">Чехия (+420)</option><option data-id-country="63" value="56">Чили (+56)</option><option data-id-country="64" value="41">Швейцария (+41)</option><option data-id-country="65" value="46">Швеция (+46)</option><option data-id-country="66" value="94">Шри-Ланка (+94)</option><option data-id-country="67" value="593">Эквадор (+593)</option></select>
                    </div>
                    <input name="phone" class="phone input" type="text" maxlength="16" placeholder="+7 951 555 40 30" title="номер телефона, также можете отметить какие мобильные мессенджеры (WhatsApp, Viber) зарегистрированы на этот номер телефона" class="empty-value" required>
                    <input name="whatsapp" value = "0" type="checkbox"  class="whatsapp" tabindex="-1"  checked="" title="отметьте если на этот номер зарегистрирован WhatsApp" style="position: absolute; visibility: hidden; left: 0px; top: 0px;"><button class="checkbox checkbox2" id="whatsapp" onclick="this.classList.toggle('checked')" title="отметьте если на этот номер зарегистрирован WhatsApp" tabindex="-1" role="stylize" type="button"></button>
                    <input name="telegram" value = "0" type="checkbox"  class="telegram" checked="" tabindex="-1" title="отметьте если на этот номер зарегистрирован Telegram" style="position: absolute; visibility: hidden; left: 0px; top: 0px;"><button class="checkbox checkbox2" id="telegram" onclick="this.classList.toggle('checked')" title="отметьте если на этот номер зарегистрирован Telegram" tabindex="-1" role="stylize" type="button"></button>
                    <input name="viber"  value = "0" type="checkbox" class="viber" checked="" tabindex="-1" title="отметьте если на этот номер зарегистрирован Viber" style="position: absolute; visibility: hidden; left: 0px; top: 0px;"><button class="checkbox checkbox2" id="viber" title="отметьте если на этот номер зарегистрирован Viber" onclick="this.classList.toggle('checked')" tabindex="-1" role="stylize" type="button"></button>
                    </div>
                    </div></div><div class="submit-block">
                    <input type="text" value="" tabindex="-1" class="empty-value">
                    <input type="submit" style="font-size: 14px"value="Отправить ➤">
                    </div></div>
                    <p id="formScript-agreement" class="signup-terms" required><sup class="require">✱</sup> <label class="outer"><input type="checkbox" class="input checkbox-agreement" value="1" checked="" style="position: absolute; visibility: hidden; left: 0px; top: 0px;"><button id="checkbox-agreement"class="checkbox checkbox1" onclick="this.classList.toggle('checked')" role="stylize" type="button" required></button> Я даю согласие на обработку моих персональных данных (<a href="https://myworkonline.ru/politika.html" target="_blank">ознакомиться</a>)</label></p>
                    </form>
                    </div>
                    </div>
                    </div>
        `;
        return form;
}