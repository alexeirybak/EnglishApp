import React, { useState } from 'react';
import { Lesson } from '../components/lesson/Lesson';
import { ToTop } from '../components/toTop/toTop';
import { lessonsList } from '../content/lessonList';
import { getLevelNameList } from '../content/getLevelName';
import iconSearch from './icon-search.png';
import iconDelete from './icon-delete.png';
import * as S from './styles';

export const Lessons = () => {
  const chunkSize = 50;
  const [filter, setFilter] = useState('');

  const groupedLessons = lessonsList.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    const lessonWithIndex = { ...item, originalIndex: index };
    result[chunkIndex].push(lessonWithIndex);
    return result;
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleReset = () => {
    setFilter('');
  };

  const filteredLessons = groupedLessons.map((chunk) => {
    return chunk.filter((lesson) => {
      const lessonNumber = lesson.originalIndex + 1; 
      const lessonTitle = lesson[0].title.toLowerCase();
      const filterValue = filter.toLowerCase();
      return (
        lessonNumber.toString().includes(filterValue) ||
        lessonTitle.includes(filterValue)
      );
    });
  });

  return (
    <S.Section>
      <S.Container>
        <S.Title1>Lessons</S.Title1>
        <S.SearchBlock>
          <S.InputWord
            type='text'
            value={filter}
            placeholder='Найти урок'
            onChange={handleFilterChange}
          />
          {filter && (
            <S.ResetButton onClick={handleReset}>
              <S.ResetIcon src={iconDelete} alt='Очистить поле ввода' />
            </S.ResetButton>
          )}
          <S.ButtonSearch>
            <S.SearchImg src={iconSearch} alt='Найти урок' />
          </S.ButtonSearch>
        </S.SearchBlock>

        {filteredLessons.map((chunk, chunkIndex) => {
          if (chunk.length === 0) return null;
          return (
            <S.LessonsBlock key={chunkIndex}>
              <S.Title2>Уровень {getLevelNameList(chunkIndex + 1)}</S.Title2>
              <S.Lessons>
                {chunk.map((lesson, index) => {
                  const lessonNumber = lesson.originalIndex + 1;
                  return (
                    <Lesson
                      key={lessonNumber}
                      title={lesson[0].title}
                      index={lessonNumber}
                    />
                  );
                })}
              </S.Lessons>
            </S.LessonsBlock>
          );
        })}
        <ToTop onClick={handleScrollToTop} />
      </S.Container>
    </S.Section>
  );
};
