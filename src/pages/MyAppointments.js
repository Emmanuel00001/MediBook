import useWindowSize from '../useWindowSize';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyAppointments() {
  const width = useWindowSize();
  const isMobile = width <= 768;
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('medibook-appointments') || '[]');
    setAppointments(saved);
  }, []);

  function cancelAppointment(id) {
    const updated = appointments.map(apt =>
      apt.id === id ? { ...apt, status: 'Cancelled' } : apt
    );
    setAppointments(updated);
    localStorage.setItem('medibook-appointments', JSON.stringify(updated));
  }

  const styles = {
  header: {
    background: '#f0f7ff',
    padding: isMobile ? '40px 20px' : '60px 80px',
    textAlign: 'center',
    Width: '100%',
  },
  title: {
    fontFamily: 'system-ui',
    fontSize: '42px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '12px',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
  },
  wrap: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: isMobile ? '40px 20px' : '60px 40px',
    Width: '100%',
  },
  empty: {
    textAlign: 'center',
    padding: '80px 40px',
  },
  emptyIcon: { fontSize: '56px', marginBottom: '16px' },
  emptyTitle: {
    fontFamily: 'system-ui',
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px',
  },
  emptyDesc: {
    fontSize: '15px',
    color: '#6b7280',
    marginBottom: '32px',
  },
  btnPrimary: {
    display: 'inline-block',
    background: '#2563eb',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '10px',
    fontFamily: 'system-ui',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  appointmentCard: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '80px 1fr' : '80px 1fr auto',
    gap: '16px',
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: isMobile ? '16px' : '24px',
    alignItems: 'start',
  },
  doctorImg: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '12px',
    flexShrink: 0,
  },
  aptInfo: {},
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
    fontSize: '18px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px',
  },
  aptMeta: {
    display: 'flex',
    gap: '16px',
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '6px',
  },
  patientName: {
    fontSize: '13px',
    color: '#374151',
  },
  aptRight: {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
  },
  statusBadge: {
    padding: '4px 12px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: '600',
  },
  aptFee: {
    fontFamily: 'system-ui',
    fontSize: '18px',
    fontWeight: '700',
    color: '#111827',
  },
  cancelBtn: {
    background: 'none',
    border: '1px solid #ef4444',
    color: '#ef4444',
    padding: '6px 16px',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Appointments</h1>
        <p style={styles.subtitle}>Manage and track your upcoming appointments</p>
      </div>

      <div style={styles.wrap}>
        {appointments.length === 0 ? (
          <div style={styles.empty}>
            <p style={styles.emptyIcon}>📅</p>
            <h2 style={styles.emptyTitle}>No appointments yet</h2>
            <p style={styles.emptyDesc}>Book an appointment with one of our doctors to get started.</p>
            <Link to="/doctors" style={styles.btnPrimary}>Find a Doctor</Link>
          </div>
        ) : (
          <div style={styles.list}>
            {appointments.map(apt => (
              <div key={apt.id} style={styles.appointmentCard}>
                <img src={apt.doctorImage} alt={apt.doctorName} style={styles.doctorImg} />
                <div style={styles.aptInfo}>
                  <p style={styles.specialty}>{apt.specialty}</p>
                  <h3 style={styles.doctorName}>{apt.doctorName}</h3>
                  <div style={styles.aptMeta}>
                    <span>📅 {apt.date}</span>
                    <span>🕐 {apt.time}</span>
                    <span>📍 {apt.location}</span>
                  </div>
                  <p style={styles.patientName}>Patient: {apt.name}</p>
                </div>
                <div style={styles.aptRight}>
                  <span style={{
                    ...styles.statusBadge,
                    background: apt.status === 'Confirmed' ? '#dcfce7' : '#fee2e2',
                    color: apt.status === 'Confirmed' ? '#166534' : '#991b1b',
                  }}>
                    {apt.status === 'Confirmed' ? '✅' : '❌'} {apt.status}
                  </span>
                  <p style={styles.aptFee}>₦{apt.fee.toLocaleString()}</p>
                  {apt.status === 'Confirmed' && (
                    <button
                      onClick={() => cancelAppointment(apt.id)}
                      style={styles.cancelBtn}>
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



export default MyAppointments;