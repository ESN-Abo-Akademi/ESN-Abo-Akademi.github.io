"use client";

import { Link as ChakraLink, type LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children, ...props }: LinkProps) {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <Link href={href || ""}>
      <ChakraLink
        as="span"
        width="max-content"
        textDecoration={"none"}
        fontWeight={isActive ? "bold" : "normal"}
        borderBottom="2px solid transparent"
        {...(isActive
          ? {
              borderBottomColor: "border.primary",
              colorPalette: "esn.darkBlue",
            }
          : null)}
        {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
}
