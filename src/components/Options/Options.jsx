export default function Options({ updateFeedback, resetFeedback, totalFeedback}) {
  return (
    <>
      <button type="button" onClick={() => updateFeedback('good')}>Good</button>
      <button type="button" onClick={() => updateFeedback('neutral')}>Neutral</button>
          <button type="button" onClick={() => updateFeedback('bad')}>Bad</button>
          {totalFeedback > 0 && <button type="button" onClick={resetFeedback}>Reset</button>}
    </>
  );
}