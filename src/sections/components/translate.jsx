import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Content from './Content';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Content />
      <About />
    </LanguageProvider>
  );
}