import Navbar from "../../Components/Navbar";


export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar/>
      {children}
      
    </>
  );
}