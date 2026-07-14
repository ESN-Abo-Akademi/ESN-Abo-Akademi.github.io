import { HStack, Link, type StackProps, For, Text } from "@chakra-ui/react";

const SOCIALS = [
  { name: "Facebook", link: "https://www.facebook.com/EsnAboAkademi" },
  { name: "Instagram", link: "https://www.instagram.com/esnaboakademi/" },
  { name: "Contact", link: "" },
];

export default function Socials({ h = "10", gap = "4", ...props }: StackProps) {
  return (
    <HStack alignItems="stretch" h={h} gap={gap} {...props}>
      <For each={SOCIALS}>
        {(item, index) => (
          <Link flex="1" key={index} href={item.link}>
            <Text fontSize="sm" color="fg.muted">
              {item.name}
            </Text>
          </Link>
        )}
      </For>
    </HStack>
  );
}
