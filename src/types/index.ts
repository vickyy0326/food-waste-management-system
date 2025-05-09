export interface WasteData {
  date: string;
  mealType: string;
  messType: string;
  quantity: number;
  uom: string;
}

export type MessType = 
  | 'SANNASI MESS'
  | 'D-MESS'
  | 'SENBAGAM MESS'
  | 'J MESS'
  | 'MEENAKSHI'
  | 'STAFF MESS'
  | 'SRK'
  | 'Maayaa(AE Apartment)'
  | 'Jain Apartment'
  | 'Began Girls';

export type MealType = 'Break Fast' | 'Lunch' | 'Dinner';

export interface FormData {
  date: string;
  mealType: MealType;
  messType: MessType;
}