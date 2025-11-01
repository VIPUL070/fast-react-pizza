import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm cursor-pointer rounded-full bg-yellow-500 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed uppercase";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm cursor-pointer rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-400 focus:ring hover:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed uppercase px-4 py-2.5 md:px-6 md:py-3.5",
    small: base + " px-4 py-2 md:px-6 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
