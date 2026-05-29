import useWindowSize from '../useWindowSize';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
    const width = useWindowSize();
  return (
    <div style={styles.card}>
      <div style={styles.imageWrap}>
        <img src={doctor.image} alt={doctor.name} style={styles.image} />
        {!doctor.available && (
          <div style={styles.unavailableBadge}>Unavailable</div>
        )}
      </div>
      <div style={styles.info}>
        <div style={styles.topRow}>
          <div>
            <p style={styles.specialty}>{doctor.specialty}</p>
            <h3 style={styles.name}>{doctor.name}</h3>
          </div>
          <div style={styles.ratingBadge}>
            ⭐ {doctor.rating}
          </div>
        </div>
        <div style={styles.meta}>
          <span style={styles.metaItem}>📍 {doctor.location}</span>
          <span style={styles.metaItem}>🏥 {doctor.experience}</span>
          <span style={styles.metaItem}>💬 {doctor.reviews} reviews</span>
        </div>
        <div style={styles.footer}>
          <div>
            <p style={styles.feeLabel}>Consultation Fee</p>
            <p style={styles.fee}>₦{doctor.fee.toLocaleString()}</p>
          </div>
          {doctor.available ? (
            <Link to={`/book/${doctor.id}`} style={styles.bookBtn}>
              Book Now
            </Link>
          ) : (
            <button style={styles.unavailableBtn} disabled>
              Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
  imageWrap: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
    background: '#f0f7ff',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  unavailableBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: '#ef4444',
    color: 'white',
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '100px',
  },
  info: {
    padding: '20px',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  specialty: {
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#2563eb',
    marginBottom: '4px',
  },
  name: {
    fontFamily: 'system-ui',
    fontSize: '17px',
    fontWeight: '700',
    color: '#111827',
  },
  ratingBadge: {
    background: '#fef9c3',
    color: '#854d0e',
    fontSize: '12px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '100px',
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '16px',
  },
  metaItem: {
    fontSize: '12px',
    color: '#6b7280',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #f3f4f6',
  },
  feeLabel: {
    fontSize: '11px',
    color: '#9ca3af',
    marginBottom: '2px',
  },
  fee: {
    fontFamily: 'system-ui',
    fontSize: '18px',
    fontWeight: '700',
    color: '#111827',
  },
  bookBtn: {
    background: '#2563eb',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
  },
  unavailableBtn: {
    background: '#f3f4f6',
    color: '#9ca3af',
    padding: '10px 20px',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    fontSize: '13px',
    fontWeight: '600',
    border: 'none',
    cursor: 'not-allowed',
  },
};

export default DoctorCard;