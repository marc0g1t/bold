import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    import Image from "next/image";
    import { Inter } from "next/font/google";
    import First from "@/components/First";
    import { Second } from "@/components/Second";
    import { useState } from "react";
    import { AnimatePresence } from "framer-motion";
    
    const inter = Inter({ subsets: ["latin"] });
    
    export default function Home() {
      const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
    
      const handleSearchClick = () =>
        setIsSearchButtonClicked(!isSearchButtonClicked);
    
      return (
        <div className="flex shadow-black">
          <First handleSearchClick={handleSearchClick} />
          <AnimatePresence>{isSearchButtonClicked && <Second />}</AnimatePresence>
        </div>
      );
    }
  );
}
