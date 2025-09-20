import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

const CatalogPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  
  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3X3' },
    { id: 'mice', name: 'Мышки', icon: 'Mouse' },
    { id: 'keyboards', name: 'Клавиатуры', icon: 'Keyboard' },
    { id: 'headphones', name: 'Наушники', icon: 'Headphones' }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Logitech G Pro X Superlight',
      price: 12999,
      originalPrice: 15999,
      category: 'mice',
      image: '/img/d710e153-2eac-43c8-ac24-92aee3754e55.jpg',
      inStock: true,
      rating: 4.8,
      reviews: 324
    },
    {
      id: '2',
      name: 'Razer DeathAdder V3',
      price: 8999,
      category: 'mice',
      image: '/img/d710e153-2eac-43c8-ac24-92aee3754e55.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 156
    },
    {
      id: '3',
      name: 'Keychron K2 V2',
      price: 9999,
      originalPrice: 11999,
      category: 'keyboards',
      image: '/img/5ec7ca61-022b-423f-be35-8b322638423e.jpg',
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: '4',
      name: 'Corsair K95 RGB Platinum',
      price: 18999,
      category: 'keyboards',
      image: '/img/5ec7ca61-022b-423f-be35-8b322638423e.jpg',
      inStock: false,
      rating: 4.5,
      reviews: 234
    },
    {
      id: '5',
      name: 'SteelSeries Arctis 7P',
      price: 16999,
      category: 'headphones',
      image: '/img/632d5751-9f9e-4c59-9973-530b90115a60.jpg',
      inStock: true,
      rating: 4.4,
      reviews: 178
    },
    {
      id: '6',
      name: 'HyperX Cloud II',
      price: 7999,
      originalPrice: 9999,
      category: 'headphones',
      image: '/img/632d5751-9f9e-4c59-9973-530b90115a60.jpg',
      inStock: true,
      rating: 4.6,
      reviews: 445
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-accent mb-4">Каталог товаров</h1>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex items-center gap-2"
              >
                <Icon name={cat.icon as any} size={16} />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-accent line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-accent">
                          {product.price.toLocaleString('ru-RU')} ₽
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice.toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant={product.inStock ? 'default' : 'secondary'}>
                        {product.inStock ? 'В наличии' : 'Нет в наличии'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-accent mb-2">
              Товары не найдены
            </h3>
            <p className="text-muted-foreground">
              В данной категории пока нет товаров
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;