import Navbar from "~/components/shared/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode} ) => {
  return ( <>
    <Navbar/>
    { children }
  </>
    
/*     <Footer/>
 */   );
}
 
export default HomeLayout;