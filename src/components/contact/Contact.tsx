import PatternRing from "../layout/PatternRing";
import Navbar from "../navbar/Navbar";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-14 flex w-full flex-col items-center justify-center bg-dark-grey px-4 pb-20 pt-10"
    >
      <div className="relative flex flex-col items-center gap-4 max-md:max-w-lg md:w-full md:max-w-screen-lg md:flex-row md:items-start md:justify-between">
        <ContactHeading />
        <ContactForm />
        <PatternRing className="absolute -left-[23%] bottom-[10%] hidden md:block" />
      </div>

      <div className="w-full max-w-screen-lg border-t border-grey">
        <Navbar />
      </div>
    </section>
  );
};

export default Contact;
