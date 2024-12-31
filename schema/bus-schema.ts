import { z } from "zod";

export const registerBusSchema = z.object({
  busNumber: z.string().min(1, "enter a valid bus number"),
  busSeats: z.string(),
  busType: z.string().min(2, "enter a valid bus type"),
  busRoute: z.string().min(2, "enter a valid bus route"),
});
