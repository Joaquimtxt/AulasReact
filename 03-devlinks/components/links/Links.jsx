import styles from "./Links.module.css";

const Links = ({ children, link }) => {
  return (
    <div>
      <li>
        <a href={link} target="_blank">{children}</a>
      </li>
    </div>
  );
};

export default Links;
