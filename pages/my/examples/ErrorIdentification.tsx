export default function ErrorIdentification() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstname">First name</label>
          <span style={{ color: 'red' }}>(required)</span>
          <input type="text" name="firstname" id="firstname" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <span style={{ color: 'red' }}>(required)</span>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <span style={{ color: 'red' }}>(required)</span>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
