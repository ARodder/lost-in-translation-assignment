import "./TranslationCard.css"

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