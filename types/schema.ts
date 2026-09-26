export type UserRole = "user" | "contributor" | "moderator" | "super_admin";

export type ResourceStatus =
  | "draft"
  | "pending_review"
  | "approved"
  | "changes_requested"
  | "rejected"
  | "archived";

export type ResourceCategory =
  | "learning_materials"
  | "exams_assessments"
  | "practical_technical"
  | "videos"
  | "career_guidance"
  | "official_reference"
  | "other";
