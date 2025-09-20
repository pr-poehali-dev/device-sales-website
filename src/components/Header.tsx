import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Laptop" size={24} className="text-primary" />
            <span className="text-xl font-bold text-accent">TechStore</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/delivery" className="text-gray-700 hover:text-primary transition-colors">
              Доставка
            </Link>
            <Link to="/payment" className="text-gray-700 hover:text-primary transition-colors">
              Оплата
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button className="hidden sm:inline-flex">
              Вход
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;