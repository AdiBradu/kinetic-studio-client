import React, {useContext, useState, useEffect} from 'react';
import './ProgramareSection.component.scss';
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from '../../../contexts/AppContext';
import ButtonProgramare from '../../Button/Button.component.jsx';
import SelectServiciu from '../../Select/SelectServiciu/SelectServiciu.component.jsx';
import SelectTerapeut from '../../Select/SelectTerapeut/SelectTerapeut.component.jsx';
import SelectTimeSlot from '../../Select/SelectTimeSlot/SelectTimeSlot.component.jsx';
import Input from '../../Input/Input.component.jsx';
import DatePicker from "react-datepicker";
import IntroSection from '../../Sections/IntroSection/IntroSection.component.jsx';
import useSetServiciuContext from '../../../hooks/useSetServiciuContext.jsx';
import useFilterTerapeuti from '../../../hooks/useFilterTerapeuti.jsx';
import useGetTerapeutCalendarAndProgramari from '../../../hooks/useGetTerapeutCalendarAndProgramari.jsx';
import useGetTimeslotsForDateAndTerapeut from '../../../hooks/useGetTimeslotsForDateAndTerapeut.jsx';
import useFilterHours from '../../../hooks/useFilterHours.jsx';
import useCreateComanda from '../../../hooks/useCreateComanda.jsx';
import useCreateProgramari from '../../../hooks/useCreateProgramari.jsx';
import {checkIfCalendar, checkIfProgramari} from '../../../utils.js';

export default function ProgramareSection() {

    const {isTablet} = useContext(AppContext);

    const {programareFromCardObj} = useContext(AppContext);
    const [programareFromCard, setProgramareFromCard] = programareFromCardObj;
    
    const [startProgramare, setStartProgramare] = useState(false);
    const [servicii, setServicii] = useState(null);
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
        nume: "",
        prenume: "",
        telefon: "",
        email: "",
        judet: "",
        localitate: "",
        strada: "",
        nr: "",
        serviciu: "",
        sedinte: "",
        specializare: "",
        programari: [],
    });

    console.log(comanda)
    useEffect(() => {
        startProgramare &&
        fetch(`http://localhost:3000/data/servicii.json`)
        .then((response) => response.json())
        .then((data) => setServicii(data));
    }, [startProgramare]);

    useEffect(() => {
        startProgramare &&
        fetch(`http://localhost:3000/data/terapeuti.json`)
        .then((response) => response.json())
        .then((data) => setTerapeuti(data));
    }, [startProgramare]);

    const {
        specializare,
        sedinte,
        durataSedinta
    } = useSetServiciuContext(servicii, serviciu);

    useEffect(() => {
        if (terapeutId) {
            for (let i=0; i<terapeuti.length; i++) {
                if (terapeuti[i].id == terapeutId) {
                    setTerapeut(terapeuti[i]);
                }
            }
        }
    }, [terapeutId])

    const { filteredTerapeuti } = useFilterTerapeuti(terapeuti, specializare);

    const { programari } = useCreateProgramari(
        startDate,
        terapeutId,
        timeSlotStart,
        sedinte
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
        console.log(value)
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
        if(programareFromCard) {
            setStartProgramare(true);
            setServiciu(programareFromCard);
            setComanda({
                ...comanda,
                serviciu: programareFromCard,
            });
        }
    }, [programareFromCard])

    const handleProgramare = () => {
        setStatusComanda(true)
        setTimeout(() => {
            setStatusComanda(false);
            setServiciu(null);
            setTerapeutId(null);
            setStartDate(null);
            setTimeSlotStart(null);
            setComanda({
                nume: "",
                prenume: "",
                telefon: "",
                email: "",
                judet: "",
                localitate: "",
                strada: "",
                nr: "",
                serviciu: "",
                sedinte: "",
                specializare: "",
                programari: [],
            })
            setStartProgramare(false);

        }, 2000)
    }

    const { terapeutCalendar, terapeutProgramari } = useGetTerapeutCalendarAndProgramari(terapeuti, terapeutId);

    const { calendarTimeslotsForDate, programariTimeslotsForDate } =
        useGetTimeslotsForDateAndTerapeut(
        startDate,
        terapeutCalendar,
        terapeutProgramari
        );

    const { filteredHours } = useFilterHours(
        calendarTimeslotsForDate,
        programariTimeslotsForDate,
        startDate,
        durataSedinta
    );

    useCreateComanda(programari, sedinte, specializare, comanda, setComanda);

    return (
        <div className={isTablet ? 'programare-section container mx-auto' : 'programare-section container-fluid mx-auto'} id="programare-section">
            <IntroSection 
                caption={'programare'} 
                title={'Programeaza-te in 4 pasi simpli!'} 
                copy={'Alege serviciul, terapeutul, data si ora programarii si achita cash sau cu cardul in siguranta.'}
            />
            <div className="programare-section-container flex flex-column justify-center align-center">

                {
                    startProgramare ?
                    <SelectServiciu 
                        value={serviciu}
                        handleChange={handleChangeServiciu}
                        name="serviciu"
                        label={"serviciu"}
                        options={servicii}
                    />
                    : ''
                }

                {
                    serviciu ?
                    <SelectTerapeut 
                        value={terapeutId}
                        handleChange={handleChangeTerapeut}
                        name="terapeut"
                        label={"terapeut"}
                        options={filteredTerapeuti}
                    />
                    : ''
                }

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
                                ? "active-programare"
                                : checkIfCalendar(terapeutCalendar, date)
                                ? "active-calendar"
                                : "innactive"
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
                        label={"time"}
                        options={filteredHours}
                    />
                )}

                {
                    timeSlotStart && (
                        <Input
                            value={comanda.nume}
                            handleChange={handleChange}
                            name="nume"
                            label={"nume"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.nume !== '' && (
                        <Input
                            value={comanda.prenume}
                            handleChange={handleChange}
                            name="prenume"
                            label={"prenume"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.prenume !== '' && (
                        <Input
                            value={comanda.telefon}
                            handleChange={handleChange}
                            name="telefon"
                            label={"telefon"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.telefon !== '' && (
                        <Input
                            value={comanda.email}
                            handleChange={handleChange}
                            name="email"
                            label={"email"}
                            type={"email"}
                            placeholder={"email"}
                        />
                    )
                }

                {
                    comanda.email !== '' && (
                        <Input
                            value={comanda.judet}
                            handleChange={handleChange}
                            name="judet"
                            label={"judet"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.judet !== '' && (
                        <Input
                            value={comanda.localitate}
                            handleChange={handleChange}
                            name="localitate"
                            label={"localitate"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.localitate !== '' && (
                        <Input
                            value={comanda.strada}
                            handleChange={handleChange}
                            name="strada"
                            label={"strada"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.strada !== '' && (
                        <Input
                            value={comanda.nr}
                            handleChange={handleChange}
                            name="nr"
                            label={"nr"}
                            type={"text"}
                            placeholder={"type"}
                        />
                    )
                }

                {
                    comanda.nr !== '' && (
                        <div className="btn-wrapper flex flex-column justify-center align-center" onClick={() => handleProgramare()}>
                            <ButtonProgramare text={'programeaza-te!'} classe={'btn-programare-client'}/>
                        </div>
                    )
                }

                {
                    !startProgramare ?
                    <div className="btn-wrapper flex flex-column justify-center align-center" onClick={() => setStartProgramare(true)}>
                        <ButtonProgramare text={'programeaza-te!'} classe={'btn-programare-client'}/>
                    </div>
                    : ''
                }

                {
                    statusComanda && (
                        <p>Comanda a fost finalizata cu succes!</p>
                    )
                }

            </div>
        </div>
    )
}
