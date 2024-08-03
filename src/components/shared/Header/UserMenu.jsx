import { Dropdown } from "antd";

const UserMenu = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      //   icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  const handleClickUser = () => {
    console.log("test");
  };
  return (
    <>
      <Dropdown
        placement="bottomRight"
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
