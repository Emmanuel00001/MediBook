import { Link } from 'react-router-dom';
import doctors from '../data/doctors';
import DoctorCard from '../components/DoctorCard';
import useWindowSize from '../useWindowSize';

function Home() {
  const width = useWindowSize();
  const isMobile = width <= 768;
  const featuredDoctors = doctors.slice(0, 3);

  const styles = {
    page: {
      paddingTop: '72px',
      overflowX: 'hidden',
      width: '100%',
    },
    hero: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      minHeight: isMobile ? 'auto' : '90vh',
      background: '#f0f7ff',
      width: '100%',
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '40px 20px' : '60px 60px 60px 80px',
      width: '100%',
    },
    heroBadge: {
      display: 'inline-block',
      background: '#dbeafe',
      color: '#2563eb',
      fontSize: '12px',
      fontWeight: '600',
      padding: '6px 14px',
      borderRadius: '100px',
      marginBottom: '24px',
      width: 'fit-content',
    },
    heroTitle: {
      fontFamily: 'system-ui',
      fontSize: isMobile ? '32px' : '52px',
      fontWeight: '800',
      lineHeight: '1.1',
      color: '#111827',
      marginBottom: '20px',
      letterSpacing: '-1px',
    },
    heroDesc: {
      fontSize: '15px',
      color: '#6b7280',
      lineHeight: '1.8',
      maxWidth: '460px',
      marginBottom: '32px',
    },
    heroButtons: {
      display: 'flex',
      gap: '12px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      background: '#2563eb',
      color: 'white',
      padding: '14px 28px',
      borderRadius: '10px',
      fontFamily: 'system-ui',
      fontSize: '14px',
      fontWeight: '600',
      textDecoration: 'none',
    },
    btnOutline: {
      background: 'white',
      color: '#2563eb',
      padding: '14px 28px',
      borderRadius: '10px',
      fontFamily: 'system-ui',
      fontSize: '14px',
      fontWeight: '600',
      textDecoration: 'none',
      border: '2px solid #2563eb',
    },
    stats: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '16px' : '32px',
      background: 'white',
      padding: isMobile ? '16px 20px' : '24px 32px',
      borderRadius: '16px',
      width: 'fit-content',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      maxWidth: '100%',
    },
    stat: { textAlign: 'center' },
    statNum: {
      fontFamily: 'system-ui',
      fontSize: isMobile ? '22px' : '28px',
      fontWeight: '800',
      color: '#2563eb',
      lineHeight: '1',
      marginBottom: '4px',
    },
    statLabel: {
      fontSize: '11px',
      color: '#6b7280',
    },
    statDivider: {
      width: '1px',
      height: '40px',
      background: '#e5e7eb',
    },
    heroImage: {
      overflow: 'hidden',
      display: isMobile ? 'none' : 'block',
    },
    howItWorks: {
      padding: isMobile ? '60px 20px' : '100px 80px',
      textAlign: 'center',
      background: 'white',
      width: '100%',
    },
    steps: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    stepCard: {
      padding: '32px 24px',
      background: '#f9fafb',
      borderRadius: '16px',
      textAlign: 'center',
    },
    stepIcon: {
      fontSize: '36px',
      marginBottom: '16px',
    },
    stepTitle: {
      fontFamily: 'system-ui',
      fontSize: '17px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '8px',
    },
    stepDesc: {
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: '1.7',
    },
    featured: {
      padding: isMobile ? '60px 20px' : '100px 80px',
      background: '#f9fafb',
      width: '100%',
    },
    featuredHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '12px',
      marginBottom: '40px',
    },
    viewAll: {
      color: '#2563eb',
      fontFamily: 'system-ui',
      fontSize: '14px',
      fontWeight: '600',
      textDecoration: 'none',
    },
    doctorsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '20px',
    },
    specialties: {
      padding: isMobile ? '60px 20px' : '100px 80px',
      background: 'white',
      textAlign: 'center',
      width: '100%',
    },
    specialtiesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '16px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    specCard: {
      padding: '24px 16px',
      background: '#f0f7ff',
      borderRadius: '16px',
      textDecoration: 'none',
      border: '2px solid transparent',
      display: 'block',
    },
    specIcon: {
      fontSize: '28px',
      display: 'block',
      marginBottom: '10px',
    },
    specName: {
      fontFamily: 'system-ui',
      fontSize: '12px',
      fontWeight: '600',
      color: '#111827',
    },
    sectionLabel: {
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#2563eb',
      marginBottom: '8px',
    },
    sectionTitle: {
      fontFamily: 'system-ui',
      fontSize: isMobile ? '28px' : '36px',
      fontWeight: '800',
      color: '#111827',
      marginBottom: '40px',
      letterSpacing: '-0.5px',
    },
    footer: {
      background: '#111827',
      color: 'white',
      padding: isMobile ? '40px 20px 0' : '60px 80px 0',
      width: '100%',
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '32px',
      paddingBottom: '40px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    footerLogo: {
      fontFamily: 'system-ui',
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '12px',
    },
    footerHeading: {
      fontSize: '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#60a5fa',
      marginBottom: '16px',
    },
    footerDesc: {
      fontSize: '13px',
      color: 'rgba(255,255,255,0.5)',
      lineHeight: '1.8',
    },
    footerLink: {
      display: 'block',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.5)',
      textDecoration: 'none',
      marginBottom: '8px',
    },
    footerBottom: {
      textAlign: 'center',
      padding: '20px',
      fontSize: '12px',
      color: 'rgba(255,255,255,0.3)',
    },
  };

  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>🇳🇬 Nigeria's Trusted Health Platform</span>
          <h1 style={styles.heroTitle}>
            Book a Doctor<br />
            <span style={{ color: '#2563eb' }}>Appointment</span><br />
            in Minutes
          </h1>
          <p style={styles.heroDesc}>
            Connect with top specialists across Lagos. No queues, no stress
            just quality healthcare at your fingertips.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/doctors" style={styles.btnPrimary}>Find a Doctor</Link>
            <Link to="/appointments" style={styles.btnOutline}>My Appointments</Link>
          </div>
          <div style={styles.stats}>
            <div style={styles.stat}>
              <p style={styles.statNum}>50+</p>
              <p style={styles.statLabel}>Doctors</p>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.stat}>
              <p style={styles.statNum}>10k+</p>
              <p style={styles.statLabel}>Patients</p>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.stat}>
              <p style={styles.statNum}>15+</p>
              <p style={styles.statLabel}>Specialties</p>
            </div>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
            alt="Doctor"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div style={styles.howItWorks}>
        <p style={styles.sectionLabel}>Simple Process</p>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          {[
            { icon: '🔍', title: 'Find a Doctor', desc: 'Browse specialists by category or search by name' },
            { icon: '📅', title: 'Book a Slot', desc: 'Pick a date and time that works for you' },
            { icon: '✅', title: 'Get Confirmed', desc: 'Receive instant confirmation of your appointment' },
          ].map((step, i) => (
            <div key={i} style={styles.stepCard}>
              <div style={styles.stepIcon}>{step.icon}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.featured}>
        <div style={styles.featuredHeader}>
          <div>
            <p style={styles.sectionLabel}>Top Rated</p>
            <h2 style={styles.sectionTitle}>Featured Doctors</h2>
          </div>
          <Link to="/doctors" style={styles.viewAll}>View All Doctors →</Link>
        </div>
        <div style={styles.doctorsGrid}>
          {featuredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      <div style={styles.specialties}>
        <p style={styles.sectionLabel}>Browse By</p>
        <h2 style={styles.sectionTitle}>Our Specialties</h2>
        <div style={styles.specialtiesGrid}>
          {[
            { icon: '❤️', name: 'Cardiology', filter: 'Cardiologist' },
            { icon: '🧠', name: 'Neurology', filter: 'Neurologist' },
            { icon: '👶', name: 'Pediatrics', filter: 'Pediatrician' },
            { icon: '🦴', name: 'Orthopaedics', filter: 'Orthopaedic Surgeon' },
            { icon: '👁️', name: 'Ophthalmology', filter: 'Ophthalmologist' },
            { icon: '🦷', name: 'Dentistry', filter: 'Dentist' },
            { icon: '🩺', name: 'General Practice', filter: 'General Practitioner' },
            { icon: '💊', name: 'Dermatology', filter: 'Dermatologist' },
          ].map((spec, i) => (
            <Link to={`/doctors?specialty=${spec.filter}`} key={i} style={styles.specCard}>
              <span style={styles.specIcon}>{spec.icon}</span>
              <p style={styles.specName}>{spec.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <p style={styles.footerLogo}>🏥 MediBook</p>
            <p style={styles.footerDesc}>Quality healthcare, made accessible for every Nigerian.</p>
          </div>
          <div>
            <p style={styles.footerHeading}>Quick Links</p>
            <Link to="/doctors" style={styles.footerLink}>Find Doctors</Link>
            <Link to="/appointments" style={styles.footerLink}>My Appointments</Link>
          </div>
          <div>
            <p style={styles.footerHeading}>Contact</p>
            <p style={styles.footerDesc}>info@medibook.ng</p>
            <p style={styles.footerDesc}>+234 800 MEDIBOOK</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © 2026 MediBook Nigeria. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;