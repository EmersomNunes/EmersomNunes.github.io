import { getItemById } from "@/app/products/api";
import { TaskList } from "@/types/TaskList";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type RatingContextType = {
  activeItem: any;
  textAreaValue: string;
  rating: number;
  handleAddAssessments: () => any;
  calculateAverageRating: (itemId: number) => number;
  handleRatingCarousel: (itemId: number) => number;
  setActiveItem: any;
  setRating: any;
  setTextAreaValue: any;
  itemRatings: { [key: number]: TaskList[] };
  userHasCommented: any;
  setUserHasCommented: any;
  inputValue: any;
  setInputValue: any;
  inputBestInfo: any;
  setInputBestInfo: any;
}
export const RatingContext = createContext<RatingContextType | null>(null);

interface Props {
  [propName: string]: any
};

export const RatingContextProvider = (props: Props) => {
  const [activeItem, setActiveItem] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputBestInfo, setInputBestInfo] = useState('')
  const [itemRatings, setItemRatings] = useState<{ [key: number]: TaskList[] }>({});
  const [rating, setRating] = useState(0);
  let { data: session } = useSession()
  const [userHasCommented, setUserHasCommented] = useState(false);

  const pathname: string | null = usePathname();
  const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;

  const item = id !== null ? getItemById(id) : null;

  useEffect(() => {
    if (item) {
      loadAssessmentsFromLocalStorage();
    }
  }, [item]);

  //Persist itens on the LocalStorage
  const loadAssessmentsFromLocalStorage = () => {
    if (item) {
      const storedAssessments = localStorage.getItem(`assessments-${item.id}`);
      if (storedAssessments) {
        setItemRatings({
          ...itemRatings,
          [item.id]: JSON.parse(storedAssessments),
        });
      }
    }
  };

  //Function to handle Carousel Rating Value(1-5).
  const handleRatingCarousel = (itemId: number) => {
    const storedAssessments = localStorage.getItem(`assessments-${itemId}`);
    const assessments = storedAssessments ? JSON.parse(storedAssessments) : [];

    if (!assessments || assessments.length === 0) {
      return null;
    }

    return assessments.length;
  }

  //Function to calculate Rating value(1-5).
  const calculateAverageRating = (itemId: number) => {
    const storedAssessments = localStorage.getItem(`assessments-${itemId}`);
    const assessments = storedAssessments ? JSON.parse(storedAssessments) : [];

    if (assessments.length === 0) {
      return 0;
    }

    const totalRating = assessments.reduce((acc: number, item: TaskList) => acc + item.rating, 0);
    return totalRating / assessments.length;
  };

  //Function to assessments Product.
  const handleAddAssessments = () => {
    if (textAreaValue.trim() === '' || rating === 0) return;
    const nameToUse = inputValue.trim() !== '' ? inputValue : session?.user?.name || '';
    if (inputBestInfo.trim() === "" || rating === 0) return;

    const itemId = item?.id as number;
    const newRating: TaskList = {
      label: textAreaValue,
      rating: rating,
      name: nameToUse,
      title: inputBestInfo
    };

    setItemRatings((prevItemRatings) => ({
      ...prevItemRatings,
      [itemId]: [...(prevItemRatings[itemId] || []), newRating],
    }));

    setTextAreaValue('');
    setInputValue('');
    setInputBestInfo('')
    setRating(0);

    localStorage.setItem(`assessments-${itemId}`, JSON.stringify([...(itemRatings[itemId] || []), newRating]));
  };

  const value = {
    activeItem,
    textAreaValue,
    rating,
    handleAddAssessments,
    calculateAverageRating,
    setActiveItem,
    setRating,
    setTextAreaValue,
    itemRatings,
    handleRatingCarousel,
    userHasCommented,
    setUserHasCommented,
    inputValue,
    setInputValue,
    inputBestInfo,
    setInputBestInfo
  };

  return <RatingContext.Provider value={value} {...props} />
};

export const useRating = () => {
  const context = useContext(RatingContext);

  if (context === null) {
    throw new Error("useRating must be used within a RatingContextProvider")
  }
  return context;
};