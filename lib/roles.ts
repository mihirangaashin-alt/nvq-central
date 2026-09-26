export const userRoles = ["user", "contributor", "moderator", "super_admin"] as const;

export const defaultRole = "user" as const;

export const canPublishResource = (role: (typeof userRoles)[number]) => role === "contributor" || role === "moderator" || role === "super_admin";
