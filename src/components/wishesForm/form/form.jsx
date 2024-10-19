import React, { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    nameUser: "",
    numberPhone: "",
    wishesText: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sumbit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(
      `Ім'я: ${formData.nameUser} \n Номер телефону: ${formData.numberPhone} \n Побажання: ${formData.wishesText}`
    );
  };
  return (
    <div className="formContent__wishesForm">
      <form onSubmit={sumbit} className="form__wishesForm">
        <input
          name="nameUser"
          placeholder="Ім'я"
          type="text"
          className="input__wishesForm"
          id="nameUser"
          value={formData.nameUser}
          onChange={onChange}
        ></input>
        <input
          name="numberPhone"
          placeholder="Номер телефону"
          type="text"
          className="input__wishesForm"
          id="numberPhone"
          value={formData.numberPhone}
          onChange={onChange}
        ></input>
        <textarea
          placeholder="Опишіть ваші побажання:"
          name="wishesText"
          type="text"
          className="input__wishesForm"
          id="wishesText"
          value={formData.wishesText}
          onChange={onChange}
        ></textarea>
        <button type="sumbit">Надіслати</button>
      </form>
    </div>
  );
};

export default Form;
