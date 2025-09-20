import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const PaymentPage = () => {
  const paymentMethods = [
    {
      id: 'cards',
      name: 'Банковские карты',
      description: 'Visa, MasterCard, МИР',
      fee: 'Без комиссии',
      security: 'Высокий',
      features: ['Мгновенная оплата', '3D Secure', 'Возврат на карту'],
      icon: 'CreditCard',
      popular: true
    },
    {
      id: 'sbp',
      name: 'Система быстрых платежей',
      description: 'Переводы по номеру телефона',
      fee: 'Без комиссии',
      security: 'Высокий',
      features: ['Оплата по QR-коду', 'Переводы между банками', 'Мгновенное зачисление'],
      icon: 'Smartphone',
      popular: true
    },
    {
      id: 'cash',
      name: 'Наличными при получении',
      description: 'Оплата курьеру или в пункте выдачи',
      fee: 'Без комиссии',
      security: 'Средний',
      features: ['Осмотр товара', 'Без предоплаты', 'Оплата точной суммой'],
      icon: 'Banknote',
      popular: false
    },
    {
      id: 'installments',
      name: 'Рассрочка 0%',
      description: 'Покупка в рассрочку без переплат',
      fee: 'Без процентов',
      security: 'Высокий',
      features: ['До 12 месяцев', 'Без первого взноса', 'Онлайн одобрение'],
      icon: 'Calendar',
      popular: false
    }
  ];

  const securityFeatures = [
    {
      title: 'SSL шифрование',
      description: 'Все данные передаются по защищенному соединению',
      icon: 'Shield'
    },
    {
      title: 'PCI DSS сертификация',
      description: 'Соответствие международным стандартам безопасности',
      icon: 'Award'
    },
    {
      title: '3D Secure',
      description: 'Дополнительная аутентификация при оплате картой',
      icon: 'Lock'
    },
    {
      title: 'Токенизация карт',
      description: 'Данные карт не хранятся на наших серверах',
      icon: 'Database'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-accent mb-4">Способы оплаты</h1>
          <p className="text-lg text-muted-foreground">
            Выберите удобный способ оплаты вашего заказа
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {paymentMethods.map((method) => (
            <Card key={method.id} className="hover:shadow-lg transition-shadow relative">
              {method.popular && (
                <Badge className="absolute -top-2 -right-2 z-10">
                  Популярный
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name={method.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Комиссия:</span>
                    <div className="font-medium text-green-600">{method.fee}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Безопасность:</span>
                    <div className="font-medium">{method.security}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {method.features.map((feature, index) => (
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

        {/* Security Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-green-500" />
              Безопасность платежей
            </CardTitle>
            <p className="text-muted-foreground">
              Мы используем современные технологии для защиты ваших данных
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                    <Icon name={feature.icon as any} size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={24} />
              Как происходит оплата
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Оформление заказа</h3>
                  <p className="text-muted-foreground">
                    Добавьте товары в корзину и перейдите к оформлению заказа
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Выбор способа оплаты</h3>
                  <p className="text-muted-foreground">
                    Выберите удобный способ оплаты из предложенных вариантов
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Подтверждение платежа</h3>
                  <p className="text-muted-foreground">
                    Следуйте инструкциям для завершения оплаты
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Готово!</h3>
                  <p className="text-muted-foreground">
                    После успешной оплаты мы сразу начнем обработку вашего заказа
                  </p>
                </div>
              </div>
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
                <h3 className="font-semibold mb-2">Безопасно ли платить картой онлайн?</h3>
                <p className="text-muted-foreground">
                  Да, мы используем самые современные технологии шифрования и соответствуем 
                  международным стандартам безопасности PCI DSS.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Можно ли вернуть деньги за товар?</h3>
                <p className="text-muted-foreground">
                  Да, в случае возврата товара деньги возвращаются тем же способом, 
                  которым была произведена оплата, в течение 3-5 рабочих дней.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Что делать, если платеж не прошел?</h3>
                <p className="text-muted-foreground">
                  Проверьте правильность введенных данных и достаточность средств. 
                  Если проблема сохраняется, обратитесь в службу поддержки.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentPage;