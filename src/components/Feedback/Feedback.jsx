export default function Feedback({ feedback, total, positivePercent}) {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
          <li>Bad: {feedback.bad}</li>
          <li>Total: {total}</li>
      <li>Positive: {positivePercent}%</li>
         </ul>
  );
}