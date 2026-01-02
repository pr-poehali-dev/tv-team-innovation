import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const features = [
    {
      icon: "Tv",
      title: "2000+ каналов",
      description: "Огромная коллекция российских телеканалов на любой вкус"
    },
    {
      icon: "Zap",
      title: "Без задержек",
      description: "Прямая трансляция в HD качестве без буферизации"
    },
    {
      icon: "Smartphone",
      title: "На всех устройствах",
      description: "Смотрите на телефоне, планшете, компьютере и Smart TV"
    },
    {
      icon: "Clock",
      title: "Архив передач",
      description: "Доступ к архиву за последние 7 дней"
    }
  ];

  const channelCategories = [
    {
      category: "Общие",
      icon: "Home",
      channels: ["Первый HD", "Первый HD (Uncomp)", "Первый", "Первый +2", "Первый +4", "Первый +6", "Первый +8", "Первый HD +4", "Первый Европа", "Россия 1 HD", "Россия 1 HD (Uncomp)", "Россия 1", "Россия 1 +2", "Россия 1 +4", "Россия 1 +6", "Россия 1 +8", "Россия-Культура", "РТР Планета", "Пятница! HD", "Пятница +2", "Пятница +6", "Рен ТВ HD", "Рен ТВ +2", "Рен ТВ +4", "Рен ТВ +6", "Рен ТВ International", "НТВ HD", "НТВ HD (Uncomp)", "НТВ +2", "НТВ +4", "НТВ +6", "НТВ +8", "СТС HD", "СТС HD (Uncomp)", "СТС +2", "СТС +4", "СТС +6", "СТС International", "ТНТ HD", "ТНТ HD (Uncomp)", "ТНТ +2", "ТНТ +4", "ТНТ +6", "ТНТ4 HD", "ТНТ4 +2", "ТНТ4 +4", "Москва 24", "ТВЦ", "ТВЦ +2", "ТВЦ +4", "ТВЦ +6", "ТВЦ International", "Звезда", "Звезда +2", "Звезда +4", "Звезда +6", "Звезда Плюс", "Победа", "Пятый Канал", "Пятый Канал +2", "Пятый Канал +4", "Пятый Канал +6", "Пятый Канал International"]
    },
    {
      category: "Новости",
      icon: "Newspaper",
      channels: ["Россия 24", "РБК HD", "RT HD", "Дождь", "Известия", "Мир 24", "Настоящее время HD", "360 Новости", "EuroNews", "BBC World News Europe", "CNN", "FOX News HD", "RTVI", "Asharq News", "France 24", "Al Jazeera"]
    },
    {
      category: "Кино",
      icon: "Film",
      channels: ["Киносемья HD", "Киносемья HD (Uncomp)", "Кинохит HD", "Кинохит HD (Uncomp)", "Киносвидание HD", "Наше новое кино", "Киномикс HD", "Киномикс HD (Uncomp)", "Кинопремьера HD", "Кинопремьера HD (Uncomp)", "Мужское кино HD", "Родное кино", "Индийское кино", "Киносерия HD", "Киноужас HD", "Кинокомедия HD", "Start World HD", "Start Air HD", "TV 1000", "TV 1000 Action", "TV 1000 Русское Кино", "TV 1000 World Kino", "VIP Comedy HD", "VIP Premiere HD", "VIP Megahit HD", "ViP Serial HD", "Amedia Hit HD", "Amedia 1 HD", "Amedia 2 HD", "Amedia Premium HD", "НСТ", "Мосфильм HD", "Кино ТВ HD", "Остросюжетное HD", "Дом Кино", "Дом Кино Премиум HD", "ЕвроКино", "ТВ3", "ТВ 3 +2", "ТВ 3 +4", "ТВ 3 +6", "Домашний", "Домашний +2", "Домашний +4", "Домашний +6", "Домашний International", "НТВ Сериал", "НТВ Хит", "Fox HD", "Fox life", "Paramount Channel HD", "Премиальное HD", "Романтичное HD", "Иллюзион+", "Русский бестселлер", "Русский Иллюзион", "Русский роман", "Русский Детектив", "Комедия", "Любимое Кино", "Шокирующее HD", "Комедийное HD", "Криминальное HD", "Наше HD", "Bollywood HD", "Plan B HD", ".Sci-Fi", ".Black", ".Red HD"]
    },
    {
      category: "Кинозалы",
      icon: "Clapperboard",
      channels: ["Premiere HD", "Premium HD", "Thriller HD", "Paradox HD", "РуКино HD", "Paradise HD", "Victory HD", "Serial HD", "USSR HD", "VHS HD", "Insomnia HD", "BCU Action HD", "BCU Cinema HD", "BCU Comedy HD", "BCU Marvel HD", "BCU Stars HD", "BCU Romantic HD", "BCU History HD", "BCU Criminal HD", "Киноджем 1 HD", "Киноджем 2 HD", "CineMan", "CineMan Premium", "CineMan Top", "CineMan Action", "CineMan Marvel", "MM NewFilm RU HD", "MM Боевик HD", "MM Комедия HD", "MM Триллер HD", "MM Ужасы HD", "MM Фантастика HD"]
    },
    {
      category: "UHD",
      icon: "Monitor",
      channels: ["Insight UHD", "BCU Premiere Ultra 4K", "Кино UHD", "Cinema UHD", "Сериал UHD", "Museum UHD", "Глазами туриста 4K", "Наша сибирь 4K", "Yosso 4K", "BCU Kids 4K", "Travelxp 4K", "Love Nature 4K", "Aquarium 4K", "Quadro 4K", "Home 4K", "MyZen 4K"]
    },
    {
      category: "Спорт",
      icon: "Trophy",
      channels: ["Матч! SD", "Матч! Футбол 1 SD", "Матч! Футбол 2 SD", "Матч! Футбол 3 SD", "Матч! Премьер SD", "Матч! Игра FHD", "Матч! Игра HD (Uncomp)", "Матч! Арена HD", "МАТЧ! АРЕНА HD (Uncomp)", "Матч! Страна", "МАТЧ! СТРАНА HD (Uncomp)", "Матч! Планета", "Футбол HD", "Футбольный HD", "Спортивный HD", "Хоккейный HD"]
    },
    {
      category: "Музыка",
      icon: "Music",
      channels: ["MTV Russia", "MTV Live HD", "MTV Club", "MTV Hits", "MTV 80s", "MTV 90s", "MTV 00s", "МУЗ ТВ HD", "Music", "RU.TV", "Bridge TV", "Bridge TV Deluxe HD", "Bridge TV Classic", "Bridge TV Hits", "Bridge TV Русский хит", "Bridge TV Fresh", "Bridge TV Шлягер", "Mezzo Live HD", "iConcerts HD", "Шансон ТВ", "MCM TOP", "Ля-минор", "Жара HD", "Trace urban", "O2TV HD", "Russian MusicBox HD", "Музыка Первого", "4 Ever music HD", "Music Box Gold", "EU Music HD", "C-Music HD", "AIVA HD", "Europa Plus TV HD", "ТНТ Music HD", "Clubbing TV HD", "Жар Птица", "Танцуй"]
    },
    {
      category: "Детские",
      icon: "Baby",
      channels: ["Мульт HD", "Cartoon Network", "Солнце", "TiJi", "Gulli Girl", "Детский мир", "Мама", "В гостях у сказки", "Канал О", "Nickelodeon HD", "Nick Jr", "Уникум HD", "Карусель", "Карусель +2", "Карусель +4", "Карусель +6", "СТС Kids HD", "Мультимузыка", "JimJam", "Boomerang", "Радость Моя", "Ani", "Baby TV", "Малыш", "Рыжий", "Мультиландия", "Капитан Фантастика HD", "Duck HD", "Лёва", "BCU Kids HD", "Cartoons 90", "Cartoons Short", "Disney"]
    },
    {
      category: "Образование",
      icon: "GraduationCap",
      channels: ["Наука 2.0", "Discovery Channel HD", "National Geographic HD", "Viasat History CEE HD", "Моя Планета HD", "Приключения HD", "Тайны Галактики HD", "Оружие", "History HD", "History2 HD", "Investigation Discovery CEE HD", "TLC HD", "Космический HD", "Нано HD", "Техно 24", "Доктор", "Da Vinci", "История", "365 дней ТВ", "RTG TV", "RTG HD", "Travel Channel HD", "Travel+Adventure HD", "Пёс и Ко", "Мужской", "Большая Азия HD", "Здоровое ТВ", "Арсенал HD", "Телекафе", "Глазами туриста HD", "DocuBox HD", "Телепутешествия", "Мир Вокруг HD", "Поехали! HD", "Smartzone HD", "КтоКуда", "Motor Trend HD", "DTX HD", "Discovery Science HD", "HGTV HD", "Terra HD"]
    },
    {
      category: "Природа",
      icon: "Trees",
      channels: ["Big Planet", "Viasat Nature", "Усадьба", "Nat Geo Wild HD", "Диалоги о рыбалке", "Дикий", "Охотник и рыболов HD", "Animal Planet HD", "В мире животных HD", "Охота и рыбалка", "Дикая Охота HD", "Дикая Рыбалка HD", "Живая природа HD", "Живая Планета", "Загородный", "Загородный int HD", "Ocean TV"]
    },
    {
      category: "Прочее",
      icon: "Sparkles",
      channels: ["Viasat Explore CEE HD", "АВТО 24", "Сарафан", "Кухня ТВ", "Foodtime HD", "Еда", "Food Network HD", "БОБЁР", "2X2", "2х2 +2", "КВН ТВ", "Продвижение", "Че", "Че +4", "СТС love", "Ностальгия", "Время", "НТВ Стиль", "HDL", "НТВ Мир", "Мир HD", "Мир +2", "Мир +6", "ОТР", "Суббота", "Суббота +2", "Ю", "Вопросы и ответы", "RTД HD", "Авто плюс HD", "E TV", "Точка ТВ", "360 HD", "Спас", "Союз", "Доверие", "Красная линия", "ЛДПР ТВ", "Ювелирочка", "Fashion TV HD", "Shop and Show", "НТВ Право", "Кто есть кто", "Психология", "Домашние животные", "Зоопарк", "Успех", "Перец International", "Анекдот ТВ"]
    }
  ];

  const plans = [
    {
      name: "Единый тариф",
      price: "350",
      period: "мес",
      features: ["2000+ каналов", "Full HD качество", "1 устройство", "Архив 7 дней"],
      popular: true
    }
  ];

  const faqs = [
    {
      question: "Как начать пользоваться сервисом?",
      answer: "Выберите подходящий тариф, зарегистрируйтесь и начните смотреть любимые каналы сразу после оплаты."
    },
    {
      question: "Можно ли смотреть на нескольких устройствах?",
      answer: "Да, в зависимости от выбранного тарифа вы можете смотреть от 1 до 5 устройств одновременно."
    },
    {
      question: "Есть ли пробный период?",
      answer: "Да, мы предоставляем 7 дней бесплатного доступа ко всем функциям сервиса."
    },
    {
      question: "Какое качество трансляции?",
      answer: "Мы предлагаем HD, Full HD и 4K качество в зависимости от вашего тарифного плана и скорости интернета."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 text-sm px-4 py-2" variant="secondary">
            Более 2000 каналов
          </Badge>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Русское ТВ
            <span className="block gradient-text mt-2">без границ</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Смотрите любимые российские каналы в прямом эфире на любом устройстве. Высокое качество, без задержек.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Попробовать 7 дней бесплатно
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Смотреть тарифы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-lg">
              Современная платформа для комфортного просмотра телевидения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Каталог каналов
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Более 2000 каналов в вашем распоряжении
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="glass-card p-2 h-auto flex-wrap gap-2">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Все каналы
                </TabsTrigger>
                {channelCategories.map((cat, idx) => (
                  <TabsTrigger 
                    key={idx} 
                    value={cat.category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                  >
                    <Icon name={cat.icon} size={16} />
                    {cat.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-12 mt-8">
              {channelCategories.map((cat, catIndex) => (
                <div key={catIndex} className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name={cat.icon} className="text-primary" size={20} />
                      <Badge variant="default" className="text-base px-4 py-2">
                        {cat.category}
                      </Badge>
                    </div>
                    <div className="h-px flex-1 bg-border"></div>
                    <span className="text-sm text-muted-foreground">{cat.channels.length} каналов</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {cat.channels.map((channel, chIndex) => (
                      <Card key={chIndex} className="glass-card hover:border-primary hover:scale-105 transition-all cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center text-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <Icon name="Tv" className="text-primary" size={20} />
                            </div>
                            <p className="font-medium text-xs leading-tight line-clamp-2">{channel}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {channelCategories.map((cat, catIndex) => (
              <TabsContent key={catIndex} value={cat.category} className="mt-8">
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon name={cat.icon} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold">{cat.category}</h3>
                        <p className="text-muted-foreground">{cat.channels.length} каналов в категории</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {cat.channels.map((channel, chIndex) => (
                      <Card key={chIndex} className="glass-card hover:border-primary hover:scale-105 transition-all cursor-pointer">
                        <CardContent className="p-5">
                          <div className="flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <Icon name="Tv" className="text-primary" size={24} />
                            </div>
                            <p className="font-medium text-sm leading-tight">{channel}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Простая цена
            </h2>
            <p className="text-muted-foreground text-lg">
              Один тариф со всеми возможностями сервиса
            </p>
          </div>
          <div className="flex justify-center">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden hover:scale-105 transition-all duration-300 ${plan.popular ? 'border-primary border-2 shadow-lg shadow-primary/20' : 'glass-card'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-secondary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" variant={plan.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground text-lg">
              Ответы на самые популярные вопросы о сервисе
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border rounded-lg"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к тысячам довольных пользователей уже сегодня
          </p>
          <Button size="lg" className="text-lg px-10 py-6 hover:scale-105 transition-transform">
            Начать просмотр бесплатно
            <Icon name="Sparkles" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Русское ТВ</h3>
              <p className="text-muted-foreground text-sm">
                Ваш доступ к лучшим российским телеканалам
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Каналы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Устройства</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@russtv.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 800 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Русское ТВ. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;