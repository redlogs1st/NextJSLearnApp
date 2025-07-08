// app/components/Card.tsx
import styles from './Card.module.css';

export default function Card() {
    return (
        <div className={`bg-white p-6 rounded-xl shadow-md ${styles.cardCustom}`}>
            <h2 className="text-xl font-bold text-blue-600">Hybrid Styled Card</h2>
            <p className="text-gray-700 mt-2">This card uses Tailwind + CSS Modules!</p>
        </div>
    );
}
