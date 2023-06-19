type LinkForm1Type={
    id:number,
    tagName:string,
    linkUrl:string
  }
  
type LinkListItemForm1 =LinkForm1Type[]
    
type  LinkForm2Type = {
  id:number,
  subTopic:string,
  IconimageSrc:string,
  priceTage:number,
  subscriptionAmountTag:string
}
type BillingPeriod="mo"|"yr"
type LinkListItemForm2=LinkForm2Type[]

type LinkForm3Type={
  id:number,
  mainTopic:string,
  subTopic:string,
  PriceTag:number
}

type LinkListItemForm3=LinkForm3Type[]