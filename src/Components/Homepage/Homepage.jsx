import ClassesSection from './ClassesSection/ClassesSection';
import ContactUs from './ContactUs/ContactUs';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <ClassesSection></ClassesSection>
            <Services></Services>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Homepage;