import * as st from "./AboutStyles";
import batmanImg from "/img/About/batman.png";
import ironmanImg from "/img/About/iron-man-2.jpg";

export const About = () => {
  return (
    <st.AboutContainer>
        <h2>Nosotros</h2>
      <st.AboutContent>
        <st.AboutImg src={ironmanImg} alt="" />
        <p>
          Bienvenidos a ComicUniverse, tu destino definitivo para todo lo
          relacionado con el emocionante mundo de los cómics. Somos un grupo
          apasionado de entusiastas de los cómics, dedicados a compartir nuestra
          pasión y amor por las historias épicas, los héroes icónicos y las
          aventuras inolvidables que solo los cómics pueden ofrecer.
        </p>
      </st.AboutContent>

      <st.AboutContent>
        <p>
          En ComicUniverse, creemos que cada cómic es una puerta a un universo
          lleno de imaginación y creatividad. Nuestra misión es proporcionar a
          nuestros clientes una amplia selección de cómics, desde clásicos
          intemporales hasta las últimas novedades, asegurándonos de que todos,
          desde coleccionistas veteranos hasta nuevos lectores, encuentren algo
          que les fascine.
        </p>
        <st.AboutImg src={batmanImg} alt="" />
      </st.AboutContent>
    </st.AboutContainer>
  );
};
