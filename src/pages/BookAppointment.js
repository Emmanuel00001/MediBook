import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import doctors from '../data/doctors';
import useWindowSize from '../useWindowSize';

function BookAppointment() {
  const width = useWindowSize();
  const isMobile = width < 768;
  const { doctorId } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(doctorId));

  const styles = {
  wrap: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: isMobile ? '40px 20px' : '60px 40px',
  },
  doctorCard: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '140px 1fr',
    gap: '20px',
    background: '#f0f7ff',
    padding: isMobile ? '24px 20px' : '32px',
    borderRadius: '16px',
    marginBottom: '40px',
  },
  doctorImg: {
    width: isMobile ? '100%' : '140px',
    height: isMobile ? '200px' : '160px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  specialty: {
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#2563eb',
    marginBottom: '4px',
  },
  doctorName: {
    fontFamily: 'system-ui',
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px',
  },
  doctorMeta: {
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '12px',
  },
  doctorBio: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.7',
    marginBottom: '12px',
  },
  fee: {
    fontSize: '14px',
    color: '#374151',
  },
  formWrap: {},
  formSection: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '24px',
  },
  formTitle: {
    fontFamily: 'system-ui',
    fontSize: '18px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #f3f4f6',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#374151',
    letterSpacing: '0.5px',
  },
  input: {
    padding: '12px 16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    fontSize: '14px',
    color: '#111827',
    outline: 'none',
    width: '100%',
  },
  submitBtn: {
    width: '100%',
    padding: '18px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontFamily: 'system-ui',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  successCard: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '24px',
    padding: '60px',
    maxWidth: '520px',
    margin: '60px auto 0',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  successIcon: { fontSize: '56px', marginBottom: '24px' },
  successTitle: {
    fontFamily: 'system-ui',
    fontSize: '28px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '16px',
  },
  successDesc: {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: '1.7',
  },
  btnPrimary: {
    background: '#2563eb',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '10px',
    fontFamily: 'system-ui',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
  },
  btnOutline: {
    background: 'white',
    color: '#2563eb',
    padding: '12px 28px',
    borderRadius: '10px',
    fontFamily: 'system-ui',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    border: '2px solid #2563eb',
  },
};

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!doctor) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Doctor not found</h2>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    );
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      alert('Please fill in all required fields.');
      return;
    }

    const appointments = JSON.parse(localStorage.getItem('medibook-appointments') || '[]');
    const newAppointment = {
      id: Date.now(),
      doctorName: doctor.name,
      specialty: doctor.specialty,
      doctorImage: doctor.image,
      fee: doctor.fee,
      location: doctor.location,
      ...form,
      status: 'Confirmed',
      bookedAt: new Date().toISOString(),
    };
    appointments.push(newAppointment);
    localStorage.setItem('medibook-appointments', JSON.stringify(appointments));

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', padding: '120px 40px' }}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>🎉</div>
          <h2 style={styles.successTitle}>Appointment Confirmed!</h2>
          <p style={styles.successDesc}>
            Your appointment with <strong>{doctor.name}</strong> has been booked for <strong>{form.date}</strong> at <strong>{form.time}</strong>.
          </p>
          <p style={{ ...styles.successDesc, marginTop: '8px' }}>
            A confirmation will be sent to <strong>{form.email}</strong>
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/appointments" style={styles.btnPrimary}>View My Appointments</Link>
            <Link to="/doctors" style={styles.btnOutline}>Book Another</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={styles.wrap}>

        <div style={styles.doctorCard}>
          <img src={doctor.image} alt={doctor.name} style={styles.doctorImg} />
          <div>
            <p style={styles.specialty}>{doctor.specialty}</p>
            <h2 style={styles.doctorName}>{doctor.name}</h2>
            <p style={styles.doctorMeta}>📍 {doctor.location} · {doctor.experience} experience</p>
            <p style={styles.doctorBio}>{doctor.bio}</p>
            <p style={styles.fee}>Consultation Fee: <strong>₦{doctor.fee.toLocaleString()}</strong></p>
          </div>
        </div>

        <div style={styles.formWrap}>
          <div style={styles.formSection}>
            <h3 style={styles.formTitle}>Patient Information</h3>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Emmanuel Akolade"
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          <div style={styles.formSection}>
            <h3 style={styles.formTitle}>Appointment Details</h3>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Date *</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Time *</label>
                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  style={styles.input}>
                  <option value="">Select a time</option>
                  {doctor.times.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div style={{ ...styles.formGroup, gridColumn: '1/-1' }}>
                <label style={styles.label}>Reason for Visit</label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms or reason for the appointment..."
                  style={{ ...styles.input, height: '100px', resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} style={styles.submitBtn}>
            Confirm Appointment — ₦{doctor.fee.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
  
}



export default BookAppointment;