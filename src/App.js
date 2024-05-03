import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { TranscriptionContext } from './context/transcriptionContext';
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { Lesson } from './pages/lesson/Lesson';
import { Dictionary } from './pages/dictionary/Dictionary';
import { Contacts } from './pages/Contacts';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { NotFound } from './pages/not-found/NotFound';
import { GlobalStyle } from './styles/main';

export const App = () => {
  const [transcription, setTranscription] = useState(() => {
    const storedTranscription = localStorage.getItem('transcription');
    return storedTranscription !== null ? storedTranscription === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('transcription', transcription.toString());
  }, [transcription]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <TranscriptionContext.Provider
          value={{ transcription, setTranscription }}
        >
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lessons' element={<Lessons />} />
            <Route path='/lesson/:id' element={<Lesson />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </TranscriptionContext.Provider>
        <Footer />
      </Router>
    </>
  );
};
