import React from 'react'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      {/* pass all those component in ThemeContextProvider thats why we can access all
      those proparty from these child component  */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
