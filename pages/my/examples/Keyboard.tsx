export default function Keyboard() {
  return (
    <div>
      <div role="group" id="errorSummary" aria-labelledby="errorSummaryHeading" tabIndex={-1} />
      <h2 id="errorSummaryHeading">Your information contains three errors</h2>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input id="password" />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}
