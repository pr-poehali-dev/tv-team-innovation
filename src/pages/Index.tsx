import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
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

  const channels = [
    { name: "Первый канал", category: "Общие" },
    { name: "Россия 1", category: "Общие" },
    { name: "НТВ", category: "Новости" },
    { name: "ТНТ", category: "Развлекательные" },
    { name: "СТС", category: "Развлекательные" },
    { name: "Пятница", category: "Развлекательные" },
    { name: "Матч ТВ", category: "Спорт" },
    { name: "Eurosport", category: "Спорт" }
  ];

  const plans = [
    {
      name: "Базовый",
      price: "299",
      period: "мес",
      features: ["500 каналов", "HD качество", "1 устройство", "Архив 3 дня"],
      popular: false
    },
    {
      name: "Стандарт",
      price: "499",
      period: "мес",
      features: ["1000 каналов", "Full HD качество", "3 устройства", "Архив 5 дней"],
      popular: true
    },
    {
      name: "Премиум",
      price: "799",
      period: "мес",
      features: ["2000+ каналов", "4K качество", "5 устройств", "Архив 7 дней"],
      popular: false
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
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Популярные каналы
            </h2>
            <p className="text-muted-foreground text-lg">
              И еще сотни других каналов в вашем распоряжении
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {channels.map((channel, index) => (
              <Card key={index} className="glass-card hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Tv" className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{channel.name}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">{channel.category}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Выберите свой тариф
            </h2>
            <p className="text-muted-foreground text-lg">
              Все тарифы включают 7 дней бесплатного пробного периода
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
