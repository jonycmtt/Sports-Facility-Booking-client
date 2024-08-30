import { z } from "zod";

// Define the main schema for the court
const facilityValidationSchema = z.object({
  name: z.string().min(1, "Name is required"), // Ensure the name is not empty
  description: z.string().min(1, "Description is required"), // Ensure the description is not empty
  location: z.string().min(1, "Location is required"), // Ensure the location is not empty
  image: z.string({ required_error: "Image Required" }), // Add image validation
});

export default facilityValidationSchema;
