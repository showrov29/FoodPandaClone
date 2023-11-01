import { useState, useRef, useEffect } from 'react';

const FoodTabs = ({ modalOpen }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const tabsContainerRef = useRef(null);

  const tabData = [
    { title: 'Chicken'},
    { title: 'Beef'},
    { title: 'Combo' },
    { title: 'Special'},
    { title: 'New' },
    { title: 'Hot ' },
  ];
  const MOBILE_WIDTH = 768; // Adjust the mobile width as needed
  const SCROLL_OFFSET = 80;

  const handleTabClick = (index) => {
    setActiveTab(index);
    const foodDetailsElement = document.getElementById(`foodDetails${index}`);
    if (foodDetailsElement) {
      const scrollY = foodDetailsElement.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top: scrollY, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!modalOpen) {
      if (tabsContainerRef.current) {
        if (tabsContainerRef.current.getBoundingClientRect().top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_WIDTH) {
        setIsSticky(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`w-full ${isSticky ? 'sticky top-0 z-50 bg-white' : 'relative z-50'}`}>
      <div className={`flex justify-center space-x-4 overflow-x-scroll py-4`} ref={tabsContainerRef}>
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${activeTab === index ? 'rounded-lg text-pink-500' : 'text-black'}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodTabs;
