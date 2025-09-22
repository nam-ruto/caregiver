import BabysitterCard from './BabysitterCard';
import styles from './babysitter.module.css';
import sitter1 from '../../../assets/images/findnanny/sitter-1.jpg';
import sitter2 from '../../../assets/images/findnanny/sitter-2.jpg';
import sitter3 from '../../../assets/images/findnanny/sitter-3.jpg';
import sitter4 from '../../../assets/images/findnanny/sitter-4.jpg';

const mockBabysitters = [
  {
    id: 1,
    image: sitter1,
    name: 'Sophia W.',
    isVerified: true,
    rating: 4.9,
    hourlyRate: 15,
    location: 'Troy, AL',
    experience: 3,
    hiredCount: 12,
    skills: ['Light cleaning', 'Meal prep', 'Crafts', 'Homework help'],
    description: 'Experienced babysitter with a passion for creating fun, educational activities. I believe in fostering creativity while maintaining a safe, nurturing environment. CPR certified and comfortable with pets.',
  },
  {
    id: 2,
    image: sitter2,
    name: 'Emma R.',
    isVerified: true,
    rating: 4.8,
    hourlyRate: 18,
    location: 'Troy, AL',
    experience: 5,
    hiredCount: 24,
    skills: ['First aid certified', 'Cooking', 'Music', 'Special needs experience'],
    description: 'Former preschool teacher with 5 years of childcare experience. I specialize in educational activities and have experience with children of all ages. Available for both regular schedules and date nights.',
  },
  {
    id: 3,
    image: sitter3,
    name: 'James M.',
    isVerified: true,
    rating: 4.7,
    hourlyRate: 16,
    location: 'Troy, AL',
    experience: 2,
    hiredCount: 8,
    skills: ['Sports', 'Outdoor activities', 'Tutoring', 'Arts & crafts'],
    description: 'Energetic and responsible college student studying Early Childhood Education. I love organizing outdoor activities and helping with homework. Experienced in working with multiple children at once.',
  },
  {
    id: 4,
    image: sitter4,
    name: 'Maria L.',
    isVerified: true,
    rating: 5.0,
    hourlyRate: 20,
    location: 'Troy, AL',
    experience: 7,
    hiredCount: 35,
    skills: ['Multilingual', 'Newborn care', 'Meal planning', 'Light housekeeping'],
    description: 'Professional nanny with over 7 years of experience, specializing in newborn and infant care. Fluent in English and Spanish. Available for full-time, part-time, or occasional care.',
  },
];

const BabysitterList = () => {
  return (
    <div className={styles.list}>
      {mockBabysitters.map((babysitter) => (
        <BabysitterCard key={babysitter.id} babysitter={babysitter} />
      ))}
    </div>
  );
};

export default BabysitterList;
