import "./TranslationCard.css"


/**
 * This is a functional React component that displays a single translation card with a sentence and a decorative line below it.
 * 
 * @param {object} props - The component props.
 * @param {string} props.sentence - The sentence to display on the card.
 * 
 * @returns {JSX.Element} The rendered TranslationCard component.
 */
export default function TranslationCard({sentence}){

   return(
      <div className="TranslationCard">
         <h3 className="translation-history-word">
         {sentence}
         </h3>
         <div className="translation-card-decorative-line"></div>
      </div>
   )
}