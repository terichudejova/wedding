import React, { useState } from 'react';
import "./FormularComponent.css";


const FormularComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [attendance, setAttendance] = useState('');
    const [diet, setDiet] = useState('');
    const [transport, setTransport] = useState('');
    const [questions, setQuestions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Zakódování hodnot
        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(email);
        const encodedPhone = encodeURIComponent(phone);
        const encodedAttendance = encodeURIComponent(attendance);
        const encodedDiet = encodeURIComponent(diet);
        const encodedTransport = encodeURIComponent(transport);
        const encodedQuestions = encodeURIComponent(questions);

        // URL Google Formuláře s ID pro každé pole
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSczZzOxT3LIPhfxb6D4htvtvb2Z92AWJ2TBzSnEziCzF8-sAw/formResponse";
        const queryString = `?entry.2011622090=${encodedName}&entry.847782223=${encodedEmail}&entry.1115183851=${encodedPhone}&entry.717035284=${encodedAttendance}&entry.455426091=${encodedDiet}&entry.8954280=${encodedTransport}&entry.835608964=${encodedQuestions}`;
        const finalUrl = googleFormUrl + queryString;

        // Odeslání GET požadavku
        fetch(finalUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'no-cors', // Google Forms neodpovídá, ale odeslání funguje
        })
            .then(() => {
                alert('Děkujeme za vyplnění formuláře.');
                setName(''); 
                setEmail(''); 
                setPhone('');
                setAttendance('');
                setDiet('');
                setTransport('');
                setQuestions('');
            })
            .catch((error) => {
                console.error('Chyba při odesílání formuláře:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="formularObject">
            <label htmlFor="name" className="label">Jméno a příjmení:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="inputStyle"
            />

            <label htmlFor="email" className="label">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputStyle"
            />

            <label htmlFor="phone" className="label">Telefonní číslo:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="inputStyle"
            />

            <label htmlFor="attendance" className="label">Účast na svatbě:</label>
            <select
                id="attendance"
                name="attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                required
                className="inputStyle"
            >
                <option value="" disabled>Vyberte možnost</option>
                <option value="Ano">Ano</option>
                <option value="Ne">Ne</option>
                <option value="Nejsem si jistý">Nejsem si jistý</option>
            </select>

            <label htmlFor="diet" className="label">Stravovací požadavky:</label>
            <textarea
                id="diet"
                name="diet"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="textArea"
            />

            <label htmlFor="transport" className="label">Doprava:</label>
            <select
                id="transport"
                name="transport"
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                required
                className="inputStyle"
            >
                <option value="" disabled>Vyberte možnost</option>
                <option value="Jedu MHD">Jedu MHD</option>
                <option value="Přijedu autem">Přijedu autem</option>
                <option value="Pěšky">Pěšky</option>
            </select>

            <label htmlFor="questions" className="label">Případné dotazy:</label>
            <textarea
                id="questions"
                name="questions"
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                className="textArea"
            />

            <button type="submit" className="formularButton">Odeslat</button>
        </form>
    );
};

export default FormularComponent;
