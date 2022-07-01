import React, { useContext, Suspense, lazy } from 'react';
import './MasajeSection.component.scss';
import { AppContext } from '../../../contexts/AppContext';
import Spinner from '../../Spinner/Spinner.component';

const ImagePlaceholder = lazy(() =>
  import('../../ImagePlaceholder/ImagePlaceholder.component.jsx'),
);

export default function MasajeSection() {
  const { isLarge } = useContext(AppContext);

  return (
    <section className="masaje-section">
      <div className={isLarge ? 'row flex-row' : 'row flex-column'}>
        <Suspense fallback={<Spinner />}>
          <ImagePlaceholder
            key={'terapeutic'}
            image={'https://kineticstudio.ro/images/masajTerapeutic__375W.webp'}
            source768={
              'https://kineticstudio.ro/images/masajTerapeutic__768W.webp'
            }
            source1200={
              'https://kineticstudio.ro/images/masajTerapeutic__1200W.webp'
            }
            source1920={
              'https://kineticstudio.ro/images/masajTerapeutic__1920W.webp'
            }
            source2556={
              'https://kineticstudio.ro/images/masajTerapeutic__2556W.webp'
            }
            imageAlt={'masajTerapeutic'}
            classe={'masaj-terapeutic'}
            fetchpriority={'low'}
          />
        </Suspense>
        <div className="masaj-body">
          <div className="half-container">
            <div className="masaj-body-header">
              <p className="caption">tipuri de masaje</p>
              <h2>Masaj terapeutic</h2>
            </div>
            <p>
              Va doare spatele, stati toata ziua pe scaun, la birou, sau poate
              va petreceti mult timp in masina?
            </p>
            <p>
              Masajul terapeutic este solutia perfecta, deoarece printr-o
              combinatie de tehnici si manevre ajuta la detensionarea
              musculaturii ceea ce duce la o imbunatatire a mobilitatii si
              totodata a posturii.
            </p>
            <p>
              Detalii despre preturi si pachete gasiti in sectiunea Servicii.
            </p>
          </div>
        </div>
      </div>
      <div className={isLarge ? 'row row-reverse' : 'row flex-column'}>
        <Suspense fallback={<Spinner />}>
          <ImagePlaceholder
            key={'relaxare'}
            image={'https://kineticstudio.ro/images/masajRelaxare__375W.webp'}
            source768={
              'https://kineticstudio.ro/images/masajRelaxare__768W.webp'
            }
            source1200={
              'https://kineticstudio.ro/images/masajRelaxare__1200W.webp'
            }
            source1920={
              'https://kineticstudio.ro/images/masajRelaxare__1920W.webp'
            }
            source2556={
              'https://kineticstudio.ro/images/masajRelaxare__2556W.webp'
            }
            imageAlt={'masajRelaxare'}
            classe={'masaj-relaxare'}
            fetchpriority={'low'}
          />
        </Suspense>
        <div className="masaj-body">
          <div className="half-container">
            <div className="masaj-body-header">
              <p className="caption">tipuri de masaje</p>
              <h2>Masaj de relaxare</h2>
            </div>
            <p>
              Ati avut o zi stresanta si epuizanta? Aveti probleme de circulatie
              periferica sau poate pur si simplu va doriti un mic rasfat?
            </p>
            <p>
              Masajul de relaxare este cel mai potrivit deoarece ajuta la
              reducerea anxietatii, a oboselii sau a stresului si de asemenea
              imbunatateste calitatea somnului.
            </p>
            <p>
              Detalii despre preturi si pachete gasesti in sectiunea Servicii.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
