import { pgTable, uuid, text, pgEnum, primaryKey, date, index } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: text().primaryKey(),  // User ID
    accessToken: text().notNull(), // Access token, used for authentication
    refreshToken: text().notNull(), // Refresh token, used for authentication
    accessTokenExpiresAt: date().notNull() // Access token expiration time
})

export const sessions = pgTable("sessions", {
    id: uuid().primaryKey(),  // Session token, returned to the user
    userId: text().notNull().references(() => users.id) // User ID
})
