export interface Reservation {
      reservationCode: number;
      numberOfAdult?: number;
      numberOfChildren?: number;
      checkIn: Date;
      checkOut: Date;
      numberOfNights?: number;
      roomType: string;
      name: string;
      emailId?: string;
      phoneNumber?: string;
      gender: string;
      address?: number;
      status?: boolean;
      rate?: number;
}
