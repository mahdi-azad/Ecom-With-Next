import Login from "@/components/auth/Login";
import Dropdown from "antd";

const UserMenu = () => {
  const items = [
    {
      key: "1",
      label: <Login></Login>,
    },
  ];
  const handleClickUser = () => {
    console.log("test");
  };
  return (
    <>
      <Dropdown
        placement="bottom"
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <span onClick={handleClickUser}>
            <i className="far fa-user"></i>
          </span>
        </a>
      </Dropdown>
    </>
  );
};

export default UserMenu;
