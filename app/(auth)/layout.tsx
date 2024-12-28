export const metadata = {
  title: "Auth | KalaChhetra",
  description:
    "KalaChhetra is a software solution designed to empower artists in the digital world. It provides a platform for artists to showcase and sell their artwork, connect with other artists and art enthusiasts, and manage their artistic journey effectively.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
