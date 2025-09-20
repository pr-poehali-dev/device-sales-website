import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const ProductPage = () => {
  const { id } = useParams();
  
  // Mock product data (in real app would fetch from API)
  const product = {
    id: '1',
    name: 'Logitech G Pro X Superlight',
    price: 12999,
    originalPrice: 15999,
    category: 'mice',
    images: [
      'https://cdn.poehali.dev/files/8569f277-bcfc-4c9a-8ffd-72223c611144.jpeg',
      'https://cdn.poehali.dev/files/8569f277-bcfc-4c9a-8ffd-72223c611144.jpeg',
      'https://cdn.poehali.dev/files/8569f277-bcfc-4c9a-8ffd-72223c611144.jpeg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 324,
    description: 'Профессиональная беспроводная игровая мышь с ультралегким дизайном. Весит всего 63 грамма и обеспечивает максимальную точность и скорость.',
    features: [
      'Вес всего 63 грамма',
      'Беспроводная технология LIGHTSPEED',
      'Сенсор HERO 25K',
      'До 70 часов автономной работы',
      'Программируемые кнопки'
    ],
    specifications: {
      'Тип подключения': 'Беспроводная',
      'Сенсор': 'HERO 25K',
      'DPI': 'До 25,600',
      'Батарея': 'До 70 часов',
      'Вес': '63 грамма',
      'Гарантия': '2 года'
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/catalog" className="hover:text-primary">Каталог</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-accent">Мышки</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-accent mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} отзывов)
                  </span>
                </div>
                
                <Badge variant={product.inStock ? 'default' : 'secondary'}>
                  {product.inStock ? 'В наличии' : 'Нет в наличии'}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-accent">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <Badge variant="destructive">
                  Скидка {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full" disabled={!product.inStock}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                {product.inStock ? 'Добавить в корзину' : 'Товар закончился'}
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="lg">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Truck" size={20} className="text-primary" />
                  <span>Бесплатная доставка при заказе от 3000 ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Описание</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Особенности</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specifications */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index}>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                      {index < Object.entries(product.specifications).length - 1 && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;