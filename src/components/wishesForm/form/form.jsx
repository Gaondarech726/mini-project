const Form = () => {
  return (
    <div className="formContent__wishesForm">
      <form className="form__wishesForm">
        <input
          name="nameUser"
          placeholder="Ім'я"
          type="text"
          className="input__wishesForm"
          id="nameUser"
        ></input>
        <input
          name="numberPhone"
          placeholder="Номер телефону"
          type="number"
          className="input__wishesForm"
          id="numberPhone"
        ></input>
        <textarea
          placeholder="Опишіть ваші побажання:"
          name="wishesText"
          type="text"
          className="input__wishesForm"
          id="wishesText"
        ></textarea>
        <button type="sumbit">Надіслати</button>
      </form>
    </div>
  );
};

export default Form;
