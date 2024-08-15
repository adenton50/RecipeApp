import { Children } from "react";
import Nav from "./Nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
