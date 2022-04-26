import { useState } from 'react';

import { ActionButton } from '../../components/ActionButton/ActionButton';
import { Skills } from '../../components/Skills/Skills';
import styles from './About.module.scss';

export const About = () => {
  const calcYear = () => {
    const currentYear = new Date().getFullYear();
    const myAge = currentYear - 1996;
    return myAge;
  };
  const [active, setActive] = useState(false);

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.circleLeft}>
        <div className={styles.background}></div>
      </div>
      <div className={styles.circleRight}>
        <div className={styles.background}></div>
      </div>
      {!active && (
        <div className={styles.infoContainer}>
          <div className={styles.infoWrapper}>
            <h4>Trochę o mnie</h4>
            <p>
              Hej, skoro już tu jesteś to może masz ochotę przeczytać kilka słów
              o mnie? Tak? Super 😅. <br />
              <br />
              Jestem Paweł, mam {calcYear()} lat/a i moją specjalizacją jest
              Front-End Web Development, którego uczę się od 2019 roku...
            </p>

            <ActionButton
              onClick={() => {
                setActive(true);
              }}
              text={'Czytaj dalej'}
            />
          </div>
          <Skills />
        </div>
      )}
      {active && (
        <div className={styles.infoWrapperMore}>
          <h4>Trochę o mnie</h4>
          <p>
            Jestem Paweł, mam {calcYear()} lat/a i moją specjalizacją jest
            Front-End Web Development, którego uczę się od 2019 roku.
          </p>
          <p>
            Uczyłem się w Technicznych Zakładach Naukowych w Dąbrowie Górniczej
            na kierunku 'Technik elektronik'. Zacząłem studiować, lecz szybko
            zrezygnowałem. Powodem było poczucie straty czasu jaki mogę
            poświęcić na odkrywanie tego, co faktycznie chcę robić w
            przyszłości. Oczywiście to nie jest jedyny powód, ale nie będę ich
            tutaj wymieniać.
          </p>
          <p>
            Tak naprawdę moja przygoda z programowaniem zaczęła się od niepewnej
            sytuacji w ówczesnej pracy jako elektryk. Miałem wtedy styczność z
            automatyką zakładową, co pozwoliło mi rozwinąć pewne "zmysły"
            techniczne i logiczne. Zawsze miałem zamiłowanie do komputerów i
            wszystkiego co z nimi związane. W latach szkolnych miałem chwilową
            styczność z programowaniem w języku Asembler. Na własną rękę
            zacząłem się uczyć jak pisać kod pod Arduino, lecz na dłuższą metę
            widziałem w tym tylko naukę dla samego nauczenia się, więc szybko to
            rzuciłem. Próbowałem też się uczyć Pythona, lecz z marnym skutkiem i
            znowu - dałem sobie spokój.
          </p>
          <p>
            Front-end zmienił moje postrzeganie programowania. Nie było to już
            nudne i w końcu widziałem w tym sens rozwoju. And here it is! Rok
            2022 {'(data kiedy to piszę)'}. Uczę się dalej i nie zamierzam
            przestać 😁.
          </p>

          <p>
            Cóż... to wszystko. Niżej jest kilka moich projektów, zerknij jeśli
            masz ochotę. Jednym z nich jest ta strona, którą chciałem zrobić w
            celu poprawy umeijętności.
          </p>

          <ActionButton
            onClick={() => {
              setActive(false);
            }}
            text="Powrót"
            className={styles.button}
          />
        </div>
      )}
    </section>
  );
};
