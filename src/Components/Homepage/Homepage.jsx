import ClassesSection from './ClassesSection/ClassesSection';
import Header from './Header/Header';
import Services from './Services/Services';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <ClassesSection></ClassesSection>
            <Services></Services>
        </div>
    );
};

export default Homepage;