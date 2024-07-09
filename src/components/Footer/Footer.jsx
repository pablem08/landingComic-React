import * as st from "./FooterStyles";

export const Footer = () => {
  return (
    <st.FooterContainer>
      {/* <st.LinksContainer>
        {footerLinks.map(link => (
          <a key={link.id} href={link.path}>{link.title}</a>
        ))}
      </st.LinksContainer> */}

      <p>
        Hecho con ❤️ por <span>Pablo Riveros</span>
      </p>
    </st.FooterContainer>
  );
};
