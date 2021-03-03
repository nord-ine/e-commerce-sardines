import React from 'react'
import styles from './navBar.module.css'
import Link from 'next/link'
import { Box, Flex, Input, Button, Stack,IconButton } from "@chakra-ui/react";

import { RiAccountCircleLine ,} from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";

import Logo from "./Logo.jsx";

const NavBar = (props) => {
  
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="10%"
        
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
       <a>{children}</a> 
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
    const [searchValue, setSearchValue] = React.useState("")
    const handleChangeSearch = (event) => setSearchValue(event.target.value)
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/History">Notre histoire</MenuItem>
        <MenuItem to="/products">Nos produits</MenuItem>
        <MenuItem to="/Stores">Nos boutiques </MenuItem>
        <Input
          w="25%"
          placeholder="recherche"
          size="md"
          value={searchValue}
          onChange={handleChangeSearch}
           />
        <Link href="/LoginPage" as="LoginPage">
          <IconButton
              variant="ghost  "
              aria-label="accountIcon"
              fontSize="20px"
              icon={<RiAccountCircleLine />}
          />
          </Link>
        <Link href="cart" as="/">
          <IconButton
              variant="ghost"
              aria-label="carticon"
              fontSize="20px"
              icon={<MdAddShoppingCart />}
          />
        </Link>
        
        
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      zIndex="1000"
      position="sticky"
      top="0"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={3}
      p={5}
      bg={["cyan.100", "cyan.100", "white", "white"]}
      color="black"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;