import * as s from "./ContactStyles";
export const Contact = () => {
  return (
    <s.ContactCajaStyler>
      <s.ContactContainerStyled>
        <h2>Contacto</h2>
        <s.ContactFormStyled>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="asunto">Mensaje:</label>
          <textarea id="asunto" name="asunto" />

          <s.ContactButtonStyled type="submit">Enviar</s.ContactButtonStyled>
        </s.ContactFormStyled>
      </s.ContactContainerStyled>
    </s.ContactCajaStyler>
  );
};
