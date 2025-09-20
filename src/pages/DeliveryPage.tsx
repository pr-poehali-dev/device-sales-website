import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const DeliveryPage = () => {
  const deliveryOptions = [
    {
      id: 'express',
      name: 'Экспресс-доставка',
      time: '1-2 дня',
      price: 'от 500 ₽',
      description: 'Самый быстрый способ получить заказ',
      features: ['Доставка в день заказа', 'SMS уведомления', 'Трекинг в реальном времени'],
      icon: 'Zap'
    },
    {
      id: 'standard',
      name: 'Стандартная доставка',
      time: '3-5 дней',
      price: 'от 300 ₽',
      description: 'Оптимальный баланс скорости и цены',
      features: ['Доставка курьером', 'SMS уведомления', 'Бесплатно от 3000 ₽'],
      icon: 'Truck'
    },
    {
      id: 'pickup',
      name: 'Самовывоз',
      time: '1-3 дня',
      price: 'Бесплатно',
      description: 'Заберите заказ из пункта выдачи',
      features: ['Более 500 пунктов', 'Хранение 7 дней', 'Примерка на месте'],
      icon: 'MapPin'
    }
  ];

  const cities = [
    { name: 'Москва и МО', delivery: '1-2 дня', popular: true },
    { name: 'Санкт-Петербург', delivery: '2-3 дня', popular: true },
    { name: 'Екатеринбург', delivery: '3-4 дня', popular: false },
    { name: 'Новосибирск', delivery: '3-5 дней', popular: false },
    { name: 'Казань', delivery: '2-4 дня', popular: false },
    { name: 'Нижний Новгород', delivery: '2-4 дня', popular: false }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-accent mb-4">Доставка и получение</h1>
          <p className="text-lg text-muted-foreground">
            Выберите удобный способ получения вашего заказа
          </p>
        </div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deliveryOptions.map((option) => (
            <Card key={option.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon name={option.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{option.name}</CardTitle>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">{option.time}</div>
                  <div className="text-lg text-muted-foreground">{option.price}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" size={24} />
              География доставки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{city.name}</span>
                      {city.popular && (
                        <Badge variant="secondary" className="text-xs">
                          Популярный
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{city.delivery}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-muted-foreground">
                Доставляем по всей России. Уточнить сроки доставки в ваш город можно при оформлении заказа.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" size={24} />
              Часто задаваемые вопросы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Можно ли изменить способ доставки после оформления заказа?</h3>
                <p className="text-muted-foreground">
                  Да, способ доставки можно изменить в течение 2 часов после оформления заказа, 
                  обратившись в службу поддержки.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Что делать, если меня не будет дома при доставке?</h3>
                <p className="text-muted-foreground">
                  Курьер обязательно свяжется с вами перед доставкой. Если вас не будет дома, 
                  можно договориться о переносе доставки на удобное время.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Проверяется ли товар перед отправкой?</h3>
                <p className="text-muted-foreground">
                  Все товары проходят контроль качества перед отправкой. При получении вы можете 
                  осмотреть товар и убедиться в его исправности.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryPage;