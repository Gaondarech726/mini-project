const Form = () => {
  return (
    <div className="formContent__wishesForm">
      <form>
        <input name="name" placeholder="Ім'я" type="text"></input>
        <input
          name="numberPhone"
          placeholder="Номер телефону"
          type="number"
        ></input>
        <input
          name="basicText"
          placeholder="Опишіть ваші побажання:"
          type="text"
        ></input>
        <button type="sumbit">Надіслати</button>
      </form>
    </div>
  );
};

export default Form;
