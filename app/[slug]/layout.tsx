import HomeLink from "../HomeLink";

export default function Layout(children: React.ReactNode) {
  return (
    <>
      {children}
      <footer className="mt-12">
        <HomeLink />
      </footer>
    </>
  );
}
