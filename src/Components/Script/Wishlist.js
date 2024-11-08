import { toast } from 'react-toastify';

const getCheckWishlistItems = () => {
  const checkItem = localStorage.getItem('wishlist');
  if (checkItem) {
    const ReadCheckItem = JSON.parse(checkItem);
    return ReadCheckItem;
  } else {
    return [];
  }
};

const setWishlistItem = ID => {
  const checkItems = getCheckWishlistItems();

  if (checkItems.includes(ID)) {
    toast.warn('This card is already saved in wishlist');
  } else {
    checkItems.push(ID);
    const SaveItemsString = JSON.stringify(checkItems);
    localStorage.setItem('wishlist', SaveItemsString);
    toast.success('Your card has been successfully saved in wishlist');
  }
};

export { setWishlistItem, getCheckWishlistItems };
