import { useState, useRef, useEffect } from 'react';

const FoodTabs = () => {
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
    if (tabsContainerRef.current) {
      if (tabsContainerRef.current.getBoundingClientRect().top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full z-20  ${isSticky ? 'sticky top-0 shadow-lg bg-white' : 'relative z-50'}`}>
      <div className="flex space-x-4 overflow-x-scroll py-4" ref={tabsContainerRef}>
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${activeTab === index ? ' rounded-lg text-pink-500' : 'text-black'}`}
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
