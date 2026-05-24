export type ResearchSource = {
  title: string;
  url: string;
  detail: string;
  type: "Wikipedia" | "GitHub" | "StackOverflow" | "Yedək plan";
};

export type RoadmapTerm = {
  name: string;
  meaning: string;
};

export type RoadmapTechnology = {
  name: string;
  duration: string;
  focus: string;
  practice: string;
  reason: string;
};

export type RoadmapPhase = {
  title: string;
  duration: string;
  goal: string;
  actions: string[];
  output: string;
};

export type RoadmapPlan = {
  requestedTopic: string;
  topic: string;
  generatedAt: string;
  summary: string;
  intensity: string;
  correctionNotice?: string;
  terms: RoadmapTerm[];
  technologies: RoadmapTechnology[];
  sources: ResearchSource[];
  phases: RoadmapPhase[];
  dailySystem: string[];
  searchStatus: "live" | "fallback" | "unknown";
  isKnown: boolean;
  suggestedTopics: string[];
};

type FieldProfile = {
  title: string;
  aliases: string[];
  summary: string;
  terms: RoadmapTerm[];
  syllabus: RoadmapTechnology[];
  technical?: boolean;
};

type WikiSearchResponse = {
  query?: {
    search?: Array<{ title: string; pageid: number }>;
  };
};

type GithubResponse = {
  items?: Array<{
    full_name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
  }>;
};

type StackResponse = {
  items?: Array<{
    title: string;
    link: string;
    answer_count: number;
  }>;
};

const dailySystem = [
  "Gündə 15 dəqiqə: bu mərhələnin əsas terminlərini oxu və qısa qeyd et.",
  "Gündə 60-90 dəqiqə: yalnız hazırkı mərhələnin praktik tapşırığını yerinə yetir.",
  "Gündə 20 dəqiqə: öyrəndiyini öz sözlərinlə izah et və zəif yerləri işarələ.",
  "Gündə 10 dəqiqə: sabah üçün bir əsas tapşırıq seç.",
];

const languageDailySystem = [
  "Gündə 15 dəqiqə: söz və ifadələri cümlə içində təkrar et.",
  "Gündə 25 dəqiqə: qrammatika və nümunə cümlələr üzərində işlə.",
  "Gündə 20 dəqiqə: dinlə, danış və ya yaz. Passiv oxuma ilə kifayətlənmə.",
  "Gündə 10 dəqiqə: səhvlərini yaz və sabahkı danışıq/yazı hədəfini seç.",
];

const term = (name: string, meaning: string): RoadmapTerm => ({ name, meaning });

const block = (
  name: string,
  duration: string,
  focus: string,
  practice: string,
  reason: string
): RoadmapTechnology => ({ name, duration, focus, practice, reason });

const profile = (
  title: string,
  aliases: string[],
  summary: string,
  terms: RoadmapTerm[],
  syllabus: RoadmapTechnology[],
  technical = false
): FieldProfile => ({ title, aliases, summary, terms, syllabus, technical });

const profiles: FieldProfile[] = [
  profile(
    "İngilis dili",
    ["ingilis", "ingilis dili", "english", "ielts", "toefl"],
    "İngilis dili üçün plan texnologiya yox, dil bacarıqları üzərində qurulur: söz bazası, qrammatika, dinləmə, danışıq, oxu və yazı.",
    [
      term("Vocabulary", "Söz bazası və sözləri kontekstdə istifadə etmək bacarığı."),
      term("Grammar", "Cümləni düzgün qurmaq üçün qaydalar sistemi."),
      term("Listening", "Danışılan dili eşidib anlama bacarığı."),
      term("Speaking", "Fikri səsli formada ifadə etmək bacarığı."),
      term("Reading", "Mətnin əsas fikrini və detallarını anlama bacarığı."),
      term("Writing", "Fikri yazılı formada strukturlaşdırmaq bacarığı."),
      term("Pronunciation", "Sözləri düzgün səsləndirmək və vurğunu doğru vermək."),
      term("Fluency", "Çox dayanmadan, təbii axınla danışmaq."),
    ],
    [
      block("Səviyyə diaqnostikası", "1 gün", "Hazırkı səviyyəni yoxla: söz, qrammatika, dinləmə, danışıq və yazı.", "Placement test et və zəif tərəfləri ayrıca qeyd et.", "Düzgün səviyyədən başlamaq vaxt itkisinin qarşısını alır."),
      block("Əsas qrammatika", "7 gün", "Tenses, sentence structure, question forms, modal verbs və prepositions.", "Hər gün 20 cümlə qur və səhvləri düzəlt.", "Qrammatika cümləni düzgün qurmaq üçün bazadır."),
      block("Söz bazası və collocations", "10 gün", "Gündəlik mövzular üzrə əsas sözlər və birlikdə işlənən ifadələr.", "Hər gün 25 söz öyrən və 10 cümlədə istifadə et.", "Söz bazası olmadan oxu, dinləmə və danışıq inkişaf etmir."),
      block("Listening", "7 gün", "Slow English, qısa podkastlar və gündəlik dialoqlar.", "15 dəqiqə dinlə, sonra eşitdiyini 5 cümlə ilə yaz.", "Qulaq real tələffüzə və ritmə öyrəşməlidir."),
      block("Speaking", "10 gün", "Self-talk, shadowing və gündəlik mövzularda cavab vermə.", "Hər gün 3 dəqiqə səs yazısı et və təkrar dinlə.", "Danışıq yalnız aktiv istifadə ilə açılır."),
      block("Reading və Writing", "7 gün", "Sadə mətnlər, email, qısa paragraph və fikir ifadəsi.", "Hər gün 1 mətn oxu və 100-150 söz yaz.", "Oxu və yazı aktiv söz istifadəsini gücləndirir."),
    ],
    false
  ),
  profile(
    "Riyaziyyat",
    ["riyaziyyat", "matematika", "math", "mathematics", "cəbr", "algebra", "həndəsə"],
    "Riyaziyyat planı formul əzbəri yox, anlayış, məsələ həlli və ardıcıl mövzu quruluşu üzərində hazırlanır.",
    [
      term("Cəbr", "Dəyişənlər, ifadələr, tənliklər və funksiyalarla işləmə."),
      term("Tənlik", "Naməlum dəyəri tapmaq üçün qurulan bərabərlik."),
      term("Funksiya", "Bir dəyişənin digər dəyişənə bağlılığını göstərən qayda."),
      term("Həndəsə", "Fiqurlar, bucaqlar, sahə, həcm və fəza münasibətləri."),
      term("Triqonometriya", "Bucaq, sinus, kosinus və tangens əlaqələri."),
      term("Ehtimal", "Hadisələrin baş vermə şansını ölçmə."),
      term("Statistika", "Məlumatı toplama, təhlil etmə və nəticə çıxarma."),
    ],
    [
      block("Ədəd və hesab bazası", "4 gün", "Kəsr, faiz, qüvvət, kök və sadələşdirmə.", "Hər mövzudan 30 qarışıq misal həll et.", "Baza hesab zəifdirsə bütün sonrakı mövzular ləngiyir."),
      block("Cəbr ifadələri", "5 gün", "Dəyişən, ifadə, vurma düsturları və sadələşdirmə.", "Çevirmə və sadələşdirmə üzrə 50 misal et.", "Cəbr riyaziyyatın əsas dilidir."),
      block("Tənlik və bərabərsizlik", "6 gün", "Xətti, kvadrat tənlik və bərabərsizliklər.", "Gündə 20 tənlik həll et və səhv səbəbini yaz.", "Məsələ həllinin çoxu tənlik qurmaqdan keçir."),
      block("Funksiyalar", "5 gün", "Qrafik, domain/range, xətti və kvadrat funksiya.", "5 funksiyanın qrafikini çək və izah et.", "Funksiya anlayışı yuxarı riyaziyyatın mərkəzidir."),
      block("Həndəsə", "7 gün", "Bucaq, üçbucaq, çevrə, sahə və həcm.", "Hər teorem üçün 5 tətbiq məsələsi həll et.", "Vizual məntiq və isbat bacarığını gücləndirir."),
      block("Ehtimal və statistika", "4 gün", "Orta, median, faiz paylanması və ehtimal.", "Kiçik dataset üzərində nəticə çıxar.", "Real həyatda data və risk anlayışı üçün lazımdır."),
    ]
  ),
  profile(
    "Fizika",
    ["fizika", "physics", "mexanika", "optika", "elektrik"],
    "Fizika planı təbiət hadisələrini formul əzbəri ilə yox, anlayış, vahid, qanun və məsələ həlli ardıcıllığı ilə öyrədir.",
    [
      term("Qüvvə", "Cismin hərəkətini dəyişə bilən təsir."),
      term("Enerji", "İş görmə qabiliyyəti."),
      term("İmpuls", "Kütlə və sürətin hasilindən yaranan hərəkət miqdarı."),
      term("Elektrik cərəyanı", "Yüklərin istiqamətli hərəkəti."),
      term("Dalğa", "Enerjinin mühitdə və ya sahədə yayılması."),
      term("Termodinamika", "İstilik və enerji çevrilmələrini öyrənən sahə."),
    ],
    [
      block("Ölçmə və vahidlər", "2 gün", "SI vahidləri, çevirmə və ölçmə xətası.", "20 vahid çevirmə tapşırığı et.", "Fizikada səhvlərin çoxu vahiddən başlayır."),
      block("Mexanika", "7 gün", "Sürət, təcil, qüvvə və Nyuton qanunları.", "Hərəkət və qüvvə məsələləri həll et.", "Fizikanın əsas məntiqi mexanikada qurulur."),
      block("İş, enerji və impuls", "5 gün", "Enerji çevrilməsi, iş, güc və impuls.", "Enerji qorunması ilə 20 məsələ həll et.", "Qorunma qanunları fizikada güclü alətdir."),
      block("Elektrik və maqnetizm", "7 gün", "Cərəyan, gərginlik, müqavimət və sadə dövrə.", "Ohm qanunu ilə dövrə hesablamaları et.", "Müasir texnologiyaların fiziki bazasıdır."),
      block("Dalğa və optika", "5 gün", "Səs, işıq, əks olunma, sınma və linzalar.", "Optika sxemləri çək və məsələ həll et.", "Görmə, səs və rabitə anlayışlarını izah edir."),
    ]
  ),
  profile(
    "Kimya",
    ["kimya", "chemistry", "üzvi kimya", "qeyri üzvi kimya"],
    "Kimya planı maddənin quruluşundan reaksiyalara, hesablamalara və üzvi kimyaya qədər ardıcıllıq qurur.",
    [
      term("Atom", "Maddənin kimyəvi xüsusiyyət daşıyan əsas hissəciyi."),
      term("Molekul", "Atomların kimyəvi rabitə ilə birləşməsi."),
      term("Mol", "Maddə miqdarını ifadə edən ölçü vahidi."),
      term("Valentlik", "Atomun rabitə yaratma qabiliyyəti."),
      term("Reaksiya", "Maddələrin yeni maddələrə çevrilməsi."),
      term("pH", "Məhlulun turşu və ya qələvi olma göstəricisi."),
    ],
    [
      block("Atom və periodik sistem", "4 gün", "Atom quruluşu, elektron, proton, period və qrup.", "20 element üçün periodik xüsusiyyətləri izah et.", "Kimyanın dili periodik sistemdən başlayır."),
      block("Kimyəvi rabitə", "4 gün", "İon, kovalent və metal rabitə.", "Maddələrin rabitə tipini müəyyən et.", "Maddənin xassəsi rabitədən asılıdır."),
      block("Reaksiya tənlikləri", "5 gün", "Tənlik qurma, balanslaşdırma və reaksiya növləri.", "50 reaksiya tənliyi balanslaşdır.", "Kimyada məsələ həlli üçün əsas bacarıqdır."),
      block("Mol və hesablamalar", "6 gün", "Mol, molyar kütlə, faiz tərkibi və stoxiometriya.", "Gündə 15 hesablama məsələsi həll et.", "Kimyanı riyazi dəqiqliklə anlamağa kömək edir."),
      block("Üzvi kimya", "7 gün", "Karbohidrogen, funksional qrup və reaksiyalar.", "Üzvi maddə sinifləri üçün xəritə qur.", "Müasir material, dərman və bio-kimyanın bazasıdır."),
    ]
  ),
  profile(
    "Coğrafiya",
    ["coğrafiya", "cografiya", "geography", "xəritə", "iqlim"],
    "Coğrafiya planı xəritə oxuma, fiziki coğrafiya, iqlim, əhali, iqtisadi coğrafiya və regional analiz üzərində qurulur.",
    [
      term("Xəritə", "Yer səthinin kiçildilmiş və şərti işarələrlə təsviri."),
      term("Koordinat", "Məkanı enlik və uzunluqla göstərmə sistemi."),
      term("İqlim", "Uzunmüddətli hava şəraiti xüsusiyyətləri."),
      term("Relyef", "Yer səthinin forma və yüksəklik fərqləri."),
      term("Miqrasiya", "Əhalinin bir yerdən başqa yerə köçməsi."),
      term("Urbanizasiya", "Şəhərləşmə prosesi."),
    ],
    [
      block("Xəritə və koordinatlar", "3 gün", "Miqyas, şərti işarə, enlik və uzunluq.", "5 xəritədə koordinat və məsafə tap.", "Coğrafiya xəritə oxuma bacarığından başlayır."),
      block("Yer formaları və relyef", "4 gün", "Dağ, düzənlik, yayla, vulkan və zəlzələ.", "Relyef xəritəsi üzərində regionları izah et.", "Fiziki coğrafiyanın əsasını təşkil edir."),
      block("İqlim və hava", "5 gün", "Temperatur, yağıntı, külək və iqlim tipləri.", "Bir ölkənin iqlim diaqramını analiz et.", "Təbiət və insan fəaliyyətini izah edir."),
      block("Əhali coğrafiyası", "4 gün", "Əhali sıxlığı, miqrasiya və urbanizasiya.", "Ölkələr üzrə əhali müqayisəsi et.", "İnsanların məkan üzrə paylanmasını izah edir."),
      block("İqtisadi və regional coğrafiya", "5 gün", "Sənaye, kənd təsərrüfatı, resurs və regionlar.", "Bir region üçün coğrafi analiz hesabatı yaz.", "Coğrafiyanı real dünya qərarları ilə bağlayır."),
    ]
  ),
  profile(
    "Tarix",
    ["tarix", "history", "azerbaycan tarixi", "dünya tarixi"],
    "Tarix planı hadisələri əzbərləməkdən çox səbəb-nəticə, xronologiya, mənbə və dövr analizi üzərində qurulur.",
    [
      term("Xronologiya", "Hadisələrin zaman ardıcıllığı."),
      term("Səbəb-nəticə", "Hadisənin niyə baş verdiyi və nəyə gətirdiyi əlaqəsi."),
      term("Mənbə", "Tarixi məlumatın əldə edildiyi sənəd və ya sübut."),
      term("Sivilizasiya", "Mədəni, siyasi və iqtisadi inkişaf sistemi."),
      term("İslahat", "Siyasi, sosial və iqtisadi dəyişiklik tədbiri."),
      term("İnqilab", "Sistemin kəskin və əsaslı dəyişməsi."),
    ],
    [
      block("Tarixi düşüncə", "2 gün", "Xronologiya, mənbə, səbəb-nəticə və dövr anlayışı.", "Bir hadisəni 5W1H metodu ilə izah et.", "Tarixi proses kimi anlamağa kömək edir."),
      block("Qədim dünya", "5 gün", "Misir, Mesopotamiya, Yunan, Roma və ilk dövlətlər.", "Sivilizasiyaları müqayisə cədvəli ilə izah et.", "Dövlət və mədəniyyət anlayışının başlanğıcıdır."),
      block("Orta əsrlər", "5 gün", "Feodalizm, din, imperiyalar və ticarət yolları.", "Bir imperiyanın yüksəliş və eniş səbəblərini yaz.", "Siyasi və sosial quruluşları anlamağa kömək edir."),
      block("Yeni dövr", "6 gün", "Coğrafi kəşflər, maarifçilik və inqilablar.", "Bir inqilabı səbəb-nəticə xəritəsinə sal.", "Müasir dünyanın formalaşmasını izah edir."),
      block("Müasir tarix", "6 gün", "Dünya müharibələri, soyuq müharibə və qlobal sistem.", "XX əsr hadisələri üçün timeline qur.", "Bugünkü siyasət və cəmiyyətin köklərini göstərir."),
    ]
  ),
  profile(
    "Biologiya",
    ["biologiya", "biology", "genetika", "anatomiya", "botanika"],
    "Biologiya planı hüceyrədən orqanizmlərə, genetika, ekologiya və insan anatomiyasına qədər canlı sistemləri ardıcıl öyrədir.",
    [
      term("Hüceyrə", "Canlıların əsas quruluş və funksional vahidi."),
      term("DNT", "İrsi məlumatı daşıyan molekul."),
      term("Gen", "Xüsusi irsi məlumat vahidi."),
      term("Fotosintez", "Bitkilərin işıqdan istifadə edərək qida yaratması."),
      term("Təkamül", "Canlıların zamanla dəyişməsi prosesi."),
      term("Ekosistem", "Canlılar və mühitin qarşılıqlı sistemi."),
    ],
    [
      block("Hüceyrə biologiyası", "5 gün", "Hüceyrə quruluşu, orqanoidlər və membran.", "Hüceyrə sxemi çək və funksiyaları yaz.", "Canlı sistemləri anlamağın başlanğıcıdır."),
      block("Maddələr mübadiləsi", "4 gün", "Fotosintez, tənəffüs və enerji çevrilməsi.", "Prosesləri addım-addım xəritələ.", "Canlıların enerji məntiqini izah edir."),
      block("Genetika", "6 gün", "DNT, gen, irsiyyət və Punnett cədvəli.", "İrsiyyət məsələləri həll et.", "Xüsusiyyətlərin ötürülməsini anlamağa kömək edir."),
      block("İnsan anatomiyası", "6 gün", "Orqan sistemləri və funksiyaları.", "Hər sistem üçün qısa konspekt hazırla.", "İnsan bədənini sistem kimi anlamaq vacibdir."),
      block("Ekologiya", "4 gün", "Ekosistem, qida zənciri və populyasiya.", "Bir ekosistem analizi yaz.", "Canlıların mühitlə əlaqəsini göstərir."),
    ]
  ),
  profile(
    "Ədəbiyyat",
    ["ədəbiyyat", "edebiyyat", "literature", "poeziya", "roman"],
    "Ədəbiyyat planı janr, bədii təsvir vasitələri, mətn analizi, dövr və müəllif yanaşması üzərində qurulur.",
    [
      term("Janr", "Əsərin növü: şeir, hekayə, roman, dram və s."),
      term("Mövzu", "Əsərdə danışılan əsas məsələ."),
      term("İdeya", "Müəllifin çatdırmaq istədiyi əsas fikir."),
      term("Obraz", "Əsərdəki xarakter və ya simvolik fiqur."),
      term("Metafora", "Bir anlayışı başqa anlayışla ifadə etmək."),
      term("Kompozisiya", "Əsərin quruluş və hissələrinin düzülüşü."),
    ],
    [
      block("Ədəbi janrlar", "3 gün", "Epik, lirik, dramatik növlər və əsas janrlar.", "Hər janra 2 nümunə tap və izah et.", "Mətnin formasını tanımaq analizə başlanğıcdır."),
      block("Bədii təsvir vasitələri", "4 gün", "Metafora, epitet, təşbeh, mübaliğə və simvol.", "Şeirdən təsvir vasitələrini çıxar.", "Ədəbiyyatın dil gücünü anlamağa kömək edir."),
      block("Mətn analizi", "5 gün", "Mövzu, ideya, obraz, konflikt və kompozisiya.", "Bir hekayə üçün analiz cədvəli hazırla.", "Əsəri dərin anlamağa keçirir."),
      block("Ədəbi dövrlər", "5 gün", "Klassik, maarifçilik, romantizm, realizm və modernizm.", "Dövrləri müqayisə xəritəsinə sal.", "Müəllifi tarixi kontekstdə anlamaq vacibdir."),
      block("Yazılı ifadə", "4 gün", "Esse, xülasə və arqumentli fikir.", "Bir əsər haqqında 250 sözlük esse yaz.", "Ədəbiyyat biliyini ifadə etməyi gücləndirir."),
    ]
  ),
  profile(
    "Frontend Development",
    ["frontend", "front-end", "veb", "web development", "react", "next.js"],
    "Frontend roadmap brauzerdə işləyən interfeysləri qurmaq üçün HTML, CSS, JavaScript və müasir React ekosistemi üzərində ardıcıllıq yaradır.",
    [
      term("HTML", "Səhifənin strukturunu yaradan işarələmə dili."),
      term("CSS", "Görünüş, layout və responsive dizayn üçün stil dili."),
      term("JavaScript", "Brauzerdə interaktiv məntiq yazmaq üçün proqramlaşdırma dili."),
      term("DOM", "HTML elementlərini JavaScript ilə idarə etməyə imkan verən model."),
      term("Component", "UI-ın təkrar istifadə olunan hissəsi."),
      term("State", "İnterfeysin dəyişən məlumat vəziyyəti."),
    ],
    [
      block("HTML", "2 gün", "Semantic tags, forms, accessibility və SEO üçün struktur.", "Portfolio səhifəsinin skeletini qur.", "Frontend-in təməli düzgün HTML strukturudur."),
      block("CSS", "4 gün", "Box model, Flexbox, Grid, responsive dizayn və sadə animasiya.", "Eyni səhifəni mobil və desktop üçün adaptiv et.", "İnterfeysin görünüşünü və layout-u CSS idarə edir."),
      block("JavaScript", "7 gün", "Variables, functions, arrays, objects, DOM events, async/await, fetch.", "Todo və ya search app yarat.", "React-dən əvvəl JavaScript məntiqi oturmalıdır."),
      block("Git və GitHub", "1 gün", "Commit, branch, repo strukturu və pull request məntiqi.", "Layihəni GitHub-a yerləşdir.", "Real iş axınında kod versiyalama vacibdir."),
      block("React", "7 gün", "Components, props, state, effects, forms və custom hooks.", "API-dən data çəkən kiçik dashboard qur.", "Müasir frontend işlərində React əsas kitabxanalardan biridir."),
      block("TypeScript", "4 gün", "Types, interfaces, generics və component props tipləri.", "React layihəni TypeScript-ə keçir.", "Böyük layihələrdə səhvləri erkən tutmağa kömək edir."),
      block("Next.js", "5 gün", "Routing, server/client components, data fetching və deployment.", "Blog və ya mini SaaS landing qur.", "Production səviyyəli React tətbiqləri üçün güclü framework-dür."),
    ],
    true
  ),
  profile(
    "Backend Development",
    ["backend", "back-end", "node", "api", "server", "express"],
    "Backend roadmap server məntiqi, API, database, authentication və deployment üzərində qurulur.",
    [
      term("API", "Frontend və digər sistemlərin backend-lə danışdığı interfeys."),
      term("Endpoint", "API daxilində konkret əməliyyat URL-i."),
      term("Database", "Məlumatların saxlandığı struktur."),
      term("Authentication", "İstifadəçinin kimliyini yoxlama prosesi."),
      term("Middleware", "Request və response arasında işləyən ara məntiq."),
    ],
    [
      block("HTTP və REST", "2 gün", "Request/response, method, status code və endpoint dizaynı.", "Sadə REST API sxemi yaz.", "Backend düşüncəsi API məntiqindən başlayır."),
      block("Node.js", "4 gün", "Runtime, module sistemi, async I/O və filesystem.", "JSON ilə işləyən mini server yaz.", "JavaScript ilə backend yazmağın bazasıdır."),
      block("Express.js", "4 gün", "Routing, middleware, error handling və validation.", "CRUD API hazırla.", "Sürətli API qurmaq üçün praktik framework-dür."),
      block("Database", "5 gün", "SQL əsasları, schema, relation və query.", "PostgreSQL ilə istifadəçi və məhsul cədvəli qur.", "Backend-in real gücü data modelindən gəlir."),
      block("Authentication", "3 gün", "Password hash, JWT/session və protected routes.", "Login/register axını yarat.", "Real tətbiqlərdə giriş sistemi vacibdir."),
      block("Testing və Deployment", "3 gün", "API testləri, env dəyişənləri və deploy.", "API-ni cloud platformaya yerləşdir.", "İşi production-a çıxarmağı öyrədir."),
    ],
    true
  ),
  profile(
    "Python",
    ["python", "django", "flask", "fastapi"],
    "Python roadmap dili baza səviyyədən real script, API və layihə səviyyəsinə aparır.",
    [
      term("Variable", "Məlumatı yadda saxlamaq üçün adlandırılmış dəyər."),
      term("Function", "Təkrar istifadə olunan kod bloku."),
      term("List/Dict", "Python-un əsas data strukturları."),
      term("OOP", "Kodun class və object-lərlə strukturlaşdırılması."),
      term("Virtual environment", "Layihə paketlərini ayrıca mühitdə saxlamaq."),
    ],
    [
      block("Python sintaksisi", "4 gün", "Variable, condition, loop və function.", "10 kiçik algoritm tapşırığı həll et.", "Python-un baza dili oturmalıdır."),
      block("Data structures", "4 gün", "List, dict, tuple, set və comprehension.", "CSV/JSON data üzərində analiz apar.", "Real problemlərdə data strukturları çox işlənir."),
      block("OOP", "3 gün", "Class, object, method və inheritance.", "Kitabxana idarəetmə mini sistemi yaz.", "Böyük kodu strukturlaşdırmağa kömək edir."),
      block("File və API işləmə", "3 gün", "File read/write, requests və JSON.", "API-dən data çəkib fayla yaz.", "Avtomatlaşdırma üçün əsas bacarıqdır."),
      block("Django və ya FastAPI", "6 gün", "Routing, database bağlantısı və web API.", "Sadə backend API qur.", "Python-u real web layihəsinə tətbiq edir."),
    ],
    true
  ),
  profile(
    "Data Analitika",
    ["data", "analitika", "analytics", "analysis", "sql", "power bi", "tableau"],
    "Data analitika roadmap məlumatı toplamaq, təmizləmək, SQL ilə sorğulamaq, Python ilə analiz etmək və dashboard-la təqdim etmək üzərində qurulur.",
    [
      term("Dataset", "Analiz ediləcək məlumat toplusu."),
      term("SQL", "Database-dən məlumat çıxarma dili."),
      term("JOIN", "Cədvəlləri əlaqələndirmək üçün SQL əməliyyatı."),
      term("KPI", "Biznes nəticəsini ölçən əsas göstərici."),
      term("Dashboard", "Göstəriciləri vizual izləmə paneli."),
    ],
    [
      block("Excel/Google Sheets", "2 gün", "Table, formula, pivot və basic charts.", "Satış datası üçün hesabat hazırla.", "Analitika düşüncəsini sürətli formalaşdırır."),
      block("SQL", "6 gün", "SELECT, JOIN, GROUP BY və subquery.", "Real dataset üzərində 30 query yaz.", "Data analitikanın ən vacib dilidir."),
      block("Python", "5 gün", "Pandas, NumPy və data cleaning.", "Çirkli dataseti təmizlə.", "Analizi avtomatlaşdırmaq üçün lazımdır."),
      block("Visualization", "4 gün", "Chart seçimi, Matplotlib/Seaborn və insight təqdimatı.", "3 insight göstərən hesabat yarat.", "Nəticəni izah etmək üçün vizual dil lazımdır."),
      block("Power BI və ya Tableau", "5 gün", "Model, measure, filter və dashboard.", "İnteraktiv dashboard qur.", "Biznes mühitində nəticəni təqdim edir."),
    ],
    true
  ),
  profile(
    "AI və Machine Learning",
    ["ai", "süni intellekt", "machine learning", "ml", "deep learning", "llm", "prompt"],
    "AI roadmap Python, data hazırlığı, klassik ML, deep learning və LLM əsaslarını ardıcıllıqla öyrədir.",
    [
      term("Dataset", "Modelin öyrəndiyi məlumat toplusu."),
      term("Feature", "Modelə verilən giriş xüsusiyyəti."),
      term("Training", "Modelin datadan nümunə öyrənməsi."),
      term("Metric", "Model nəticəsini ölçən göstərici."),
      term("LLM", "Böyük dil modeli."),
    ],
    [
      block("Python", "5 gün", "Sintaksis, data strukturları və notebook mühiti.", "Notebook-da data ilə mini tapşırıq et.", "AI/ML üçün əsas iş dilidir."),
      block("Riyaziyyat əsasları", "4 gün", "Linear algebra, probability və gradient intuitiv anlayışı.", "Hər anlayışı sadə nümunə ilə izah et.", "Model məntiqini anlamağa kömək edir."),
      block("Pandas və NumPy", "4 gün", "Data cleaning, transformation və array əməliyyatları.", "Dataset təmizlə və analiz et.", "Modeldən əvvəl data hazırlanır."),
      block("Machine Learning", "7 gün", "Regression, classification, train/test və metrics.", "Scikit-learn ilə 2 model qur.", "AI praktikasının əsas mərhələsidir."),
      block("Deep Learning", "5 gün", "Neural network, embedding və fine-tuning anlayışı.", "Sadə neural network eksperimenti et.", "Müasir AI sistemlərini anlamaq üçündür."),
      block("LLM və Prompting", "4 gün", "Prompt pattern, RAG və agent əsasları.", "Kiçik research assistant prototipi qur.", "Müasir AI məhsullarında vacib qatdır."),
    ],
    true
  ),
  profile(
    "Kibertəhlükəsizlik",
    ["cyber", "kiber", "kibertəhlükəsizlik", "security", "hacking", "ethical hacking"],
    "Kibertəhlükəsizlik roadmap şəbəkə, Linux, web security, scripting və müdafiə analizini real lab-larla öyrədir.",
    [
      term("TCP/IP", "Şəbəkədə məlumat ötürülməsinin əsas protokol ailəsi."),
      term("Port", "Şəbəkə servisinin işlədiyi nömrələnmiş giriş nöqtəsi."),
      term("Vulnerability", "Sistemdə istifadə oluna bilən zəiflik."),
      term("Exploit", "Zəiflikdən istifadə edən üsul və ya kod."),
      term("SIEM", "Log və təhlükəsizlik hadisələrini analiz edən sistem."),
    ],
    [
      block("Network əsasları", "5 gün", "TCP/IP, DNS, HTTP və ports.", "Wireshark ilə sadə trafik analizi et.", "Security şəbəkə anlayışı olmadan qurulmur."),
      block("Linux", "4 gün", "Terminal, file permission, process və bash.", "Linux lab mühiti qur və 20 terminal əmri işlət.", "Kiber təhlükəsizlikdə əsas əməliyyat mühitidir."),
      block("Web security", "6 gün", "OWASP, XSS, SQL injection və auth flaws.", "PortSwigger lab-ları həll et.", "Ən çox rast gəlinən real zəifliklər buradadır."),
      block("Python scripting", "4 gün", "Automation, requests və parsing.", "Port scanner və log parser yaz.", "Təhlil və avtomatlaşdırma üçün lazımdır."),
      block("Blue team əsasları", "4 gün", "Logs, SIEM, alert və incident response.", "Sadə log analiz hesabatı hazırla.", "Müdafiə düşüncəsini formalaşdırır."),
    ],
    true
  ),
  profile(
    "UI/UX Dizayn",
    ["ui", "ux", "ui/ux", "design", "dizayn", "figma", "product design"],
    "UI/UX roadmap vizual prinsip, Figma, istifadəçi araşdırması, wireframe, prototype və case study üzərində qurulur.",
    [
      term("Hierarchy", "Ekranda nəyin daha vacib göründüyünü idarə edən vizual sıra."),
      term("Spacing", "Elementlər arasındakı məsafə sistemi."),
      term("Wireframe", "İnterfeysin aşağı detallı struktur eskizi."),
      term("Prototype", "Kliklənə bilən test modeli."),
      term("User journey", "İstifadəçinin məqsədə gedən addımlar xəritəsi."),
    ],
    [
      block("UI prinsipləri", "3 gün", "Spacing, hierarchy, contrast və typography.", "Mövcud app ekranını yenidən dizayn et.", "Gözəl dizayn qaydaları anlamaqdan başlayır."),
      block("Figma", "4 gün", "Frame, auto layout, component və variant.", "Design system mini kit yarat.", "Praktik dizayn üçün əsas alətdir."),
      block("UX research", "3 gün", "User goal, persona, journey və problem framing.", "Bir istifadəçi axını xəritələ.", "Dizayn sadəcə görünüş deyil, qərardır."),
      block("Wireframe və prototype", "4 gün", "Low/high fidelity və interaction flow.", "Clickable prototype hazırla.", "Fikri test edilə bilən hala gətirir."),
      block("Case study", "3 gün", "Problem, process, solution və outcome.", "Portfolio case study hazırla.", "Bacarığı təqdim etmək üçün vacibdir."),
    ]
  ),
  profile(
    "Qrafik Dizayn",
    ["qrafik dizayn", "graphic design", "photoshop", "illustrator", "branding"],
    "Qrafik dizayn roadmap kompozisiya, tipografiya, rəng, branding və dizayn alətləri üzərində qurulur.",
    [
      term("Composition", "Vizual elementlərin balanslı düzülüşü."),
      term("Typography", "Şrift seçimi və mətnin vizual quruluşu."),
      term("Color theory", "Rənglərin münasibəti və emosional təsiri."),
      term("Brand identity", "Brendin vizual tanınma sistemi."),
      term("Layout", "Mətn, şəkil və boşluqların yerləşimi."),
    ],
    [
      block("Dizayn prinsipləri", "4 gün", "Kompozisiya, kontrast, balans və vizual iyerarxiya.", "3 poster analiz et və yenidən qur.", "Dizayn gözlə deyil, prinsip və sistemlə qurulur."),
      block("Tipografiya", "4 gün", "Şrift seçimi, ölçü, line-height və oxunaqlılıq.", "Bir posterin 3 tipografik variantını hazırla.", "Mətn dizaynın əsas daşıyıcısıdır."),
      block("Rəng nəzəriyyəsi", "3 gün", "Palette, contrast, harmony və mood.", "3 fərqli brend palitrası qur.", "Rəng vizual emosiyanı idarə edir."),
      block("Photoshop/Illustrator", "7 gün", "Layer, mask, vector, export və workflow.", "Logo və sosial media post seti hazırla.", "Praktik dizayn alətlərlə icra olunur."),
      block("Branding mini layihəsi", "5 gün", "Logo, rəng, tipografiya və tətbiq nümunələri.", "Kiçik brend identity təqdimatı hazırla.", "Portfolio üçün real nəticə yaradır."),
    ]
  ),
  profile(
    "Memarlıq",
    ["memarlıq", "memarliq", "architecture", "architectural design"],
    "Memarlıq roadmap məkan düşüncəsi, plan, forma, konstruksiya, material və təqdimat bacarıqlarını ardıcıl öyrədir.",
    [
      term("Plan", "Məkanın yuxarıdan görünüş sxemi."),
      term("Fasad", "Binanın xarici görünüş tərəfi."),
      term("Kəsik", "Binanın iç quruluşunu göstərən kəsilmiş təsvir."),
      term("Miqyas", "Real ölçünün kağız və modeldə kiçildilmiş nisbəti."),
      term("Konsept", "Layihənin əsas ideya və məkan məntiqi."),
    ],
    [
      block("Məkan və ölçü", "4 gün", "Miqyas, insan ölçüsü, sirkulyasiya və funksiya.", "Kiçik otaq planı çək.", "Memarlıq insan və məkan münasibətindən başlayır."),
      block("Plan və kəsik", "6 gün", "Plan, section, elevation və oxunuş qaydaları.", "Sadə ev planı və kəsiyi hazırla.", "Layihəni texniki ifadə etməyə imkan verir."),
      block("Forma və kompozisiya", "5 gün", "Kütlə, ritm, proporsiya və balans.", "3 forma variantı modelləşdir.", "Memarlıqda ideya forma ilə görünür."),
      block("Material və konstruksiya", "5 gün", "Beton, polad, ağac və daşıyıcı sistemlər.", "Material seçimi üçün qısa analiz yaz.", "Gözəl layihə real quruluş məntiqinə dayanmalıdır."),
      block("Portfolio layihəsi", "7 gün", "Konsept, plan, render və təqdimat.", "Kiçik pavilyon və ya ev layihəsi hazırla.", "Memarlıq bacarığını göstərən real nəticə yaradır."),
    ]
  ),
  profile(
    "Interior Dizayn",
    ["interior", "interyer", "interior design", "daxili dizayn", "ev dizaynı"],
    "Interior dizayn roadmap məkan planlaması, stil, material, işıqlandırma, rəng və təqdimat üzərində qurulur.",
    [
      term("Space planning", "Məkanın funksional bölgüsünü planlama."),
      term("Moodboard", "Stil, rəng və material atmosferini göstərən lövhə."),
      term("Material palette", "Layihədə istifadə ediləcək material seçimi."),
      term("Lighting", "Məkanın işıqlandırma sistemi."),
      term("Furniture layout", "Mebel yerləşim planı."),
    ],
    [
      block("Məkan planlaması", "4 gün", "Funksiya, keçid yolları və mebel ölçüləri.", "Bir otaq üçün layout variantları çək.", "İnteryer gözəl olmaqla yanaşı işlək olmalıdır."),
      block("Stil və moodboard", "3 gün", "Modern, minimal, klassik və material atmosferi.", "Bir konsept üçün moodboard hazırla.", "Stil qərarları layihənin dilini müəyyən edir."),
      block("Rəng və material", "4 gün", "Rəng harmoniyası, tekstura və material uyğunluğu.", "Material palette hazırla.", "Məkanın hissi rəng və materialdan gəlir."),
      block("İşıqlandırma", "3 gün", "Ambient, task, accent light və lampalar.", "Otaq üçün işıq planı qur.", "İşıq interyerin atmosferini dəyişir."),
      block("3D vizualizasiya", "6 gün", "SketchUp/Blender/3ds Max əsasları.", "Bir otağın sadə 3D modelini hazırla.", "Müştəriyə ideyanı göstərmək üçün vacibdir."),
    ]
  ),
  profile(
    "Exterior Dizayn",
    ["exterior", "eksteryer", "exterior design", "landşaft", "landscape", "həyət dizaynı"],
    "Exterior dizayn roadmap fasad, landşaft, material, işıqlandırma və xarici məkan kompozisiyasını öyrədir.",
    [
      term("Fasad", "Binanın xarici görünüş səthi."),
      term("Landscape", "Açıq məkan, yaşıllıq və sərt örtük dizaynı."),
      term("Hardscape", "Daş, beton, yol və platforma kimi sərt elementlər."),
      term("Softscape", "Bitki, ağac, ot və təbii elementlər."),
      term("Outdoor lighting", "Xarici məkan işıqlandırması."),
    ],
    [
      block("Fasad kompozisiyası", "4 gün", "Proportion, rhythm, opening və material balansı.", "Bir ev fasadı üçün 3 variant hazırla.", "Exterior dizaynın əsas vizual dili fasaddır."),
      block("Material seçimi", "3 gün", "Daş, taxta, metal, şüşə və iqlim uyğunluğu.", "Material moodboard hazırla.", "Xarici mühit materialdan daha çox tələb edir."),
      block("Landşaft planı", "5 gün", "Giriş, yol, yaşıllıq, oturma və zonalama.", "Kiçik həyət planı qur.", "Açıq məkan istifadə axını ilə işləməlidir."),
      block("Bitki seçimi", "3 gün", "İqlim, qulluq, kölgə və mövsümi görünüş.", "Bitki palitrası hazırla.", "Yaşıl elementlər exterior-un canlı hissəsidir."),
      block("Xarici işıqlandırma", "3 gün", "Path light, wall wash və accent light.", "Gecə görünüşü üçün işıq sxemi qur.", "Exterior gecə də işlək və gözəl olmalıdır."),
    ]
  ),
  profile(
    "Digital Marketing",
    ["marketing", "marketinq", "digital marketing", "smm", "seo", "reklam", "performance marketing"],
    "Digital marketing roadmap auditoriya, kontent, SEO, sosial media, reklam və analitika bacarıqlarını ardıcıllıqla öyrədir.",
    [
      term("Audience", "Məhsul və kontenti görməli olan hədəf insan qrupu."),
      term("Funnel", "İnsanın tanışlıqdan alışa qədər keçdiyi mərhələlər."),
      term("SEO", "Axtarış motorlarında görünməyi yaxşılaşdırma prosesi."),
      term("CTR", "Reklam və ya linkə klik faizi."),
      term("Conversion", "İstifadəçinin istənən hərəkəti etməsi."),
    ],
    [
      block("Market və auditoriya", "3 gün", "Persona, pain point və rəqib analizi.", "Bir niş üçün auditoriya xəritəsi hazırla.", "Marketinq düzgün insanı tanımaqdan başlayır."),
      block("Kontent strategiyası", "4 gün", "Content pillar, format, hook və calendar.", "7 günlük kontent planı qur.", "Davamlı kontent sistemsiz alınmır."),
      block("SEO əsasları", "5 gün", "Keyword research, on-page SEO və search intent.", "Bir məqalə üçün SEO brief hazırla.", "Uzunmüddətli trafik üçün SEO vacibdir."),
      block("Sosial media", "4 gün", "Platforma seçimi, post formatı və engagement.", "Instagram/TikTok üçün 10 post ideyası hazırla.", "Brend görünürlüğünü artırır."),
      block("Paid ads", "5 gün", "Campaign, creative, targeting və budget.", "Test reklam strukturu qur.", "Sürətli nəticə üçün reklam məntiqi lazımdır."),
      block("Analitika", "4 gün", "CTR, CPC, CPA, conversion və hesabat.", "Kampaniya performans hesabatı hazırla.", "Marketinq nəticə ölçülmədən idarə olunmur."),
    ]
  ),
  profile(
    "Product Management",
    ["product management", "product manager", "məhsul idarəçiliyi", "pm"],
    "Product management roadmap problem kəşfi, user research, prioritization, roadmap, metrics və launch bacarıqlarını əhatə edir.",
    [
      term("Problem discovery", "Həll edilməli real istifadəçi problemini tapmaq."),
      term("PRD", "Product Requirements Document, məhsul tələbləri sənədi."),
      term("MVP", "Ən kiçik işlək məhsul versiyası."),
      term("Prioritization", "Hansı işi əvvəl görməyi seçmək."),
      term("North Star Metric", "Məhsulun əsas uğur göstəricisi."),
    ],
    [
      block("Problem discovery", "4 gün", "User pain, market gap və problem statement.", "10 istifadəçi problemi siyahısı çıxar.", "Məhsul problem olmadan başlamamalıdır."),
      block("User research", "4 gün", "Interview, survey və insight çıxarma.", "5 müsahibə sualı və insight cədvəli hazırla.", "İstifadəçi həqiqətini tapmaq üçün lazımdır."),
      block("PRD və MVP", "5 gün", "Requirement, scope və MVP qərarları.", "Mini PRD yaz.", "Komandanın nə quracağını aydınlaşdırır."),
      block("Prioritization", "3 gün", "RICE, impact/effort və tradeoff.", "Feature-ləri prioritetləşdir.", "Vaxt və resurs həmişə məhduddur."),
      block("Metrics", "3 gün", "Activation, retention, conversion və North Star.", "Məhsul üçün metrik ağacı qur.", "Məhsul nəticə ilə idarə olunur."),
    ]
  ),
  profile(
    "Maliyyə və Mühasibat",
    ["finance", "maliyyə", "muhasibat", "mühasibat", "accounting", "investisiya"],
    "Maliyyə roadmap hesabatlar, büdcə, cash flow, analiz və risk anlayışlarını öyrədir.",
    [
      term("Income statement", "Gəlir, xərc və mənfəəti göstərən hesabat."),
      term("Balance sheet", "Aktiv, öhdəlik və kapital vəziyyəti."),
      term("Cash flow", "Pulun daxilolma və çıxış axını."),
      term("Budget", "Planlaşdırılmış gəlir və xərc xəritəsi."),
      term("ROI", "İnvestisiya gəlirliliyi göstəricisi."),
    ],
    [
      block("Maliyyə savadlılığı", "3 gün", "Gəlir, xərc, aktiv, passiv və büdcə.", "Şəxsi aylıq büdcə hazırla.", "Maliyyə qərarları əsas anlayışlardan başlayır."),
      block("Mühasibat əsasları", "5 gün", "Debit/credit, journal entry və hesablar.", "10 sadə əməliyyatı qeyd et.", "Biznes maliyyəsini oxumaq üçün lazımdır."),
      block("Maliyyə hesabatları", "5 gün", "Income statement, balance sheet və cash flow.", "Sadə şirkət hesabatını analiz et.", "Rəqəmlər biznesin sağlamlığını göstərir."),
      block("Excel maliyyə modeli", "4 gün", "Formula, forecast və scenario.", "Kiçik cash-flow model qur.", "Maliyyə analizi praktiki model tələb edir."),
      block("İnvestisiya əsasları", "4 gün", "Risk, return, diversification və valuation.", "2 investisiya variantını müqayisə et.", "Pul qərarlarında risk-mənfəət balansı vacibdir."),
    ]
  ),
  profile(
    "Video Montaj",
    ["video", "montaj", "video editing", "premiere", "after effects", "capcut"],
    "Video montaj roadmap kadr seçimi, timeline, audio, color, motion və export mərhələlərini öyrədir.",
    [
      term("Timeline", "Kadrların ardıcıllıqla yığıldığı montaj sahəsi."),
      term("Cut", "Kadrların kəsilib birləşdirilməsi."),
      term("B-roll", "Əsas görüntünü dəstəkləyən əlavə kadr."),
      term("Color grading", "Videonun rəng və atmosferini düzəltmək."),
      term("Keyframe", "Animasiya dəyişiklik nöqtəsi."),
    ],
    [
      block("Montaj aləti", "2 gün", "Premiere, DaVinci və ya CapCut interfeysi.", "Timeline-da sadə video yığ.", "Alətə hakim olmadan sürətli işləmək olmur."),
      block("Cut və ritm", "4 gün", "Kadr seçimi, jump cut və pacing.", "60 saniyəlik dinamik video montaj et.", "Montajın hissi ritmdən gəlir."),
      block("Audio", "3 gün", "Səs təmizliyi, music bed və sound effects.", "Videoya səs qatını düzəlt.", "Pis audio yaxşı videonu da zəif göstərir."),
      block("Color", "3 gün", "Exposure, contrast, white balance və grading.", "Eyni videoya 2 fərqli look ver.", "Rəng videonun emosiyasını dəyişir."),
      block("Motion və text", "4 gün", "Keyframe, title, lower third və transition.", "Sosial media intro hazırla.", "Motion diqqəti yönləndirir."),
    ]
  ),
];

const suggestedTopics = profiles.map((profileItem) => profileItem.title);

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "").replace(/&quot;/g, "\"");

const normalizeTopic = (value: string) =>
  value
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toLocaleUpperCase("az-AZ") + part.slice(1))
    .join(" ");

const clean = (value: string) =>
  value
    .toLocaleLowerCase("az-AZ")
    .replace(/[^\p{L}\p{N}\s.+#/-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

function levenshtein(a: string, b: string) {
  const matrix = Array.from({ length: a.length + 1 }, (_, row) =>
    Array.from({ length: b.length + 1 }, (_, col) => (row === 0 ? col : col === 0 ? row : 0))
  );

  for (let row = 1; row <= a.length; row += 1) {
    for (let col = 1; col <= b.length; col += 1) {
      const cost = a[row - 1] === b[col - 1] ? 0 : 1;
      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

function similarity(a: string, b: string) {
  const longest = Math.max(a.length, b.length);
  if (longest === 0) return 1;
  return 1 - levenshtein(a, b) / longest;
}

function resolveProfile(topic: string) {
  const text = clean(topic);
  const exact = profiles.find((profileItem) =>
    profileItem.aliases.some((alias) => {
      const normalizedAlias = clean(alias);
      return text === normalizedAlias || text.includes(normalizedAlias);
    })
  );

  if (exact) {
    return { profile: exact, correctionNotice: undefined };
  }

  const best = profiles
    .flatMap((profileItem) =>
      [profileItem.title, ...profileItem.aliases].map((alias) => ({
        profile: profileItem,
        score: similarity(text, clean(alias)),
      }))
    )
    .sort((a, b) => b.score - a.score)[0];

  if (best && best.score >= 0.72) {
    return {
      profile: best.profile,
      correctionNotice: `Bunu nəzərdə tutdun? "${topic}" əvəzinə "${best.profile.title}" kimi anladım.`,
    };
  }

  return { profile: undefined, correctionNotice: undefined };
}

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

async function researchWikipedia(topic: string, signal: AbortSignal): Promise<ResearchSource[]> {
  const searchUrl = new URL("https://en.wikipedia.org/w/api.php");
  searchUrl.search = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: topic,
    format: "json",
    origin: "*",
  }).toString();

  const search = await fetchJson<WikiSearchResponse>(searchUrl.toString(), signal);
  const first = search.query?.search?.[0];
  if (!first) return [];

  return [
    {
      title: first.title,
      url: `https://en.wikipedia.org/?curid=${first.pageid}`,
      detail: "Mövzunun əsas konteksti üçün ümumi mənbə tapıldı.",
      type: "Wikipedia",
    },
  ];
}

async function researchGithub(topic: string, signal: AbortSignal): Promise<ResearchSource[]> {
  const url = new URL("https://api.github.com/search/repositories");
  url.search = new URLSearchParams({
    q: `${topic} roadmap syllabus tutorial`,
    sort: "stars",
    order: "desc",
    per_page: "3",
  }).toString();

  const data = await fetchJson<GithubResponse>(url.toString(), signal);
  return (data.items ?? []).slice(0, 3).map((repo) => ({
    title: repo.full_name,
    url: repo.html_url,
    detail: `${repo.description ?? "Praktik öyrənmə üçün açıq mənbə layihəsi"} · ${repo.stargazers_count.toLocaleString()} ulduz.`,
    type: "GitHub",
  }));
}

async function researchStackOverflow(topic: string, signal: AbortSignal): Promise<ResearchSource[]> {
  const url = new URL("https://api.stackexchange.com/2.3/search/advanced");
  url.search = new URLSearchParams({
    order: "desc",
    sort: "relevance",
    q: topic,
    site: "stackoverflow",
    pagesize: "2",
  }).toString();

  const data = await fetchJson<StackResponse>(url.toString(), signal);
  return (data.items ?? []).slice(0, 2).map((item) => ({
    title: stripHtml(item.title),
    url: item.link,
    detail: `Real problemləri görmək üçün sual-cavab mənbəyi. Cavab sayı: ${item.answer_count}.`,
    type: "StackOverflow",
  }));
}

function buildUnknownPlan(topic: string): RoadmapPlan {
  const normalizedTopic = normalizeTopic(topic);

  return {
    requestedTopic: topic,
    topic: normalizedTopic,
    generatedAt: new Date().toLocaleString("az-AZ"),
    summary:
      "Bu mövzu haqda məlumatım yoxdur. Etibarlı termin və roadmap bazamda bu sahə tapılmadığı üçün plan uydurmadım. Daha konkret sahə adı yaz və ya aşağıdakı nümunələrdən birini seç.",
    intensity: "Mövzu tanınmadı",
    terms: [],
    technologies: [],
    sources: [],
    phases: [],
    dailySystem: [],
    searchStatus: "unknown",
    isKnown: false,
    suggestedTopics,
  };
}

function buildPhases(topic: string, syllabus: RoadmapTechnology[]): RoadmapPhase[] {
  return syllabus.map((syllabusItem, index) => ({
    title: syllabusItem.name,
    duration: syllabusItem.duration,
    goal: syllabusItem.reason,
    actions: [
      syllabusItem.focus,
      syllabusItem.practice,
      `Mərhələnin sonunda "${syllabusItem.name}" üzrə 1 səhifəlik qeyd və kiçik praktik nəticə hazırla.`,
    ],
    output:
      index === syllabus.length - 1
        ? `${topic} üzrə yekun nəticə və növbəti inkişaf planı.`
        : `${syllabusItem.name} üzrə ölçülə bilən mini nəticə.`,
  }));
}

function buildPlan(
  topic: string,
  selectedProfile: FieldProfile,
  sources: ResearchSource[],
  correctionNotice?: string
): RoadmapPlan {
  const activeSources = sources.length
    ? sources
    : [
        {
          title: `${selectedProfile.title} üçün daxili sillabus bazası`,
          url: "https://www.wikipedia.org/",
          detail: "Canlı mənbələr əlçatan olmadı, plan daxili sahə bazasındakı termin və roadmap-lə yaradıldı.",
          type: "Yedək plan" as const,
        },
      ];

  return {
    requestedTopic: topic,
    topic: normalizeTopic(topic),
    generatedAt: new Date().toLocaleString("az-AZ"),
    summary: selectedProfile.summary,
    intensity: `${selectedProfile.syllabus.length} mərhələli ${selectedProfile.technical ? "texnologiya" : "öyrənmə"} roadmap-i`,
    correctionNotice,
    terms: selectedProfile.terms,
    technologies: selectedProfile.syllabus,
    sources: activeSources,
    phases: buildPhases(selectedProfile.title, selectedProfile.syllabus),
    dailySystem: selectedProfile.title === "İngilis dili" ? languageDailySystem : dailySystem,
    searchStatus: sources.length ? "live" : "fallback",
    isKnown: true,
    suggestedTopics,
  };
}

export async function generateRoadmapFromInternet(topic: string): Promise<RoadmapPlan> {
  const cleanTopic = topic.trim();
  if (!cleanTopic) return buildUnknownPlan("Boş mövzu");

  const { profile: selectedProfile, correctionNotice } = resolveProfile(cleanTopic);
  if (!selectedProfile) return buildUnknownPlan(cleanTopic);

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 9000);

  try {
    const researchTasks: Array<Promise<ResearchSource[]>> = [
      researchWikipedia(selectedProfile.title, controller.signal),
    ];

    if (selectedProfile.technical) {
      researchTasks.push(
        researchGithub(selectedProfile.title, controller.signal),
        researchStackOverflow(selectedProfile.title, controller.signal)
      );
    }

    const results = await Promise.allSettled(researchTasks);
    const sources = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
    return buildPlan(cleanTopic, selectedProfile, sources, correctionNotice);
  } catch {
    return buildPlan(cleanTopic, selectedProfile, [], correctionNotice);
  } finally {
    window.clearTimeout(timeout);
  }
}
