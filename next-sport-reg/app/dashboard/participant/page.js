"use client";

import { useState } from 'react';
import axios from 'axios';

const AddParticipant = () => {
  const [formData, setFormData] = useState({
    nama_participant: '',
    event_name: '',
    event_date: '',
    no_registrasi: '',
    category: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Clear error message on input change
  };

  const validateForm = async () => {
    if (formData.nama_participant.length < 3) {
      setError("Nama peserta harus terdiri dari setidaknya 3 karakter.");
      return false;
    }

    try {
      // Check if registration number is unique
      const response = await axios.get(`http://127.0.0.1:8000/api/sports_events/${formData.no_registrasi}`);
      if (response.data.exists) {
        setError("Nomor registrasi sudah diambil oleh peserta lain.");
        return false;
      }
    } catch (error) {
      // If error fetching, assume registration number is unique
      console.log("Error checking registration number:", error);
    }

    return true; // Valid if all checks pass
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (!isValid) return;

    axios.post('http://127.0.0.1:8000/api/sports_events', formData)
      .then(response => {
        alert("Peserta berhasil didaftarkan!");
        setFormData({
          nama_participant: '',
          event_name: '',
          event_date: '',
          no_registrasi: '',
          category: '',
        });
      })
      .catch(error => {
        console.error("Error registering participant:", error);
        alert("Gagal melakukan registrasi peserta.");
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Registrasi Peserta Baru</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="nama_participant"
            value={formData.nama_participant}
            onChange={handleChange}
            placeholder="Nama Peserta"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="event_name"
            value={formData.event_name}
            onChange={handleChange}
            placeholder="Nama Event"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="no_registrasi"
            value={formData.no_registrasi}
            onChange={handleChange}
            placeholder="No Registrasi"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" disabled>
              Pilih Kategori
            </option>
            <option value="Adult">Adult</option>
            <option value="Junior">Junior</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Daftarkan Peserta</button>
      </form>
    </div>
  );
};

export default AddParticipant;
