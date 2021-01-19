import { mapOfExamples } from './examples/utils';

export function Guideline(props) {
  const { title, body, id } = props;
  const Example = id in mapOfExamples ? mapOfExamples[id] : null;

  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{body}</p>

      {Example && (
        <div>
          <h4>Example</h4>
          <Example />
        </div>
      )}
    </div>
  );
}
