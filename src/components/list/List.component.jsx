import Anchor from "../anchor/anchor.component";

const List = ({ className, href, text, children }) => {
  return (
    <li>
      <Anchor className={className} href={href} text={text}></Anchor>
      {children}
    </li>
  );
};

export default List;
