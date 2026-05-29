import useWindowSize from '../useWindowSize';
import { useState, useEffect } from 'react';
import doctors from '../data/doctors';
import DoctorCard from '../components/DoctorCard';

function Doctors() {
  const width = useWindowSize();
  const isMobile = width < 768;


  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const specialtyParam = urlParams.get('specialty');
    if (specialtyParam) {
        setFilter(specialtyParam);
    }
  }, []);

  const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'Dermatologist', 'Gynaecologist', 'Orthopaedic Surgeon'];

  const filtered = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || doc.specialty === filter;
    return matchesSearch && matchesFilter;
  });

  const styles = {
  header: {
    background: '#f0f7ff',
    padding: '60px 80px',
    textAlign: 'center',
    width: '100%',
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
    marginBottom: '32px',
  },
  search: {
    width: '100%',
    maxWidth: '500px',
    padding: '14px 20px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontFamily: 'system-ui',
    fontSize: '15px',
    outline: 'none',
    marginBottom: '24px',
    display: 'block',
    margin: '0 auto 24px',
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    padding: isMobile ? '0 20px' : '0',
  },
  filterBtn: {
    padding: '8px 20px',
    borderRadius: '100px',
    border: '1px solid',
    fontFamily: 'system-ui',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  wrap: {
    padding: isMobile ? '40px 20px' : '60px 80px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  results: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '20px',
  },
};

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={styles.header}>
        <h1 style={styles.title}>Find a Doctor</h1>
        <p style={styles.subtitle}>Browse our network of top specialists across Lagos</p>

        <input
          type="text"
          placeholder="Search by name or specialty..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={styles.search}
        />

        <div style={styles.filters}>
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setFilter(spec)}
              style={{
                ...styles.filterBtn,
                background: filter === spec ? '#2563eb' : 'white',
                color: filter === spec ? 'white' : '#6b7280',
                borderColor: filter === spec ? '#2563eb' : '#e5e7eb',
              }}>
              {spec}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.wrap}>
        <p style={styles.results}>{filtered.length} doctors found</p>
        <div style={styles.grid}>
          {filtered.length > 0 ? (
            filtered.map(doc => <DoctorCard key={doc.id} doctor={doc} />)
          ) : (
            <p style={{ color: '#6b7280', gridColumn: '1/-1', textAlign: 'center', padding: '60px' }}>
              No doctors found. Try a different search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}



export default Doctors;