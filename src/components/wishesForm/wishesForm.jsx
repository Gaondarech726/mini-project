import "./wishesForm.scss";

const WishesForm = () => {
  return (
    <>
      <div className="textContent__wishesForm">
        <h1 className="title__wishesForm">
          Давайте зробимо щось унікальне разом!
        </h1>
        <p className="text__wishesForm">
          Ви можете замовити свій власний рецепт десерту, який вам буде до
          вподоби. Заповніть заявку та я зв’яжусь з вами, аби обговорити деталі
          замовлення.
        </p>
      </div>
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
    </>
  );
};

export default WishesForm;
