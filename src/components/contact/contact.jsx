import { BsTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import css from "./contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={css.list_style}>
      <div className={css.container_style}>
        <div>
          <IoIosContact size={40} className={css.icon_style} />
          <span className={css.span_style}>{name}</span>
        </div>

        <div>
          <BsTelephoneFill size={24} className={css.icon_style} />
          <span>{number}</span>
        </div>
      </div>
      <div className={css.button_style}>
        <button onClick={() => onDelete(id)}>
          <AiFillDelete size={24} />
          DELETE
        </button>
      </div>
    </li>
  );
};

export default Contact;
