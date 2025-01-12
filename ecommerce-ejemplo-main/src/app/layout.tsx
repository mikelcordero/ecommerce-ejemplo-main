import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { ChristmasProvider } from './context/ChristmasContext'; // Asegúrate de envolver todo aquí
import FloatingButton from './components/FloatingButton';
import ChristmasToggleButton from './components/ChristmasToggleButton';
import SnowEffect from './components/SnoeEffect'; // Importa el componente de nieve

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ChristmasProvider> 
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingButton />
            <ChristmasToggleButton />
            <SnowEffect /> {/* Aquí añadimos el efecto de nieve */}
          </ChristmasProvider>
        </CartProvider>
      </body>
    </html>
  );
}
