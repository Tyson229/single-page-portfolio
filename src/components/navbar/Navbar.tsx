import FrontendMentorLogo from "../../assets/FrontendMentorIcon";
import GithubIcon from "../../assets/GithubIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";
import TwitterIcon from "../../assets/TwitterIcon";

const Navbar = () => {
  return (
    <section className="grid justify-center gap-6 pt-8 text-center sm:flex sm:justify-between">
      <h3 className="text-2xl font-bold">adamkeyes</h3>
      <ul className="flex items-center gap-6">
        <li>
          <a>
            <GithubIcon className="fill-white hover:fill-green" />
          </a>
        </li>
        <li>
          <a>
            <FrontendMentorLogo className="fill-white hover:fill-green" />
          </a>
        </li>
        <li>
          <a>
            <LinkedinIcon className="fill-white hover:fill-green" />
          </a>
        </li>
        <li>
          <a>
            <TwitterIcon className="fill-white hover:fill-green" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
