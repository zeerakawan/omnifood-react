import Anchor from "../anchor/anchor.component";

const List = ({ className, href, children }) => {
  return (
    <li>
      <Anchor className={className} href={href}>
        {children}
      </Anchor>
    </li>
  );
};

export default List;
