<<<<<<< HEAD
import Logo from "../assets/Jobs24.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#0A1426] px-5 pb-10 pt-14 text-[15px] text-[#A9B6D0] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-3">
            {/* White panel keeps the logo readable on the dark footer */}
            <div className="rounded-xl bg-white px-4 py-1">
              <img src={Logo} alt="Jobs247" className="h-12 w-auto sm:h-14" />
            </div>
            <p className="max-w-xs">
              Practical career tips to help you search, apply and grow.
            </p>
          </div>

          <p className="md:text-right">
            © {new Date().getFullYear()} Jobs247. All rights reserved.
          </p>
        </div>

        <p className="mt-10 max-w-3xl border-t border-[#1D2A45] pt-6 text-sm text-[#8E9CB9]">
          Tips are general guidance and not a guarantee of any job offer or
          outcome.
        </p>
      </div>
    </footer>
  );
};

=======
import Logo from "../assets/Jobs24.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#0A1426] px-5 pb-10 pt-14 text-[15px] text-[#A9B6D0] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-3">
            {/* White panel keeps the logo readable on the dark footer */}
            <div className="rounded-xl bg-white px-4 py-1">
              <img src={Logo} alt="Jobs247" className="h-12 w-auto sm:h-14" />
            </div>
            <p className="max-w-xs">
              Practical career tips to help you search, apply and grow.
            </p>
          </div>

          <p className="md:text-right">
            © {new Date().getFullYear()} Jobs247. All rights reserved.
          </p>
        </div>

        <p className="mt-10 max-w-3xl border-t border-[#1D2A45] pt-6 text-sm text-[#8E9CB9]">
          Tips are general guidance and not a guarantee of any job offer or
          outcome.
        </p>
      </div>
    </footer>
  );
};

>>>>>>> 25d48484a09fc28e59ccd48dcd0bd13d926feaa7
export default Footer;