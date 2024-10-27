// pages/events.js
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Events() {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get('http://127.0.0.1:8000/api/sports_events')
            .then(response => {
                setParticipants(response.data.data); // Access the data array inside response.data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run only once on component mount

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Daftar Peserta Event</h1>
            <ul className="list-group">
                {participants.map((participant) => (
                    <li key={participant.id} className="list-group-item">
                        <h5>{participant.event_name}</h5>
                        <p>Nama Peserta: {participant.nama_participant}</p>
                        <p>Tanggal Event: {participant.event_date}</p>
                        <p>No Registrasi: {participant.no_registrasi}</p>
                        <p>Kategori: {participant.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}