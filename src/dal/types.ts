export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}
 

export interface Review{
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}


export interface Products {
	id: number;
	title: string;
	thumbnail:string;
	description: string;
	price: number;
	category: string;
	brand:string;
	images: string[]
	discountPercentage?:number;
	rating?:number;
	stock?:number;
	reviews?:Review;
	dimensions?:Dimensions
	warrantyInformation?:string;
	shippingInformation?:string;
	availabilityStatus?:string;
	returnPolicy?:string;
	minimumOrderQuantity?:string;
	tags?:string[];
	weight:string;
	 
}