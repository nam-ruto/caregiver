import styles from "./services.module.css";
import ServiceCard from "./components/ServiceCard";
import heroImg from "../../assets/images/services/service-hero.svg";
import dayCareImg from "../../assets/images/services/day-care.jpg";
import nightCareImg from "../../assets/images/services/night-care.jpg";
import dropInImg from "../../assets/images/services/drop-in.jpg";
import afterSchoolImg from "../../assets/images/services/after-school.jpg";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Testimonial data - duplicated for seamless scrolling
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Parent of 2",
    quote: "The caregivers are exceptional! The flexibility and professionalism are unmatched.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Parent of 3",
    quote: "Finding reliable childcare was a challenge until we discovered this service. A game-changer for our family.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Parent of 1",
    quote: "The night care service has been invaluable. I can focus on my job knowing my child is in caring hands.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Parent of 2",
    quote: "Exceptional service and caring staff. My kids love their time here and I feel completely at ease.",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Parent of 1",
    quote: "The drop-in service is perfect for unexpected schedule changes. Always reliable and professional.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  }
];

// Double the testimonials array for seamless infinite scroll
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className="container">
          <div className={styles.hero__grid}>
            <div className={styles.hero__copy}>
              <h1 className="h1">Quality Child Care Services for Every Need</h1>
              <p className="lead">
                Discover our range of professional childcare services designed to 
                provide your children with the best care while giving you peace of mind.
              </p>
              <div className={styles.hero__actions}>
                <a href="/contact" className="btn btn--primary">Get Started</a>
              </div>
            </div>
            <div className={styles.hero__art}>
              <img src={heroImg} alt="Child care services illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${styles.section} ${styles.services}`}>
        <div className="container">
          <header className={styles.services__header}>
            <h2 className="h2">Tailored Care Solutions</h2>
            <p className="lead">
              From daily care to special occasions, we've got your family covered
            </p>
          </header>
          <div className={styles.services__grid}>
            <ServiceCard
              title="Day Care Services"
              description="Professional daytime care with engaging activities and educational play. Perfect for working parents who need reliable weekday care."
              rate="$50/hour"
              image={dayCareImg}
              background="#faf8f4"
            />
            <ServiceCard
              title="Night Care Services"
              description="Overnight supervision with bedtime routines and morning preparation. Ideal for parents working late or attending evening events."
              rate="$60/hour"
              image={nightCareImg}
              background="#fcf5f3"
            />
            <ServiceCard
              title="Drop-in Child Care"
              description="Last-minute care when you need it most. Flexible scheduling for appointments, errands, or unexpected commitments."
              rate="$55/hour"
              image={dropInImg}
              background="#fdfae9"
            />
            <ServiceCard
              title="After School Program"
              description="Safe transportation and after-school supervision including homework help and structured activities."
              rate="$45/hour"
              image={afterSchoolImg}
              background="#faf8f4"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.testimonials__header}>
          <h2 className="h2">What Parents Say</h2>
          <p className="lead">Trusted by hundreds of families in our community</p>
        </div>
        
        <div className={styles.testimonials__marquee}>
          <div className={styles.testimonials__track}>
            {scrollingTestimonials.map((testimonial) => (
              <div key={`${testimonial.id}-${testimonial.name}`} className={styles.testimonial__card}>
                <FaQuoteLeft className={styles.testimonial__quote_icon} />
                <p className={styles.testimonial__quote}>{testimonial.quote}</p>
                <div className={styles.testimonial__stars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
                <div className={styles.testimonial__author}>
                  <div className={styles.testimonial__avatar}>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className={styles.testimonial__info}>
                    <h3 className={styles.testimonial__name}>{testimonial.name}</h3>
                    <p className={styles.testimonial__title}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
