import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeRoute, setActiveRoute] = useState<number | null>(null);

  const historyTimeline = [
    {
      year: '3000 до н.э.',
      title: 'Древний Египет',
      description: 'Клеопатра использует кохль для подводки глаз, изготовленный из сурьмы и малахита',
      icon: 'Sparkles'
    },
    {
      year: '1800-е',
      title: 'Промышленная революция',
      description: 'Первые фабрики начинают массовое производство мыла и парфюмерии',
      icon: 'Factory'
    },
    {
      year: '1920-е',
      title: 'Эра помады',
      description: 'Изобретение выкручивающегося футляра для помады, начало массового производства',
      icon: 'Palette'
    },
    {
      year: '1950-е',
      title: 'Научный прорыв',
      description: 'Разработка синтетических полимеров и стойких формул для косметики',
      icon: 'FlaskConical'
    },
    {
      year: '2020-е',
      title: 'Эко-косметика',
      description: 'Переход на натуральные компоненты и устойчивое производство',
      icon: 'Leaf'
    }
  ];

  const routeStops = [
    {
      id: 1,
      name: 'АО «Невская косметика»',
      description: 'Крупнейший российский производитель косметики с историей более 170 лет',
      icon: 'Building2',
      details: 'Основана в 1843 году. Производит более 500 наименований продукции. Экспортирует в 25 стран.',
      image: 'https://cdn.poehali.dev/projects/473c2308-9cce-4c6e-8a66-3d0f5038d05d/files/89cb7f7b-1c9b-4d87-8b2d-df37d5e8d39f.jpg'
    },
    {
      id: 2,
      name: 'Производство помады',
      description: 'Технологический процесс создания помады, блеска и тональной основы',
      icon: 'Beaker',
      details: 'Процесс: смешивание восков → добавление пигментов → гомогенизация → формовка → охлаждение → упаковка',
      image: 'https://cdn.poehali.dev/projects/473c2308-9cce-4c6e-8a66-3d0f5038d05d/files/0332dd9e-1403-4752-a22d-c38292a3f04c.jpg'
    },
    {
      id: 3,
      name: 'Her Story Gallery',
      description: 'Выставка истории женской красоты и косметики разных эпох',
      icon: 'ImageIcon',
      details: 'Коллекция винтажной косметики, исторические фотографии, интерактивные экспонаты',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Центр «Экспофорум»',
      description: 'Современный выставочный центр с экспозицией косметических инноваций',
      icon: 'Landmark',
      details: 'Площадь 55 000 м². Демонстрация новейших технологий в индустрии красоты',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Мастер-класс',
      description: 'Создание хайлайтера, румян и консилера своими руками',
      icon: 'Paintbrush',
      details: 'Практическое занятие: подбор оттенков, смешивание компонентов, прессование продукта',
      image: '/placeholder.svg'
    }
  ];

  const productionSteps = [
    {
      step: '1',
      title: 'Подготовка сырья',
      description: 'Воски, масла, пигменты',
      icon: 'Package'
    },
    {
      step: '2',
      title: 'Смешивание',
      description: 'Нагрев и гомогенизация при 80-85°C',
      icon: 'Scaling'
    },
    {
      step: '3',
      title: 'Формовка',
      description: 'Заливка в металлические формы',
      icon: 'Container'
    },
    {
      step: '4',
      title: 'Охлаждение',
      description: 'Стабилизация структуры',
      icon: 'Snowflake'
    },
    {
      step: '5',
      title: 'Контроль качества',
      description: 'Тестирование и проверка',
      icon: 'CheckCircle'
    },
    {
      step: '6',
      title: 'Упаковка',
      description: 'Финальная упаковка продукта',
      icon: 'Box'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Путешествие в мир косметики
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя историю красоты и современные технологии производства косметических средств
          </p>
        </div>

        <Tabs defaultValue="history" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Icon name="BookOpen" size={18} />
              История
            </TabsTrigger>
            <TabsTrigger value="route" className="flex items-center gap-2">
              <Icon name="MapPin" size={18} />
              Маршрут
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-8">
            <Card className="bg-white/80 backdrop-blur border-purple-100 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={32} />
                  Хронология косметики
                </h2>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-blue-300 to-orange-300" />
                  
                  <div className="space-y-8">
                    {historyTimeline.map((item, index) => (
                      <div 
                        key={index}
                        className="relative pl-20 animate-slide-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                          <Icon name={item.icon as any} size={18} />
                        </div>
                        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-purple-100">
                          <CardContent className="p-6">
                            <Badge className="mb-2 bg-gradient-to-r from-purple-500 to-blue-500">
                              {item.year}
                            </Badge>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-blue-100 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Icon name="Factory" className="text-blue-500" size={32} />
                  Процесс производства помады
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productionSteps.map((step, index) => (
                    <Card 
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-blue-100 bg-gradient-to-br from-white to-blue-50"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Icon name={step.icon as any} className="text-white" size={28} />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">{step.step}</div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="route" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur border-purple-100 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="Route" className="text-primary" size={32} />
                  Образовательный маршрут
                </h2>
                <p className="text-muted-foreground mb-8">
                  Посетите 5 ключевых точек и узнайте все о производстве косметики
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {routeStops.map((stop, index) => (
                    <Card
                      key={stop.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${
                        activeRoute === stop.id 
                          ? 'border-primary shadow-xl scale-[1.02]' 
                          : 'border-purple-100 hover:border-primary/50'
                      }`}
                      onClick={() => setActiveRoute(activeRoute === stop.id ? null : stop.id)}
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={stop.image} 
                          alt={stop.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{stop.id}</span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                            <Icon name={stop.icon as any} className="text-white" size={20} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-1">{stop.name}</h3>
                            <p className="text-sm text-muted-foreground">{stop.description}</p>
                          </div>
                        </div>
                        
                        {activeRoute === stop.id && (
                          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 animate-fade-in">
                            <p className="text-sm leading-relaxed">{stop.details}</p>
                            <Badge className="mt-3 bg-gradient-to-r from-purple-500 to-blue-500">
                              <Icon name="Info" size={14} className="mr-1" />
                              Точка {stop.id} из 5
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <Icon name="GraduationCap" size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Готовы отправиться в путешествие?</h3>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  Экскурсия длится 4 часа. Вы узнаете все этапы производства косметики и создадите свой продукт на мастер-классе
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge variant="secondary" className="px-4 py-2 text-base">
                    <Icon name="Clock" size={16} className="mr-2" />
                    4 часа
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base">
                    <Icon name="Users" size={16} className="mr-2" />
                    Группы до 15 человек
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base">
                    <Icon name="Award" size={16} className="mr-2" />
                    Сертификат участника
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
