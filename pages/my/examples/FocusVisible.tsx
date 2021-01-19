export default function FocusVisible() {
  return (
    <div>
      <form>
        <div className="field without-outline">
          <label htmlFor="firstInput">Without focus</label>
          <input id="firstInput" type="text" />
        </div>

        <div className="field with-outline">
          <label htmlFor="secondInput">With focus</label>
          <input id="secondInput" type="text" />
        </div>
      </form>
      <style jsx>{`
        .field {
          margin-bottom: 16px;
        }

        .field label {
          display: inline-block;
          width: 150px;
        }

        .without-outline input:focus {
          outline: none;
        }

        .with-outline input:focus {
          outline: orangered 2px solid;
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}
