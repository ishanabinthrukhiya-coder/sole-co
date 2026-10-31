import Navbar from "../../Components/Navbar";

export default function CartLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      
    </>
  );
}