import Form from "./form/form";
import TextContent from "./textContent/textContent";
import "./wishesFormStyle.scss";

const WishesForm = () => {
  return (
    <section className="wishesForm">
      <TextContent></TextContent>
      <Form></Form>
    </section>
  );
};

export default WishesForm;
