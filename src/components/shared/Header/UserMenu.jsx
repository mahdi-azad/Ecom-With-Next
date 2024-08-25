import Login from "@/components/auth/Login";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     const isDropdown = event.target.closest(".drop");
  //     if (!isDropdown) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("click", handleDocumentClick);

  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [isOpen]);
  const items = [
    {
      key: "1",
      label: <Login></Login>,
    },
  ];
  const handleClickUser = () => {
    console.log("test");
  };
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Dropdown
        open={isOpen}
        placement="bottom"
        menu={{
          items,
        }}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            handleDropdown();
          }}
          // className="drop"
        >
          <span onClick={handleClickUser}>
            <i className="far fa-user"></i>
          </span>
        </a>
      </Dropdown>
    </>
  );
};

export default UserMenu;
