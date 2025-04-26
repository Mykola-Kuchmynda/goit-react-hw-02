import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
//import css from './App.module.css'
import Notification from '../Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = window.localStorage.getItem('feedback');
    return saved ? JSON.parse(saved) : {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  
  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(item => ({
      ...item,
      [feedbackType]: item[feedbackType] + 1,
    }));
  };
   const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positivePercent = totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercent={positivePercent} />
      ) : (
        <Notification message='No fedback yet' />)}
    </>
  );
}


