import Avatar from 'assets/avatar.png';
import Book from 'assets/book.png';
import hero from 'assets/hero.png';
import Headbar from 'components/Headbar';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Theme from 'styles/Theme';

import AppContainer from './AppContainer';
import { authorParagraph, bookParagraph } from './data';
import Hero from './Hero';

const App = () => {
  return (
    <Theme>
      <AppContainer>
        <Headbar />
        <Navbar />
        <Hero src={hero} />
        <Section
          id="book"
          title="A Szerzőről"
          image={Avatar}
          paragraph={authorParagraph}
          backgroundColor="#CEB973"
        />
        <Section
          id="book"
          title="A Könyvről"
          image={Book}
          paragraph={bookParagraph}
          backgroundColor="#B6A15E"
        />
      </AppContainer>
    </Theme>
  );
};

export default App;
