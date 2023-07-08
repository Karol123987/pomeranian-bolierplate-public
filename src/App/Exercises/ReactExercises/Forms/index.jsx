import "./styles.css";

export function Exercise() {
  // [isConfirmPasswordDisabled, setIsConfirmPasswordDisabled] = useState(true);

  // Walidacja przy użyciu value.length:

  // const handlePasswordChange = (event) => {
  //   const password = event.target.value;

  //   if (password.length > 3) {
  //     setIsConfirmPasswordDisabled(false);
  //   }

  //   if (password.length <= 3) {
  //     setIsConfirmPasswordDisabled(true);
  //   }
  // };

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor="name">Wpisz swoje imię</label>
        <input text="text" maxLength="15" id="name" placeholder="Imię" />
      </div>

      <div className="flex">
        <label htmlFor="surname">Wpisz swoje nazwisko</label>
        <input minLength="3" text="text" id="surname" placeholder="Nazwisko" />
      </div>

      <div className="flex">
        <label htmlFor="address">Wpisz swój adres</label>
        <input required type="text" id="address" placeholder="Adres" />
      </div>

      <div className="flex">
        <label htmlFor="password">Wpisz swoje hasło</label>
        {/* Walidacja z użyciem value.length */}
        {/* <input
          onChange={handlePasswordChange}
          text="password"
          id="password"
          placeholder="Hasło"
        /> */}
        <input required type="password" id="password" placeholder="Hasło" />
      </div>

      <div className="flex">
        <label htmlFor="confirmPassword">Potwierdź swoje hasło</label>
        <input text="password" id="confirmPassword" placeholder="Hasło" />
      </div>

      <div className="flex">
        <label htmlFor="select">Wybierz płeć z puli podanych</label>
        <select name="select" id="select" placeholder="Wybierz swoją płeć">
          <option value="women">Kobietą</option>
          <option value="men">Mężczyzną</option>
          <option value="other">Nieokreślony</option>
        </select>
      </div>

      <div className="flex">
        <label htmlFor="textarea">Opisz swój problem</label>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Opisz jaki masz problem"
        />
      </div>

      <button type="submit">WYŚLIJ</button>
    </form>
  );
}
