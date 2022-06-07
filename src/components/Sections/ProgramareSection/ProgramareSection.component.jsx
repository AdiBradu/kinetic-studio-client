import React, { useContext, useState, useEffect } from 'react';
import './ProgramareSection.component.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { AppContext } from '../../../contexts/AppContext';
import ButtonProgramare from '../../Button/Button.component.jsx';
import SelectServiciu from '../../Select/SelectServiciu/SelectServiciu.component.jsx';
import SelectTerapeut from '../../Select/SelectTerapeut/SelectTerapeut.component.jsx';
import SelectTimeSlot from '../../Select/SelectTimeSlot/SelectTimeSlot.component.jsx';
import Input from '../../Input/Input.component.jsx';
import DatePicker from 'react-datepicker';
import IntroSection from '../../Sections/IntroSection/IntroSection.component.jsx';
import useSetServiciuContext from '../../../hooks/useSetServiciuContext.jsx';
import useFilterTerapeuti from '../../../hooks/useFilterTerapeuti.jsx';
import useGetTerapeutCalendarAndProgramari from '../../../hooks/useGetTerapeutCalendarAndProgramari.jsx';
import useGetTimeslotsForDateAndTerapeut from '../../../hooks/useGetTimeslotsForDateAndTerapeut.jsx';
import useFilterHours from '../../../hooks/useFilterHours.jsx';
import useCreateComanda from '../../../hooks/useCreateComanda.jsx';
import useCreateProgramari from '../../../hooks/useCreateProgramari.jsx';
import {
  checkIfCalendar,
  checkIfProgramari,
  processPartners,
  processServices,
} from '../../../utils.js';
import Spinner from '../../Spinner/Spinner.component.jsx';
import ErrorScreen from '../../ErrorScreen/ErrorScreen.component.jsx';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_PARTNERS, GET_ALL_SERVICES } from '../../../graphql/queries';
import { CREATE_CUSTOMER_ORDER } from '../../../graphql/mutations';

export default function ProgramareSection() {
  const { isTablet } = useContext(AppContext);

  const { programareFromCardObj } = useContext(AppContext);
  const [programareFromCard, setProgramareFromCard] = programareFromCardObj;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasData, setHasData] = useState(false);

  const [startProgramare, setStartProgramare] = useState(false);
  const [servicii, setServicii] = useState([]);
  const [serviciu, setServiciu] = useState(null);
  const [terapeuti, setTerapeuti] = useState(null);
  const [terapeutId, setTerapeutId] = useState(null);
  const [terapeut, setTerapeut] = useState(null);
  const [statusComanda, setStatusComanda] = useState(false);

  //Datepicker
  const [startDate, setStartDate] = useState();
  //Timeslots
  const [timeSlotStart, setTimeSlotStart] = useState();

  const [comanda, setComanda] = useState({
    nume: '',
    prenume: '',
    telefon: '',
    email: '',
    judet: '',
    localitate: '',
    strada: '',
    nr: '',
    serviciu: 0,
    sedinte: '',
    specializare: '',
    programari: [],
  });
  const [createOrder, createOrderObj] = useMutation(CREATE_CUSTOMER_ORDER);

  const sQObj = useQuery(GET_ALL_SERVICES);
  const sQData = sQObj?.data ? sQObj.data['getAllServices'] : [];
  const pQObj = useQuery(GET_ALL_PARTNERS);
  const pQData = pQObj?.data ? pQObj.data['getAllPartners'] : [];

  useEffect(() => {
    if (startProgramare) {
      setIsLoading(true);
      if (sQData) {
        const pSData = processServices(sQData);
        if (pSData.length) {
          setHasData(true);
          setServicii(pSData);
          setServiciu(pSData[0].id);
        }
      }
      if (pQData) {
        const pPData = processPartners(pQData);
        if (pPData.length) {
          setTerapeuti(pPData);
        }
      }
      setIsLoading(false);
    }
  }, [startProgramare]);

  const { specializare, sedinte, durataSedinta } = useSetServiciuContext(
    servicii,
    serviciu,
  );

  useEffect(() => {
    if (terapeutId) {
      for (let i = 0; i < terapeuti.length; i++) {
        if (terapeuti[i].id == terapeutId) {
          setTerapeut(terapeuti[i].id);
        }
      }
    }
  }, [terapeutId]);

  const { filteredTerapeuti } = useFilterTerapeuti(terapeuti, specializare);

  const { programari } = useCreateProgramari(
    startDate,
    terapeutId,
    timeSlotStart,
    sedinte,
  );

  const handleChangeServiciu = (e) => {
    const value = e.target.value;
    setServiciu(value);
    setComanda({
      ...comanda,
      serviciu: value,
    });
  };

  const handleChangeTerapeut = (e) => {
    const value = e.target.value;
    setTerapeutId(value);
  };

  const handleChangeTime = (e) => {
    setTimeSlotStart(e.target.value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setComanda({
      ...comanda,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (programareFromCard) {
      setStartProgramare(true);
      setServiciu(programareFromCard);
      setComanda({
        ...comanda,
        serviciu: programareFromCard,
      });
    }
  }, [programareFromCard]);

  const handleProgramare = async () => {
    setStatusComanda(true);
    let dets = [];
    if (comanda.programari.length) {
      comanda.programari.forEach((el) => {
        const objSched = {
          partner_id: parseFloat(el.terapeut),
          appointment_start: parseFloat(el.timeSlotStart),
          appointment_end: parseFloat(el.timeSlotEnd),
          appointment_order: parseInt(el.sedinta),
        };
        dets.push(objSched);
      });
    }
    await createOrder({
      variables: {
        firstName: comanda.prenume,
        lastName: comanda.nume,
        phone: comanda.telefon,
        email: comanda.email,
        region: comanda.judet,
        city: comanda.localitate,
        street: comanda.strada,
        streetNumber: comanda.nr,
        serviceId: parseFloat(comanda.serviciu),
        details: dets,
      },
    });
    setStatusComanda(false);
    setServiciu(null);
    setTerapeutId(null);
    setStartDate(null);
    setTimeSlotStart(null);
    // setStartProgramare(false);

    setTimeout(() => {
      // setStatusComanda(false);
      // setServiciu(null);
      // setTerapeutId(null);
      // setStartDate(null);
      // setTimeSlotStart(null);

      console.log('comanda', comanda);
      setComanda({
        nume: '',
        prenume: '',
        telefon: '',
        email: '',
        judet: '',
        localitate: '',
        strada: '',
        nr: '',
        serviciu: 0,
        sedinte: '',
        specializare: '',
        programari: [],
      });
      setStartProgramare(false);
    }, 2000);
  };

  const { terapeutCalendar, terapeutProgramari } =
    useGetTerapeutCalendarAndProgramari(terapeuti, terapeutId);

  const { calendarTimeslotsForDate, programariTimeslotsForDate } =
    useGetTimeslotsForDateAndTerapeut(
      startDate,
      terapeutCalendar,
      terapeutProgramari,
    );

  const { filteredHours } = useFilterHours(
    calendarTimeslotsForDate,
    programariTimeslotsForDate,
    startDate,
    durataSedinta,
  );

  useCreateComanda(programari, sedinte, specializare, comanda, setComanda);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorScreen />
      ) : (
        <div
          className={
            isTablet
              ? 'programare-section container mx-auto'
              : 'programare-section container-fluid mx-auto'
          }
          id="programare-section"
        >
          <IntroSection
            caption={'programare'}
            title={'Programeaza-te in 4 pasi simpli!'}
            copy={
              'Alege serviciul, terapeutul, data si ora programarii si achita cash sau cu cardul in siguranta.'
            }
          />
          <div className="programare-section-container flex flex-column justify-center align-center">
            {startProgramare && (
              <SelectServiciu
                value={serviciu}
                handleChange={handleChangeServiciu}
                name="serviciu"
                label={'serviciu'}
                options={servicii}
              />
            )}

            {serviciu ? (
              <SelectTerapeut
                value={terapeutId}
                handleChange={handleChangeTerapeut}
                name="terapeut"
                label={'terapeut'}
                options={filteredTerapeuti}
              />
            ) : (
              ''
            )}

            {terapeutId && (
              <div className="calendar">
                <label>
                  <p>Alege data</p>
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  dayClassName={(date) =>
                    checkIfProgramari(terapeutProgramari, date)
                      ? 'active-programare'
                      : checkIfCalendar(terapeutCalendar, date)
                      ? 'active-calendar'
                      : 'innactive'
                  }
                  minDate={new Date()}
                  inline
                />
              </div>
            )}

            {startDate && (
              <SelectTimeSlot
                value={timeSlotStart}
                handleChange={handleChangeTime}
                name="time"
                label={'time'}
                options={filteredHours}
              />
            )}

            {timeSlotStart && (
              <Input
                value={comanda.nume}
                handleChange={handleChange}
                name="nume"
                label={'nume'}
                type={'text'}
                placeholder={'type'}
              />
            )}

            {comanda.nume !== '' && (
              <Input
                value={comanda.prenume}
                handleChange={handleChange}
                name="prenume"
                label={'prenume'}
                type={'text'}
                placeholder={'type'}
              />
            )}

            {comanda.prenume !== '' && (
              <Input
                value={comanda.telefon}
                handleChange={handleChange}
                name="telefon"
                label={'telefon'}
                type={'number'}
                placeholder={'type'}
              />
            )}

            {comanda.telefon !== '' && (
              <Input
                value={comanda.email}
                handleChange={handleChange}
                name="email"
                label={'email'}
                type={'email'}
                placeholder={'email'}
              />
            )}

            {comanda.email !== '' && (
              <Input
                value={comanda.judet}
                handleChange={handleChange}
                name="judet"
                label={'judet'}
                type={'text'}
                placeholder={'type'}
              />
            )}

            {comanda.judet !== '' && (
              <Input
                value={comanda.localitate}
                handleChange={handleChange}
                name="localitate"
                label={'localitate'}
                type={'text'}
                placeholder={'type'}
              />
            )}

            {comanda.localitate !== '' && (
              <Input
                value={comanda.strada}
                handleChange={handleChange}
                name="strada"
                label={'strada'}
                type={'text'}
                placeholder={'type'}
              />
            )}

            {comanda.strada !== '' && (
              <Input
                value={comanda.nr}
                handleChange={handleChange}
                name="nr"
                label={'nr'}
                type={'text'}
                placeholder={'type'}
              />
            )}

            {comanda.nr !== '' && (
              <div
                className="btn-wrapper flex flex-column justify-center align-center"
                onClick={() => handleProgramare()}
              >
                <ButtonProgramare
                  text={'trimite'}
                  classe={'btn-programare-client'}
                />
              </div>
            )}

            {!startProgramare ? (
              <div
                className="btn-wrapper flex flex-column justify-center align-center"
                onClick={() => setStartProgramare(true)}
              >
                <ButtonProgramare
                  text={'programeaza-te!'}
                  classe={'btn-programare-client'}
                />
              </div>
            ) : (
              ''
            )}

            {statusComanda && (
              <p style={{ marginTop: '16px' }}>
                Comanda a fost finalizata cu succes!
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
