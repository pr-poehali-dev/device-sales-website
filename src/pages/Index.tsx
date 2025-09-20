import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const categories = [
    {
      id: 'mice',
      name: 'Мышки',
      icon: 'Mouse',
      description: 'Игровые и офисные мышки',
      image: 'https://cdn.poehali.dev/files/8569f277-bcfc-4c9a-8ffd-72223c611144.jpeg'
    },
    {
      id: 'keyboards',
      name: 'Клавиатуры',
      icon: 'Keyboard',
      description: 'Механические и мембранные клавиатуры',
      image: '/img/5ec7ca61-022b-423f-be35-8b322638423e.jpg'
    },
    {
      id: 'headphones',
      name: 'Наушники',
      icon: 'Headphones',
      description: 'Игровые гарнитуры и наушники',
      image: '/img/632d5751-9f9e-4c59-9973-530b90115a60.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Лучшие девайсы для работы и игр
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Широкий выбор компьютерной периферии с доставкой по всей России
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/catalog">
              Смотреть каталог
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-accent">
            Категории товаров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/catalog/${category.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center mb-3">
                      <Icon name={category.icon as any} size={24} className="text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-accent">{category.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Icon name="Truck" size={48} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим ваш заказ в течение 1-3 дней</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Shield" size={48} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия на все товары</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="CreditCard" size={48} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Удобная оплата</h3>
              <p className="text-muted-foreground">Принимаем карты и электронные платежи</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;