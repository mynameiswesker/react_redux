import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;

    async function far() {
      let url = "books.json";
      let response = await fetch(url);

      let data = await response.json(); // читаем ответ в формате JSON

      setBooks(data);

    }
    far();
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
