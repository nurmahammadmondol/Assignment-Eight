import { toast } from 'react-toastify';

const getCheckCard = () => {
  const checkCard = localStorage.getItem('card');
  if (checkCard) {
    const ReadCard = JSON.parse(checkCard);
    return ReadCard;
  } else {
    return [];
  }
};

const setLikeCard = ID => {
  const checkAllCard = getCheckCard();

  if (checkAllCard.includes(ID)) {
    toast.warn('This card has already been saved');
  } else {
    checkAllCard.push(ID);
    const SaveCardString = JSON.stringify(checkAllCard);
    localStorage.setItem('card', SaveCardString);

    toast.success('Your card has been saved successfully');
  }
};

const RemoveAddToCard = () => {
  localStorage.removeItem('card');
};

export { setLikeCard, getCheckCard, RemoveAddToCard };
