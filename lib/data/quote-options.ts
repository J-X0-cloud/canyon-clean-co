import type { IconName } from "@/components/ui/Icon";
import type { ArrivalWindow, CleanType, Frequency, HomeSize } from "@/types/quote";

export const cleanTypeOptions: {
  value: CleanType;
  title: string;
  subtitle: string;
  icon: IconName;
}[] = [
  { value: "standard", title: "Recurring", subtitle: "From $139 per visit", icon: "repeat" },
  { value: "deep", title: "Deep clean", subtitle: "From $259, one-time", icon: "spark" },
  { value: "move", title: "Move-in / out", subtitle: "From $329, empty home", icon: "box" },
];

export const bedroomOptions = [
  { value: 1, label: "1 bedroom" },
  { value: 2, label: "2 bedrooms" },
  { value: 3, label: "3 bedrooms" },
  { value: 4, label: "4 bedrooms" },
  { value: 5, label: "5+ bedrooms" },
];

export const bathroomOptions = [
  { value: 1, label: "1 bathroom" },
  { value: 2, label: "2 bathrooms" },
  { value: 3, label: "3 bathrooms" },
  { value: 4, label: "4+ bathrooms" },
];

export const homeSizeOptions: { value: HomeSize; label: string }[] = [
  { value: "under-1000", label: "Under 1,000 sq ft" },
  { value: "1000-1800", label: "1,000–1,800 sq ft" },
  { value: "1800-2800", label: "1,800–2,800 sq ft" },
  { value: "2800-plus", label: "2,800+ sq ft" },
];

export const frequencyOptions: { value: Frequency; label: string; badge: string }[] = [
  { value: "weekly", label: "Weekly", badge: "−20%" },
  { value: "biweekly", label: "Every 2 weeks", badge: "−15%" },
  { value: "monthly", label: "Monthly", badge: "−10%" },
  { value: "once", label: "Just once", badge: "No discount" },
];

export const arrivalWindowOptions: { value: ArrivalWindow; label: string }[] = [
  { value: "morning", label: "Morning (8–10am)" },
  { value: "afternoon", label: "Afternoon (12–2pm)" },
  { value: "flexible", label: "I’m flexible" },
];
