import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        🏥 MediBook
      </Link>

      <div style={styles.links}>
        <Link 
          to="/" 
          style={{
            ...styles.link,
            color: location.pathname === '/' ? '#2563eb' : '#6b7280'
          }}>
          Home
        </Link>
        <Link 
          to="/doctors" 
          style={{
            ...styles.link,
            color: location.pathname === '/doctors' ? '#2563eb' : '#6b7280'
          }}>
          Doctors
        </Link>
        <Link 
          to="/appointments" 
          style={{
            ...styles.link,
            color: location.pathname === '/appointments' ? '#2563eb' : '#6b7280'
          }}>
          My Appointments
        </Link>
      </div>

      <Link to="/doctors" style={styles.bookBtn}>
        Book Appointment
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    background: 'white',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    flexWrap: 'wrap',
    gap: '8px',
  },
  logo: {
    fontFamily: 'system-ui',
    fontSize: '22px',
    fontWeight: '700',
    color: '#2563eb',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  },
  links: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  link: {
    fontFamily: 'system-ui',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  bookBtn: {
    background: '#2563eb',
    color: 'white',
    padding: '10px 24px',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'background 0.2s',
  }
};

export default Navbar;